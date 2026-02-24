import Link from 'next/link';

import { ArticleHeading } from './article-heading';
import ArticleText from './article-text';

type ArticleNavCardProps = {
  href: string;
  label?: string;
  title: string;
  description?: string;
  hierarchy?: 'h2' | 'h3';
};

export default function ArticleNavCard({
  href,
  label,
  title,
  description,
  hierarchy = 'h2',
}: ArticleNavCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-default)] px-[var(--spacing-inner-lg)] py-[var(--spacing-inner-md)] transition-transform transition-colors duration-200 hover:-translate-y-1 hover:border-[var(--color-border-active)] hover:bg-[var(--color-surface-subtle-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface-default)] focus-visible:ring-[var(--color-border-active)]"
    >
      {label ? (
        <ArticleHeading
          variant="eyebrow"
          size="sm"
          hierarchy="h3"
          className="text-text-body"
        >
          {label}
        </ArticleHeading>
      ) : null}

      <ArticleHeading
        variant="section"
        size="sm"
        hierarchy={hierarchy}
        className="group-hover:text-text-headline"
      >
        {title}
      </ArticleHeading>

      {description ? (
        <ArticleText>{description}</ArticleText>
      ) : null}
    </Link>
  );
}

