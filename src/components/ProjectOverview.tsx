import React from 'react';
import { Shield, Award, Users, TrendingUp } from 'lucide-react';

const ProjectOverview = () => {
  const highlights = [
    {
      icon: Shield,
      title: 'Fully Legal & Approved',
      description: 'All NOCs and approvals from relevant authorities'
    },
    {
      icon: Award,
      title: 'Premium Location',
      description: 'Direct access to Murree Expressway'
    },
    {
      icon: Users,
      title: 'Tourism Ready',
      description: 'Designed for short-stay and rental income'
    },
    {
      icon: TrendingUp,
      title: 'High ROI',
      description: 'Excellent appreciation and rental potential'
    }
  ];

  return (
    <section id="project" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Sanmarco Murree Cottages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A premium residential project offering 6 Marla cottages in the heart of Murree, 
            strategically located on the Expressway for maximum accessibility and tourism potential.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Your Gateway to Mountain Living
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Sanmarco Murree Cottages represents a unique opportunity to own a piece of Pakistan's 
              most beloved hill station. Located on the newly constructed Murree Expressway, our 
              cottages offer unparalleled access to both the natural beauty of Murree and the 
              urban conveniences of Islamabad.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Each 6 Marla cottage is thoughtfully designed to maximize both comfort and investment 
              potential, featuring modern amenities, stunning mountain views, and easy access to 
              Murree's top tourist attractions.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">2025</div>
                <div className="text-sm text-gray-600">Expected Completion</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-1">50+</div>
                <div className="text-sm text-gray-600">Premium Cottages</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
              alt="Mountain cottage"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-gray-900 mb-1">42 Lac*</div>
              <div className="text-sm text-gray-600">Starting Price</div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <highlight.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                {highlight.title}
              </h4>
              <p className="text-gray-600">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;