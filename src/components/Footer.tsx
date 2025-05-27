
import React from 'react';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Benefarm Fresh Exporters</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With over 20 years of excellence in agriculture and commitment to food-safety, 
              we manage and control all stages of fruits and vegetables production by implementing 
              good agronomic practices and integrated pest management (IPM).
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-green-400 mr-3" />
                <span className="text-gray-300">+254 722-875-532</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-green-400 mr-3" />
                <span className="text-gray-300">benefresh5@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 text-green-400 mr-3" />
                <span className="text-gray-300">benefarmexporters.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-green-400 mr-3" />
                <span className="text-gray-300">Kenya, East Africa</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-green-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-green-400 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#global-reach" className="text-gray-300 hover:text-green-400 transition-colors">
                  Global Reach
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Our Markets */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Markets</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">Asia</span>
              </li>
              <li>
                <span className="text-gray-300">Middle East</span>
              </li>
              <li>
                <span className="text-gray-300">Europe</span>
              </li>
            </ul>
            
            <h4 className="text-lg font-semibold mb-4 mt-8">Our Products</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">Premium Avocados</span>
              </li>
              <li>
                <span className="text-gray-300">Sweet Mangoes</span>
              </li>
              <li>
                <span className="text-gray-300">Fresh Herbs</span>
              </li>
              <li>
                <span className="text-gray-300">Other Horticulture</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            Copyright © Benefarm Fresh Exporters 2024. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
