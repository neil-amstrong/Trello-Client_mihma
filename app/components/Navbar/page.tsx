'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Features', hasDropdown: true },
    { label: 'Solutions', hasDropdown: true },
    { label: 'Plans', hasDropdown: true },
    { label: 'Pricing' },
    { label: 'Resources', hasDropdown: true },
  ];

  return (
    <nav className=" w-full px-4 py-3 border-b bg-white text-sm font-medium  sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
             {/** <img src="/trello-icon.svg" alt="Trello" className="h-6 w-6" />  */}
       <div className="flex ml-0 sm:ml-30 lg:ml-30 flex-col leading-tight">
       <div className="text-xs font-bold text-blue-700">WorkGrid</div>
      <span className="text-2xl font-semibold text-gray-800 -mt-1">Trello</span>
      </div>
  </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative cursor-pointer"
              onMouseEnter={() => setHovered(item.label)}
              onMouseLeave={() => setHovered(null)}
            >
              <span className="flex items-center text-gray-800 hover:text-blue-700">
                {item.label}
                {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
              </span>
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/pages/login" className="text-gray-800 hover:text-blue-700">
            Log in
          </Link>
          <Link
            href="/pages/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Sign up for free
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          {navItems.map((item) => (
            <div key={item.label} className="text-gray-800">
              <div className="flex items-center justify-between">
                {item.label}
                {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </div>
            </div>
          ))}
          <div className="pt-2 border-t mt-4 space-y-2">
            <Link href="/pages/login" className="block w-full text-center text-gray-800 border px-4 py-2 rounded border-gray-400 hover:text-blue-700">
              Log in
            </Link>
            <Link
              href="/pages/signup"
              className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Sign up for free
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
