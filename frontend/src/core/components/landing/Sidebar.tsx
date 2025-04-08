"use client";

import Link from "next/link";
import {
    BookText,
    FileText,
    Users,
    Settings,
    Layout,
    Workflow
} from "lucide-react";

export const Sidebar = () => {
    return (
        <aside className="space-y-8">
            {/* About Section */}
            <section className="bg-card p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">About MJS</h2>
                <p className="text-muted-foreground mb-4">
                    Modern Journal Systems is pioneering the future of academic publishing
                    through customizable, template-driven journal platforms that adapt to
                    any discipline&apos;s unique needs.
                </p>
                <p className="text-muted-foreground mb-4">
                    Our mission is to democratize academic publishing by providing
                    cutting-edge tools that make scholarly communication more accessible,
                    efficient, and impactful.
                </p>
                <Link href="/about" className="text-primary hover:underline">
                    Learn More
                </Link>
            </section>

            {/* Journal Metrics */}
            <section className="bg-card p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-6">Platform Metrics</h2>
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-muted-foreground">Active Templates</span>
                            <span className="font-bold">50+</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full">
                            <div className="h-full w-[85%] bg-primary rounded-full"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-muted-foreground">User Satisfaction</span>
                            <span className="font-bold">96%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full">
                            <div className="h-full w-[96%] bg-primary rounded-full"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-muted-foreground">Setup Time</span>
                            <span className="font-bold">2 days</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full">
                            <div className="h-full w-[30%] bg-primary rounded-full"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Focus Areas */}
            <section className="bg-card p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-6">Core Features</h2>
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <Layout className="w-5 h-5 text-primary" />
                        <span>Customizable Journal Templates</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <BookText className="w-5 h-5 text-primary" />
                        <span>Article Management System</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-primary" />
                        <span>Peer Review Workflow</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-primary" />
                        <span>Citation & Reference Tools</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Settings className="w-5 h-5 text-primary" />
                        <span>Advanced Configuration</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Workflow className="w-5 h-5 text-primary" />
                        <span>Publication Pipeline</span>
                    </div>
                </div>
            </section>

            {/* Call for Templates */}
            <section className="bg-[#0A1A2F] text-white p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Template Development</h2>
                <p className="text-gray-300 mb-4">
                    Join our template development program and help shape the future of
                    academic publishing. Submit your innovative template designs for
                    our upcoming template marketplace.
                </p>
                <Link
                    href="/template-guidelines"
                    className="inline-block bg-white text-[#0A1A2F] px-6 py-2 rounded hover:bg-gray-100"
                >
                    View Template Guidelines
                </Link>
            </section>
        </aside>
    );
};
