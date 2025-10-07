'use client';

import Link from 'next/link';
import { Logo } from '@/components/ui/logo';

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md dark:bg-gray-800">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Logo />
        </Link>
        <h1 className="text-xl font-bold">TestOpos</h1>
      </div>
    </header>
  );
}
