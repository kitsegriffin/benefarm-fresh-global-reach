
import React from 'react';
import { MapPin, Truck, Clock, Shield } from 'lucide-react';

const GlobalReachSection = () => {
  const regions = [
    {
      name: 'Asia',
      description: 'Serving major markets across Asia with reliable supply chains',
      countries: ['Singapore', 'Malaysia', 'Thailand', 'Philippines'],
      color: 'bg-blue-500'
    },
    {
      name: 'Middle East',
      description: 'Premium produce delivery to Middle Eastern markets',
      countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait'],
      color: 'bg-orange-500'
    },
    {
      name: 'Europe',
      description: 'Fresh Kenyan produce to European tables with excellence',
      countries: ['Germany', 'Netherlands', 'France', 'United Kingdom'],
      color: 'bg-green-500'
    }
  ];

  return (
    <section id="global-reach" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Global Reach</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With a robust logistics network, we efficiently deliver fresh produce to clients across 
            Asia, Middle East, and Europe. Our strategic partnerships enable us to meet diverse 
            customer needs promptly.
          </p>
        </div>

        {/* Regions */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {regions.map((region, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`${region.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto`}>
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">{region.name}</h3>
              <p className="text-gray-600 text-center mb-6">{region.description}</p>
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 mb-2">Key Markets:</h4>
                <div className="flex flex-wrap gap-2">
                  {region.countries.map((country, countryIndex) => (
                    <span
                      key={countryIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logistics Features */}
        <div className="bg-white rounded-2xl p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Logistics Network</h3>
            <p className="text-gray-600 text-lg">Strategic partnerships and international market expertise</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Truck className="h-10 w-10 text-green-700" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Fast Delivery</h4>
              <p className="text-gray-600">
                Efficient cold-chain logistics ensuring freshness from farm to destination.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-10 w-10 text-blue-700" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Timely Supply</h4>
              <p className="text-gray-600">
                Reliable scheduling and on-time delivery to meet your business needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-10 w-10 text-orange-700" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Quality Assured</h4>
              <p className="text-gray-600">
                Comprehensive quality control throughout the entire supply chain.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-10 w-10 text-purple-700" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Global Network</h4>
              <p className="text-gray-600">
                Extensive partnerships across three major continental markets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReachSection;
