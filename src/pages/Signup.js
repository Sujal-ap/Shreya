// src/pages/SignUp.js
import React from 'react';
import SignUpPage from '../components/Signuppage.js'; // Import the corrected SignUpPage component
import '../styles/signup.css';

const Signup = () => {
  return (
    <div className="signup-wrapper">
      <SignUpPage /> {/* Render SignUpPage component directly */}
    </div>
  );
}

export default Signup;
