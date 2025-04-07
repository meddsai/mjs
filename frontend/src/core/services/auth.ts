import { apiClient } from './api';

interface RegisterData {
  email: string;
  password: string;
  name: string;
  first_name?: string;
  last_name?: string;
  institution?: string;
  department?: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
  };
}

interface ResetPasswordData {
  email: string;
}

interface ResetPasswordConfirmData {
  token: string;
  new_password: string;
}

export const authService = {
  async register(data: RegisterData): Promise<AuthResponse> {
    const response = await apiClient.post<AuthResponse>('/auth/register', {
      ...data,
      first_name: data.name.split(' ')[0],
      last_name: data.name.split(' ').slice(1).join(' '),
    });

    if (response.error) {
      throw new Error(response.error);
    }

    return response.data;
  },

  async login(data: LoginData): Promise<AuthResponse> {
    const response = await apiClient.post<AuthResponse>('/auth/login', data);

    if (response.error) {
      throw new Error(response.error);
    }

    return response.data;
  },

  async requestPasswordReset(data: ResetPasswordData): Promise<void> {
    const response = await apiClient.post('/auth/forgot-password', data);

    if (response.error) {
      throw new Error(response.error);
    }
  },

  async resetPassword(data: ResetPasswordConfirmData): Promise<void> {
    const response = await apiClient.post('/auth/reset-password', data);

    if (response.error) {
      throw new Error(response.error);
    }
  },

  async logout(): Promise<void> {
    // Clear any stored tokens or user data
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  getStoredToken(): string | null {
    return localStorage.getItem('token');
  },

  getStoredUser(): any | null {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  isAuthenticated(): boolean {
    return !!this.getStoredToken();
  }
};
