import { useState, useCallback } from 'react';
import { ApiResponse, ApiError } from '../config/api';
import { apiClient } from '../services/api';

interface UseApiState<T> {
    data: T | null;
    loading: boolean;
    error: ApiError | null;
}

export function useApi<T>() {
    const [state, setState] = useState<UseApiState<T>>({
        data: null,
        loading: false,
        error: null,
    });

    const request = useCallback(async (
        method: 'get' | 'post' | 'put' | 'delete',
        url: string,
        data?: any
    ) => {
        setState(prev => ({ ...prev, loading: true, error: null }));

        try {
            let response: ApiResponse<T>;

            switch (method) {
                case 'get':
                    response = await apiClient.get<T>(url, data);
                    break;
                case 'post':
                    response = await apiClient.post<T>(url, data);
                    break;
                case 'put':
                    response = await apiClient.put<T>(url, data);
                    break;
                case 'delete':
                    response = await apiClient.delete<T>(url);
                    break;
                default:
                    throw new Error(`Unsupported method: ${method}`);
            }

            if (response.error) {
                throw { message: response.error, status: response.status };
            }

            setState({
                data: response.data || null,
                loading: false,
                error: null,
            });

            return response.data;
        } catch (error: any) {
            const apiError = {
                message: error.message || 'An error occurred',
                status: error.status || 500,
            };

            setState(prev => ({
                ...prev,
                loading: false,
                error: apiError,
            }));

            throw apiError;
        }
    }, []);

    return {
        ...state,
        request,
    };
}
