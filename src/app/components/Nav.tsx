import React from 'react';

interface NavProps {
  items: string[];
}

const Nav: React.FC<NavProps> = ({ items }) => {
  return (
    <nav>
      <ul className="flex md:gap-4">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
