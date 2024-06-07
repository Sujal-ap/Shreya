import React, { useEffect } from 'react';
import '../grid.css';  // Ensure the styles are applied

const Grid = () => {
  useEffect(() => {
    const gridItems = document.querySelectorAll('.image-grid-item');

    gridItems.forEach(item => {
      item.addEventListener('touchstart', handleTouchStart);
      item.addEventListener('touchend', handleTouchEnd);
    });

    return () => {
      gridItems.forEach(item => {
        item.removeEventListener('touchstart', handleTouchStart);
        item.removeEventListener('touchend', handleTouchEnd);
      });
    };
  }, []);

  const handleTouchStart = (e) => {
    e.currentTarget.classList.add('hovered');
  };

  const handleTouchEnd = (e) => {
    e.currentTarget.classList.remove('hovered');
  };

  return (
    <div className="image-grid">
      {Array.from({ length: 12 }, (_, index) => (
        <div key={index} className="image-grid-item"></div>
      ))}
    </div>
  );
};

export default Grid;
