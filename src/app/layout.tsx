import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Novo projeto de portfólio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
