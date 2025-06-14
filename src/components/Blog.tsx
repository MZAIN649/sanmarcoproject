import React from 'react';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    title: 'Why Murree Real Estate is Booming',
    excerpt: "Discover the key factors driving Murree's real estate market growth and why it's the perfect time to invest.",
    date: 'March 15, 2024',
    readTime: '5 min read',
    imageUrl: '/images/blog/murree-real-estate.jpg',
    slug: 'why-murree-real-estate-is-booming'
  },
  {
    title: 'Top 5 Reasons to Invest in Tourism Land',
    excerpt: 'Learn why tourism-focused land investments offer superior returns and long-term value appreciation.',
    date: 'March 10, 2024',
    readTime: '4 min read',
    imageUrl: '/images/blog/tourism-investment.jpg',
    slug: 'top-5-reasons-to-invest-in-tourism-land'
  },
  {
    title: 'Rental Yield of Cottage Homes in Pakistan',
    excerpt: "An in-depth analysis of rental returns from cottage properties in Pakistan's hill stations.",
    date: 'March 5, 2024',
    readTime: '6 min read',
    imageUrl: '/images/blog/rental-yield.jpg',
    slug: 'rental-yield-of-cottage-homes'
  }
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Insights</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3">
                  <a
                    href={`/blog/${post.slug}`}
                    className="text-gray-900 hover:text-blue-600 transition-colors duration-300"
                  >
                    {post.title}
                  </a>
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                <a
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="/blog"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog; 