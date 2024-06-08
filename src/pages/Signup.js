// src/pages/SignUp.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SignUpPage from '../components/Signuppage'; // Import the corrected SignUpPage component
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
