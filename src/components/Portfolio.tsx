import React, { useState } from 'react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Video Editing",
    category: "video",
    imageUrl: "https://media.licdn.com/dms/image/v2/D5622AQFvsE67A_8bcg/feedshare-shrink_2048_1536/B56ZaRnfLeHgAo-/0/1746199773072?e=1749081600&v=beta&t=sVMFQV6T0pUecJQNylCeXYQ1_d4N7A69nxU2vMrUbRY",
   //imageUrl: "https://images.pexels.com/photos/2977547/pexels-photo-2977547.jpeg",//
    description: "Professional corporate video with motion graphics and color grading."
  },
  {
    id: 2,
    title: "META-Ad Campaign",
    category: "ads",
    imageUrl: "https://media.licdn.com/dms/image/v2/D5622AQFULWR0AoPC8Q/feedshare-shrink_2048_1536/B56ZaRnfGpHAAs-/0/1746199770173?e=1749081600&v=beta&t=c-2IhQrMLaHZDlt256I46kRt_C4yVPJipNSS7vp0AuA ",
  //  imageUrl: "https://images.pexels.com/photos/6476264/pexels-photo-6476264.jpeg",//
    description: "Conversion-focused Facebook and Instagram ad campaign for an e-commerce brand."
  },
  {
    id: 3,
    title: "Branding",
    category: "design",
    imageUrl: "https://media.licdn.com/dms/image/v2/D5622AQHbtfjOC2XLHg/feedshare-shrink_2048_1536/B56ZaRnfH_G4As-/0/1746199772722?e=1749081600&v=beta&t=lELXt4laPulvSAUeOu-mwimyRK8RlF3AB9zLM1BmlN8",
   // imageUrl: "https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg",
    description: "Complete brand identity redesign including logo, color palette, and brand guidelines."
  },
  {
    id: 4,
    title: "Tiktok Ads",
    category: "video",
    imageUrl: "https://media.licdn.com/dms/image/v2/D5622AQG0A4pX-fevxg/feedshare-shrink_1280/B56ZaRnfH2GoAs-/0/1746199770194?e=1749081600&v=beta&t=aEcPOKoijNicZkTdHma4hqp7hU5Sy1hJ-RQLTkmoF1M",
   // imageUrl: "https://images.pexels.com/photos/7245326/pexels-photo-7245326.jpeg",
    description: "Conversion-focused tiktok ad campaign for an e-commerce brand.."
  },
  {
    id: 5,
    title: "Website Development",
    category: "ads",
    imageUrl: "https://media.licdn.com/dms/image/v2/D5622AQH7uurKkbz7iA/feedshare-shrink_1280/B56ZaRnfImHAAo-/0/1746199772438?e=1749081600&v=beta&t=msTHhm9RQkZzZa338zfVDMxWh2ETwYS_h19sylOM-74",
   // imageUrl: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
    description: "Transforming ideas into powerful, beautifully designed websites."
  },
  {
    id: 6,
    title: "Graphic Designing",
    category: "design",
    imageUrl: "https://media.licdn.com/dms/image/v2/D5622AQGyMZOYJb6qUg/feedshare-shrink_2048_1536/B56ZaRnfIgGoAw-/0/1746199770721?e=1749081600&v=beta&t=2QdSGc1MFgmzygMdo4WuTG0zc_fUi-UZKw4d42jqmeQ",
    //imageUrl: "https://images.pexels.com/photos/4088036/pexels-photo-4088036.jpeg",
    description: "Custom designs for a premium consumer product line."
  }
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const openModal = (item: PortfolioItem) => {
    setActiveItem(item);
  };

  const closeModal = () => {
    setActiveItem(null);
  };

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-white mb-4">
            Our <span className="text-orange-500">Recent</span> Work
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our portfolio of successful projects across video editing, ad management, and graphic design.
          </p>
          
          <div className="flex flex-wrap justify-center mt-8 gap-2">
            <button
              onClick={() => handleFilterChange('all')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'all' 
                  ? 'bg-blue-800 text-white' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              All Work
            </button>
            <button
              onClick={() => handleFilterChange('video')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'video' 
                  ? 'bg-blue-800 text-white' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              Video Editing
            </button>
            <button
              onClick={() => handleFilterChange('ads')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'ads' 
                  ? 'bg-blue-800 text-white' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              Meta Ads
            </button>
            <button
              onClick={() => handleFilterChange('design')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'design' 
                  ? 'bg-blue-800 text-white' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              Graphic Design
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transition-transform duration-300 hover:-translate-y-2"
              onClick={() => openModal(item)}
            >
              <div className="aspect-w-16 aspect-h-9 relative h-64">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-200 text-sm mt-2">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Portfolio Modal */}
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" onClick={closeModal}>
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={e => e.stopPropagation()}>
              <button 
                onClick={closeModal} 
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img 
                    src={activeItem.imageUrl} 
                    alt={activeItem.title} 
                    className="w-full h-auto rounded-tl-2xl rounded-bl-2xl object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{activeItem.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{activeItem.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Project Details</h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li><span className="font-medium">Category:</span> {activeItem.category === 'video' ? 'Video Editing' : activeItem.category === 'ads' ? 'Meta Ads' : 'Graphic Design'}</li>
                      <li><span className="font-medium">Client:</span> Confidential</li>
                      <li><span className="font-medium">Duration:</span> 2 weeks</li>
                    </ul>
                  </div>
                  
                  <a
                    href="#contact"
                    className="inline-block px-6 py-3 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition-colors"
                  >
                    Request Similar Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;