import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the styles


const Banner = () => {
  const settings = {
    showArrows: true,
    showStatus: false,
    showIndicators: true,
    infiniteLoop: true,
    autoPlay: true,
    interval: 1500,
    stopOnHover: true,
    swipeable: true,
    dynamicHeight: true,
    showThumbs: false
  };
  console.log('Banner settings:', settings);

  return (
    <Carousel {...settings}>
      <div>
        <div className="banner-slide banner-slide-1">
          <div className="banner-content">
            <h1>Welcome to Vintage Thrift Store</h1>
            <p>Discover unique vintage clothing and accessories</p>
          </div>
        </div>
      </div>
      <div>
        <div className="banner-slide banner-slide-2">
          <div className="banner-content">
            <h1>New Arrivals</h1>
            <p>Check out our latest collection</p>
          </div>
        </div>
      </div>
      <div>
        <div className="banner-slide banner-slide-3">
          <div className="banner-content">
            <h1>Exclusive Offers</h1>
            <p>Special discounts on vintage items</p>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
