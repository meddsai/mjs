use sqlx::PgPool;
use uuid::Uuid;

use crate::models::review::{Review, ReviewStatus, CreateReviewRequest, UpdateReviewRequest};
use crate::utils::error::Error;

pub struct ReviewService {
    pool: PgPool,
}

impl ReviewService {
    pub fn new(pool: PgPool) -> Self {
        Self { pool }
    }

    pub async fn create_review(
        &self,
        review_data: CreateReviewRequest,
    ) -> Result<Review, Error> {
        let review = sqlx::query_as!(
            Review,
            r#"
            INSERT INTO reviews (article_id, reviewer_id, status, comments, rating)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id, article_id, reviewer_id, status as "status: ReviewStatus", comments, rating, created_at as "created_at!", updated_at as "updated_at!"
            "#,
            review_data.article_id,
            review_data.reviewer_id,
            ReviewStatus::PENDING as ReviewStatus,
            review_data.comments,
            review_data.rating,
        )
        .fetch_one(&self.pool)
        .await?;

        Ok(review)
    }

    pub async fn get_all_reviews(&self) -> Result<Vec<Review>, Error> {
        let reviews = sqlx::query_as!(
            Review,
            r#"
            SELECT id, article_id, reviewer_id, status as "status: ReviewStatus", comments, rating, created_at as "created_at!", updated_at as "updated_at!"
            FROM reviews
            "#
        )
        .fetch_all(&self.pool)
        .await?;

        Ok(reviews)
    }

    pub async fn get_review_by_id(&self, id: Uuid) -> Result<Review, Error> {
        let review = sqlx::query_as!(
            Review,
            r#"
            SELECT id, article_id, reviewer_id, status as "status: ReviewStatus", comments, rating, created_at as "created_at!", updated_at as "updated_at!"
            FROM reviews
            WHERE id = $1
            "#,
            id
        )
        .fetch_optional(&self.pool)
        .await?
        .ok_or(Error::NotFound("Review not found".to_string()))?;

        Ok(review)
    }

    pub async fn get_reviews_by_article(&self, article_id: Uuid) -> Result<Vec<Review>, Error> {
        let reviews = sqlx::query_as!(
            Review,
            r#"
            SELECT id, article_id, reviewer_id, status as "status: ReviewStatus", comments, rating, created_at as "created_at!", updated_at as "updated_at!"
            FROM reviews
            WHERE article_id = $1
            "#,
            article_id
        )
        .fetch_all(&self.pool)
        .await?;

        Ok(reviews)
    }

    pub async fn get_reviews_by_reviewer(&self, reviewer_id: Uuid) -> Result<Vec<Review>, Error> {
        let reviews = sqlx::query_as!(
            Review,
            r#"
            SELECT id, article_id, reviewer_id, status as "status: ReviewStatus", comments, rating, created_at as "created_at!", updated_at as "updated_at!"
            FROM reviews
            WHERE reviewer_id = $1
            "#,
            reviewer_id
        )
        .fetch_all(&self.pool)
        .await?;

        Ok(reviews)
    }

    pub async fn update_review(
        &self,
        id: Uuid,
        review_data: UpdateReviewRequest,
    ) -> Result<Review, Error> {
        let current_review = self.get_review_by_id(id).await?;

        let review = sqlx::query_as!(
            Review,
            r#"
            UPDATE reviews
            SET status = $1,
                comments = $2,
                rating = $3,
                updated_at = CURRENT_TIMESTAMP
            WHERE id = $4
            RETURNING id, article_id, reviewer_id, status as "status: ReviewStatus", comments, rating, created_at as "created_at!", updated_at as "updated_at!"
            "#,
            review_data.status.unwrap_or(current_review.status) as ReviewStatus,
            review_data.comments.unwrap_or(current_review.comments.unwrap_or_default()),
            review_data.rating.unwrap_or(current_review.rating.unwrap_or_default()),
            id
        )
        .fetch_one(&self.pool)
        .await?;

        Ok(review)
    }

    pub async fn delete_review(&self, id: Uuid) -> Result<(), Error> {
        let result = sqlx::query!(
            r#"
            DELETE FROM reviews
            WHERE id = $1
            "#,
            id
        )
        .execute(&self.pool)
        .await?;

        if result.rows_affected() == 0 {
            return Err(Error::NotFound("Review not found".to_string()));
        }

        Ok(())
    }
}
