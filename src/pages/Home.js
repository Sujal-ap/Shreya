import React, { useState, useEffect } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Banner from '../components/Banner.js';
import ImageGrid from '../components/Grid.js';
import ErrorBoundary from '../components/ErrorBoundary.js';
import FloatingMessage from '../components/FloatingMessage.js';
import { useAuth } from '../components/AuthContext.js';
import Preloader from '../components/Preloader.js';
import '../styles/home.css';
import '../styles/grid.css';
import '../styles/banner.css';

const Home = () => {
  const { user } = useAuth();
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);

  useEffect(() => {
    if (!sessionStorage.getItem('hasVisited')) {
      setTimeout(() => {
        setShowWelcomeMessage(true);
      }, 2000);
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, []);

  useEffect(() => {
    if (user && user.successMessage) {
      setShowSuccessMessage(true);
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [user]);

  const handleAnimationComplete = () => {
    setIsPreloaderVisible(false);
  };

  return (
    <>
      {isPreloaderVisible && <Preloader onAnimationComplete={handleAnimationComplete} />}
      {!isPreloaderVisible && (
        <>
          <Header />
          <ErrorBoundary>
            <Banner />
          </ErrorBoundary>
          <ImageGrid />
          <main style={{ paddingBottom: '60px' }}></main>
          <Footer />
          {showWelcomeMessage && (
            <FloatingMessage
              message="Welcome to our website!"
              onClose={() => setShowWelcomeMessage(false)}
              type="welcome"
            />
          )}
          {showSuccessMessage && (
            <FloatingMessage
              message={user.successMessage}
              type="success"
            />
          )}
        </>
      )}
    </>
  );
};

export default Home;
