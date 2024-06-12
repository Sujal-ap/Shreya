// src/pages/Home.js
import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Banner from '../components/Banner.js';
import ImageGrid from '../components/Grid.js';
import ErrorBoundary from '../components/ErrorBoundary.js'; // Import ErrorBoundary
import '../styles/home.css';
import '../styles/grid.css';

const Home = () => {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <Banner />
      </ErrorBoundary>
      <ImageGrid />
      <main style={{ paddingBottom: '60px' }}></main>
      <Footer />
    </>
  );
}

export default Home;
