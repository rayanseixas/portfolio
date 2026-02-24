type HeadingSize = 'md' | 'sm';

type HeadingHierarchy = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingVariant = 'hero' | 'section' | 'eyebrow';

type ArticleHeadingProps = {
  /**
   * Hierarquia semântica (tag HTML).
   * Ex.: hierarchy="h1", hierarchy="h2".
   */
  hierarchy?: HeadingHierarchy;
  /**
   * Variação visual de tamanho.
   */
  size?: HeadingSize;
  /**
   * Estilo de heading de acordo com o layout do artigo.
   * - "hero": título principal do artigo
   * - "section": título de seção
   * - "eyebrow": label pequeno acima de blocos
   */
  variant?: HeadingVariant;
  children?: React.ReactNode;
  className?: string;
};

function getDefaultHierarchy(variant: HeadingVariant): HeadingHierarchy {
  if (variant === 'section') return 'h2';
  if (variant === 'eyebrow') return 'h3';
  return 'h1';
}

function buildHeadingClasses(
  variant: HeadingVariant,
  size: HeadingSize,
  extra?: string,
) {
  let baseClasses = '';
  let sizeClasses = '';

  switch (variant) {
    case 'hero':
      baseClasses = 'text--text-headline tracking-tight';
      sizeClasses =
        size === 'sm'
          ? 'text-3xl md:text-4xl'
          : 'text-4xl md:text-5xl';
      break;
    case 'section':
      baseClasses = 'text--text-headline mt-8';
      sizeClasses =
        size === 'sm'
          ? 'text-xl md:text-2xl'
          : 'text-2xl md:text-3xl';
      break;
    case 'eyebrow':
      baseClasses =
        'text--text-body uppercase tracking-[0.2em]';
      sizeClasses =
        size === 'sm'
          ? 'text-xs md:text-sm'
          : 'text-sm md:text-base';
      break;
  }

  return [baseClasses, sizeClasses, extra]
    .filter(Boolean)
    .join(' ');
}

export function ArticleHeading({
  hierarchy,
  size = 'md',
  variant = 'hero',
  children,
  className,
}: ArticleHeadingProps) {
  const Tag =
    hierarchy ?? getDefaultHierarchy(variant);

  const classes = buildHeadingClasses(
    variant,
    size,
    className,
  );

  return <Tag className={classes}>{children}</Tag>;
}


