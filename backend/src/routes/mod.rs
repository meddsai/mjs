mod article;
mod auth;
mod review;
mod user;

use actix_web::web;

pub mod health;

pub fn configure_routes(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/api")
            .configure(auth::configure_routes)
            .configure(user::configure_routes)
            .configure(article::configure_routes)
            .configure(review::configure_routes),
    );
}
