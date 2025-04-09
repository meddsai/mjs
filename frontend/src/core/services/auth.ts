import { ApiService } from './api';
import { LoginRequest, RegisterRequest, AuthResponse, User } from '../../types/user';

export class AuthService {
    private api: ApiService;

    constructor() {
        this.api = new ApiService(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api');
    }

    async login(data: LoginRequest): Promise<AuthResponse> {
        const response = await this.api.post<AuthResponse>('/auth/login', data);
        if (response.data) {
            localStorage.setItem('token', response.data.token);
        }
        return response.data!;
    }

    async register(data: RegisterRequest): Promise<AuthResponse> {
        const response = await this.api.post<AuthResponse>('/auth/register', data);
        if (response.data) {
            localStorage.setItem('token', response.data.token);
        }
        return response.data!;
    }

    async getCurrentUser(): Promise<User> {
        const response = await this.api.get<User>('/auth/me');
        return response.data!;
    }

    logout(): void {
        localStorage.removeItem('token');
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }

    isAuthenticated(): boolean {
        return !!this.getToken();
    }
}
