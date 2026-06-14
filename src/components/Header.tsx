import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Briefcase } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900 dark:bg-white shadow-md py-2'
          : 'bg-gray-900 dark:bg-white py-3'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center group">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg mr-3 transform group-hover:scale-105 transition-all duration-300 shadow-lg">
                <Briefcase className="h-7 w-7 text-white" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="text-lg md:text-xl font-bold text-white dark:text-gray-900">Choice Digital Services</span>
                  <span className="hidden sm:inline ml-2 text-lg md:text-xl font-bold text-white dark:text-gray-900"> </span>
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-600 font-medium hidden sm:block">Professional Digital Solutions</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="relative nav-link text-white dark:text-gray-800 group">
              <span>Services</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white dark:bg-gray-800 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#portfolio" className="relative nav-link text-white dark:text-gray-800 group">
              <span>Portfolio</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white dark:bg-gray-800 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#feedback" className="relative nav-link text-white dark:text-gray-800 group">
              <span>Feedback</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white dark:bg-gray-800 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="relative nav-link text-white dark:text-gray-800 group">
              <span>Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white dark:bg-gray-800 group-hover:w-full transition-all duration-300"></span>
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-blue-800" />
              ) : (
                <Moon className="h-5 w-5 text-blue-800" />
              )}
            </button>
            <a
              href="#contact"
              className="px-6 py-2 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-blue-800" />
              ) : (
                <Moon className="h-5 w-5 text-blue-800" />
              )}
            </button>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-white dark:text-gray-800 hover:text-blue-800 dark:hover:text-blue-800 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 dark:bg-white shadow-lg">
          <div className="py-4 px-6 space-y-4">
            <a
              href="#services"
              className="block py-2 text-white dark:text-gray-800 hover:text-blue-800 dark:hover:text-blue-800 transition-all duration-300"
              onClick={toggleMobileMenu}
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="block py-2 text-white dark:text-gray-800 hover:text-blue-800 dark:hover:text-blue-800 transition-all duration-300"
              onClick={toggleMobileMenu}
            >
              Portfolio
            </a>
            <a
              href="#feedback"
              className="block py-2 text-white dark:text-gray-800 hover:text-blue-800 dark:hover:text-blue-800 transition-all duration-300"
              onClick={toggleMobileMenu}
            >
              Feedback
            </a>
            <a
              href="#contact"
              className="block py-2 text-white dark:text-gray-800 hover:text-blue-800 dark:hover:text-blue-800 transition-all duration-300"
              onClick={toggleMobileMenu}
            >
              Contact
            </a>
            <a
              href="#contact"
              className="block py-2 px-4 mt-4 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition-all duration-300 text-center transform hover:scale-105"
              onClick={toggleMobileMenu}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;