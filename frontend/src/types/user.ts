export enum UserRole {
    Admin = 'admin',
    Editor = 'editor',
    Reviewer = 'reviewer',
    Author = 'author',
}

export interface User {
    id: string;
    email: string;
    name: string;
    role: UserRole;
    created_at: string;
    updated_at: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    email: string;
    password: string;
    name: string;
}

export interface AuthResponse {
    token: string;
    user: User;
}

export interface UpdateUserRequest {
    email?: string;
    name?: string;
    role?: UserRole;
    password?: string;
}
