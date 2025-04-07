"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/core/components/ui/card";
import { LoginForm } from "@/core/components/auth/LoginForm";
import Link from "next/link";

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (data: { email: string; password: string }) => {
        setIsLoading(true);
        try {
            // The actual login logic is handled in the LoginForm component
            // This is just a placeholder for any additional page-level logic
            const redirect = new URLSearchParams(window.location.search).get('redirect');
            if (redirect) {
                router.push(redirect);
            } else {
                router.push('/');
            }
        } catch (error) {
            console.error("Login failed:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-muted/40 px-4">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1 text-center">
                    <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
                    <CardDescription>
                        Enter your credentials to sign in to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <LoginForm
                        onSubmit={handleLogin}
                        isLoading={isLoading}
                    />
                    <div className="flex flex-col items-center space-y-2 text-sm text-muted-foreground mt-4">
                        <Link href="/forgot-password" className="text-primary hover:underline">
                            Forgot your password?
                        </Link>
                        <div>
                            Don&apos;t have an account?{" "}
                            <Link href="/register" className="text-primary hover:underline">
                                Register
                            </Link>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
