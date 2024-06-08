import React from 'react';
import { GoogleAuthProvider, auth, signInWithPopup } from '../firebaseConfig';
import axios from 'axios'; // Import Axios for making HTTP requests
import '../styles/signup.css'; // Import CSS file for styling

const Signuppage = () => {
  const handleSignInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      // Send user data to backend
      await axios.post('http://localhost:5000/users/signin', {
        firebaseId: user.uid,
        email: user.email
      });
      
      // You can add additional logic here if needed, such as redirecting after successful sign-in
      
      alert('Sign in with Google successful!');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <button onClick={handleSignInWithGoogle}>Sign In with Google</button>
    </div>
  );
};

export default Signuppage;
