# Authentication System Documentation

## Overview
The Modern Journal Systems (MJS) authentication system is built using Next.js for the frontend and Rust for the backend, providing a secure and user-friendly authentication experience.

## Components

### Frontend Authentication Components

#### 1. Login Form (`src/core/components/auth/LoginForm.tsx`)
- Handles user login with email and password
- Form validation using Zod
- Error handling and loading states
- Automatic redirection after successful login

#### 2. Register Form (`src/core/components/auth/RegisterForm.tsx`)
- User registration with:
  - Email
  - Password
  - Full name
  - Institution (optional)
  - Department (optional)
- Form validation
- Success modal after registration

#### 3. Password Reset Components
- **Forgot Password Form** (`src/core/components/auth/ForgotPasswordForm.tsx`)
  - Email input for password reset request
  - Success message after request
- **Reset Password Form** (`src/core/components/auth/ResetPasswordForm.tsx`)
  - New password input with validation
  - Token validation
  - Success redirection

#### 4. Success Modal (`src/core/components/auth/RegistrationSuccessModal.tsx`)
- Displays after successful registration
- Options to:
  - Close modal
  - Continue to dashboard

## Authentication Flow

### 1. Registration
1. User fills registration form
2. Form validation
3. API call to backend
4. Success modal display
5. Automatic redirection to dashboard

### 2. Login
1. User enters credentials
2. Form validation
3. API call to backend
4. Token storage
5. Automatic redirection to dashboard

### 3. Password Reset
1. User requests password reset
2. Email sent with reset link
3. User clicks link and enters new password
4. Password updated
5. Redirect to login with success message

## Protected Routes
- Implemented using Next.js middleware
- Checks for authentication token
- Redirects to login if no token
- Preserves intended destination URL

## Security Features
- JWT token-based authentication
- Secure password storage
- Form validation
- Error handling
- Protected routes
- Token expiration handling

## API Integration
- Backend endpoints:
  - `/auth/register`
  - `/auth/login`
  - `/auth/forgot-password`
  - `/auth/reset-password`

## Usage Examples

### Login
```typescript
const handleLogin = async (email: string, password: string) => {
  try {
    const response = await authService.login({ email, password });
    // Handle successful login
  } catch (error) {
    // Handle error
  }
};
```

### Registration
```typescript
const handleRegister = async (data: RegisterData) => {
  try {
    const response = await authService.register(data);
    // Handle successful registration
  } catch (error) {
    // Handle error
  }
};
```

## Best Practices
1. Always validate form inputs
2. Handle errors gracefully
3. Show loading states during API calls
4. Use secure password requirements
5. Implement proper token storage
6. Protect sensitive routes

## Troubleshooting
Common issues and solutions:
1. **Invalid Token**
   - Clear local storage
   - Log out and log back in
2. **Form Validation Errors**
   - Check input requirements
   - Ensure all required fields are filled
3. **API Connection Issues**
   - Check network connection
   - Verify backend service is running

## Future Improvements
1. Two-factor authentication
2. Social login integration
3. Session management
4. Remember me functionality
5. Account recovery options
