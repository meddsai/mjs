use actix_web::{web, HttpResponse, Responder};
use sqlx::PgPool;

use crate::{
    models::{CreateArticleRequest, UpdateArticleRequest},
    services::ArticleService,
};

async fn create_article(
    pool: web::Data<PgPool>,
    article_data: web::Json<CreateArticleRequest>,
) -> impl Responder {
    let article_service = ArticleService::new(pool.get_ref().clone());
    // TODO: Get author_id from authenticated user
    let author_id = 1; // Temporary hardcoded value
    match article_service.create_article(author_id, article_data.into_inner()).await {
        Ok(article) => HttpResponse::Created().json(article.into_response()),
        Err(e) => HttpResponse::InternalServerError().json(e.to_string()),
    }
}

async fn get_articles(pool: web::Data<PgPool>) -> impl Responder {
    let article_service = ArticleService::new(pool.get_ref().clone());
    match article_service.get_articles().await {
        Ok(articles) => HttpResponse::Ok().json(
            articles
                .into_iter()
                .map(|article| article.into_response())
                .collect::<Vec<_>>(),
        ),
        Err(e) => HttpResponse::InternalServerError().json(e.to_string()),
    }
}

async fn get_article(pool: web::Data<PgPool>, article_id: web::Path<i32>) -> impl Responder {
    let article_service = ArticleService::new(pool.get_ref().clone());
    match article_service.get_article(article_id.into_inner()).await {
        Ok(article) => HttpResponse::Ok().json(article.into_response()),
        Err(e) => HttpResponse::NotFound().json(e.to_string()),
    }
}

async fn get_author_articles(pool: web::Data<PgPool>) -> impl Responder {
    let article_service = ArticleService::new(pool.get_ref().clone());
    // TODO: Get author_id from authenticated user
    let author_id = 1; // Temporary hardcoded value
    match article_service.get_author_articles(author_id).await {
        Ok(articles) => HttpResponse::Ok().json(
            articles
                .into_iter()
                .map(|article| article.into_response())
                .collect::<Vec<_>>(),
        ),
        Err(e) => HttpResponse::InternalServerError().json(e.to_string()),
    }
}

async fn update_article(
    pool: web::Data<PgPool>,
    article_id: web::Path<i32>,
    article_data: web::Json<UpdateArticleRequest>,
) -> impl Responder {
    let article_service = ArticleService::new(pool.get_ref().clone());
    // TODO: Get author_id from authenticated user
    let author_id = 1; // Temporary hardcoded value
    match article_service
        .update_article(article_id.into_inner(), author_id, article_data.into_inner())
        .await
    {
        Ok(article) => HttpResponse::Ok().json(article.into_response()),
        Err(e) => HttpResponse::NotFound().json(e.to_string()),
    }
}

async fn delete_article(pool: web::Data<PgPool>, article_id: web::Path<i32>) -> impl Responder {
    let article_service = ArticleService::new(pool.get_ref().clone());
    // TODO: Get author_id from authenticated user
    let author_id = 1; // Temporary hardcoded value
    match article_service
        .delete_article(article_id.into_inner(), author_id)
        .await
    {
        Ok(_) => HttpResponse::NoContent().finish(),
        Err(e) => HttpResponse::NotFound().json(e.to_string()),
    }
}

pub fn configure_routes(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/articles")
            .route("", web::post().to(create_article))
            .route("", web::get().to(get_articles))
            .route("/{id}", web::get().to(get_article))
            .route("/author", web::get().to(get_author_articles))
            .route("/{id}", web::put().to(update_article))
            .route("/{id}", web::delete().to(delete_article)),
    );
}
