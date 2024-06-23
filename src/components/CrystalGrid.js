import React, { useState } from 'react';
import '../styles/crystalgrid.css'; // Import the CSS file for crystal animation

const CrystalGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleCrystalHover = (index) => {
    setHoveredIndex(index);
  };

  const handleCrystalLeave = () => {
    setHoveredIndex(null);
  };

  const renderCrystals = () => {
    const crystals = [];
    const totalCrystals = 100; // Number of crystals to render

    for (let i = 0; i < totalCrystals; i++) {
      const distance = hoveredIndex !== null ? Math.abs(hoveredIndex - i) : null;
      const shineIntensity = distance !== null ? 1 / (distance + 1) : 0; // Calculate shine intensity based on distance

      crystals.push(
        <div
          key={i}
          className={`crystal ${hoveredIndex === i ? 'crystal-hovered' : ''}`}
          style={{ '--shine-intensity': shineIntensity }}
          onMouseEnter={() => handleCrystalHover(i)}
          onMouseLeave={handleCrystalLeave}
        >
          <div className="foreground-crystal"></div>
          <div className="background-crystal"></div>
        </div>
      );
    }

    return crystals;
  };

  return (
    <div className="crystalgrid-container">
      {renderCrystals()}
    </div>
  );
};

export default CrystalGrid;
