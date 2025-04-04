use actix_web::{web, HttpResponse, Responder};
use uuid::Uuid;

use crate::{
    models::user::{UpdateUserRequest, UserRole},
    services::user::UserService,
};

pub async fn get_users(user_service: web::Data<UserService>) -> impl Responder {
    match user_service.get_users().await {
        Ok(users) => HttpResponse::Ok().json(users),
        Err(_) => HttpResponse::InternalServerError().finish(),
    }
}

pub async fn get_user(
    user_service: web::Data<UserService>,
    user_id: web::Path<Uuid>,
) -> impl Responder {
    match user_service.get_user(user_id.into_inner()).await {
        Ok(user) => HttpResponse::Ok().json(user),
        Err(_) => HttpResponse::NotFound().finish(),
    }
}

pub async fn update_user(
    user_service: web::Data<UserService>,
    user_id: web::Path<Uuid>,
    user_data: web::Json<UpdateUserRequest>,
) -> impl Responder {
    match user_service
        .update_user(user_id.into_inner(), user_data.into_inner())
        .await
    {
        Ok(user) => HttpResponse::Ok().json(user),
        Err(_) => HttpResponse::InternalServerError().finish(),
    }
}

pub async fn delete_user(
    user_service: web::Data<UserService>,
    user_id: web::Path<Uuid>,
) -> impl Responder {
    match user_service.delete_user(user_id.into_inner()).await {
        Ok(_) => HttpResponse::NoContent().finish(),
        Err(_) => HttpResponse::InternalServerError().finish(),
    }
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
