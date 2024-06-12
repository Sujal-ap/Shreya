import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext.js';
import { auth } from '../firebaseConfig.js'; // Ensure auth is imported correctly
import '../styles/signup.css';

const Signuppage = () => {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState(null);
  const { setUser } = useAuth();

  const handleSignInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider); // Ensure correct usage

      const user = result.user;

      console.log('User signed in:', user); // Log user data

      // Send user data to backend
      await axios.post('http://localhost:3000/user', {
        firebaseId: user.uid,
        email: user.email,
      });

      // Set user in context
      setUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      });

      // Set success message
      setSuccessMessage('Sign in with Google successful!');

      // Redirect to home page after successful sign-in
      navigate('/');
    } catch (error) {
      console.error('Error during sign-in:', error);
      alert(error.message); 
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <button onClick={handleSignInWithGoogle}>Sign In with Google</button>
      
      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default Signuppage;
