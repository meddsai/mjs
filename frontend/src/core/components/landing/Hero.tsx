"use client";

import Link from "next/link";
import { Button } from "@/core/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
    return (
        <section className="bg-primary text-primary-foreground py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Create Your Academic Journal
                    </h1>
                    <p className="text-xl mb-8 text-primary-foreground/80">
                        MJS provides customizable templates and tools to help you create and manage your academic journal.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <Link href="/templates">
                                Browse Templates
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="bg-transparent" asChild>
                            <Link href="/docs">
                                Learn More
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
