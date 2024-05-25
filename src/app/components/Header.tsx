import Image from 'next/image';
import Nav from './Nav';

const Header = () => {
  const navItems = ['Dashboard', 'Orders', 'Inventory', 'Vehicles', 'Drivers'];
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex md:gap-4 p-2">
          <Image src="/logo.png" height={16} width={16} alt={'logo'} />
          <h1 className="flex">Gas Delivery</h1>
        </div>
        <Nav items={navItems} />
      </div>
    </>
  );
};

export default Header;
