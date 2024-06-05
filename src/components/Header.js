import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Import the styles.css file

function Header() {
  return (
    <header>
      <h1>Thrift Store</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
    </header>
  );
}

export default Header;
