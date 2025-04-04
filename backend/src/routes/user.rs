use actix_web::{web, HttpResponse, Responder};
use serde::{Deserialize, Serialize};
use sqlx::PgPool;

#[derive(Debug, Serialize)]
pub struct UserResponse {
    id: i32,
    email: String,
    name: String,
    role: String,
}

#[derive(Debug, Deserialize)]
pub struct UpdateUserRequest {
    name: Option<String>,
    email: Option<String>,
}

async fn get_users(pool: web::Data<PgPool>) -> impl Responder {
    // TODO: Implement get users logic
    HttpResponse::Ok().json(Vec::<UserResponse>::new())
}

async fn get_user(pool: web::Data<PgPool>, user_id: web::Path<i32>) -> impl Responder {
    // TODO: Implement get user logic
    HttpResponse::NotFound().finish()
}

async fn update_user(
    pool: web::Data<PgPool>,
    user_id: web::Path<i32>,
    user_data: web::Json<UpdateUserRequest>,
) -> impl Responder {
    // TODO: Implement update user logic
    HttpResponse::NotFound().finish()
}

async fn delete_user(pool: web::Data<PgPool>, user_id: web::Path<i32>) -> impl Responder {
    // TODO: Implement delete user logic
    HttpResponse::NotFound().finish()
}

pub fn configure_routes(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/users")
            .route("", web::get().to(get_users))
            .route("/{id}", web::get().to(get_user))
            .route("/{id}", web::put().to(update_user))
            .route("/{id}", web::delete().to(delete_user)),
    );
}
