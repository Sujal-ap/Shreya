import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext.js';
import '../styles/home.css'; // Make sure to import your CSS file for styling

function Header() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    setUser(null);
    navigate('/Signup'); // Redirect to the sign-in page after sign out
  };

  return (
    <header className="header">
      <h1>Thrift Store</h1>
      <nav>
        <Link to="/">Home</Link>
        {user ? (
          <div className="user-info">
            <img src={user.photoURL} alt="User profile" className="user-profile-pic" />
            <span className="user-name">{user.displayName}</span>
            <button onClick={handleSignOut}>Sign Out</button>
          </div>
        ) : (
          <Link to="/Signup">Sign In</Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
