-- Drop existing tables if they exist
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS articles;
DROP TABLE IF EXISTS users;

-- Create enum types if they don't exist
DO $$ BEGIN
    CREATE TYPE user_role AS ENUM ('ADMIN', 'EDITOR', 'REVIEWER', 'AUTHOR');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE article_status AS ENUM ('DRAFT', 'SUBMITTED', 'UNDER_REVIEW', 'ACCEPTED', 'REJECTED', 'PUBLISHED');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE review_status AS ENUM ('PENDING', 'IN_PROGRESS', 'COMPLETED', 'REJECTED');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- Create users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    role user_role NOT NULL DEFAULT 'AUTHOR',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create articles table
CREATE TABLE articles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    abstract_text TEXT NOT NULL,
    keywords TEXT[],
    author_id UUID NOT NULL REFERENCES users(id),
    status article_status NOT NULL DEFAULT 'DRAFT',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create reviews table
CREATE TABLE reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    article_id UUID NOT NULL REFERENCES articles(id),
    reviewer_id UUID NOT NULL REFERENCES users(id),
    status review_status NOT NULL DEFAULT 'PENDING',
    comments TEXT,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
