const links = [
  { name: 'Overview', href: '/overview' },
  {
    name: 'Cylinder Stock',
    href: '/overview',
  },
  { name: 'Regulators', href: '/overview' },
  { name: 'Gas Mixes', href: '/overview' },
  { name: 'Pallets', href: '/overview' },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <a
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })}
    </>
  );
}
