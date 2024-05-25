'use client';
import clsx from 'clsx';
import Link from 'next/link';

const links = [
  { name: 'Overview', href: '/' },
  { name: 'Cylinder Stock', href: '/' },
  { name: 'Regulators', href: '/' },
  { name: 'Gas Mixes', href: '/' },
  { name: 'Pallets', href: '/' },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': link.name === 'Cylinder Stock',
              },
            )}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
