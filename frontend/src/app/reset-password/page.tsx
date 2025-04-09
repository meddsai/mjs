'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { ResetPasswordForm } from '@/core/components/auth/ResetPasswordForm';
import { Button } from '@/core/components/ui/button';
import Link from 'next/link';

export default function ResetPasswordPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    const handleSuccess = () => {
        router.push('/login?message=password_reset_success');
    };

    if (!token) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="w-full max-w-md p-6 space-y-6 text-center">
                    <h1 className="text-2xl font-bold">Invalid Reset Link</h1>
                    <p className="text-muted-foreground">
                        The password reset link is invalid or has expired. Please request a new one.
                    </p>
                    <Button asChild>
                        <Link href="/forgot-password">Request New Link</Link>
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="w-full max-w-md p-6 space-y-6">
                <div className="space-y-2 text-center">
                    <h1 className="text-2xl font-bold">Reset Password</h1>
                    <p className="text-muted-foreground">Enter your new password</p>
                </div>

                <ResetPasswordForm token={token} onSuccess={handleSuccess} />
            </div>
        </div>
    );
}
