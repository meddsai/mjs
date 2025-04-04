use actix_web::{web, HttpResponse, Responder};
use serde::{Deserialize, Serialize};
use sqlx::PgPool;

use crate::{
    models::user::{CreateUserInput, UserResponse},
    services::{auth::AuthService, jwt::JwtService},
};

#[derive(Debug, Deserialize)]
pub struct LoginRequest {
    email: String,
    password: String,
}

#[derive(Debug, Deserialize)]
pub struct RegisterRequest {
    email: String,
    password: String,
    name: String,
    role: String,
}

#[derive(Debug, Serialize)]
pub struct AuthResponse {
    token: String,
}

async fn login(pool: web::Data<PgPool>, credentials: web::Json<LoginRequest>) -> impl Responder {
    // TODO: Implement login logic
    HttpResponse::Ok().json(AuthResponse {
        token: "dummy_token".to_string(),
    })
}

async fn register(
    pool: web::Data<PgPool>,
    user_data: web::Json<RegisterRequest>,
) -> impl Responder {
    // TODO: Implement registration logic
    HttpResponse::Created().json(AuthResponse {
        token: "dummy_token".to_string(),
    })
}

pub fn configure_routes(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/auth")
            .route("/login", web::post().to(login))
            .route("/register", web::post().to(register)),
    );
}
