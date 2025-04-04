use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use sqlx::Type;
use uuid::Uuid;
use validator::Validate;

#[derive(Debug, Clone, Serialize, Deserialize, sqlx::Type)]
#[sqlx(type_name = "article_status", rename_all = "SCREAMING_SNAKE_CASE")]
pub enum ArticleStatus {
    DRAFT,
    SUBMITTED,
    UNDER_REVIEW,
    ACCEPTED,
    REJECTED,
    PUBLISHED,
}

impl Default for ArticleStatus {
    fn default() -> Self {
        ArticleStatus::DRAFT
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Article {
    pub id: Uuid,
    pub title: String,
    pub abstract_text: String,
    pub keywords: Option<Vec<String>>,
    pub author_id: Uuid,
    pub status: ArticleStatus,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

#[derive(Debug, Clone, Serialize, Deserialize, Validate)]
pub struct CreateArticleRequest {
    #[validate(length(min = 1))]
    pub title: String,
    #[validate(length(min = 1))]
    pub abstract_text: String,
    pub keywords: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize, Validate)]
pub struct UpdateArticleRequest {
    #[validate(length(min = 1))]
    pub title: Option<String>,
    #[validate(length(min = 1))]
    pub abstract_text: Option<String>,
    pub keywords: Option<Vec<String>>,
    pub status: Option<ArticleStatus>,
}

#[derive(Debug, Serialize)]
pub struct ArticleResponse {
    pub id: Uuid,
    pub title: String,
    pub abstract_text: String,
    pub keywords: Option<Vec<String>>,
    pub author_id: Uuid,
    pub status: ArticleStatus,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

impl From<Article> for ArticleResponse {
    fn from(article: Article) -> Self {
        Self {
            id: article.id,
            title: article.title,
            abstract_text: article.abstract_text,
            keywords: article.keywords,
            author_id: article.author_id,
            status: article.status,
            created_at: article.created_at,
            updated_at: article.updated_at,
        }
    }
}

impl Article {
    pub fn into_response(self) -> ArticleResponse {
        ArticleResponse {
            id: self.id,
            title: self.title,
            abstract_text: self.abstract_text,
            keywords: self.keywords,
            author_id: self.author_id,
            status: self.status,
            created_at: self.created_at,
            updated_at: self.updated_at,
        }
    }
}
