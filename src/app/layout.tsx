import type {Metadata, Viewport} from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import { AuthProvider } from '@/components/auth-provider';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'TestOpos - Tests de Oposiciones con IA',
  description: 'Genera tests para oposiciones usando IA',
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={cn("antialiased", fontSans.variable)}>
        <AuthProvider>
          {children}
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
