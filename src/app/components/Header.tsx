import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="text-2xl font-bold">
          Pizza Delight
        </Link>
        <ul className="flex space-x-4">
          <li ><Link className='hover:text-yellow-400' href="/">Home</Link></li>
          <li><Link className='hover:text-yellow-400' href="/about-us">About Us</Link></li>
          <li><Link className='hover:text-yellow-400' href="/flavours">Flavours</Link></li>
          <li><Link className='hover:text-yellow-400' href="/contact-us">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
