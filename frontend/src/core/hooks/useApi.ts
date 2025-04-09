import { useState } from 'react';
import { ApiResponse, ApiError } from '@/core/config/api';

interface UseApiState<T> {
    data: T | null;
    error: ApiError | null;
    isLoading: boolean;
}

interface UseApiResponse<T> extends UseApiState<T> {
    execute: () => Promise<void>;
    reset: () => void;
}

export function useApi<T>(apiCall: () => Promise<ApiResponse<T>>): UseApiResponse<T> {
    const [state, setState] = useState<UseApiState<T>>({
        data: null,
        error: null,
        isLoading: false,
    });

    const execute = async () => {
        try {
            setState((prev) => ({ ...prev, isLoading: true, error: null }));
            const response = await apiCall();

            if (response.error) {
                setState((prev) => ({
                    ...prev,
                    error: {
                        message: response.error || 'An unknown error occurred',
                        status: response.status,
                    },
                    isLoading: false,
                }));
            } else {
                setState((prev) => ({
                    ...prev,
                    data: response.data || null,
                    isLoading: false,
                }));
            }
        } catch (error) {
            setState((prev) => ({
                ...prev,
                error:
                    error instanceof Error
                        ? { message: error.message, status: 500 }
                        : { message: 'An unknown error occurred', status: 500 },
                isLoading: false,
            }));
        }
    };

    const reset = () => {
        setState({
            data: null,
            error: null,
            isLoading: false,
        });
    };

    return {
        ...state,
        execute,
        reset,
    };
}
