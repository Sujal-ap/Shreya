import React, { useEffect } from 'react';

const Grid = () => {
  useEffect(() => {
    const gridItems = document.querySelectorAll('.image-grid-item');

    const handleTouchStart = (e) => {
      e.currentTarget.classList.add('hovered');
    };

    const handleTouchEnd = (e) => {
      e.currentTarget.classList.remove('hovered');
    };

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

  return (
    <div className="image-grid">
      {Array.from({ length: 12 }, (_, index) => (
        <div key={index} className="image-grid-item"></div>
      ))}
    </div>
  );
};

export default Grid;
