// src/pages/SignUp.js
import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import SignUpPage from '../components/Signuppage.js'; // Import the corrected SignUpPage component
import '../styles/signup.css';

const Signup = () => {
  return (
    <>
      <Header />
      <main style={{ paddingBottom: '60px' }}>
        <SignUpPage /> {/* Render SignUpPage component directly */}
      </main>
      <Footer />
    </>
  );
}

export default Signup;
