import { useState, useCallback } from 'react';
import { ArticleService } from '../services/article';
import { Article, CreateArticleRequest, UpdateArticleRequest } from '@/types/article';

export function useArticles() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const articleService = new ArticleService();

    const fetchArticles = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await articleService.getArticles();
            setArticles(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch articles');
        } finally {
            setLoading(false);
        }
    }, []);

    const fetchMyArticles = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await articleService.getMyArticles();
            setArticles(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch my articles');
        } finally {
            setLoading(false);
        }
    }, []);

    const createArticle = useCallback(async (data: CreateArticleRequest) => {
        try {
            setLoading(true);
            setError(null);
            const newArticle = await articleService.createArticle(data);
            setArticles(prev => [...prev, newArticle]);
            return newArticle;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to create article');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const updateArticle = useCallback(async (id: string, data: UpdateArticleRequest) => {
        try {
            setLoading(true);
            setError(null);
            const updatedArticle = await articleService.updateArticle(id, data);
            setArticles(prev => prev.map(article =>
                article.id === id ? updatedArticle : article
            ));
            return updatedArticle;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to update article');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const deleteArticle = useCallback(async (id: string) => {
        try {
            setLoading(true);
            setError(null);
            await articleService.deleteArticle(id);
            setArticles(prev => prev.filter(article => article.id !== id));
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to delete article');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const submitForReview = useCallback(async (id: string) => {
        try {
            setLoading(true);
            setError(null);
            const updatedArticle = await articleService.submitForReview(id);
            setArticles(prev => prev.map(article =>
                article.id === id ? updatedArticle : article
            ));
            return updatedArticle;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to submit article for review');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        articles,
        loading,
        error,
        fetchArticles,
        fetchMyArticles,
        createArticle,
        updateArticle,
        deleteArticle,
        submitForReview,
    };
} 