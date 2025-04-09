use actix_web::{get, web, HttpResponse, Responder};
use sqlx::PgPool;

#[get("/health")]
pub async fn health_check(pool: web::Data<PgPool>) -> impl Responder {
    match sqlx::query!("SELECT 1 as one")
        .fetch_one(pool.get_ref())
        .await
    {
        Ok(_) => HttpResponse::Ok().json(serde_json::json!({
            "status": "ok",
            "database": "connected"
        })),
        Err(e) => HttpResponse::ServiceUnavailable().json(serde_json::json!({
            "status": "error",
            "database": "disconnected",
            "error": e.to_string()
        })),
    }
}

pub fn configure_routes(cfg: &mut web::ServiceConfig) {
    cfg.service(health_check);
}
