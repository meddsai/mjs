"use client";

import { useState } from "react";
import { LoginForm } from "@/core/components/auth/LoginForm";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSuccess = () => {
        router.push('/dashboard');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="w-full max-w-md p-6 space-y-6">
                <div className="space-y-2 text-center">
                    <h1 className="text-2xl font-bold">Welcome Back</h1>
                    <p className="text-muted-foreground">
                        Sign in to your account
                    </p>
                </div>

                <LoginForm onSuccess={handleSuccess} />
            </div>
        </div>
    );
}
