// src/components/Preloader.js
import React, { useEffect } from 'react';
import '../styles/preloader.css';

const Preloader = ({ onAnimationComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById('preloader').style.animation = 'fade-out 1s forwards';
      setTimeout(onAnimationComplete, 1000); // Wait for the fade-out animation to complete
    }, 3000); // Total duration of the animation

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <div id="preloader">
      <div id="logo"></div>
      <h1 id="website-name">VINTAGE VIBES THRIFT</h1>
    </div>
  );
};

export default Preloader;
