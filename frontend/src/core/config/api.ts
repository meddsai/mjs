export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';

export const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
};

export interface ApiResponse<T = unknown> {
    data?: T;
    error?: string;
    status: number;
}

export interface ApiError {
    message: string;
    status: number;
}

export interface ApiRequestConfig<T = unknown> {
    data?: T;
    headers?: Record<string, string>;
    params?: Record<string, string>;
}

export const handleApiError = (error: Error | unknown): ApiError => {
    if (error instanceof Error) {
        return {
            message: error.message,
            status: 500,
        };
    }
    return {
        message: "An unknown error occurred",
        status: 500,
    };
};
