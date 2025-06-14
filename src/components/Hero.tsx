import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/murree-drone.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#2C3E36] opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your Mountain Plot Investment Awaits
            </h1>
            <p className="text-xl md:text-2xl text-[#D9C7B6] mb-8">
              Secure your dream location in Murree with our easy installment plans. 
              Build your perfect cottage when you're ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#plot-sizes"
                className="px-8 py-4 bg-[#C7603E] text-white rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 text-center"
              >
                View Plot Sizes & Plans
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-[#A1C5D1] text-[#2C3E36] rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 text-center"
              >
                Book Site Visit
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;