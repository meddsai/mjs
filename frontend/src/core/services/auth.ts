import { ApiService } from './api';

interface AuthCredentials {
    email: string;
    password: string;
}

interface RegisterData extends AuthCredentials {
    name: string;
}

interface AuthResponse {
    token: string;
    user: {
        id: string;
        email: string;
        name: string;
    };
}

interface ResetPasswordData {
    token: string;
    password: string;
}

class AuthService {
    private api: ApiService;

    constructor() {
        this.api = new ApiService(process.env.NEXT_PUBLIC_API_URL || '');
    }

    async login(credentials: AuthCredentials) {
        const response = await this.api.post<AuthResponse>('/auth/login', {
            data: credentials,
        });
        return response.data;
    }

    async register(data: RegisterData) {
        const response = await this.api.post<AuthResponse>('/auth/register', {
            data,
        });
        return response.data;
    }

    async requestPasswordReset(data: { email: string }) {
        const response = await this.api.post<{ message: string }>('/auth/forgot-password', {
            data,
        });
        return response.data;
    }

    async resetPassword(data: ResetPasswordData) {
        const response = await this.api.post<{ message: string }>('/auth/reset-password', {
            data,
        });
        return response.data;
    }

    async logout() {
        const response = await this.api.post<{ message: string }>('/auth/logout');
        return response.data;
    }
}

export const authService = new AuthService();
