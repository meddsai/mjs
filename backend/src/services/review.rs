use sqlx::PgPool;

use crate::models::{CreateReviewRequest, Review, ReviewStatus, UpdateReviewRequest};

pub struct ReviewService {
    pool: PgPool,
}

impl ReviewService {
    pub fn new(pool: PgPool) -> Self {
        Self { pool }
    }

    pub async fn create_review(
        &self,
        article_id: i32,
        reviewer_id: i32,
        review_data: CreateReviewRequest,
    ) -> Result<Review, sqlx::Error> {
        sqlx::query_as!(
            Review,
            r#"
            INSERT INTO reviews (article_id, reviewer_id, content, rating, status)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *
            "#,
            article_id,
            reviewer_id,
            review_data.content,
            review_data.rating,
            ReviewStatus::Completed as ReviewStatus,
        )
        .fetch_one(&self.pool)
        .await
    }

    pub async fn get_reviews(&self) -> Result<Vec<Review>, sqlx::Error> {
        sqlx::query_as!(
            Review,
            r#"
            SELECT * FROM reviews
            ORDER BY created_at DESC
            "#
        )
        .fetch_all(&self.pool)
        .await
    }

    pub async fn get_review(&self, id: i32) -> Result<Review, sqlx::Error> {
        sqlx::query_as!(
            Review,
            r#"
            SELECT * FROM reviews WHERE id = $1
            "#,
            id
        )
        .fetch_one(&self.pool)
        .await
    }

    pub async fn get_article_reviews(&self, article_id: i32) -> Result<Vec<Review>, sqlx::Error> {
        sqlx::query_as!(
            Review,
            r#"
            SELECT * FROM reviews WHERE article_id = $1
            ORDER BY created_at DESC
            "#,
            article_id
        )
        .fetch_all(&self.pool)
        .await
    }

    pub async fn get_reviewer_reviews(&self, reviewer_id: i32) -> Result<Vec<Review>, sqlx::Error> {
        sqlx::query_as!(
            Review,
            r#"
            SELECT * FROM reviews WHERE reviewer_id = $1
            ORDER BY created_at DESC
            "#,
            reviewer_id
        )
        .fetch_all(&self.pool)
        .await
    }

    pub async fn update_review(
        &self,
        id: i32,
        reviewer_id: i32,
        review_data: UpdateReviewRequest,
    ) -> Result<Review, sqlx::Error> {
        sqlx::query_as!(
            Review,
            r#"
            UPDATE reviews
            SET
                content = COALESCE($1, content),
                rating = COALESCE($2, rating),
                status = COALESCE($3, status),
                updated_at = NOW()
            WHERE id = $4 AND reviewer_id = $5
            RETURNING *
            "#,
            review_data.content,
            review_data.rating,
            review_data.status.map(|s| s as ReviewStatus),
            id,
            reviewer_id
        )
        .fetch_one(&self.pool)
        .await
    }

    pub async fn delete_review(&self, id: i32, reviewer_id: i32) -> Result<(), sqlx::Error> {
        sqlx::query!(
            r#"
            DELETE FROM reviews WHERE id = $1 AND reviewer_id = $2
            "#,
            id,
            reviewer_id
        )
        .execute(&self.pool)
        .await?;

        Ok(())
    }
}
