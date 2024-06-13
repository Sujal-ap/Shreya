import React, { useState, useEffect } from 'react';
import '../styles/FloatingMessage.css';
import floatimg1 from '../images/floatimg1.jpg'; // Example image import

const FloatingMessage = ({ message, type, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2000); // Show message after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Automatically hide after 5 seconds for success messages
    if (type === 'success' && visible) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [type, visible]);

  if (!visible) {
    return null;
  }

  let icon = null;
  let messageClass = '';

  if (type === 'welcome') {
    icon = <img src={floatimg1} alt="Welcome Icon" className="message-icon" />;
    messageClass = 'welcome-message'; // Add welcome message class
  } else if (type === 'success') {
    messageClass = 'success-message'; // Add success message class
  }

  const handleClose = () => {
    setVisible(false);
    if (onClose) onClose(); // Call onClose function passed as prop to close the message
  };

  return (
    <div className={`floating-message-overlay ${messageClass}`}>
      <div className={`floating-message-content ${messageClass}-container`}>
        {type === 'welcome' && (
          <span className="close-btn" onClick={handleClose}>
            &#x2715; {/* Unicode cross symbol */}
          </span>
        )}
        {icon}
        <p className={`message-text ${messageClass}`}>{message}</p>
      </div>
    </div>
  );
};

export default FloatingMessage;
