pub mod article;
pub mod auth;
pub mod health;
pub mod review;
pub mod user;

use actix_web::web;

pub use article::configure_routes as configure_article_routes;
pub use auth::configure_routes as configure_auth_routes;
pub use health::configure_routes as configure_health_routes;
pub use review::configure_routes as configure_review_routes;
pub use user::configure_routes as configure_user_routes;

pub fn configure_routes(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/api")
            .configure(auth::configure_routes)
            .configure(user::configure_routes)
            .configure(article::configure_routes)
            .configure(review::configure_routes),
    );
}
