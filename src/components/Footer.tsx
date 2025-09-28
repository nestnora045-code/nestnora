import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from 'lucide-react';
import logo from './images/logo.jpeg'; // <-- your custom logo image

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <img
                src={logo}
                alt="Nestnora logo"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-yellow-500 group-hover:ring-yellow-400 transition duration-300"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Nestnora
              </span>
            </Link>

            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Specialized Pinterest advertising and email marketing agency helping e-commerce brands achieve extraordinary growth through data-driven strategies.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-gray-800 hover:bg-yellow-500/20 rounded-lg transition-colors group">
                <Twitter className="h-5 w-5 text-gray-400 group-hover:text-yellow-500" />
              </a>
              <a href="#" className="p-3 bg-gray-800 hover:bg-yellow-500/20 rounded-lg transition-colors group">
                <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-yellow-500" />
              </a>
              <a href="#" className="p-3 bg-gray-800 hover:bg-yellow-500/20 rounded-lg transition-colors group">
                <Instagram className="h-5 w-5 text-gray-400 group-hover:text-yellow-500" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-yellow-500 transition-colors">Pinterest Advertising</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-yellow-500 transition-colors">Email Marketing</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-yellow-500 transition-colors">Analytics & Optimization</a></li>
              <li><a href="#case-studies" className="text-gray-400 hover:text-yellow-500 transition-colors">Case Studies</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-400">nestnora45@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-400">+998-33-015-08-88</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-400">Uzbekistan</span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/book-a-call"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300"
              >
                Partner with Us
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Nestnora. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
