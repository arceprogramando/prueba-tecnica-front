import Image from 'next/image';
import Nav from './Nav';

const Header = () => {
  const navItems = ['Dashboard', 'Orders', 'Inventory', 'Vehicles', 'Drivers'];
  return (
      <header className="flex items-center justify-between max-w-5xl mx-auto my-2">
        <div className="flex md:gap-4 p-2">
          <Image src="/logo.png" height={16} width={16} alt={'logo'} />
          <h1 className="flex font-bold">Gas Delivery</h1>
        </div>
        <Nav items={navItems} />
      </header>
  );
};

export default Header;
