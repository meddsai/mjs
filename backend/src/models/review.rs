use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use sqlx::FromRow;

#[derive(Debug, Serialize, Deserialize, sqlx::Type)]
#[sqlx(type_name = "review_status")]
#[sqlx(rename_all = "snake_case")]
pub enum ReviewStatus {
    Pending,
    InProgress,
    Completed,
}

#[derive(Debug, FromRow)]
pub struct Review {
    pub id: i32,
    pub article_id: i32,
    pub reviewer_id: i32,
    pub status: ReviewStatus,
    pub content: Option<String>,
    pub rating: Option<i32>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

#[derive(Debug, Deserialize)]
pub struct CreateReviewRequest {
    pub article_id: i32,
    pub content: String,
    pub rating: i32,
}

#[derive(Debug, Deserialize)]
pub struct UpdateReviewRequest {
    pub content: Option<String>,
    pub rating: Option<i32>,
    pub status: Option<ReviewStatus>,
}

impl Review {
    pub fn into_response(self) -> ReviewResponse {
        ReviewResponse {
            id: self.id,
            article_id: self.article_id,
            reviewer_id: self.reviewer_id,
            status: self.status,
            content: self.content,
            rating: self.rating,
            created_at: self.created_at,
            updated_at: self.updated_at,
        }
    }
}

#[derive(Debug, Serialize)]
pub struct ReviewResponse {
    pub id: i32,
    pub article_id: i32,
    pub reviewer_id: i32,
    pub status: ReviewStatus,
    pub content: Option<String>,
    pub rating: Option<i32>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}
