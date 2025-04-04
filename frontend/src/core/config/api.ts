export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';

export const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
};

export interface ApiResponse<T = any> {
    data?: T;
    error?: string;
    status: number;
}

export interface ApiError {
    message: string;
    status: number;
}

export const handleApiError = (error: any): ApiError => {
    if (error.response) {
        return {
            message: error.response.data?.error || 'An error occurred',
            status: error.response.status,
        };
    }
    return {
        message: error.message || 'Network error',
        status: 500,
    };
};
