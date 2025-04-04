use crate::database::DbPool;
use crate::models::user::{CreateUserInput, User, UserRole};
use crate::models::{CreateUser, LoginUser};
use argon2::{
    password_hash::{rand_core::OsRng, PasswordHash, PasswordHasher, PasswordVerifier, SaltString},
    Argon2,
};
use chrono::Utc;
use rand::thread_rng;
use sqlx::Error;
use sqlx::PgPool;
use thiserror::Error;
use uuid::Uuid;
use validator::Validate;

pub async fn register(_pool: &DbPool, _user: CreateUser) -> Result<String, Error> {
    // TODO: Implement user registration
    Ok("User registered successfully".to_string())
}

pub async fn login(_pool: &DbPool, _credentials: LoginUser) -> Result<String, Error> {
    // TODO: Implement user login
    Ok("Login successful".to_string())
}

pub async fn logout(_user_id: Uuid) -> Result<(), Error> {
    // TODO: Implement user logout
    Ok(())
}

#[derive(Debug, Error)]
pub enum AuthError {
    #[error("Database error: {0}")]
    Database(#[from] sqlx::Error),
    #[error("Validation error: {0}")]
    Validation(#[from] validator::ValidationErrors),
    #[error("Password hashing error: {0}")]
    PasswordHash(#[from] argon2::password_hash::Error),
    #[error("Email already exists")]
    EmailExists,
    #[error("Invalid credentials")]
    InvalidCredentials,
}

pub struct AuthService {
    pool: PgPool,
}

impl AuthService {
    pub fn new(pool: PgPool) -> Self {
        Self { pool }
    }

    pub async fn register_user(
        &self,
        email: String,
        password: String,
        name: String,
        role: UserRole,
    ) -> Result<User, sqlx::Error> {
        let password_hash = self.hash_password(&password);

        sqlx::query_as!(
            User,
            r#"
            INSERT INTO users (email, password_hash, name, role)
            VALUES ($1, $2, $3, $4)
            RETURNING *
            "#,
            email,
            password_hash,
            name,
            role as UserRole,
        )
        .fetch_one(&self.pool)
        .await
    }

    pub async fn verify_credentials(
        &self,
        email: &str,
        password: &str,
    ) -> Result<User, sqlx::Error> {
        let user = sqlx::query_as!(
            User,
            r#"
            SELECT * FROM users WHERE email = $1
            "#,
            email
        )
        .fetch_one(&self.pool)
        .await?;

        if self.verify_password(password, &user.password_hash) {
            Ok(user)
        } else {
            Err(sqlx::Error::RowNotFound)
        }
    }

    fn hash_password(&self, password: &str) -> String {
        let salt = SaltString::generate(&mut OsRng);
        let argon2 = Argon2::default();
        argon2
            .hash_password(password.as_bytes(), &salt)
            .unwrap()
            .to_string()
    }

    fn verify_password(&self, password: &str, hash: &str) -> bool {
        let parsed_hash = PasswordHash::new(hash).unwrap();
        Argon2::default()
            .verify_password(password.as_bytes(), &parsed_hash)
            .is_ok()
    }
}
