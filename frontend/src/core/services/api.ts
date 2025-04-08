import { ApiResponse, ApiError, ApiRequestConfig } from "@/core/config/api";

export class ApiService {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    private async request<T = unknown, D = unknown>(
        method: string,
        endpoint: string,
        config?: ApiRequestConfig<D>
    ): Promise<ApiResponse<T>> {
        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    ...config?.headers,
                },
                body: config?.data ? JSON.stringify(config.data) : undefined,
            });

            const data = await response.json();
            return { data, status: response.status };
        } catch (error) {
            if (error instanceof Error) {
                throw { message: error.message, status: 500 } as ApiError;
            }
            throw { message: "An unknown error occurred", status: 500 } as ApiError;
        }
    }

    public async get<T = unknown>(endpoint: string, config?: ApiRequestConfig): Promise<ApiResponse<T>> {
        return this.request<T>("GET", endpoint, config);
    }

    public async post<T = unknown, D = unknown>(endpoint: string, config?: ApiRequestConfig<D>): Promise<ApiResponse<T>> {
        return this.request<T, D>("POST", endpoint, config);
    }

    public async put<T = unknown, D = unknown>(endpoint: string, config?: ApiRequestConfig<D>): Promise<ApiResponse<T>> {
        return this.request<T, D>("PUT", endpoint, config);
    }

    public async delete<T = unknown>(endpoint: string, config?: ApiRequestConfig): Promise<ApiResponse<T>> {
        return this.request<T>("DELETE", endpoint, config);
    }
}
