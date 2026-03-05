import Link from 'next/link';

type CardProps = {
  href: string;
};

export default function Card({ href }: CardProps) {
  return (
    <Link
      href={href}
      className="bg-surface-subtle-active flex h-48 min-w-[280px] flex-1 rounded-sm p-4"
    ></Link>
  );
}
