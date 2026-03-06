import Link from 'next/link';

import { Button } from '../button';
import { DownloadIcon } from '../icons/download';

export default function Header() {
  return (
    <div className="bg-background/80 fixed top-0 right-0 left-0 z-50 flex h-14 items-center justify-between px-6 backdrop-blur">
      <div className="flex items-center gap-3">
        <Link href={'/'}>
          <p className="text-text-headline font-secondary font-medium">
            Saynex
          </p>
        </Link>
        <Button variant="subtle">
          <Link href={'/'}>Home</Link>
        </Button>
      </div>
      <Button variant="solid">
        <DownloadIcon size={20} />
        Currículo
      </Button>
    </div>
  );
}
