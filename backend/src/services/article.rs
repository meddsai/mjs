use sqlx::PgPool;
use uuid::Uuid;

use crate::models::article::{Article, ArticleStatus, CreateArticleRequest, UpdateArticleRequest};
use crate::utils::error::Error;

pub struct ArticleService {
    pool: PgPool,
}

impl ArticleService {
    pub fn new(pool: PgPool) -> Self {
        Self { pool }
    }

    pub async fn create_article(
        &self,
        author_id: Uuid,
        article_data: CreateArticleRequest,
    ) -> Result<Article, Error> {
        let article = sqlx::query_as!(
            Article,
            r#"
            INSERT INTO articles (title, abstract_text, keywords, author_id, status)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id, title, abstract_text, keywords, author_id, status as "status: ArticleStatus", created_at as "created_at!", updated_at as "updated_at!"
            "#,
            article_data.title,
            article_data.abstract_text,
            article_data.keywords.as_deref(),
            author_id,
            ArticleStatus::DRAFT as ArticleStatus,
        )
        .fetch_one(&self.pool)
        .await?;

        Ok(article)
    }

    pub async fn get_all_articles(&self) -> Result<Vec<Article>, Error> {
        let articles = sqlx::query_as!(
            Article,
            r#"
            SELECT id, title, abstract_text, keywords, author_id, status as "status: ArticleStatus", created_at as "created_at!", updated_at as "updated_at!"
            FROM articles
            "#
        )
        .fetch_all(&self.pool)
        .await?;

        Ok(articles)
    }

    pub async fn get_article_by_id(&self, id: Uuid) -> Result<Article, Error> {
        let article = sqlx::query_as!(
            Article,
            r#"
            SELECT id, title, abstract_text, keywords, author_id, status as "status: ArticleStatus", created_at as "created_at!", updated_at as "updated_at!"
            FROM articles
            WHERE id = $1
            "#,
            id
        )
        .fetch_optional(&self.pool)
        .await?
        .ok_or(Error::NotFound("Article not found".to_string()))?;

        Ok(article)
    }

    pub async fn get_articles_by_author(&self, author_id: Uuid) -> Result<Vec<Article>, Error> {
        let articles = sqlx::query_as!(
            Article,
            r#"
            SELECT id, title, abstract_text, keywords, author_id, status as "status: ArticleStatus", created_at as "created_at!", updated_at as "updated_at!"
            FROM articles
            WHERE author_id = $1
            "#,
            author_id
        )
        .fetch_all(&self.pool)
        .await?;

        Ok(articles)
    }

    pub async fn update_article(
        &self,
        id: Uuid,
        article_data: UpdateArticleRequest,
    ) -> Result<Article, Error> {
        let current_article = self.get_article_by_id(id).await?;

        let keywords = match (article_data.keywords, &current_article.keywords) {
            (Some(new_keywords), _) => Some(new_keywords),
            (None, Some(current_keywords)) => Some(current_keywords.clone()),
            (None, None) => None,
        };

        let article = sqlx::query_as!(
            Article,
            r#"
            UPDATE articles
            SET title = $1,
                abstract_text = $2,
                keywords = $3,
                status = $4,
                updated_at = CURRENT_TIMESTAMP
            WHERE id = $5
            RETURNING id, title, abstract_text, keywords, author_id, status as "status: ArticleStatus", created_at as "created_at!", updated_at as "updated_at!"
            "#,
            article_data.title.unwrap_or(current_article.title),
            article_data.abstract_text.unwrap_or(current_article.abstract_text),
            keywords.as_deref(),
            article_data.status.unwrap_or(current_article.status) as ArticleStatus,
            id
        )
        .fetch_one(&self.pool)
        .await?;

        Ok(article)
    }

    pub async fn delete_article(&self, id: Uuid) -> Result<(), Error> {
        let result = sqlx::query!(
            r#"
            DELETE FROM articles
            WHERE id = $1
            "#,
            id
        )
        .execute(&self.pool)
        .await?;

        if result.rows_affected() == 0 {
            return Err(Error::NotFound("Article not found".to_string()));
        }

        Ok(())
    }
}
