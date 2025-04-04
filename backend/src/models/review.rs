use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use sqlx::Type;
use uuid::Uuid;
use validator::Validate;

#[derive(Debug, Clone, Serialize, Deserialize, sqlx::Type)]
#[sqlx(type_name = "review_status", rename_all = "SCREAMING_SNAKE_CASE")]
pub enum ReviewStatus {
    PENDING,
    IN_PROGRESS,
    COMPLETED,
    REJECTED,
}

impl Default for ReviewStatus {
    fn default() -> Self {
        ReviewStatus::PENDING
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Review {
    pub id: Uuid,
    pub article_id: Uuid,
    pub reviewer_id: Uuid,
    pub status: ReviewStatus,
    pub comments: Option<String>,
    pub rating: Option<i32>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

#[derive(Debug, Clone, Serialize, Deserialize, Validate)]
pub struct CreateReviewRequest {
    pub article_id: Uuid,
    pub reviewer_id: Uuid,
    pub comments: Option<String>,
    #[validate(range(min = 1, max = 5))]
    pub rating: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize, Validate)]
pub struct UpdateReviewRequest {
    pub status: Option<ReviewStatus>,
    pub comments: Option<String>,
    #[validate(range(min = 1, max = 5))]
    pub rating: Option<i32>,
}

#[derive(Debug, Serialize)]
pub struct ReviewResponse {
    pub id: Uuid,
    pub article_id: Uuid,
    pub reviewer_id: Uuid,
    pub status: ReviewStatus,
    pub comments: Option<String>,
    pub rating: Option<i32>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

impl From<Review> for ReviewResponse {
    fn from(review: Review) -> Self {
        Self {
            id: review.id,
            article_id: review.article_id,
            reviewer_id: review.reviewer_id,
            status: review.status,
            comments: review.comments,
            rating: review.rating,
            created_at: review.created_at,
            updated_at: review.updated_at,
        }
    }
}

impl Review {
    pub fn into_response(self) -> ReviewResponse {
        ReviewResponse {
            id: self.id,
            article_id: self.article_id,
            reviewer_id: self.reviewer_id,
            status: self.status,
            comments: self.comments,
            rating: self.rating,
            created_at: self.created_at,
            updated_at: self.updated_at,
        }
    }
}
