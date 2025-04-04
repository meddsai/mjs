-- Drop indexes
DROP INDEX IF EXISTS idx_user_journal_roles_journal_id;
DROP INDEX IF EXISTS idx_user_journal_roles_user_id;
DROP INDEX IF EXISTS idx_comments_user_id;
DROP INDEX IF EXISTS idx_comments_article_id;
DROP INDEX IF EXISTS idx_reviews_reviewer_id;
DROP INDEX IF EXISTS idx_reviews_article_id;
DROP INDEX IF EXISTS idx_articles_author_id;
DROP INDEX IF EXISTS idx_articles_journal_id;

-- Drop tables
DROP TABLE IF EXISTS user_journal_roles;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS articles;
DROP TABLE IF EXISTS journals;
DROP TABLE IF EXISTS users;
