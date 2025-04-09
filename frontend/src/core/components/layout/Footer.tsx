'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-background border-t">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* MJS Info */}
                    <div>
                        <h3 className="font-bold mb-4">MJS Journal</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Modern Journal Systems
                            <br />
                            Template-Based Academic Publishing
                        </p>
                        <p className="text-sm text-muted-foreground">ISSN: 2345-XXXX</p>
                    </div>

                    {/* For Authors */}
                    <div>
                        <h3 className="font-bold mb-4">For Authors</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/submit-manuscript"
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    Submit Manuscript
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/author-guidelines"
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    Author Guidelines
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/publication-ethics"
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    Publication Ethics
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/publication-fees"
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    Publication Fees
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Journal Info */}
                    <div>
                        <h3 className="font-bold mb-4">Journal Info</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    About the Journal
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/editorial-board"
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    Editorial Board
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/indexing"
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    Indexing & Impact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="font-bold mb-4">Connect</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Stay updated with the latest research and journal news
                        </p>
                        <div className="space-y-3">
                            <Link
                                href="/alerts"
                                className="inline-block w-full text-center bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90"
                            >
                                Subscribe to Alerts
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-block w-full text-center border px-4 py-2 rounded hover:bg-muted"
                            >
                                Contact Editorial Office
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} MJS Journal. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
