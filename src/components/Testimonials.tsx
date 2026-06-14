import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  testimonial: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechGrowth Inc",
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    testimonial: "The video editing services provided by PixelPerfect Studio transformed our product launch. Their attention to detail and creative approach helped us achieve a 40% increase in engagement compared to our previous campaigns.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "E-commerce Owner",
    company: "Urban Styles",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    testimonial: "Their meta ad management completely revitalized our online sales. We saw a 3x ROAS within the first month. The team was responsive, professional, and truly understood our brand vision.",
    rating: 5
  },
  {
    id: 3,
    name: "Alicia Rodriguez",
    position: "Creative Director",
    company: "Horizon Media",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    testimonial: "The graphic design work exceeded our expectations. We received our brand identity package on time and the designs perfectly captured our company's values. I highly recommend their services.",
    rating: 4
  },
  {
    id: 4,
    name: "David Wilson",
    position: "CEO",
    company: "Startup Ventures",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    testimonial: "Working with this team was a game-changer for our startup. Their video content helped us secure funding by presenting our vision in a compelling way. Professional, timely, and highly skilled.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setAutoplay(false);
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-blue-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-white mb-4">
            What Our <span className="text-orange-500">Clients</span> Say
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from businesses who have transformed their digital presence with our services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-10">
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                      <div className="mb-6 md:mb-0 md:mr-8">
                        <div className="relative w-24 h-24">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-full h-full object-cover rounded-full"
                          />
                          <div className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-800 rounded-full p-1 shadow">
                            <div className="bg-blue-800 text-white rounded-full flex items-center justify-center w-8 h-8">
                              "
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < testimonial.rating
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300 dark:text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 italic mb-6">
                          "{testimonial.testimonial}"
                        </p>
                        <div>
                          <h4 className="text-xl font-bold text-blue-800 dark:text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">
                            {testimonial.position}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-blue-800 dark:text-white" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-blue-800 dark:text-white" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToTestimonial(idx)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === idx
                    ? 'bg-blue-800'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;