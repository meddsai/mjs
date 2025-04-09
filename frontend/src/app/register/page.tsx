'use client';

import { useState } from 'react';
import { RegisterForm } from '@/core/components/auth/RegisterForm';
import { RegistrationSuccessModal } from '@/core/components/auth/RegistrationSuccessModal';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
    const router = useRouter();
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleSuccess = () => {
        setShowSuccessModal(true);
    };

    const handleCloseModal = () => {
        setShowSuccessModal(false);
        router.push('/login');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="w-full max-w-md p-6 space-y-6">
                <div className="space-y-2 text-center">
                    <h1 className="text-2xl font-bold">Create an Account</h1>
                    <p className="text-muted-foreground">
                        Enter your information to create an account
                    </p>
                </div>

                <RegisterForm onSuccess={handleSuccess} />

                <RegistrationSuccessModal isOpen={showSuccessModal} onClose={handleCloseModal} />
            </div>
        </div>
    );
}
