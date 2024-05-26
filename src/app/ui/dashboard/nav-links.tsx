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
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md  p-3 text-sm font-medium hover:bg-[#eeebeb] md:min-w-60 md:justify-start md:p-2 md:px-3',
              {
                'bg-[#F1F2F6] ': link.name === 'Cylinder Stock',
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
