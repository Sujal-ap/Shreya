// src/pages/Home.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import ImageGrid from './components/Grid';
import './styles/home.css';
import './styles/grid.css';
const home = () => {
  return (
    <>
      <Header />
      <Banner />
      <ImageGrid />
      <main style={{ paddingBottom: '60px' }}>
      </main>
      <Footer />
    </>
  );
}

export default home;
