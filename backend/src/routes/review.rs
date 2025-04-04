use actix_web::{web, HttpResponse, Responder};
use sqlx::PgPool;

use crate::{
    models::{CreateReviewRequest, UpdateReviewRequest},
    services::ReviewService,
};

async fn create_review(
    pool: web::Data<PgPool>,
    review_data: web::Json<CreateReviewRequest>,
) -> impl Responder {
    let review_service = ReviewService::new(pool.get_ref().clone());
    // TODO: Get reviewer_id from authenticated user
    let reviewer_id = 1; // Temporary hardcoded value
    match review_service
        .create_review(review_data.article_id, reviewer_id, review_data.into_inner())
        .await
    {
        Ok(review) => HttpResponse::Created().json(review.into_response()),
        Err(e) => HttpResponse::InternalServerError().json(e.to_string()),
    }
}

async fn get_reviews(pool: web::Data<PgPool>) -> impl Responder {
    let review_service = ReviewService::new(pool.get_ref().clone());
    match review_service.get_reviews().await {
        Ok(reviews) => HttpResponse::Ok().json(
            reviews
                .into_iter()
                .map(|review| review.into_response())
                .collect::<Vec<_>>(),
        ),
        Err(e) => HttpResponse::InternalServerError().json(e.to_string()),
    }
}

async fn get_review(pool: web::Data<PgPool>, review_id: web::Path<i32>) -> impl Responder {
    let review_service = ReviewService::new(pool.get_ref().clone());
    match review_service.get_review(review_id.into_inner()).await {
        Ok(review) => HttpResponse::Ok().json(review.into_response()),
        Err(e) => HttpResponse::NotFound().json(e.to_string()),
    }
}

async fn get_article_reviews(
    pool: web::Data<PgPool>,
    article_id: web::Path<i32>,
) -> impl Responder {
    let review_service = ReviewService::new(pool.get_ref().clone());
    match review_service.get_article_reviews(article_id.into_inner()).await {
        Ok(reviews) => HttpResponse::Ok().json(
            reviews
                .into_iter()
                .map(|review| review.into_response())
                .collect::<Vec<_>>(),
        ),
        Err(e) => HttpResponse::InternalServerError().json(e.to_string()),
    }
}

async fn get_reviewer_reviews(pool: web::Data<PgPool>) -> impl Responder {
    let review_service = ReviewService::new(pool.get_ref().clone());
    // TODO: Get reviewer_id from authenticated user
    let reviewer_id = 1; // Temporary hardcoded value
    match review_service.get_reviewer_reviews(reviewer_id).await {
        Ok(reviews) => HttpResponse::Ok().json(
            reviews
                .into_iter()
                .map(|review| review.into_response())
                .collect::<Vec<_>>(),
        ),
        Err(e) => HttpResponse::InternalServerError().json(e.to_string()),
    }
}

async fn update_review(
    pool: web::Data<PgPool>,
    review_id: web::Path<i32>,
    review_data: web::Json<UpdateReviewRequest>,
) -> impl Responder {
    let review_service = ReviewService::new(pool.get_ref().clone());
    // TODO: Get reviewer_id from authenticated user
    let reviewer_id = 1; // Temporary hardcoded value
    match review_service
        .update_review(review_id.into_inner(), reviewer_id, review_data.into_inner())
        .await
    {
        Ok(review) => HttpResponse::Ok().json(review.into_response()),
        Err(e) => HttpResponse::NotFound().json(e.to_string()),
    }
}

async fn delete_review(pool: web::Data<PgPool>, review_id: web::Path<i32>) -> impl Responder {
    let review_service = ReviewService::new(pool.get_ref().clone());
    // TODO: Get reviewer_id from authenticated user
    let reviewer_id = 1; // Temporary hardcoded value
    match review_service
        .delete_review(review_id.into_inner(), reviewer_id)
        .await
    {
        Ok(_) => HttpResponse::NoContent().finish(),
        Err(e) => HttpResponse::NotFound().json(e.to_string()),
    }
}

pub fn configure_routes(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/reviews")
            .route("", web::post().to(create_review))
            .route("", web::get().to(get_reviews))
            .route("/{id}", web::get().to(get_review))
            .route("/article/{id}", web::get().to(get_article_reviews))
            .route("/reviewer", web::get().to(get_reviewer_reviews))
            .route("/{id}", web::put().to(update_review))
            .route("/{id}", web::delete().to(delete_review)),
    );
}
