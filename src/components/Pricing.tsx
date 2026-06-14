import React from 'react';
import { Check, X } from 'lucide-react';

interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: Array<{
    text: string;
    included: boolean;
  }>;
  buttonText: string;
  popular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    title: "Basic",
    price: "$499",
    description: "Perfect for small businesses just getting started with digital content.",
    features: [
      { text: "2 Video Edits per month", included: true },
      { text: "Basic Meta Ad Setup", included: true },
      { text: "5 Social Media Graphics", included: true },
      { text: "Email Support", included: true },
      { text: "24-hour turnaround", included: false },
      { text: "Advanced Motion Graphics", included: false },
      { text: "Campaign Performance Reports", included: false },
    ],
    buttonText: "Get Started",
  },
  {
    title: "Professional",
    price: "$999",
    description: "Ideal for growing businesses with regular content needs.",
    features: [
      { text: "5 Video Edits per month", included: true },
      { text: "Complete Meta Ad Management", included: true },
      { text: "10 Social Media Graphics", included: true },
      { text: "Priority Email Support", included: true },
      { text: "48-hour turnaround", included: true },
      { text: "Basic Motion Graphics", included: true },
      { text: "Monthly Performance Reports", included: true },
    ],
    buttonText: "Get Started",
    popular: true,
  },
  {
    title: "Enterprise",
    price: "$1999",
    description: "Comprehensive solution for established businesses with extensive digital needs.",
    features: [
      { text: "10 Video Edits per month", included: true },
      { text: "Advanced Meta Ad Management", included: true },
      { text: "Unlimited Social Media Graphics", included: true },
      { text: "Dedicated Account Manager", included: true },
      { text: "24-hour turnaround", included: true },
      { text: "Advanced Motion Graphics", included: true },
      { text: "Weekly Performance Reports", included: true },
    ],
    buttonText: "Contact Us",
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-white mb-4">
            Simple, <span className="text-orange-500">Transparent</span> Pricing
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the plan that best fits your business needs and scale as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? 'border-2 border-blue-800 dark:border-blue-600 transform md:-translate-y-4 shadow-lg' 
                  : 'border border-gray-200 dark:border-gray-700 shadow'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 left-0 bg-blue-800 text-white text-sm py-1 text-center font-medium">
                  Most Popular
                </div>
              )}
              <div className="bg-white dark:bg-gray-800 p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {plan.title}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-800 dark:text-blue-400">{plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-8 h-12">
                  {plan.description}
                </p>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={`${feature.included ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 dark:text-gray-500'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="#contact"
                  className={`block w-full py-3 px-4 text-center rounded-full transition-colors ${
                    plan.popular
                      ? 'bg-blue-800 hover:bg-blue-900 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-200'
                  }`}
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Need a custom solution? Let's talk about your specific needs.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-transparent border border-blue-800 text-blue-800 dark:border-blue-400 dark:text-blue-400 rounded-full hover:bg-blue-800 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors"
          >
            Get Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;