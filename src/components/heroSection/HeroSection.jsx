import React, { useState, useEffect } from 'react';

const images = [
  "https://www.dmart.in/_next/image?url=https%3A%2F%2Fcdn.dmart.in%2Fimages%2Frwd%2Fbanners%2Fhmpg%2F22aug24-crsl-newarrivals-bang.jpg&w=1920&q=75",
  "https://www.dmart.in/_next/image?url=https%3A%2F%2Fcdn.dmart.in%2Fimages%2Frwd%2Fbanners%2Fhmpg%2F1aug24-crsl-ds-bang-1.jpg&w=1920&q=75",
  "https://www.dmart.in/_next/image?url=https%3A%2F%2Fcdn.dmart.in%2Fimages%2Frwd%2Fbanners%2Fhmpg%2F1aug24-crsl-dg1.jpg&w=1920&q=75",
  "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/20a160ef30776af8.jpeg?q=20",

  "https://www.dmart.in/_next/image?url=https%3A%2F%2Fcdn.dmart.in%2Fimages%2Frwd%2Fbanners%2Fhmpg%2F1aug24-crsl-kitchenmela.jpg&w=1920&q=75"
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="px-2 ">
      <div className="relative w-full h-[400px] overflow-hidden p-8">
        <div className="absolute inset-0 flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((img, index) => (
            <img key={index} src={img} alt={`carousel-${index}`} className="w-full flex-shrink-0 object-cover object-center" />
          ))}
        </div>

        {/* Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div></div>

  );
};

export default HeroSection;
