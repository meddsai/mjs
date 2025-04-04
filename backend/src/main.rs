// backend/src/main.rs
use actix_web::{web, App, HttpServer};
use dotenv::dotenv;
use std::env;

mod config;
mod database;
mod models;
mod routes;
mod services;
mod utils;

pub async fn health_check() -> impl actix_web::Responder {
    actix_web::HttpResponse::Ok().json(serde_json::json!({
        "status": "healthy",
        "version": env!("CARGO_PKG_VERSION")
    }))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    // Load environment variables
    dotenv().ok();
    env_logger::init_from_env(env_logger::Env::new().default_filter_or("info"));

    // Get configuration
    let config = config::Config::from_env().expect("Failed to load configuration");

    // Initialize database connection pool
    let pool = database::init_pool(&config.database_url)
        .await
        .expect("Failed to create database pool");

    let host = config.host.clone();
    let port = config.port;

    // Start HTTP server
    HttpServer::new(move || {
        App::new()
            .app_data(web::Data::new(pool.clone()))
            .app_data(web::Data::new(config.clone()))
            .configure(routes::configure)
    })
    .bind((host, port))?
    .run()
    .await
}

#[cfg(test)]
mod tests {
    use super::*;
    use actix_web::{test, App};

    #[actix_web::test]
    async fn test_health_check() {
        let app =
            test::init_service(App::new().route("/health", web::get().to(health_check))).await;

        let req = test::TestRequest::get().uri("/health").to_request();
        let resp = test::call_service(&app, req).await;

        assert!(resp.status().is_success());
    }
}
