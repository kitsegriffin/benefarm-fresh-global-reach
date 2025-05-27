
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-green-700">Benefarm</h1>
            <p className="text-xs text-gray-600 -mt-1">Fresh Exporters</p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-green-700 hover:text-green-800 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-green-700 px-3 py-2 text-sm font-medium transition-colors">
                About Us
              </a>
              <a href="#products" className="text-gray-700 hover:text-green-700 px-3 py-2 text-sm font-medium transition-colors">
                Products
              </a>
              <a href="#global-reach" className="text-gray-700 hover:text-green-700 px-3 py-2 text-sm font-medium transition-colors">
                Global Reach
              </a>
              <a href="#contact" className="text-gray-700 hover:text-green-700 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-green-700 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-green-800 transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-700 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="text-green-700 block px-3 py-2 text-base font-medium">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-green-700 block px-3 py-2 text-base font-medium">
                About Us
              </a>
              <a href="#products" className="text-gray-700 hover:text-green-700 block px-3 py-2 text-base font-medium">
                Products
              </a>
              <a href="#global-reach" className="text-gray-700 hover:text-green-700 block px-3 py-2 text-base font-medium">
                Global Reach
              </a>
              <a href="#contact" className="text-gray-700 hover:text-green-700 block px-3 py-2 text-base font-medium">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
