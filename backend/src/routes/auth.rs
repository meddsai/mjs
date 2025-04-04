use actix_web::{web, HttpResponse, Responder};
use serde::Serialize;

use crate::{
    models::{
        auth::LoginRequest,
        user::{CreateUserRequest, UserResponse},
    },
    services::auth::AuthService,
};

#[derive(Debug, Serialize)]
pub struct AuthResponse {
    pub user: UserResponse,
    pub token: String,
}

pub async fn login(
    auth_service: web::Data<AuthService>,
    credentials: web::Json<LoginRequest>,
) -> impl Responder {
    match auth_service
        .login(credentials.email.clone(), credentials.password.clone())
        .await
    {
        Ok(user) => HttpResponse::Ok().json(AuthResponse {
            user: user.into_response(),
            token: "dummy_token".to_string(),
        }),
        Err(e) => HttpResponse::Unauthorized().json(e.to_string()),
    }
}

pub async fn register(
    auth_service: web::Data<AuthService>,
    user_data: web::Json<CreateUserRequest>,
) -> impl Responder {
    match auth_service.register(user_data.into_inner()).await {
        Ok(user) => HttpResponse::Created().json(AuthResponse {
            user: user.into_response(),
            token: "dummy_token".to_string(),
        }),
        Err(e) => HttpResponse::BadRequest().json(e.to_string()),
    }
}

pub fn configure_routes(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/auth")
            .route("/login", web::post().to(login))
            .route("/register", web::post().to(register)),
    );
}
