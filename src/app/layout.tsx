import './globals.css';
import { Inter, Architects_Daughter } from 'next/font/google'
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

const secondary = Architects_Daughter({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-secondary',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`min-h-screen bg-background text-foreground antialiased ${primary.variable} ${secondary.variable}`}>
        {children}
      </body>
    </html>
  );
}
