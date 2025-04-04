use sqlx::PgPool;
use std::env;

#[tokio::test]
async fn test_database_connection() {
    // Load environment variables
    dotenv::dotenv().ok();

    // Get database URL from environment
    let database_url = env::var("DATABASE_URL")
        .expect("DATABASE_URL must be set");

    // Create connection pool
    let pool = PgPool::connect(&database_url)
        .await
        .expect("Failed to create connection pool");

    // Test a simple query
    let result = sqlx::query!("SELECT 1 as one")
        .fetch_one(&pool)
        .await
        .expect("Failed to execute query");

    assert_eq!(result.one, 1);
}
