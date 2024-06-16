import React, { useState, useEffect } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Banner from '../components/Banner.js';
import ImageGrid from '../components/Grid.js';
import ErrorBoundary from '../components/ErrorBoundary.js';
import FloatingMessage from '../components/FloatingMessage.js'; // Import FloatingMessage component
import { useAuth } from '../components/AuthContext.js'; // Import useAuth hook
import '../styles/home.css'; // Import styles specific to Home page
import '../styles/grid.css';
import '../styles/banner.css'; // Import grid styles


const Home = () => {
  const { user } = useAuth();
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false); // State for showing welcome message
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State for showing success message

  useEffect(() => {
  // Show welcome message after 2 seconds on initial visit
  if (!sessionStorage.getItem(null)) {
    setTimeout (() => {
      setShowWelcomeMessage(true);
    }, 2000);

    sessionStorage.setItem('hasVisit', 'true'); // Set 'hasVisited' to 'true'}
    
  } 
  else if (sessionStorage.hasVisit('true')) {
    const timer = setTimeout(() => {
      setShowWelcomeMessage(false); // Show welcome message after 2 seconds
     // Set 'hasVisited' to 'true' after showing welcome message
    });

    return () => {
      // Clean up timer if 'hasVisited' is true
      clearTimeout(timer);
    };
  }
}, []);


  useEffect(() => {
    // Show success message when user signs in
    if (user && user.successMessage) {
      setShowSuccessMessage(true);

      const timer = setTimeout(() => {
        setShowSuccessMessage(false); // Hide success message after 5 seconds
      }, 5000);

      return () => clearTimeout(timer); // Clean up timer
    }
  }, [user]);

  return (
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
  );
};

export default Home;
