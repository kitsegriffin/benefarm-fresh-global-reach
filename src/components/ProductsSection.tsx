
import React from 'react';
import { ArrowDown } from 'lucide-react';

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in exporting high-quality Kenyan fresh produce, with our main focus 
            on Avocado and Mango, while maintaining capacity for other horticulture products.
          </p>
        </div>

        {/* Main Products */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Avocado */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-600 to-green-800 p-8 h-96 flex items-center justify-center">
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
              <div className="relative text-center text-white z-10">
                <div className="mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=200&q=80"
                    alt="Fresh Avocado"
                    className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-white shadow-lg"
                  />
                </div>
                <h3 className="text-3xl font-bold mb-4">Premium Avocados</h3>
                <p className="text-green-100 text-lg leading-relaxed">
                  Nutrient-rich, creamy avocados grown in Kenya's ideal climate. 
                  Perfect for international markets with extended shelf life and exceptional taste.
                </p>
              </div>
              <div className="absolute top-4 right-4 bg-yellow-400 text-green-900 px-3 py-1 rounded-full text-sm font-semibold">
                Featured
              </div>
            </div>
          </div>

          {/* Mango */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 p-8 h-96 flex items-center justify-center">
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
              <div className="relative text-center text-white z-10">
                <div className="mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=200&q=80"
                    alt="Fresh Mango"
                    className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-white shadow-lg"
                  />
                </div>
                <h3 className="text-3xl font-bold mb-4">Sweet Mangoes</h3>
                <p className="text-orange-100 text-lg leading-relaxed">
                  Tropical, sweet mangoes bursting with flavor and vitamins. 
                  Carefully selected and packed to maintain freshness during international shipping.
                </p>
              </div>
              <div className="absolute top-4 right-4 bg-yellow-400 text-orange-900 px-3 py-1 rounded-full text-sm font-semibold">
                Premium
              </div>
            </div>
          </div>
        </div>

        {/* Additional Products */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Additional Products Available</h3>
            <p className="text-gray-600">We also have capacity to farm and supply other horticulture products as required</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Fresh Herbs', icon: '🌿' },
              { name: 'Citrus Fruits', icon: '🍊' },
              { name: 'Root Vegetables', icon: '🥕' },
              { name: 'Leafy Greens', icon: '🥬' }
            ].map((product, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{product.icon}</div>
                <h4 className="font-semibold text-gray-900">{product.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="mt-16 text-center">
          <div className="bg-green-50 rounded-xl p-8 border-2 border-green-200">
            <h3 className="text-2xl font-bold text-green-900 mb-4">Quality Assurance</h3>
            <p className="text-green-800 text-lg max-w-4xl mx-auto">
              All our products undergo rigorous quality checks, from farm selection to final packaging. 
              We ensure that only the finest produce reaches our international clients, 
              maintaining the reputation of Kenyan agriculture worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
