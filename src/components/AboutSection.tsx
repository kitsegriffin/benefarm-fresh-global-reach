
import React from 'react';
import { Target, Eye, Users, Globe } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Benefarm Fresh Exporters</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bridging the gap between Kenyan farmers and global consumers with excellence, 
            sustainability, and innovation at our core.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 rounded-full p-3 mr-4">
                <Target className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              To deliver the finest Kenyan fresh produce to global markets by upholding 
              the highest standards of quality, fostering sustainable farming practices, 
              and building lasting partnerships with our clients.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-yellow-100 rounded-full p-3 mr-4">
                <Eye className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              To be the premier exporter of Kenyan fresh produce, recognized globally 
              for our commitment to quality, sustainability, and innovation in 
              agricultural excellence.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-green-700 rounded-2xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Values</h3>
            <p className="text-green-100 text-lg">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-600 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Excellence</h4>
              <p className="text-green-100">
                We maintain the highest standards in everything we do, from farm to table.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Leaf className="h-10 w-10" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Sustainability</h4>
              <p className="text-green-100">
                Environmental stewardship and sustainable farming practices are our priority.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-10 w-10" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Innovation</h4>
              <p className="text-green-100">
                We continuously innovate to improve quality and efficiency in our operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
