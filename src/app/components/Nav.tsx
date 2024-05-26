import Image from 'next/image';
import React from 'react';

interface NavProps {
  items: string[];
}

const Nav: React.FC<NavProps> = ({ items }) => {
  return (
    <nav>
      <ul className="flex md:gap-4 text-[#383838] font-semibold items-center">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        <button className="bg-blue-600 px-6 py-2 text-white rounded-md">New</button>
        <Image src="/logocrema.png" height={40} width={40} alt={'logo'} />
      </ul>
    </nav>
  );
};

export default Nav;
