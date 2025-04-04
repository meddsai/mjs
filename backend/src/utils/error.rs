use std::fmt;

use actix_web::{error::ResponseError, http::StatusCode, HttpResponse};
use argon2::password_hash;
use serde::Serialize;
use sqlx::error::DatabaseError;

#[derive(Debug)]
pub enum Error {
    Database(sqlx::Error),
    NotFound(String),
    Unauthorized(String),
    BadRequest(String),
    Internal(String),
    PasswordHash(password_hash::Error),
}

#[derive(Debug, Serialize)]
pub struct ErrorResponse {
    pub message: String,
}

impl fmt::Display for Error {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            Error::Database(e) => write!(f, "Database error: {}", e),
            Error::NotFound(msg) => write!(f, "Not found: {}", msg),
            Error::Unauthorized(msg) => write!(f, "Unauthorized: {}", msg),
            Error::BadRequest(msg) => write!(f, "Bad request: {}", msg),
            Error::Internal(msg) => write!(f, "Internal error: {}", msg),
            Error::PasswordHash(e) => write!(f, "Password hash error: {}", e),
        }
    }
}

impl std::error::Error for Error {}

impl From<sqlx::Error> for Error {
    fn from(err: sqlx::Error) -> Self {
        match err {
            sqlx::Error::RowNotFound => Error::NotFound("Resource not found".to_string()),
            _ => Error::Database(err),
        }
    }
}

impl From<password_hash::Error> for Error {
    fn from(err: password_hash::Error) -> Self {
        Error::PasswordHash(err)
    }
}

impl ResponseError for Error {
    fn status_code(&self) -> StatusCode {
        match self {
            Error::Database(_) => StatusCode::INTERNAL_SERVER_ERROR,
            Error::NotFound(_) => StatusCode::NOT_FOUND,
            Error::Unauthorized(_) => StatusCode::UNAUTHORIZED,
            Error::BadRequest(_) => StatusCode::BAD_REQUEST,
            Error::Internal(_) => StatusCode::INTERNAL_SERVER_ERROR,
            Error::PasswordHash(_) => StatusCode::INTERNAL_SERVER_ERROR,
        }
    }

    fn error_response(&self) -> HttpResponse {
        let status_code = self.status_code();
        let error_response = ErrorResponse {
            message: self.to_string(),
        };
        HttpResponse::build(status_code).json(error_response)
    }
}
