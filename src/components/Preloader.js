import React, { useEffect } from 'react';
import '../styles/preloader.css';

const Preloader = ({ onAnimationComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById('preloader').style.animation = 'fade-out 1s forwards';
      setTimeout(onAnimationComplete, 1000); // Wait for the fade-out animation to complete
    }, 5000); // Total duration of the animation including zoom-in

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <div id="preloader">
      <div id="gradient-background"></div>
      <h1 id="website-name">
        {/* Wrap each letter in a span for individual animation */}
        <span>V</span>
        <span>I</span>
        <span>N</span>
        <span>T</span>
        <span>A</span>
        <span>G</span>
        <span>E</span>
        &nbsp;
        <span className="zoom-target">V</span> {/* Animate this 'V' */}
        <span>I</span>
        <span>B</span>
        <span>E</span>
        <span>S</span>
        &nbsp;
        <span>T</span>
        <span>H</span>
        <span>R</span>
        <span>I</span>
        <span>F</span>
        <span>T</span>
      </h1>
    </div>
  );
};

export default Preloader;
