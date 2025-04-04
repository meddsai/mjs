use sqlx::PgPool;

use crate::models::{Article, ArticleStatus, CreateArticleRequest, UpdateArticleRequest};

pub struct ArticleService {
    pool: PgPool,
}

impl ArticleService {
    pub fn new(pool: PgPool) -> Self {
        Self { pool }
    }

    pub async fn create_article(
        &self,
        author_id: i32,
        article_data: CreateArticleRequest,
    ) -> Result<Article, sqlx::Error> {
        sqlx::query_as!(
            Article,
            r#"
            INSERT INTO articles (title, abstract_text, content, author_id, status)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *
            "#,
            article_data.title,
            article_data.abstract_text,
            article_data.content,
            author_id,
            ArticleStatus::Draft as ArticleStatus,
        )
        .fetch_one(&self.pool)
        .await
    }

    pub async fn get_articles(&self) -> Result<Vec<Article>, sqlx::Error> {
        sqlx::query_as!(
            Article,
            r#"
            SELECT * FROM articles
            ORDER BY created_at DESC
            "#
        )
        .fetch_all(&self.pool)
        .await
    }

    pub async fn get_article(&self, id: i32) -> Result<Article, sqlx::Error> {
        sqlx::query_as!(
            Article,
            r#"
            SELECT * FROM articles WHERE id = $1
            "#,
            id
        )
        .fetch_one(&self.pool)
        .await
    }

    pub async fn get_author_articles(&self, author_id: i32) -> Result<Vec<Article>, sqlx::Error> {
        sqlx::query_as!(
            Article,
            r#"
            SELECT * FROM articles WHERE author_id = $1
            ORDER BY created_at DESC
            "#,
            author_id
        )
        .fetch_all(&self.pool)
        .await
    }

    pub async fn update_article(
        &self,
        id: i32,
        author_id: i32,
        article_data: UpdateArticleRequest,
    ) -> Result<Article, sqlx::Error> {
        sqlx::query_as!(
            Article,
            r#"
            UPDATE articles
            SET
                title = COALESCE($1, title),
                abstract_text = COALESCE($2, abstract_text),
                content = COALESCE($3, content),
                status = COALESCE($4, status),
                updated_at = NOW()
            WHERE id = $5 AND author_id = $6
            RETURNING *
            "#,
            article_data.title,
            article_data.abstract_text,
            article_data.content,
            article_data.status.map(|s| s as ArticleStatus),
            id,
            author_id
        )
        .fetch_one(&self.pool)
        .await
    }

    pub async fn delete_article(&self, id: i32, author_id: i32) -> Result<(), sqlx::Error> {
        sqlx::query!(
            r#"
            DELETE FROM articles WHERE id = $1 AND author_id = $2
            "#,
            id,
            author_id
        )
        .execute(&self.pool)
        .await?;

        Ok(())
    }
}
