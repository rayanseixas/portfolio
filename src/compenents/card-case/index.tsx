import Link from 'next/link';

import { ArrowRightIcon } from '../icons/arrow-right';

type CardCaseProps = {
  link: string;
};

export default function CardCase({ link }: CardCaseProps) {
  return (
    <Link
      href={link}
      className="min-w-[280px] flex-1 text-teal-50 hover:cursor-pointer lg:max-w-[603px]"
    >
      <div className="mb-4 flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-text-headline font-primary text-md font-medium">
            01. 02. 26
          </h2>
          <p className="text-text-body font-primary text-sm">
            Lorem ipsum dolor sit amet consectetur. lorem ipsum
          </p>
        </div>
        <ArrowRightIcon size={12} />
      </div>
      <div className="bg-surface-subtle-active hover:border-border h-56 rounded-xs hover:border" />
    </Link>
  );
}
