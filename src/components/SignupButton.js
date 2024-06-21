// SignupButton.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/signupb.css';

const SignupButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate header height or any other relevant threshold
      const headerHeight = document.querySelector('header').offsetHeight;
      
      // Determine scroll position
      if (window.scrollY > headerHeight) {
        setIsVisible(true); // Show signup button
      } else {
        setIsVisible(false); // Hide signup button
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Link to="/Signup" className={`signup-button ${isVisible ? 'visible' : 'hidden'}`}>
      <span>→</span> Sign Up
    </Link>
  );
};

export default SignupButton;
