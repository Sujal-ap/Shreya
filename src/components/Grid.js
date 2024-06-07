// src/components/ImageGrid.js
import React from 'react';
import '../grid.css'; // Ensure the styles are applied

const ImageGrid = () => {
  return (
    <div className="image-grid">
      {Array.from({ length: 12 }, (_, index) => (
        <div key={index} className="image-grid-item"></div>
      ))}
    </div>
  );
};

export default ImageGrid;
