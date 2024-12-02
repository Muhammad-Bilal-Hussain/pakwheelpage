"use client";

import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Image from "next/image";
import bike1 from "../../../public/bike1.jpg"
import bike2 from "../../../public/bike2.jpg"
import bike3 from "../../../public/bike3.jpg"
import bike4 from "../../../public/bike4.jpg"
import bike5 from "../../../public/bike5.jpg"
import bike6 from "../../../public/bike6.jpg"
import bike7 from "../../../public/bike7.jpg"
import bike8 from "../../../public/bike1.jpg"
import bike9 from "../../../public/bike8.jpg"

const slides = [
  // carosel script start 
  [
    { image: bike1, label: "Automatic Cars",name:"Honda City", price:"700,000" },
    { image: bike2, label: "Family Cars" ,name:"Honda City", price:"700,000"},
    { image: bike3, label: "5 Seater Cars" ,name:"Honda City", price:"700,000"},
    { image: bike4, label: "Small Cars" ,name:"Honda City", price:"700,000"},
    // { image: bike11, label: "Jeep" },
    // { image: bike5, label: "Big Cars" },
  ],
  [
    { image: bike7, label: "Diesel Cars" ,name:"Honda City", price:"700,000"},
    { image: bike8, label: "4 Door Cars" ,name:"Honda City", price:"700,000"},
    { image: bike9, label: "Automatic Cars" ,name:"Honda City", price:"700,000"},
    // { image: car9, label: "1000cc Cars" },
    // { image: bike10, label: "1300cc Cars" },
    { image: bike7, label: "Jeep" ,name:"Honda City", price:"700,000"},
  ],
  [
    { image: bike5, label: "Diesel Cars" ,name:"Honda City", price:"700,000"},
    { image: bike6, label: "4 Door Cars" ,name:"Honda City", price:"700,000"},
    { image: bike3, label: "Automatic Cars" ,name:"Honda City", price:"700,000"},
    // { image: car9, label: "1000cc Cars" },
    // { image: bike10, label: "1300cc Cars" },
    { image: bike9, label: "Jeep" ,name:"Honda City", price:"700,000"},
  ],
];

const PopularBikes: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  function setShowCarousel(arg0: boolean): void {
    throw new Error("Function not implemented.");
  }
// carosel script end 
  return (
    <div>
        {/* carosel  */}
      <div className="max-w-full bg-gray-200">
<div className="">
      <div className="max-w-5xl mx-auto py-10 px-4">
        <div className="flex justify-between">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Popular New Bikes
        </h2>
        <p className="text-blue-600 hover:underline">View All New Bikes</p>
        </div>
        <div className="relative">
  {/* Navigation Buttons */}
  <button
    onClick={handlePrev}
    className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-2xl bg-gray-200 hover:bg-[#3e93ef] hover:text-white w-10 h-10 flex items-center justify-center rounded-full shadow z-10"
  >
    <p className="flex justify-center items-center -mt-2">‹</p>
  </button>
  <button
    onClick={handleNext}
    className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-2xl bg-gray-200 hover:bg-[#3e93ef] hover:text-white w-10 h-10 flex items-center justify-center rounded-full shadow z-10"
  >
    <p className="flex justify-center items-center -mt-2">›</p>
  </button>

  {/* Carousel Content */}
  <div className="overflow-hidden relative">
    <div
      className="flex transition-transform duration-500"
      style={{
        transform: `translateX(-${currentSlide * 100}%)`,
      }}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className="min-w-full grid grid-cols-4 gap-4"
        >
          {slide.map((car, i) => (
            <div
              key={i}
              className="p-4 bg-white flex flex-col items-center shadow rounded text-center"
            >
              <div className="mb-4">
                <Image
                  src={car.image}
                  alt={car.label}
                  width={200}
                  height={200}
                />
              </div>
              <p className="ml-2">{car.name}</p>
              <p className="ml-2 text-green-600">{car.price}</p>
              <div className="flex items-center space-x-2">
                {/* Stars */}
                <div className="flex space-x-1 text-orange-500">
                  <FaStar className="w-5 h-5" /> {/* Full Star */}
                  <FaStar className="w-5 h-5" /> {/* Full Star */}
                  <FaStar className="w-5 h-5" /> {/* Full Star */}
                  <FaRegStar className="w-5 h-5" /> {/* Empty Star */}
                  <FaRegStar className="w-5 h-5" /> {/* Empty Star */}
                </div>
                {/* Reviews Count */}
                <p className="text-gray-600 text-sm">626 Reviews</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PopularBikes;
