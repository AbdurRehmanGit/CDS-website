import React from 'react';
import { Video, PenTool, Check, Code, Palette } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features, gradient }) => {
  return (
    <div className="relative group transition-all duration-300 transform hover:-translate-y-2">
      <div className={`absolute inset-0 rounded-2xl ${gradient} blur opacity-30 group-hover:opacity-70 transition-opacity`}></div>
      <div className="relative bg-blue-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg h-full">
        <div className="mb-6">{icon}</div>
        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-blue-800 to-blue-700 hover:from-blue-900 hover:to-blue-800 text-white rounded-full transition-colors"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-white mb-4">
            Our <span className="text-orange-500">Premium</span> Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We offer comprehensive digital services to help your business grow and reach its full potential online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Video className="h-12 w-12 text-blue-800 dark:text-blue-400" />}
            title="Video Editing"
            description="Professional video editing services to transform your raw footage into compelling visual stories."
            features={[
              "Professional color grading",
              "Motion graphics and effects",
              "Audio enhancement",
              "Custom transitions",
              "4K resolution support"
            ]}
            gradient="bg-gradient-to-br from-blue-500 to-blue-600"
          />

          <ServiceCard
            icon={<Code className="h-12 w-12 text-purple-600 dark:text-purple-400" />}
            title="Website Development"
            description="Fast, modern, and responsive websites optimized for performance and user experience."
            features={[
              "Lightning-fast load times",
              "SEO optimization",
              "Custom functionality",
              "Performance optimization",
              "Mobile-first design"
            ]}
            gradient="bg-gradient-to-br from-purple-500 to-indigo-500"
          />

          <ServiceCard
            icon={
              <img 
                src="https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png" 
                alt="Meta" 
                className="h-12 w-20 object-contain" 
              />
            }
            title="Meta Ads"
            description="Strategic meta advertising to reach your target audience and drive conversions."
            features={[
              "Campaign strategy and setup",
              "Audience targeting optimization",
              "Performance tracking",
              "ROI maximization",
              "Conversion optimization"
            ]}
            gradient="bg-gradient-to-br from-orange-500 to-red-500"
          />

          <ServiceCard
            icon={<img src="https://sf-tb-sg.ibytedtos.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png" alt="TikTok" className="h-12 w-12" />}
            title="TikTok Ads"
            description="Expert TikTok advertising services to reach younger audiences and drive viral engagement."
            features={[
              "Trend analysis",
              "Creative content strategy",
              "Performance optimization",
              "Engagement tracking",
              "Audience growth"
            ]}
            gradient="bg-gradient-to-br from-pink-500 to-purple-500"
          />

          <ServiceCard
            icon={<PenTool className="h-12 w-12 text-green-600 dark:text-green-400" />}
            title="Graphic Design"
            description="Eye-catching graphic design services to elevate your brand and capture attention."
            features={[
              "Social media graphics",
              "Marketing materials",
              "Website UI/UX design",
              "Print-ready designs",
              "Custom illustrations"
            ]}
            gradient="bg-gradient-to-br from-green-500 to-teal-500"
          />

          <ServiceCard
            icon={<Palette className="h-12 w-12 text-pink-600 dark:text-pink-400" />}
            title="Branding"
            description="Comprehensive branding solutions to establish a strong and memorable brand identity."
            features={[
              "Brand strategy development",
              "Logo design",
              "Brand guidelines",
              "Visual identity system",
              "Brand messaging"
            ]}
            gradient="bg-gradient-to-br from-pink-500 to-rose-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;