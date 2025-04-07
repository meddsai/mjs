// backend/src/services/auth.rs

use crate::models::user::{CreateUserRequest, UpdateUserRequest, User, UserRole};
use crate::utils::error::Error;
use argon2::{
    password_hash::{rand_core::OsRng, PasswordHash, PasswordHasher, PasswordVerifier, SaltString},
    Argon2,
};
use sqlx::PgPool;
use uuid::Uuid;

pub struct AuthService {
    pool: PgPool,
}

impl AuthService {
    pub fn new(pool: PgPool) -> Self {
        Self { pool }
    }

    pub async fn register(&self, user_data: CreateUserRequest) -> Result<User, Error> {
        let salt = SaltString::generate(&mut OsRng);
        let argon2 = Argon2::default();
        let password_hash = argon2
            .hash_password(user_data.password.as_bytes(), &salt)?
            .to_string();

        let user = sqlx::query_as!(
            User,
            r#"
            INSERT INTO users (email, password_hash, name, role)
            VALUES ($1, $2, $3, $4)
            RETURNING id, email, password_hash, name, role as "role: UserRole", created_at as "created_at!", updated_at as "updated_at!"
            "#,
            user_data.email,
            password_hash,
            user_data.name,
            UserRole::AUTHOR as UserRole,
        )
        .fetch_one(&self.pool)
        .await?;

        Ok(user)
    }

    pub async fn get_user_by_id(&self, id: Uuid) -> Result<User, Error> {
        let user = sqlx::query_as!(
            User,
            r#"
            SELECT id, email, password_hash, name, role as "role: UserRole", created_at as "created_at!", updated_at as "updated_at!"
            FROM users
            WHERE id = $1
            "#,
            id
        )
        .fetch_optional(&self.pool)
        .await?
        .ok_or(Error::NotFound("User not found".to_string()))?;

        Ok(user)
    }

    pub async fn login(&self, email: String, password: String) -> Result<User, Error> {
        let user = sqlx::query_as!(
            User,
            r#"
            SELECT id, email, password_hash, name, role as "role: UserRole", created_at as "created_at!", updated_at as "updated_at!"
            FROM users
            WHERE email = $1
            "#,
            email
        )
        .fetch_optional(&self.pool)
        .await?
        .ok_or(Error::NotFound("User not found".to_string()))?;

        let parsed_hash = PasswordHash::new(&user.password_hash)?;
        if !Argon2::default()
            .verify_password(password.as_bytes(), &parsed_hash)
            .is_ok()
        {
            return Err(Error::Unauthorized("Invalid password".to_string()));
        }

        Ok(user)
    }

    pub async fn update_user(&self, id: Uuid, user_data: UpdateUserRequest) -> Result<User, Error> {
        // First get the current user data
        let current_user = self.get_user_by_id(id).await?;

        // Use separate queries depending on whether role is being updated
        let user = match user_data.role {
            Some(role) => {
                sqlx::query_as!(
                    User,
                    r#"
                    UPDATE users
                    SET
                        email = COALESCE($1, email),
                        name = COALESCE($2, name),
                        role = $3,
                        updated_at = CURRENT_TIMESTAMP
                    WHERE id = $4
                    RETURNING id, email, password_hash, name, role as "role: UserRole", created_at as "created_at!", updated_at as "updated_at!"
                    "#,
                    user_data.email,
                    user_data.name,
                    role as UserRole,
                    id
                )
                .fetch_one(&self.pool)
                .await?
            },
            None => {
                sqlx::query_as!(
                    User,
                    r#"
                    UPDATE users
                    SET
                        email = COALESCE($1, email),
                        name = COALESCE($2, name),
                        updated_at = CURRENT_TIMESTAMP
                    WHERE id = $3
                    RETURNING id, email, password_hash, name, role as "role: UserRole", created_at as "created_at!", updated_at as "updated_at!"
                    "#,
                    user_data.email,
                    user_data.name,
                    id
                )
                .fetch_one(&self.pool)
                .await?
            }
        };

        Ok(user)
    }

    pub async fn delete_user(&self, id: Uuid) -> Result<(), Error> {
        sqlx::query!(
            r#"
            DELETE FROM users
            WHERE id = $1
            "#,
            id
        )
        .execute(&self.pool)
        .await?;

        Ok(())
    }
}

pub async fn logout(_user_id: Uuid) -> Result<(), Error> {
    // TODO: Implement user logout (e.g., invalidate JWT token)
    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;
    use sqlx::postgres::PgPoolOptions;

    async fn create_test_pool() -> PgPool {
        let database_url = std::env::var("DATABASE_URL").expect("DATABASE_URL must be set");
        PgPoolOptions::new()
            .max_connections(5)
            .connect(&database_url)
            .await
            .expect("Failed to create pool")
    }

    #[tokio::test]
    async fn test_register_and_login() {
        let pool = create_test_pool().await;
        let auth_service = AuthService::new(pool);

        // Test registration
        let user_data = CreateUserRequest {
            email: "test@example.com".to_string(),
            password: "password123".to_string(),
            name: "Test User".to_string(),
        };

        let user = auth_service.register(user_data).await.unwrap();
        assert_eq!(user.email, "test@example.com");
        assert_eq!(user.name, "Test User");

        // Test login
        let logged_in_user = auth_service
            .login("test@example.com".to_string(), "password123".to_string())
            .await
            .unwrap();
        assert_eq!(logged_in_user.id, user.id);
    }
}
