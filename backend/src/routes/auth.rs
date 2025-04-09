use crate::models::user::User;
use crate::services::auth::AuthService;
use crate::utils::error::Error;
use actix_web::{web, HttpResponse, Responder};
use serde::{Deserialize, Serialize};
use sqlx::PgPool;

use crate::models::auth::LoginRequest;

#[derive(Debug, Serialize)]
pub struct AuthResponse {
    user: User,
    token: String,
}

#[derive(Debug, Deserialize)]
pub struct RegisterRequest {
    email: String,
    password: String,
    name: String,
}

pub async fn login(
    pool: web::Data<PgPool>,
    login_request: web::Json<LoginRequest>,
) -> Result<HttpResponse, Error> {
    let auth_service = AuthService::new(pool.get_ref().clone());
    let (user, token) = auth_service
        .login(login_request.email.clone(), login_request.password.clone())
        .await?;

    Ok(HttpResponse::Ok().json(AuthResponse { user, token }))
}

pub async fn register(
    pool: web::Data<PgPool>,
    register_request: web::Json<RegisterRequest>,
) -> Result<HttpResponse, Error> {
    let auth_service = AuthService::new(pool.get_ref().clone());
    let user = auth_service
        .register(crate::models::user::CreateUserRequest {
            email: register_request.email.clone(),
            password: register_request.password.clone(),
            name: register_request.name.clone(),
        })
        .await?;
    let token = auth_service.generate_token(&user)?;

    Ok(HttpResponse::Created().json(AuthResponse { user, token }))
}

pub fn configure_routes(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/auth")
            .route("/login", web::post().to(login))
            .route("/register", web::post().to(register)),
    );
}
