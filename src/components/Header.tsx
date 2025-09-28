import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from './images/logo.jpeg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* ---- Logo ---- */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img
                src={logo}
                alt="Nestnora logo"
                className="h-10 w-10 rounded-full object-cover border-2 border-yellow-500 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Nestnora
            </span>
          </Link>

          {/* ---- Desktop Nav ---- */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-300 hover:text-yellow-500 transition-colors">Services</a>
            <a href="#about" className="text-gray-300 hover:text-yellow-500 transition-colors">About</a>
            <a href="#case-studies" className="text-gray-300 hover:text-yellow-500 transition-colors">Case Studies</a>
            <a href="#team" className="text-gray-300 hover:text-yellow-500 transition-colors">Team</a>
            <a href="#faq" className="text-gray-300 hover:text-yellow-500 transition-colors">FAQ</a>
          </nav>

          {/* ---- Desktop CTA ---- */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/book-a-call"
              className="px-6 py-2.5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/20"
            >
              Book a Call
            </Link>
          </div>

          {/* ---- Mobile Menu Button ---- */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ---- Mobile Nav ---- */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4 pt-4">
              <a href="#services" className="text-gray-300 hover:text-yellow-500 transition-colors">Services</a>
              <a href="#about" className="text-gray-300 hover:text-yellow-500 transition-colors">About</a>
              <a href="#case-studies" className="text-gray-300 hover:text-yellow-500 transition-colors">Case Studies</a>
              <a href="#team" className="text-gray-300 hover:text-yellow-500 transition-colors">Team</a>
              <a href="#faq" className="text-gray-300 hover:text-yellow-500 transition-colors">FAQ</a>
              <Link 
                to="/book-a-call"
                className="px-6 py-2.5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 inline-block text-center"
              >
                Book a Call
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
