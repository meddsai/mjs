'use client';

import { Layout, Settings, Code, Database, Shield, Zap } from 'lucide-react';

export const Features = () => {
    const features = [
        {
            title: 'Customizable Templates',
            description:
                "Choose from a variety of professionally designed templates and customize them to match your journal's needs.",
            icon: Layout,
        },
        {
            title: 'Easy Configuration',
            description:
                'Configure your journal settings, workflows, and permissions with an intuitive interface.',
            icon: Settings,
        },
        {
            title: 'Developer Friendly',
            description:
                'Built with modern technologies and an extensible architecture for developers.',
            icon: Code,
        },
        {
            title: 'Robust Database',
            description: "Store and manage your journal's content with a powerful database system.",
            icon: Database,
        },
        {
            title: 'Secure Platform',
            description: "Enterprise-grade security to protect your journal's data and users.",
            icon: Shield,
        },
        {
            title: 'Fast Performance',
            description: 'Optimized for speed and performance to ensure a smooth experience.',
            icon: Zap,
        },
    ];

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Features</h2>
                    <p className="text-xl text-muted-foreground">
                        Everything you need to create and manage your academic journal
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
                            <div className="flex items-center mb-4">
                                <div className="bg-primary/10 p-2 rounded-lg">
                                    <feature.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold ml-4">{feature.title}</h3>
                            </div>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
