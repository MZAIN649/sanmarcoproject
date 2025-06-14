import React, { useState } from 'react';
import { Bed, Bath, Square, Star, Eye, Heart } from 'lucide-react';
import { cottages } from '../data/cottages';

const CottageDetails = () => {
  const [selectedCottage, setSelectedCottage] = useState(cottages[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <section id="cottages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cottage Designs & Layouts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thoughtfully designed 6 Marla cottages with modern amenities, 
            stunning views, and premium finishes for your comfort and investment.
          </p>
        </div>

        {/* Cottage Selection */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-lg p-2">
            {cottages.map((cottage) => (
              <button
                key={cottage.id}
                onClick={() => {
                  setSelectedCottage(cottage);
                  setCurrentImageIndex(0);
                }}
                className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  selectedCottage.id === cottage.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {cottage.title}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            {/* Main Image */}
            <div className="relative mb-4">
              <img
                src={selectedCottage.images[currentImageIndex]}
                alt={selectedCottage.title}
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
                <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                  <Eye className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                <span className="text-sm font-medium text-gray-900">
                  {currentImageIndex + 1} / {selectedCottage.images.length}
                </span>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-2">
              {selectedCottage.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-square rounded-lg overflow-hidden ${
                    currentImageIndex === index ? 'ring-2 ring-blue-600' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`${selectedCottage.title} ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {selectedCottage.title}
              </h3>
              <div className="flex items-center space-x-4 text-gray-600 mb-4">
                <div className="flex items-center">
                  <Square className="w-5 h-5 mr-1" />
                  {selectedCottage.size}
                </div>
                <div className="flex items-center">
                  <Bed className="w-5 h-5 mr-1" />
                  {selectedCottage.bedrooms} Bedrooms
                </div>
                <div className="flex items-center">
                  <Bath className="w-5 h-5 mr-1" />
                  {selectedCottage.bathrooms} Bathrooms
                </div>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-6">
                PKR {selectedCottage.price.toLocaleString()}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Features</h4>
              <div className="grid grid-cols-2 gap-3">
                {selectedCottage.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floor Plan */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Floor Plan</h4>
              <div className="bg-gray-100 rounded-lg p-4">
                <img
                  src={selectedCottage.floorPlan}
                  alt="Floor plan"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Book This Cottage
              </button>
              <button className="flex-1 border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
                Download Floor Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CottageDetails;