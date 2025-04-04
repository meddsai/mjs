use sqlx::PgPool;

use crate::models::User;

pub struct UserService {
    pool: PgPool,
}

impl UserService {
    pub fn new(pool: PgPool) -> Self {
        Self { pool }
    }

    pub async fn get_users(&self) -> Result<Vec<User>, sqlx::Error> {
        sqlx::query_as!(
            User,
            r#"
            SELECT * FROM users
            ORDER BY created_at DESC
            "#
        )
        .fetch_all(&self.pool)
        .await
    }

    pub async fn get_user(&self, id: i32) -> Result<User, sqlx::Error> {
        sqlx::query_as!(
            User,
            r#"
            SELECT * FROM users WHERE id = $1
            "#,
            id
        )
        .fetch_one(&self.pool)
        .await
    }

    pub async fn update_user(
        &self,
        id: i32,
        name: Option<String>,
        email: Option<String>,
    ) -> Result<User, sqlx::Error> {
        sqlx::query_as!(
            User,
            r#"
            UPDATE users
            SET
                name = COALESCE($1, name),
                email = COALESCE($2, email),
                updated_at = NOW()
            WHERE id = $3
            RETURNING *
            "#,
            name,
            email,
            id
        )
        .fetch_one(&self.pool)
        .await
    }

    pub async fn delete_user(&self, id: i32) -> Result<(), sqlx::Error> {
        sqlx::query!(
            r#"
            DELETE FROM users WHERE id = $1
            "#,
            id
        )
        .execute(&self.pool)
        .await?;

        Ok(())
    }
}
