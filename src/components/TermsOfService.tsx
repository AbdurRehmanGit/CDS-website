import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-blue-800 dark:text-white mb-8">Terms of Service</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              By accessing or using our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Services</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We provide the following digital services:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li>Website Development</li>
              <li>Video Editing</li>
              <li>Meta Ad Management</li>
              <li>TikTok Ad Management</li>
              <li>Graphic Design</li>
              <li>Branding</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Payment Terms</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Payment terms for our services:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li>All prices are in USD unless otherwise stated</li>
              <li>Payment is required before service delivery</li>
              <li>We accept major credit cards and bank transfers</li>
              <li>Refunds are handled on a case-by-case basis</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Intellectual Property</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Upon full payment, clients receive:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li>Full ownership of final deliverables</li>
              <li>Right to use and modify the delivered work</li>
              <li>We retain the right to showcase work in our portfolio</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Contact Information</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Questions about these Terms should be sent to:
            </p>
            <div className="text-gray-600 dark:text-gray-300">
              <p>Choice  Int'L Ltd,</p>
              <p>124, City Road</p>
              <p>London EC1V 2NX</p>
              <p>United Kingdom</p>
              <p>Email: choicedigitalservices@gmail.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;