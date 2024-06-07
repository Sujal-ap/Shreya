// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import ImageGrid from './components/Grid'; // Import the ImageGrid component
import './styles.css';  // Ensure the global styles are applied

function App() {
  return (
    <Router>
      <Header />
      <Banner />
      <ImageGrid /> {/* Add the ImageGrid here */}
      <main style={{ paddingBottom: '60px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

function Home() {
  return <h2>Home Page</h2>;
}

function SignUp() {
  return <h2>Sign Up Page</h2>;
}

export default App;
