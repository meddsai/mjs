"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/core/components/ui/card";
import { RegisterForm } from "@/core/components/auth/RegisterForm";
import Link from "next/link";

export default function RegisterPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleRegister = async (email: string, password: string, name: string) => {
        console.log("Register form submitted with:", { email, password, name });
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
                <CardFooter className="flex flex-col space-y-4">
                    <div className="text-sm text-center text-muted-foreground">
                        Already have an account?{" "}
                        <Link href="/login" className="text-primary hover:underline">
                            Sign in
                        </Link>
                    </div>
                </CardFooter>
            </Card>

            {/* TODO: Add RegistrationSuccessModal component */}
        </div>
    );
}
