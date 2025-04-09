import { ConfigProvider } from '@/core/providers/config-provider';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <ConfigProvider>{children}</ConfigProvider>
            </body>
        </html>
    );
}
