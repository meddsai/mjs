import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { API_BASE_URL, DEFAULT_HEADERS, ApiResponse, handleApiError } from '../config/api';

class ApiClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: API_BASE_URL,
            headers: DEFAULT_HEADERS,
        });

        this.setupInterceptors();
    }

    private setupInterceptors() {
        this.client.interceptors.response.use(
            (response) => response,
            (error) => Promise.reject(handleApiError(error))
        );
    }

    async get<T>(url: string, params?: any): Promise<ApiResponse<T>> {
        try {
            const response: AxiosResponse = await this.client.get(url, { params });
            return { data: response.data, status: response.status };
        } catch (error: any) {
            return { error: error.message, status: error.status };
        }
    }

    async post<T>(url: string, data?: any): Promise<ApiResponse<T>> {
        try {
            const response: AxiosResponse = await this.client.post(url, data);
            return { data: response.data, status: response.status };
        } catch (error: any) {
            return { error: error.message, status: error.status };
        }
    }

    async put<T>(url: string, data?: any): Promise<ApiResponse<T>> {
        try {
            const response: AxiosResponse = await this.client.put(url, data);
            return { data: response.data, status: response.status };
        } catch (error: any) {
            return { error: error.message, status: error.status };
        }
    }

    async delete<T>(url: string): Promise<ApiResponse<T>> {
        try {
            const response: AxiosResponse = await this.client.delete(url);
            return { data: response.data, status: response.status };
        } catch (error: any) {
            return { error: error.message, status: error.status };
        }
    }
}

export const apiClient = new ApiClient();
