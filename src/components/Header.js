import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Thrift Store</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/signup">Sign In</Link>
      </nav>
    </header>
  );
}

export default Header;
