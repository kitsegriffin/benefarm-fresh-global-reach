
import React from 'react';
import { Leaf } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-green-800 to-green-900 min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 border border-white rounded-full"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="flex items-center mb-6">
              <Leaf className="h-8 w-8 text-yellow-400 mr-3" />
              <span className="text-yellow-400 font-semibold text-lg">COMPANY PROFILE</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Premium Kenyan
              <span className="text-yellow-400"> Fresh Produce</span>
              <br />
              to Global Markets
            </h1>
            
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Benefarm Fresh Exporters is a Kenyan-based horticultural export company dedicated to 
              supplying premium-quality fresh produce to international markets. With a commitment to 
              excellence, sustainability, and innovation, we bridge the gap between Kenyan farmers 
              and global consumers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="bg-yellow-400 text-green-900 px-8 py-3 rounded-md font-semibold hover:bg-yellow-300 transition-colors text-center"
              >
                Our Products
              </a>
              <a
                href="#about"
                className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-green-900 transition-colors text-center"
              >
                Learn More
              </a>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="bg-green-700 rounded-2xl p-8 transform rotate-3 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80"
                alt="Fresh produce"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-yellow-400 rounded-xl p-4 shadow-lg">
              <p className="text-green-900 font-bold text-lg">20+ Years</p>
              <p className="text-green-800 text-sm">Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
