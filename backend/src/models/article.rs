use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use sqlx::FromRow;

#[derive(Debug, Serialize, Deserialize, sqlx::Type)]
#[sqlx(type_name = "article_status")]
#[sqlx(rename_all = "snake_case")]
pub enum ArticleStatus {
    Draft,
    Submitted,
    UnderReview,
    RevisionsRequested,
    Accepted,
    Rejected,
}

#[derive(Debug, FromRow)]
pub struct Article {
    pub id: i32,
    pub title: String,
    pub abstract_text: String,
    pub content: String,
    pub author_id: i32,
    pub status: ArticleStatus,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

#[derive(Debug, Deserialize)]
pub struct CreateArticleRequest {
    pub title: String,
    pub abstract_text: String,
    pub content: String,
}

#[derive(Debug, Deserialize)]
pub struct UpdateArticleRequest {
    pub title: Option<String>,
    pub abstract_text: Option<String>,
    pub content: Option<String>,
    pub status: Option<ArticleStatus>,
}

impl Article {
    pub fn into_response(self) -> ArticleResponse {
        ArticleResponse {
            id: self.id,
            title: self.title,
            abstract_text: self.abstract_text,
            content: self.content,
            author_id: self.author_id,
            status: self.status,
            created_at: self.created_at,
            updated_at: self.updated_at,
        }
    }
}

#[derive(Debug, Serialize)]
pub struct ArticleResponse {
    pub id: i32,
    pub title: String,
    pub abstract_text: String,
    pub content: String,
    pub author_id: i32,
    pub status: ArticleStatus,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}
