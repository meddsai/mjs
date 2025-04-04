use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use sqlx::Type;
use uuid::Uuid;
use validator::Validate;
use std::fmt;

#[derive(Debug, Clone, Serialize, Deserialize, sqlx::Type)]
#[sqlx(type_name = "user_role", rename_all = "SCREAMING_SNAKE_CASE")]
pub enum UserRole {
    ADMIN,
    EDITOR,
    REVIEWER,
    AUTHOR,
}

impl Default for UserRole {
    fn default() -> Self {
        UserRole::AUTHOR
    }
}

impl fmt::Display for UserRole {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            UserRole::ADMIN => write!(f, "ADMIN"),
            UserRole::EDITOR => write!(f, "EDITOR"),
            UserRole::REVIEWER => write!(f, "REVIEWER"),
            UserRole::AUTHOR => write!(f, "AUTHOR"),
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct User {
    pub id: Uuid,
    pub email: String,
    #[serde(skip_serializing)]
    pub password_hash: String,
    pub name: String,
    pub role: UserRole,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

#[derive(Debug, Deserialize, Validate)]
pub struct CreateUserRequest {
    #[validate(email)]
    pub email: String,
    #[validate(length(min = 8))]
    pub password: String,
    #[validate(length(min = 1))]
    pub name: String,
}

#[derive(Debug, Deserialize, Validate)]
pub struct UpdateUserRequest {
    #[validate(email)]
    pub email: Option<String>,
    #[validate(length(min = 8))]
    pub password: Option<String>,
    #[validate(length(min = 1))]
    pub name: Option<String>,
    pub role: Option<UserRole>,
}

#[derive(Debug, Serialize)]
pub struct UserResponse {
    pub id: Uuid,
    pub email: String,
    pub name: String,
    pub role: UserRole,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

impl From<User> for UserResponse {
    fn from(user: User) -> Self {
        Self {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
            created_at: user.created_at,
            updated_at: user.updated_at,
        }
    }
}

impl User {
    pub fn into_response(self) -> UserResponse {
        UserResponse {
            id: self.id,
            email: self.email,
            name: self.name,
            role: self.role,
            created_at: self.created_at,
            updated_at: self.updated_at,
        }
    }
}
