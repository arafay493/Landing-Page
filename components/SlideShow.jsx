import React, { Component } from "react";
import Slider from "react-slick";

const SlideShow = () => {
  const images = [
    "/images/airbnb.png",
    "/images/google.png",
    "/images/amazon.png",
    "/images/microsoft.png",
    "/images/fedex.png",
    "/images/hubspot.png",
  ];
  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="slider-container my-10 py-20 border-gray-400 border-0 border-t-1 border-b-1">
      <Slider {...settings}>
        {images.map((url, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={url}
              alt={`Slide ${index + 1}`}
              className="m-auto"
            //   style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideShow;
