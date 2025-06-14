import React from 'react';
import { MapPin, Clock, Car, Mountain } from 'lucide-react';

const Location = () => {
  const distances = [
    { place: 'Islamabad', time: '45 min', distance: '60 km', icon: Car },
    { place: 'Murree Mall Road', time: '15 min', distance: '12 km', icon: MapPin },
    { place: 'Patriata Chair Lift', time: '20 min', distance: '18 km', icon: Mountain },
    { place: 'Ayubia National Park', time: '35 min', distance: '25 km', icon: Mountain }
  ];

  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Prime Location on Murree Expressway
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategically positioned for maximum accessibility and tourism potential, 
            with easy access to major attractions and urban centers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Map Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
                alt="Location map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                  <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">Sanmarco Cottages</div>
                  <div className="text-sm text-gray-600">Murree Expressway</div>
                </div>
              </div>
            </div>
          </div>

          {/* Distance Information */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Perfectly Connected
            </h3>
            <div className="space-y-6">
              {distances.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{item.place}</div>
                    <div className="text-sm text-gray-600">{item.distance}</div>
                  </div>
                  <div className="flex items-center text-blue-600 font-medium">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.time}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-white">
              <h4 className="text-xl font-bold mb-2">Location Advantages</h4>
              <ul className="space-y-2 text-blue-100">
                <li>• Direct Expressway access for year-round connectivity</li>
                <li>• Close to major tourist attractions</li>
                <li>• Easy access for weekend getaways</li>
                <li>• High rental demand from tourists</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want to Visit the Location?
          </h3>
          <p className="text-gray-600 mb-6">
            Schedule a site visit to experience the location firsthand and see the development progress.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
            Schedule Site Visit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Location;