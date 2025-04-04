use actix_web::web;

pub mod auth;
pub mod health;

pub fn configure(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/api/v1")
            .configure(auth::configure)
            .service(health::health_check),
    );
}
