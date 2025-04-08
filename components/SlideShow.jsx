import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

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
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <motion.div
      className="slider-container my-10 py-10 px-4 sm:px-10 border-t border-b border-gray-200"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
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
    </motion.div>
  );
};

export default SlideShow;
