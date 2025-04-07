"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/core/components/ui/card";
import { RegisterForm } from "@/core/components/auth/RegisterForm";
import Link from "next/link";
import { RegistrationSuccessModal } from "@/core/components/auth/RegistrationSuccessModal";

export default function RegisterPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleRegister = async (email: string, password: string, name: string) => {
        setIsLoading(true);
        try {
            // TODO: Implement registration logic
            setShowSuccessModal(true);
        } catch (error) {
            console.error("Registration failed:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCloseModal = () => {
        setShowSuccessModal(false);
        router.push("/login");
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-muted/40 px-4">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1 text-center">
                    <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
                    <CardDescription>
                        Enter your information to create your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <RegisterForm
                        onSubmit={handleRegister}
                        isLoading={isLoading}
                    />
                </CardContent>
                <div className="text-center text-sm text-muted-foreground mb-4">
                    Already have an account?{" "}
                    <Link href="/login" className="text-primary hover:underline">
                        Sign in
                    </Link>
                </div>
            </Card>

            {showSuccessModal && (
                <RegistrationSuccessModal onClose={handleCloseModal} />
            )}
        </div>
    );
}
