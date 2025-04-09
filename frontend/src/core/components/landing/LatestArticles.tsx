'use client';

import Link from 'next/link';

export const LatestArticles = () => {
    const articles = [
        {
            type: 'ORIGINAL RESEARCH',
            title: 'Digital-First Publishing: Impact on Academic Citation Patterns',
            authors: 'Emily Chen, Robert Williams, et al.',
            description:
                'An analysis of how digital-first publishing platforms have influenced citation patterns and academic impact metrics, showing a 45% increase in cross-disciplinary citations for digitally-native publications.',
            date: '15 March 2024',
            link: '/article/2',
        },
        {
            type: 'REVIEW ARTICLE',
            title: 'The Evolution of Peer Review in the Digital Age',
            authors: 'Marcus Thompson, Sarah Lee, et al.',
            description:
                'A comprehensive review of how digital platforms have transformed the peer review process, highlighting innovations in open peer review and collaborative assessment methods.',
            date: '1 March 2024',
            link: '/article/3',
        },
        {
            type: 'RESEARCH BRIEF',
            title: 'Accessibility in Digital Academic Publishing',
            authors: 'Diana Martinez, James Chen, et al.',
            description:
                'This study examines the implementation of accessibility standards in digital academic journals, demonstrating how modern platforms can enhance content accessibility for diverse user groups.',
            date: '20 February 2024',
            link: '/article/4',
        },
    ];

    return (
        <section className="py-8">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Latest Articles</h2>
                <div className="flex gap-4">
                    <button className="text-sm hover:text-primary">Latest</button>
                    <button className="text-sm text-muted-foreground hover:text-primary">
                        Most Read
                    </button>
                    <button className="text-sm text-muted-foreground hover:text-primary">
                        Most Cited
                    </button>
                </div>
            </div>
            <div className="space-y-8">
                {articles.map((article, index) => (
                    <article key={index} className="border-b pb-8">
                        <div className="text-sm text-muted-foreground mb-2">{article.type}</div>
                        <h3 className="text-xl font-semibold mb-2">
                            <Link href={article.link} className="hover:text-primary">
                                {article.title}
                            </Link>
                        </h3>
                        <div className="text-sm text-muted-foreground mb-3">{article.authors}</div>
                        <p className="text-muted-foreground mb-4">{article.description}</p>
                        <div className="flex items-center gap-4">
                            <div className="text-sm text-muted-foreground">
                                Published: {article.date}
                            </div>
                            <Link
                                href={`${article.link}/abstract`}
                                className="text-sm text-primary hover:underline"
                            >
                                Abstract →
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
            <div className="mt-8 text-center">
                <Link
                    href="/articles"
                    className="inline-block border px-6 py-2 rounded hover:bg-muted"
                >
                    View All Articles
                </Link>
            </div>
        </section>
    );
};
