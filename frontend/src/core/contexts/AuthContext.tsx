import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../../types/user';
import { AuthService } from '../services/auth';

interface AuthContextType {
    user: User | null;
    loading: boolean;
    error: string | null;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string, name: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const authService = new AuthService();

    useEffect(() => {
        const token = authService.getToken();
        if (token) {
            fetchCurrentUser();
        } else {
            setLoading(false);
        }
    }, []);

    const fetchCurrentUser = async () => {
        try {
            const currentUser = await authService.getCurrentUser();
            setUser(currentUser);
        } catch (err) {
            authService.logout();
        } finally {
            setLoading(false);
        }
    };

    const login = async (email: string, password: string) => {
        try {
            setError(null);
            const response = await authService.login({ email, password });
            setUser(response.user);
        } catch (err: any) {
            setError(err.message || 'Login failed');
            throw err;
        }
    };

    const register = async (email: string, password: string, name: string) => {
        try {
            setError(null);
            const response = await authService.register({ email, password, name });
            setUser(response.user);
        } catch (err: any) {
            setError(err.message || 'Registration failed');
            throw err;
        }
    };

    const logout = () => {
        authService.logout();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, error, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}; 