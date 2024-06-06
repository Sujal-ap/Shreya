// src/components/Banner.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles.css';  // Import the CSS file

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings}>
      <div className="banner-slide banner-slide-1">
        <div className="banner-content">
          <h1>Welcome to Vintage Thrift Store</h1>
          <p>Discover unique vintage clothing and accessories</p>
        </div>
      </div>
      <div className="banner-slide banner-slide-2">
        <div className="banner-content">
          <h1>New Arrivals</h1>
          <p>Check out our latest collection</p>
        </div>
      </div>
      <div className="banner-slide banner-slide-3">
        <div className="banner-content">
          <h1>Exclusive Offers</h1>
          <p>Special discounts on vintage items</p>
        </div>
      </div>
    </Slider>
  );
};

export default Banner;
