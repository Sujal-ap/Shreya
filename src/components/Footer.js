import React, { useEffect } from 'react';
import '../styles/footer.css';

function Footer() {
  useEffect(() => {
    const mario = document.getElementById('mario');
    let posX = 0;

    function animateMario() {
      posX += 2;
      if (posX > window.innerWidth) posX = -55; // Reset position if it moves out of view
      mario.style.transform = `translateX(${posX}px)`;
      requestAnimationFrame(animateMario);
    }

    animateMario();
  }, []);

  return (
    <footer>
      <div id="mario"></div>
      <p>&copy; 2024 Thrift Store. All rights reserved.</p>
      <nav>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </nav>
    </footer>
  );
}

export default Footer;
