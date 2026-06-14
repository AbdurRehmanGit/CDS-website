import React from 'react';
import { Rocket, PhoneCall, FileSearch, CreditCard, Search, FileText, Users, Zap } from 'lucide-react';

const journeySteps = [
  {
    icon: <PhoneCall className="h-8 w-8"  />,
    title: "Reach Out",
    description: "Your inquiry starts the journey — we're ready to listen."
  },
  {
    icon: <FileSearch className="h-8 w-8" />,
    title: "Discovery Call",
    description: "A quick meeting to understand your goals and needs."
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Custom Proposal",
    description: "We share a tailored plan with timelines and cost."
  },
  {
    icon: <CreditCard className="h-8 w-8" />,
    title: "Confirmation & Invoice",
    description: "Once aligned, we send over the invoice for approval."
  },
  {
    icon: <Search className="h-8 w-8" />,
    title: "In-Depth Review",
    description: "Our team dives deep into your business and market."
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Strategic Blueprint",
    description: "We design a personalized strategy and action plan."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Onboarding Session",
    description: "You meet the team, align goals, and get started."
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Execution Begins",
    description: "Let's roll — we build, optimize, and grow together."
  }
];

const Journey: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Rocket className="h-8 w-8 text-orange-500 mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-white">
              Our Collaboration <span className="text-orange-500">Journey</span>
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A streamlined process designed to turn your vision into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {journeySteps.map((step, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-blue-800 dark:text-blue-400">
                  {step.icon}
                </div>
                <div className="ml-4 text-2xl font-bold text-blue-800 dark:text-white">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;