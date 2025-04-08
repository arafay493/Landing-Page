import React from "react";
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

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // large screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container my-10 py-10 px-4 sm:px-10 border-t border-b border-gray-200">
      <Slider {...settings}>
        {images.map((url, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={url}
              alt={`Slide ${index + 1}`}
              className="max-h-[80px] object-contain m-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideShow;
