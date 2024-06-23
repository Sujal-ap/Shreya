// pages/Home.js

import React, { useState, useEffect } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Banner from '../components/Banner.js';
import ImageGrid from '../components/Grid.js';
import ErrorBoundary from '../components/ErrorBoundary.js';
import FloatingMessage from '../components/FloatingMessage.js';
import { useAuth } from '../components/AuthContext.js';
import Preloader from '../components/Preloader.js';
import SignupButton from '../components/SignupButton.js';
import '../styles/preloader.css';
import '../styles/signupb.css';
import '../styles/home.css'; // Import your custom CSS file

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
    document.getElementById('homePage').classList.add('slide-up');
  };

  return (
    <>
      {isPreloaderVisible && <Preloader onAnimationComplete={handleAnimationComplete} />}
      <div className="space-background"></div> {/* Animated space background */}
      <div id="homePage" className={!isPreloaderVisible ? 'slide-up' : ''}>
        {!isPreloaderVisible && (
          <>
            <div className="header">
              <Header />
            </div>
            <div className="banner">
              <ErrorBoundary>
                <Banner />
              </ErrorBoundary>
            </div>
            <ImageGrid />
            <main style={{ paddingBottom: '60px' }}></main>
            <div className="footer">
              <Footer />
            </div>
            {showWelcomeMessage && (
              <FloatingMessage
                message="Welcome to VINTAGE VIBES THRIFT"
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
            <SignupButton />
          </>
        )}
      </div>
    </>
  );
};

export default Home;
