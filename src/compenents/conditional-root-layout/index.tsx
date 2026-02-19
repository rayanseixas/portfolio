'use client';

import { usePathname } from 'next/navigation';

import ClientLayout from '../client-layout';
import Footer from '../footer';
import PageIndicator from '../page-indicator';

function isCleanArticleRoute(pathname: string): boolean {
  // /craft/artigo-01, /craft/nome-do-arquivo, etc. (um segmento após /craft/)
  const match = pathname.match(/^\/craft\/[^/]+$/);
  return Boolean(match);
}

export default function ConditionalRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isClean = isCleanArticleRoute(pathname ?? '');

  if (isClean) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        {children}
      </div>
    );
  }

  return (
    <>
      <main className="border-border flex h-full w-full flex-col border">
        <ClientLayout />
        <PageIndicator />
        <section className="overflow-auto">{children}</section>
      </main>
      <Footer />
    </>
  );
}
