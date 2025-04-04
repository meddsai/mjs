use sqlx::PgPool;
use uuid::Uuid;

use crate::models::user::{UpdateUserRequest, User, UserRole};
use crate::utils::error::Error;

pub struct UserService {
    pool: PgPool,
}

impl UserService {
    pub fn new(pool: PgPool) -> Self {
        Self { pool }
    }

    pub async fn get_users(&self) -> Result<Vec<User>, Error> {
        let users = sqlx::query_as!(
            User,
            r#"
            SELECT id, email, password_hash, name, role as "role: UserRole", created_at as "created_at!", updated_at as "updated_at!"
            FROM users
            ORDER BY created_at DESC
            "#
        )
        .fetch_all(&self.pool)
        .await?;

        Ok(users)
    }

    pub async fn get_user(&self, id: Uuid) -> Result<User, Error> {
        let user = sqlx::query_as!(
            User,
            r#"
            SELECT id, email, password_hash, name, role as "role: UserRole", created_at as "created_at!", updated_at as "updated_at!"
            FROM users WHERE id = $1
            "#,
            id
        )
        .fetch_optional(&self.pool)
        .await?
        .ok_or(Error::NotFound("User not found".to_string()))?;

        Ok(user)
    }

    pub async fn update_user(
        &self,
        id: Uuid,
        user_data: UpdateUserRequest,
    ) -> Result<User, Error> {
        let current_user = self.get_user(id).await?;

        let user = sqlx::query_as!(
            User,
            r#"
            UPDATE users
            SET
                email = $1,
                name = $2,
                role = $3,
                updated_at = CURRENT_TIMESTAMP
            WHERE id = $4
            RETURNING id, email, password_hash, name, role as "role: UserRole", created_at as "created_at!", updated_at as "updated_at!"
            "#,
            user_data.email.unwrap_or(current_user.email),
            user_data.name.unwrap_or(current_user.name),
            user_data.role.unwrap_or(current_user.role) as UserRole,
            id
        )
        .fetch_one(&self.pool)
        .await?;

        Ok(user)
    }

    pub async fn delete_user(&self, id: Uuid) -> Result<(), Error> {
        let result = sqlx::query!(
            r#"
            DELETE FROM users
            WHERE id = $1
            "#,
            id
        )
        .execute(&self.pool)
        .await?;

        if result.rows_affected() == 0 {
            return Err(Error::NotFound("User not found".to_string()));
        }

        Ok(())
    }
}
