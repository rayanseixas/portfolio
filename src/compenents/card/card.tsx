import Link from "next/link";

type CardProps = {

  href: string;
}

export default function Card({  href }: CardProps) {
  return (
    <Link href={href} className="flex flex-1 h-48 bg-surface-subtle-active p-4 min-w-[280px] rounded-sm">
     
    </Link>
  );
}