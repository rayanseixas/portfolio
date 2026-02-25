'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CornerUpLeftIcon } from '../icons/corner-up-left';

const ROUTE_LABELS: Record<string, string> = {
  '/': 'Home',
  '/cases': 'Cases',
  '/contato': 'Contato',
  '/sobre': 'Sobre',
};

function getPreviousPageLabel(): string {
  if (typeof document === 'undefined') return 'Voltar';
  try {
    const url = new URL(document.referrer || '');
    if (url.origin !== window.location.origin) return 'Voltar';
    const path = url.pathname.replace(/\/$/, '') || '/';
    return ROUTE_LABELS[path] ?? path.slice(1).split('/')[0]?.replace(/-/g, ' ') ?? 'Voltar';
  } catch {
    return 'Voltar';
  }
}

function formatLabel(raw: string): string {
  return raw.charAt(0).toUpperCase() + raw.slice(1).toLowerCase();
}

export default function ArticleBackButton() {
  const router = useRouter();
  const [label, setLabel] = useState<string>('Voltar');

  useEffect(() => {
    setLabel(formatLabel(getPreviousPageLabel()));
  }, []);

  return (
    <button
      type="button"
      onClick={() => router.back()}
      aria-label={`Voltar para ${label}`}
      className="fixed left-6 top-6 z-10 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm font-medium text-foreground shadow-sm backdrop-blur"
    >
      <CornerUpLeftIcon className="text-(--color-text-headline)" size={20} />
      <span>{label}</span>
    </button>
  );
}
