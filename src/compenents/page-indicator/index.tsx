'use client';
import { usePathname } from 'next/navigation';

export default function PageIndicator() {
  const pathname = usePathname();

  const segments = pathname.split('/').filter(Boolean);
  const pageName =
    segments.length === 0
      ? 'Home'
      : segments[segments.length - 1].charAt(0).toUpperCase() +
        segments[segments.length - 1].slice(1);

  return (
    <div className="md:px-inner-md border-border border-b px-4 py-10">
      {/* <div className="flex items-center gap-1 text-sm text-text-body mb-2">
                <p>{pageName}</p>
                <p>/</p>
            </div> */}
      <h1 className="text-text-headline text-3xl">{pageName}</h1>
    </div>
  );
}
