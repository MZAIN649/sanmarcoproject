import React from 'react';

interface ProgressItem {
  date: string;
  title: string;
  description: string;
  imageUrl: string;
}

const progressItems: ProgressItem[] = [
  {
    date: 'March 2024',
    title: 'Site Development Phase 1',
    description: 'Initial land clearing and road construction completed',
    imageUrl: '/images/progress/phase1.jpg'
  },
  {
    date: 'April 2024',
    title: 'Infrastructure Development',
    description: 'Water and electricity infrastructure installation in progress',
    imageUrl: '/images/progress/phase2.jpg'
  },
  // Add more progress items as needed
];

const SiteProgress: React.FC = () => {
  return (
    <section id="site-progress" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Site Progress</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>
            
            {/* Progress items */}
            {progressItems.map((item, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'ml-auto' : 'mr-auto'
                } w-1/2`}
              >
                <div className={`p-6 bg-white rounded-lg shadow-lg ${
                  index % 2 === 0 ? 'ml-8' : 'mr-8'
                }`}>
                  <div className="text-sm text-blue-600 font-semibold mb-2">
                    {item.date}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="rounded-lg object-cover w-full h-48"
                    />
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Google Maps Integration */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-6">Location</h3>
          <div className="h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.915292735!2d73.3789!3d33.6847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQxJzA0LjkiTiA3M8KwMjInNDQuMSJF!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteProgress; 