// SignupButton.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../components/AuthContext.js'; // Import your authentication context
import '../styles/signupb.css';

const SignupButton = () => {
  const { user } = useAuth(); // Assuming useAuth() provides user authentication state
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = document.querySelector('header').offsetHeight;
      
      if (!user && window.scrollY > headerHeight) {
        setIsVisible(true); // Show signup button only if user is not signed in
      } else {
        setIsVisible(false); // Hide signup button if user is signed in or scroll position is above header
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [user]); // Add user to dependency array to listen for changes

  if (user) return null; // If user is signed in, do not render the signup button

  return (
    <Link to="/Signup" className={`signup-button ${isVisible ? 'visible' : ''}`}>
      <span>→</span> Sign In
    </Link>
  );
};

export default SignupButton;
