import './globals.css';
import { Inter } from 'next/font/google'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Novo projeto de portfólio',
};

const primary = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-primary',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`min-h-screen bg-background text-foreground antialiased ${primary.className}`}>
        {children}
      </body>
    </html>
  );
}
