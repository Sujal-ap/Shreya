import React from 'react';
import '../styles.css'; // Import the styles.css file

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Thrift Store. All rights reserved.</p>
      <nav>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </nav>
    </footer>
  );
}

export default Footer;
