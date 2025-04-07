use actix_web::{web, HttpResponse, Responder};
use sqlx::PgPool;
use uuid::Uuid;

use crate::{
    models::article::{ArticleResponse, CreateArticleRequest, UpdateArticleRequest},
    services::article::ArticleService,
};

async fn create_article(
    pool: web::Data<PgPool>,
    article_data: web::Json<CreateArticleRequest>,
) -> impl Responder {
    let article_service = ArticleService::new(pool.get_ref().clone());
    // TODO: Get author_id from authenticated user
    let author_id = Uuid::new_v4(); // Temporary hardcoded value
    match article_service
        .create_article(author_id, article_data.into_inner())
        .await
    {
        Ok(article) => HttpResponse::Created().json(ArticleResponse::from(article)),
        Err(e) => HttpResponse::BadRequest().json(e.to_string()),
    }
}

async fn get_articles(pool: web::Data<PgPool>) -> impl Responder {
    let article_service = ArticleService::new(pool.get_ref().clone());
    match article_service.get_all_articles().await {
        Ok(articles) => HttpResponse::Ok().json(
            articles
                .into_iter()
                .map(ArticleResponse::from)
                .collect::<Vec<_>>(),
        ),
        Err(e) => HttpResponse::InternalServerError().json(e.to_string()),
    }
}

async fn get_article(pool: web::Data<PgPool>, article_id: web::Path<Uuid>) -> impl Responder {
    let article_service = ArticleService::new(pool.get_ref().clone());
    match article_service
        .get_article_by_id(article_id.into_inner())
        .await
    {
        Ok(article) => HttpResponse::Ok().json(ArticleResponse::from(article)),
        Err(e) => HttpResponse::NotFound().json(e.to_string()),
    }
}

async fn get_author_articles(
    pool: web::Data<PgPool>,
    author_id: web::Path<Uuid>,
) -> impl Responder {
    let article_service = ArticleService::new(pool.get_ref().clone());
    match article_service
        .get_articles_by_author(author_id.into_inner())
        .await
    {
        Ok(articles) => HttpResponse::Ok().json(
            articles
                .into_iter()
                .map(ArticleResponse::from)
                .collect::<Vec<_>>(),
        ),
        Err(e) => HttpResponse::InternalServerError().json(e.to_string()),
    }
}

async fn update_article(
    pool: web::Data<PgPool>,
    article_id: web::Path<Uuid>,
    article_data: web::Json<UpdateArticleRequest>,
) -> impl Responder {
    let article_service = ArticleService::new(pool.get_ref().clone());
    match article_service
        .update_article(article_id.into_inner(), article_data.into_inner())
        .await
    {
        Ok(article) => HttpResponse::Ok().json(ArticleResponse::from(article)),
        Err(e) => HttpResponse::NotFound().json(e.to_string()),
    }
}

async fn delete_article(pool: web::Data<PgPool>, article_id: web::Path<Uuid>) -> impl Responder {
    let article_service = ArticleService::new(pool.get_ref().clone());
    match article_service
        .delete_article(article_id.into_inner())
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
            .route("/author/{id}", web::get().to(get_author_articles))
            .route("/{id}", web::put().to(update_article))
            .route("/{id}", web::delete().to(delete_article)),
    );
}
