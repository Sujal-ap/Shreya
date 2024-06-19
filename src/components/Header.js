import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext.js';
import { auth } from '../firebaseConfig.js';
import HoverFloat from './HoverFloat.js';
import gsap from 'gsap';
import '../styles/header.css'; // Make sure to import your CSS file for styling

function Header() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll('span');
    gsap.set(letters, { transformOrigin: '50% 50%' });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    tl.to(letters, {
      duration: 0.4,
      y: (index) => (index % 2 === 0 ? -30 : 30),
      rotation: (index) => (index % 2 === 0 ? -20 : 20),
      stagger: 0.05,
      ease: 'power1.inOut',
    })
      .to(letters, {
        duration: 0.6,
        y: 0,
        rotation: 0,
        stagger: 0.05,
        ease: 'elastic.out(1, 0.3)',
      });
  }, []);

  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        setUser(null);
        navigate('/Signup');
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <header className="header">
      <div className="header-top">
        <h1 ref={textRef}>
          {'Vintage   Vibes   Thrift'.split('').map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </h1>
        <nav>
          <Link to="/">Home</Link>
          {user ? (
            <div className="user-info">
              <img src={user.photoURL} alt="User profile" className="user-profile-pic" />
              <span className="user-name">{user.displayName}</span>
              <button className='sign-out-button' onClick={handleSignOut}>Sign Out</button>
            </div>
          ) : (
            <Link to="/Signup">Sign In</Link>
          )}
        </nav>
      </div>
      <div className="header-bottom">
        <HoverFloat />
      </div>
    </header>
  );
}

export default Header;
