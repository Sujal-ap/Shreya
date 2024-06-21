import React from 'react';
import SignUpPage from '../components/Signuppage.js';
import '../styles/signup.css';

const Signup = () => {
  return (
    <div className="signup-wrapper">
      <SignUpPage />
      <div className="background-bars">
        {/* White bars */}
        <div className="bar white" style={{ left: '0%' }}></div>
        <div className="bar white" style={{ left: '20%' }}></div>
        <div className="bar white" style={{ left: '40%' }}></div>
        <div className="bar white" style={{ left: '60%' }}></div>
        <div className="bar white" style={{ left: '80%' }}></div>
        
        {/* Black bars */}
        <div className="bar black" style={{ left: '10%' }}></div>
        <div className="bar black" style={{ left: '30%' }}></div>
        <div className="bar black" style={{ left: '50%' }}></div>
        <div className="bar black" style={{ left: '70%' }}></div>
        <div className="bar black" style={{ left: '90%' }}></div>
      </div>
    </div>
  );
}

export default Signup;
