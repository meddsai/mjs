"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/core/components/ui/button";
import { Input } from "@/core/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/core/components/ui/form";
import { authService } from "@/core/services/auth";
import { useRouter, useSearchParams } from "next/navigation";
import { Link } from "next/link";

const formSchema = z.object({
    new_password: z.string().min(8, "Password must be at least 8 characters"),
    confirm_password: z.string(),
}).refine((data) => data.new_password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"],
});

type FormValues = z.infer<typeof formSchema>;

export function ResetPasswordForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            new_password: "",
            confirm_password: "",
        },
    });

    const handleSubmit = async (values: FormValues) => {
        if (!token) {
            setError("Invalid reset link. Please request a new one.");
            return;
        }

        try {
            setError(null);
            setIsLoading(true);
            await authService.resetPassword({
                token,
                new_password: values.new_password,
            });
            router.push('/login?message=password_reset_success');
        } catch (err: any) {
            setError(err.message || "Failed to reset password. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    if (!token) {
        return (
            <div className="space-y-4 text-center">
                <h3 className="text-lg font-medium">Invalid Reset Link</h3>
                <p className="text-sm text-muted-foreground">
                    The password reset link is invalid or has expired. Please request a new one.
                </p>
                <Button variant="outline" asChild>
                    <Link href="/forgot-password">Request New Link</Link>
                </Button>
            </div>
        );
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                {error && (
                    <div className="text-sm text-red-500 text-center">{error}</div>
                )}
                <FormField
                    control={form.control}
                    name="new_password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>New Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="Enter new password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirm_password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="Confirm new password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Resetting..." : "Reset Password"}
                </Button>
            </form>
        </Form>
    );
}
