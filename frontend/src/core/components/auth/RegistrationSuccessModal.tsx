"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/core/components/ui/dialog-headless";
import { Button } from "@/core/components/ui/button";
import { useRouter } from "next/navigation";

interface RegistrationSuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function RegistrationSuccessModal({ isOpen, onClose }: RegistrationSuccessModalProps) {
    const router = useRouter();

    const handleContinue = () => {
        onClose();
        router.push('/dashboard');
    };

    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogContent onClose={onClose} className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Registration Successful!</DialogTitle>
                    <DialogDescription>
                        Your account has been created successfully. You can now access all features of the platform.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={onClose}>
                        Close
                    </Button>
                    <Button onClick={handleContinue}>
                        Continue to Dashboard
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
