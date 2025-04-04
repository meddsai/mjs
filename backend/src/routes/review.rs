use actix_web::{web, HttpResponse, Responder};
use sqlx::PgPool;
use uuid::Uuid;

use crate::{
    models::review::{CreateReviewRequest, ReviewResponse, UpdateReviewRequest},
    services::review::ReviewService,
};

async fn create_review(
    pool: web::Data<PgPool>,
    review_data: web::Json<CreateReviewRequest>,
) -> impl Responder {
    let review_service = ReviewService::new(pool.get_ref().clone());
    match review_service.create_review(review_data.into_inner()).await {
        Ok(review) => HttpResponse::Created().json(ReviewResponse::from(review)),
        Err(e) => HttpResponse::BadRequest().json(e.to_string()),
    }
}

async fn get_reviews(pool: web::Data<PgPool>) -> impl Responder {
    let review_service = ReviewService::new(pool.get_ref().clone());
    match review_service.get_all_reviews().await {
        Ok(reviews) => HttpResponse::Ok().json(
            reviews
                .into_iter()
                .map(ReviewResponse::from)
                .collect::<Vec<_>>(),
        ),
        Err(e) => HttpResponse::InternalServerError().json(e.to_string()),
    }
}

async fn get_review(pool: web::Data<PgPool>, review_id: web::Path<Uuid>) -> impl Responder {
    let review_service = ReviewService::new(pool.get_ref().clone());
    match review_service.get_review_by_id(review_id.into_inner()).await {
        Ok(review) => HttpResponse::Ok().json(ReviewResponse::from(review)),
        Err(e) => HttpResponse::NotFound().json(e.to_string()),
    }
}

async fn get_article_reviews(
    pool: web::Data<PgPool>,
    article_id: web::Path<Uuid>,
) -> impl Responder {
    let review_service = ReviewService::new(pool.get_ref().clone());
    match review_service.get_reviews_by_article(article_id.into_inner()).await {
        Ok(reviews) => HttpResponse::Ok().json(
            reviews
                .into_iter()
                .map(ReviewResponse::from)
                .collect::<Vec<_>>(),
        ),
        Err(e) => HttpResponse::InternalServerError().json(e.to_string()),
    }
}

async fn get_reviewer_reviews(
    pool: web::Data<PgPool>,
    reviewer_id: web::Path<Uuid>,
) -> impl Responder {
    let review_service = ReviewService::new(pool.get_ref().clone());
    match review_service.get_reviews_by_reviewer(reviewer_id.into_inner()).await {
        Ok(reviews) => HttpResponse::Ok().json(
            reviews
                .into_iter()
                .map(ReviewResponse::from)
                .collect::<Vec<_>>(),
        ),
        Err(e) => HttpResponse::InternalServerError().json(e.to_string()),
    }
}

async fn update_review(
    pool: web::Data<PgPool>,
    review_id: web::Path<Uuid>,
    review_data: web::Json<UpdateReviewRequest>,
) -> impl Responder {
    let review_service = ReviewService::new(pool.get_ref().clone());
    match review_service
        .update_review(review_id.into_inner(), review_data.into_inner())
        .await
    {
        Ok(review) => HttpResponse::Ok().json(ReviewResponse::from(review)),
        Err(e) => HttpResponse::NotFound().json(e.to_string()),
    }
}

async fn delete_review(pool: web::Data<PgPool>, review_id: web::Path<Uuid>) -> impl Responder {
    let review_service = ReviewService::new(pool.get_ref().clone());
    match review_service.delete_review(review_id.into_inner()).await {
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
            .route("/reviewer/{id}", web::get().to(get_reviewer_reviews))
            .route("/{id}", web::put().to(update_review))
            .route("/{id}", web::delete().to(delete_review)),
    );
}
