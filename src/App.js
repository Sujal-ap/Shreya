// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js'; // Ensure this path is correct
import SignUp from './pages/Signup.js'; // Use this route if you decide to keep SignUp.js
import CrystalGridPage from './pages/CrystalGridPage.js'; // Import the CrystalGridPage component
import { AuthProvider } from './components/AuthContext.js';

const App = () => {
  return (
    <AuthProvider>
      <Router basename="/shreya-frontend">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} /> {/* Update this route to SignUp */}
          <Route path="/crystal-grid" element={<CrystalGridPage />} /> {/* Add route for CrystalGridPage */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
