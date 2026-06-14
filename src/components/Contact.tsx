import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

interface Expert {
  name: string;
  role: string;
  image: string;
  description: string;
}

const experts: Record<string, Expert> = {
  'website-development': {
    name: 'Abdur Rehman',
    role: 'Lead Web Developer',
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQEB7K_dFmKdLg/profile-displayphoto-shrink_200_200/B4EZZuK3cOHcAc-/0/1745605065710?e=1750896000&v=beta&t=4jg1b4vta8-oDapr6mYxq4A0HlvtJBc5HNYGUBbZntc',
    description: 'Expert in full-stack development with experience in creating scalable web applications.'
  },
  'video-editing': {
    name: 'Abdur Rehman',
    role: 'Senior Video Editor',
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQEB7K_dFmKdLg/profile-displayphoto-shrink_200_200/B4EZZuK3cOHcAc-/0/1745605065710?e=1750896000&v=beta&t=4jg1b4vta8-oDapr6mYxq4A0HlvtJBc5HNYGUBbZntc',
    description: 'Professional video editor with expertise in motion graphics and visual effects.'
  },
  'meta-ads': {
    name: 'Amees Khan',
    role: 'Meta Ads Specialist',
    image: 'https://media.licdn.com/dms/image/v2/D4D35AQFdsqHdOIyNlw/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1700664642824?e=1746464400&v=beta&t=tBP7R2YvWP521EttBywsq1t0vrJ_koodOpS39O88mEc',
    description: 'Meta ads expert with a track record of achieving 400+ Orders in a day on shopify store.'
  },
  'tiktok-ads': {
    name: 'Rameez Shahid',
    role: 'TikTok Ads Manager',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    description: 'Specialized in creating viral TikTok ad campaigns with proven success in user acquisition.'
  },
  'graphic-design': {
    name: 'Abdul Rafay',
    role: 'Graphic Designer',
    image: 'https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg',
    description: 'Graphic designer with expertise in brand identity and visual communication.'
  },
  'branding': {
    name: 'Amees Khan',
    role: 'Brand Strategist',
    image: 'https://media.licdn.com/dms/image/v2/D4D35AQFdsqHdOIyNlw/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1700664642824?e=1746464400&v=beta&t=tBP7R2YvWP521EttBywsq1t0vrJ_koodOpS39O88mEc',
    description: 'Strategic brand consultant helping businesses build memorable and impactful brand identities.'
  },
  'multiple': {
    name: 'Rameez Shahid',
    role: 'Project Director',
    image: 'https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg',
    description: 'Experienced project manager coordinating multi-service campaigns for enterprise clients.'
  }
};

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }

    if (name === 'service' && value) {
      setSelectedExpert(experts[value]);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);

    try {
      emailjs.init("G6IVx1W8A8nYeo3m4");

      const result = await emailjs.send(
        "service_0bdqxv5",
        "template_8a5cw4w",
        {
          from_name: formData.name,
          to_name: "Choice Digital Services",
          from_email: formData.email,
          to_email: "abdurrehman12770@gmail.com",
          message: formData.message,
          phone: formData.phone || "Not provided",
          service: formData.service,
        }
      );

      if (result.status === 200) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        setSelectedExpert(null);
        
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setIsSubmitting(false);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-white mb-4">
            Get In <span className="text-orange-500">Touch</span> With Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to take your digital presence to the next level? Reach out to discuss your project needs.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Us A Message</h3>
            
            {isSubmitted ? (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Message Sent Successfully!</h4>
                <p className="text-gray-600 dark:text-gray-300">Thanks for reaching out. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+44 7308 648788"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.service ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    >
                      <option value="">Select a service</option>
                      <option value="website-development">Website Development</option>
                      <option value="video-editing">Video Editing</option>
                      <option value="meta-ads">Meta Ad Management</option>
                      <option value="tiktok-ads">TikTok Ad Management</option>
                      <option value="graphic-design">Graphic Design</option>
                      <option value="branding">Branding</option>
                      <option value="multiple">Multiple Services</option>
                    </select>
                    {errors.service && <p className="mt-1 text-sm text-red-500">{errors.service}</p>}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition-colors flex items-center justify-center ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>

                {selectedExpert && (
                  <div className="mt-8 p-6 bg-blue-50 dark:bg-gray-700 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <img
                        src={selectedExpert.image}
                        alt={selectedExpert.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {selectedExpert.name}
                        </h4>
                        <p className="text-blue-800 dark:text-blue-400">{selectedExpert.role}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                          {selectedExpert.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
          
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-blue-800 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Email Us</h4>
                    <a href="mailto:abdurrehman12770@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400">
                      choicedigitalservices@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-blue-800 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Call Us</h4>
                    <a href="tel:+447308648788" className="text-gray-600 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400">
                      +44 7308 648788
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6 text-blue-800 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Our Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Choice Int'L Ltd,<br />
                      124, City Road<br />
                      London EC1V 2NX<br />
                      United Kingdom
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 rounded-full p-3 mr-4">
                    <Clock className="h-6 w-6 text-blue-800 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Business Hours</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/50 rounded-full p-3 transition-colors">
                  <svg className="h-6 w-6 text-blue-800 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                <a href="#" className="bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/50 rounded-full p-3 transition-colors">
                  <svg className="h-6 w-6 text-blue-800 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.004 10.004 0 01-3.127 1.193 4.92 4.92 0 00-8.384 4.482 13.984 13.984 0 01-10.15-5.147 4.92 4.92 0 001.522 6.57 4.887 4.887 0 01-2.23-.616v.06a4.923 4.923 0 003.95 4.827 4.913 4.913 0 01-2.224.084 4.924 4.924 0 004.6 3.42 9.874 9.874 0 01-6.115 2.107c-.4 0-.793-.023-1.18-.07a13.966 13.966 0 007.557 2.21c9.054 0 14-7.496 14-13.986 0-.21 0-.42-.015-.63a9.99 9.99 0 002.46-2.548l-.047-.02z"/>
                  </svg>
                </a>
                
                <a href="#" className="bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/50 rounded-full p-3 transition-colors">
                  <svg className="h-6 w-6 text-blue-800 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                
                <a href="#" className="bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/50 rounded-full p-3 transition-colors">
                  <svg className="h-6 w-6 text-blue-800 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0V16h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548V16z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;