// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home'; // Import the Home component
import SignUp from './pages/Signup'; // Import the SignUp components

const App = () => {
  return (
   <Router basename="/shreya-frontend">
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route to the Home component */}
        <Route path="/signup" element={<SignUp />} /> {/* Route to the SignUp component */}
      </Routes>
    </Router>
  );
}

export default App;
