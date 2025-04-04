use crate::database::DbPool;
use crate::models::{CreateUser, LoginUser};
use crate::services::auth;
use actix_web::{web, HttpResponse, Responder};

pub fn configure(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/auth")
            .route("/register", web::post().to(register))
            .route("/login", web::post().to(login))
            .route("/logout", web::post().to(logout)),
    );
}

async fn register(pool: web::Data<DbPool>, user: web::Json<CreateUser>) -> impl Responder {
    match auth::register(pool.get_ref(), user.into_inner()).await {
        Ok(user) => HttpResponse::Created().json(user),
        Err(e) => HttpResponse::BadRequest().json(e.to_string()),
    }
}

async fn login(pool: web::Data<DbPool>, credentials: web::Json<LoginUser>) -> impl Responder {
    match auth::login(pool.get_ref(), credentials.into_inner()).await {
        Ok(token) => HttpResponse::Ok().json(token),
        Err(e) => HttpResponse::Unauthorized().json(e.to_string()),
    }
}

async fn logout() -> impl Responder {
    HttpResponse::Ok().json("Logged out successfully")
}
