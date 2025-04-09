import { ApiClient } from './api';
import { Article, CreateArticleRequest, UpdateArticleRequest } from '@/types/article';

export class ArticleService {
    private api: ApiClient;

    constructor() {
        this.api = new ApiClient();
    }

    async getArticles(): Promise<Article[]> {
        const response = await this.api.get<Article[]>('/articles');
        return response.data || [];
    }

    async getArticle(id: string): Promise<Article> {
        const response = await this.api.get<Article>(`/articles/${id}`);
        if (!response.data) {
            throw new Error(response.error || 'Failed to fetch article');
        }
        return response.data;
    }

    async createArticle(data: CreateArticleRequest): Promise<Article> {
        const response = await this.api.post<Article>('/articles', data);
        if (!response.data) {
            throw new Error(response.error || 'Failed to create article');
        }
        return response.data;
    }

    async updateArticle(id: string, data: UpdateArticleRequest): Promise<Article> {
        const response = await this.api.put<Article>(`/articles/${id}`, data);
        if (!response.data) {
            throw new Error(response.error || 'Failed to update article');
        }
        return response.data;
    }

    async deleteArticle(id: string): Promise<void> {
        const response = await this.api.delete(`/articles/${id}`);
        if (response.error) {
            throw new Error(response.error);
        }
    }

    async submitForReview(id: string): Promise<Article> {
        const response = await this.api.put<Article>(`/articles/${id}/submit`);
        if (!response.data) {
            throw new Error(response.error || 'Failed to submit article for review');
        }
        return response.data;
    }

    async getMyArticles(): Promise<Article[]> {
        const response = await this.api.get<Article[]>('/articles/me');
        return response.data || [];
    }
}
