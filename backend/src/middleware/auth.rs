use actix_web::{
    dev::{forward_ready, Service, ServiceRequest, ServiceResponse, Transform},
    error::ErrorUnauthorized,
    http::header::AUTHORIZATION,
    Error, HttpMessage,
};
use futures_util::future::LocalBoxFuture;
use std::{
    future::{ready, Ready},
    rc::Rc,
};

use crate::{
    models::user::UserRole,
    services::jwt::{Claims, JwtService},
};

pub struct AuthMiddleware<S> {
    service: Rc<S>,
    jwt_service: Rc<JwtService>,
    required_role: Option<UserRole>,
}

impl<S, B> Service<ServiceRequest> for AuthMiddleware<S>
where
    S: Service<ServiceRequest, Response = ServiceResponse<B>, Error = Error> + 'static,
    S::Future: 'static,
    B: 'static,
{
    type Response = ServiceResponse<B>;
    type Error = Error;
    type Future = LocalBoxFuture<'static, Result<Self::Response, Self::Error>>;

    forward_ready!(service);

    fn call(&self, req: ServiceRequest) -> Self::Future {
        let service = Rc::clone(&self.service);
        let jwt_service = Rc::clone(&self.jwt_service);
        let required_role = self.required_role;

        Box::pin(async move {
            // Get token from Authorization header
            let token = req
                .headers()
                .get(AUTHORIZATION)
                .and_then(|h| h.to_str().ok())
                .and_then(|s| s.strip_prefix("Bearer "));

            match token {
                Some(token) => {
                    // Validate token
                    match jwt_service.validate_token(token) {
                        Ok(claims) => {
                            // Check role if required
                            if let Some(required_role) = required_role {
                                if claims.role != required_role {
                                    return Err(ErrorUnauthorized("Insufficient permissions"));
                                }
                            }

                            // Attach claims to request
                            req.extensions_mut().insert(claims);
                            service.call(req).await
                        }
                        Err(_) => Err(ErrorUnauthorized("Invalid token")),
                    }
                }
                None => Err(ErrorUnauthorized("Missing token")),
            }
        })
    }
}

pub struct AuthMiddlewareFactory {
    jwt_service: Rc<JwtService>,
    required_role: Option<UserRole>,
}

impl AuthMiddlewareFactory {
    pub fn new(jwt_service: JwtService, required_role: Option<UserRole>) -> Self {
        Self {
            jwt_service: Rc::new(jwt_service),
            required_role,
        }
    }
}

impl<S, B> Transform<S, ServiceRequest> for AuthMiddlewareFactory
where
    S: Service<ServiceRequest, Response = ServiceResponse<B>, Error = Error> + 'static,
    S::Future: 'static,
    B: 'static,
{
    type Response = ServiceResponse<B>;
    type Error = Error;
    type Transform = AuthMiddleware<S>;
    type InitError = ();
    type Future = Ready<Result<Self::Transform, Self::InitError>>;

    fn new_transform(&self, service: S) -> Self::Future {
        ready(Ok(AuthMiddleware {
            service: Rc::new(service),
            jwt_service: Rc::clone(&self.jwt_service),
            required_role: self.required_role,
        }))
    }
}
