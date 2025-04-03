use actix_web::{test, App};
use mjs_backend::health_check;

#[actix_web::test]
async fn test_health_check() {
    let app = test::init_service(
        App::new().route("/health", web::get().to(health_check))
    ).await;

    let req = test::TestRequest::get().uri("/health").to_request();
    let resp = test::call_service(&app, req).await;

    assert!(resp.status().is_success());

    let body = test::read_body(resp).await;
    let json: serde_json::Value = serde_json::from_slice(&body).unwrap();

    assert_eq!(json["status"], "healthy");
}
