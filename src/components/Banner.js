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

  const slides = [
    {
      image: 'shreya-frontend/images/bannerbg.jpg',
      title: 'Welcome to Vintage Thrift Store',
      description: 'Discover unique vintage clothing and accessories',
    },
    {
      image: 'shreya-frontend/images/bannerbg2.jpg',
      title: 'New Arrivals',
      description: 'Check out our latest collection',
    },
    {
      image: 'shreya-frontend/images/bannerbg3.jpg',
      title: 'Exclusive Offers',
      description: 'Special discounts on vintage items',
    },
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="banner-slide" style={{ backgroundImage: `url(${slide.image})` }}>
          <div className="banner-content">
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Banner;
