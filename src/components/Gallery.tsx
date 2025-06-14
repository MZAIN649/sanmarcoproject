import React, { useState } from 'react';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'exterior', name: 'Exterior' },
    { id: 'interior', name: 'Interior' },
    { id: 'construction', name: 'Construction' },
    { id: 'location', name: 'Location' }
  ];

  const galleryItems = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      category: 'exterior',
      title: 'Mountain View Cottage',
      type: 'image'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      category: 'exterior',
      title: 'Cottage Facade',
      type: 'image'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
      category: 'interior',
      title: 'Modern Living Room',
      type: 'image'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      category: 'interior',
      title: 'Designer Kitchen',
      type: 'image'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg',
      category: 'location',
      title: 'Murree Landscape',
      type: 'image'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      category: 'construction',
      title: 'Construction Progress',
      type: 'image'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      category: 'exterior',
      title: 'Virtual Tour',
      type: 'video'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      category: 'location',
      title: 'Drone Footage',
      type: 'video'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (imageSrc: string, index: number) => {
    setLightboxImage(imageSrc);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredItems.length;
    setCurrentImageIndex(nextIndex);
    setLightboxImage(filteredItems[nextIndex].src);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? filteredItems.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setLightboxImage(filteredItems[prevIndex].src);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Project Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our cottages through stunning photography, construction updates, 
            and virtual tours showcasing the beauty and quality of Sanmarco Murree Cottages.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-square bg-gray-200 rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => openLightbox(item.src, index)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                {item.type === 'video' && (
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-8 h-8 text-blue-600 ml-1" />
                  </div>
                )}
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.title}
                </h3>
              </div>

              {/* Video Badge */}
              {item.type === 'video' && (
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                  Video
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={lightboxImage}
                alt="Gallery image"
                className="max-w-full max-h-full object-contain"
              />
              
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
                {currentImageIndex + 1} / {filteredItems.length}
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want to See More?
          </h3>
          <p className="text-gray-600 mb-6">
            Schedule a virtual tour or site visit to experience our cottages in person.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Schedule Virtual Tour
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
              Book Site Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;