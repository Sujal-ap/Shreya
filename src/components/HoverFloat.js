// src/components/HoverFloat.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/hoverfloat.css'; // Import CSS for HoverFloat component

const HoverFloat = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="hoverfloat-container">
      <div className="hoverfloat-item" onMouseEnter={() => handleMouseEnter('brands')} onMouseLeave={handleMouseLeave}>
        Brands
        {hoveredItem === 'brands' && (
          <div className="hoverfloat-content">
            <ul>
              <li className="auton">AUSTON MARTIN</li>
              <li className="defender">DEFENDER</li>
              <li className="ferrari">LA FERRARI</li>
              <li className="rr">ROLLS ROYCE</li>
              {/* Add more brands as needed */}
            </ul>
          </div>
        )}
      </div>
      <div className="hoverfloat-item" onMouseEnter={() => handleMouseEnter('categories')} onMouseLeave={handleMouseLeave}>
        Categories
        {hoveredItem === 'categories' && (
          <div className="hoverfloat-content">
            <ul>
              <li className="category1">SPORTS</li>
              <li className="category2">4 X 4</li>
              <li className="category3">LUXURY</li>
              <li className="category4">F1</li>
              {/* Add more categories as needed */}
            </ul>
          </div>
        )}
      </div>
      <div className="hoverfloat-item" onMouseEnter={() => handleMouseEnter('more')} onMouseLeave={handleMouseLeave}>
        More
        {hoveredItem === 'more' && (
          <div className="hoverfloat-content">
            <Link to="/crystal-grid" className="hoverfloat-link">Go to Crystal Grid</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HoverFloat;
