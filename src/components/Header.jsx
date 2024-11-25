import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-yellow-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-white">Siren</a>
          </div>
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-4">
            <a href="/" className="text-white hover:text-gray-300">Home</a>
            <a href="/information" className="text-white hover:text-gray-300">Information</a>
            <a href="/products" className="text-white hover:text-gray-300">Products</a>
            <a href="/privacy-policy" className="text-white hover:text-gray-300">Privacy Policy</a>
          </nav>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-yellow-500">
          <nav className="flex flex-col px-4 py-2 space-y-2">
          <a href="/" className="text-white hover:text-gray-300">Home</a>
            <a href="/information" className="text-white hover:text-gray-300">Information</a>
            <a href="/products" className="text-white hover:text-gray-300">Products</a>
            <a href="/privacy-policy" className="text-white hover:text-gray-300">Privacy Policy</a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
