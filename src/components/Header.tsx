import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-orange-400">DOTLES</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-orange-400 transition-colors duration-200">
              About Us
            </a>
            <a href="#services" className="hover:text-orange-400 transition-colors duration-200">
              Services
            </a>
            <a href="#team" className="hover:text-orange-400 transition-colors duration-200">
              Our Team
            </a>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-orange-400 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-800 rounded-lg mt-2">
              <a href="#about" className="block px-3 py-2 hover:text-orange-400 transition-colors duration-200">
                About Us
              </a>
              <a href="#services" className="block px-3 py-2 hover:text-orange-400 transition-colors duration-200">
                Services
              </a>
              <a href="#team" className="block px-3 py-2 hover:text-orange-400 transition-colors duration-200">
                Our Team
              </a>
              <button className="w-full text-left bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-lg font-semibold transition-all duration-200 mt-2">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;