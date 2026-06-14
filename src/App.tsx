import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Journey from './components/Journey';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Feedback from './components/Feedback';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import './utils/animations.css';
import './utils/styles.css';

function App() {
  // Get the current path from the window location
  const currentPath = window.location.pathname;

  // Render different content based on the path
  const renderContent = () => {
    switch (currentPath) {
      case '/privacy-policy':
        return <PrivacyPolicy />;
      case '/terms-of-service':
        return <TermsOfService />;
      default:
        return (
          <>
            <Hero />
            <Services />
            <Journey />
            <About />
            <Portfolio />
            <Feedback />
            <Contact />
          </>
        );
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <main>
          {renderContent()}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;