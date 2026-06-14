import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-blue-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-white mb-6 text-center">
            Passionate Minds Fueling <span className="text-orange-500">E-Commerce Growth</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-center">
            Since 2016, we've been helping brands scale globally with passion and expertise. From startups to established businesses, 
            we partner with those aiming to make a lasting mark. We believe online selling is a modern marvel—one that thrives when 
            sales strategies are backed by powerful branding and private labeling.
          </p>
        </div>

        {/* CEO Message Section */}
        <div className="bg-blue-50 dark:bg-gray-700 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-white mb-6">
            CEO's <span className="text-orange-500">Message</span>
          </h2>
          <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            <p>
              Since 2016, our journey has been driven by one core belief: real growth happens when passion meets strategy. 
              At the heart of our work is a commitment to help brands not only sell online, but to build something lasting—something 
              that speaks to their audience and stands out in a crowded market.
            </p>
            <p>
              We're not here to follow trends—we're here to set them. By combining performance-driven e-commerce systems with strong 
              branding and private labeling, we aim to unlock the full potential of global selling for every client we work with.
            </p>
            <p>
              We grow when our clients grow—and that's the only kind of success we're after.
            </p>
            <div className="mt-8 border-t border-gray-200 dark:border-gray-600 pt-6">
              <p className="text-xl font-bold text-blue-800 dark:text-white">SHAHID IQBAL</p>
              <p className="text-gray-600 dark:text-gray-400">Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;