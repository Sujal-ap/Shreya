import React, { useState } from 'react';
import { GoogleAuthProvider, auth, signInWithPopup } from '../firebaseConfig';
import axios from 'axios'; // Import Axios for making HTTP requests
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from React Router
import '../styles/signup.css'; // Import CSS file for styling

const Signuppage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [successMessage, setSuccessMessage] = useState(null); // State variable for success message

  const handleSignInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      // Send user data to backend
      await axios.post('http://localhost:3000/user', {
        firebaseId: user.uid,
        email: user.email
      });

      // Set success message
      setSuccessMessage('Sign in with Google successful!');

      // Redirect to home page after successful sign-in
      navigate('/'); // Navigate to the home page route
      
    } catch (error) {
      alert(error.message); 
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <button onClick={handleSignInWithGoogle}>Sign In with Google</button>
      
      {/* Render success message if exists */}
      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default Signuppage;
