import React, { useEffect, useState } from 'react';
import { ArrowRight, Video, PenTool, Code, Palette } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateIconPosition = (basePosition: number) => {
    const offset = scrollY * 0.5;
    const spread = Math.min(offset, 300);
    return basePosition + spread;
  };

  const AnimatedServicesContainer = () => (
    <div className="w-full mb-8">
      <div className="relative w-full h-[200px] bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-20 bg-pattern"></div>

        <div className="absolute bottom-4 left-4 bg-blue-50 dark:bg-gray-800 p-3 rounded-xl shadow-lg animate-float">
          <img 
            src="https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png" 
            alt="Meta" 
            className="h-8 w-12 object-contain" 
          />
          <span className="text-xs font-medium text-gray-800 dark:text-white">Ads</span>
        </div>

        <div className="absolute bottom-4 right-4 bg-blue-50 dark:bg-gray-800 p-3 rounded-xl shadow-lg animate-float-slow">
          <img src="https://sf-tb-sg.ibytedtos.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png" alt="TikTok" className="h-8 w-8" />
          <span className="text-xs font-medium text-gray-800 dark:text-white">TikTok Ads</span>
        </div>

        <div className="absolute top-4 right-4 bg-blue-50 dark:bg-gray-800 p-3 rounded-xl shadow-lg animate-float-medium">
          <Code className="h-8 w-8 text-purple-600 dark:text-purple-400" />
          <span className="text-xs font-medium text-gray-800 dark:text-white">Web Dev</span>
        </div>
        
        <div className="absolute top-4 left-4 bg-blue-50 dark:bg-gray-800 p-3 rounded-xl shadow-lg animate-float-slow">
          <Video className="h-8 w-8 text-blue-800 dark:text-blue-400" />
          <span className="text-xs font-medium text-gray-800 dark:text-white">Video Editing</span>
        </div>   
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-50 dark:bg-gray-800 p-3 rounded-xl shadow-lg animate-float-medium">
          <PenTool className="h-8 w-8 text-green-600 dark:text-green-400" />
          <span className="text-xs font-medium text-gray-800 dark:text-white">Graphic Designing</span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <div className="block md:hidden">
              <AnimatedServicesContainer />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-800 dark:text-white leading-tight mb-6">
              Where Others Fail, <span className="text-orange-500">We Scale</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              Professional <span className="text-orange-500">meta ad management, TikTok ad management, website development, video editing, branding and graphic design</span> services that help your brand stand out in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="btn-primary group text-center">
                Explore Services
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#portfolio" className="btn-secondary text-center">
                View Our Work
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 relative hidden md:block">
            <div className="relative w-full h-[400px] bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-20 bg-pattern"></div>
              
              <div 
                className="absolute transition-all duration-300 bg-blue-50 dark:bg-gray-800 p-4 rounded-2xl shadow-lg animate-float-slow"
                style={{ 
                  top: '25%',
                  left: `${calculateIconPosition(25)}px`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <Video className="h-12 w-12 text-blue-800 dark:text-blue-400" />
                <span className="block mt-2 text-sm font-semibold text-gray-800 dark:text-white">Video Editing</span>
              </div>
              
              <div 
                className="absolute transition-all duration-300 bg-blue-50 dark:bg-gray-800 p-4 rounded-2xl shadow-lg animate-float-medium"
                style={{ 
                  top: '25%',
                  right: `${calculateIconPosition(25)}px`,
                  transform: 'translate(50%, -50%)'
                }}
              >
                <Code className="h-12 w-12 text-purple-600 dark:text-purple-400" />
                <span className="block mt-2 text-sm font-semibold text-gray-800 dark:text-white">Web Development</span>
              </div>
              
              <div 
                className="absolute transition-all duration-300 bg-blue-50 dark:bg-gray-800 p-4 rounded-2xl shadow-lg animate-float"
                style={{ 
                  top: '66%',
                  left: `${calculateIconPosition(25)}px`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <img 
                  src="https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png" 
                  alt="Meta" 
                  className="h-12 w-20 object-contain" 
                />
                <span className="block mt-2 text-sm font-semibold text-gray-800 dark:text-white">Ads</span>
              </div>

              <div 
                className="absolute transition-all duration-300 bg-blue-50 dark:bg-gray-800 p-4 rounded-2xl shadow-lg animate-float-slow"
                style={{ 
                  bottom: '25%',
                  right: `${calculateIconPosition(25)}px`,
                  transform: 'translate(50%, 50%)'
                }}
              >
                <img src="https://sf-tb-sg.ibytedtos.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png" alt="TikTok" className="h-12 w-12" />
                <span className="block mt-2 text-sm font-semibold text-gray-800 dark:text-white">TikTok Ads</span>
              </div>

              <div 
                className="absolute transition-all duration-300 bg-blue-50 dark:bg-gray-800 p-4 rounded-2xl shadow-lg animate-float-medium"
                style={{ 
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <PenTool className="h-12 w-12 text-green-600 dark:text-green-400" />
                <span className="block mt-2 text-sm font-semibold text-gray-800 dark:text-white">Graphic Design</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center mt-16 gap-4 sm:gap-8">
          <div className="flex flex-col items-center px-6 sm:px-8 py-4 bg-blue-50 dark:bg-gray-800 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 dark:text-white">200+</h3>
            <p className="text-gray-600 dark:text-gray-300">Happy Clients</p>
          </div>
          <div className="flex flex-col items-center px-6 sm:px-8 py-4 bg-blue-50 dark:bg-gray-800 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 dark:text-white">500+</h3>
            <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
          </div>
          <div className="flex flex-col items-center px-6 sm:px-8 py-4 bg-blue-50 dark:bg-gray-800 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 dark:text-white">5+</h3>
            <p className="text-gray-600 dark:text-gray-300">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;