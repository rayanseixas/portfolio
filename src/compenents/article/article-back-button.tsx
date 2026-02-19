'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import Button from '@/src/compenents/button';

const ROUTE_LABELS: Record<string, string> = {
  '/': 'Home',
  '/craft': 'Craft',
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

/**
 * Botão padrão para artigos em /craft: volta para a página anterior (history.back).
 * Exibe o nome da página de origem (ex: "Craft" se veio de /craft).
 * Deve ser posicionado fixo à esquerda do título, alinhado ao topo.
 */
export default function ArticleBackButton() {
  const router = useRouter();
  const [label, setLabel] = useState<string>('Voltar');

  useEffect(() => {
    setLabel(formatLabel(getPreviousPageLabel()));
  }, []);

  return (
    <Button
      type="button"
      variant="ghost"
      size="md"
      iconPosition="left"
      icon={<ArrowLeft className="text-[var(--color-text-headline)]" size={20} />}
      onClick={() => router.back()}
      aria-label={`Voltar para ${label}`}
      className="fixed left-5 top-[3.75rem] z-10"
    >
      {label}
    </Button>
  );
}
