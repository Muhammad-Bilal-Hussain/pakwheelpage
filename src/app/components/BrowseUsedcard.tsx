"use client";

import React, { useState } from "react";
import Image from "next/image";
import car1 from "../../../public/car1.jpg";
import car2 from "../../../public/car2.jpg";
import car3 from "../../../public/car3.jpg";
import car4 from "../../../public/car4.jpg";
import car5 from "../../../public/car5.jpg";
import car6 from "../../../public/car6.jpg";
import car7 from "../../../public/car7.jpg";
import car8 from "../../../public/car8.jpg";
import car9 from "../../../public/car9.jpg";
import car10 from "../../../public/car10.jpg";
import car11 from "../../../public/car11.jpg";
import car12 from "../../../public/car12.jpg";

const slides = [
  // carosel script start 
  [
    { image: car1, label: "Automatic Cars" },
    { image: car2, label: "Family Cars" },
    { image: car3, label: "5 Seater Cars" },
    { image: car4, label: "Small Cars" },
    { image: car5, label: "Big Cars" },
    { image: car6, label: "Imported Cars" },
    { image: car1, label: "Automatic Cars" },
    { image: car2, label: "Family Cars" },
    { image: car3, label: "5 Seater Cars" },
    { image: car4, label: "Small Cars" },
    { image: car5, label: "Big Cars" },
    { image: car6, label: "Imported Cars" },
  ],
  [
    { image: car7, label: "Diesel Cars" },
    { image: car8, label: "4 Door Cars" },
    { image: car9, label: "1000cc Cars" },
    { image: car10, label: "1300cc Cars" },
    { image: car11, label: "Jeep" },
    { image: car12, label: "Japanese Cars" },
    { image: car7, label: "Diesel Cars" },
    { image: car8, label: "4 Door Cars" },
    { image: car9, label: "1000cc Cars" },
    { image: car10, label: "1300cc Cars" },
    { image: car11, label: "Jeep" },
    { image: car12, label: "Japanese Cars" },
  ],
  [
    { image: car7, label: "Diesel Cars" },
    { image: car8, label: "4 Door Cars" },
    { image: car9, label: "1000cc Cars" },
    { image: car10, label: "1300cc Cars" },
    { image: car11, label: "Jeep" },
    { image: car12, label: "Japanese Cars" },
    { image: car7, label: "Diesel Cars" },
    { image: car8, label: "4 Door Cars" },
    { image: car9, label: "1000cc Cars" },
  ],
];

const BrowseUsedcard: React.FC = () => {
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
      <div className="max-w-full bg-gray-100">
<div className="">
      <div className="max-w-5xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Browse Used Cars
        </h2>
        <div className="flex gap-8 mb-5">
        <p className="cursor-pointer hover:border-b-2 hover:border-blue-600"
            onClick={() => setShowCarousel(true)} // Show carousel when "Category" is clicked
>Catagory</p>
        <p className="cursor-pointer hover:border-b-2 hover:border-blue-600">City</p>
        <p className="cursor-pointer hover:border-b-2 hover:border-blue-600">Make</p>
        <p className="cursor-pointer hover:border-b-2 hover:border-blue-600">Model</p>
        <p className="cursor-pointer hover:border-b-2 hover:border-blue-600">Budget</p>
        <p className="cursor-pointer hover:border-b-2 hover:border-blue-600">Body Type</p>
        </div>
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute -left-16 top-1/2 transform -translate-y-1/2 text-2xl bg-gray-200 hover:bg-[#3e93ef] hover:text-white w-10 h-10 flex items-center justify-center rounded-full shadow"
          >
            <p className="flex justify-center items-center -mt-2">‹</p>
          </button>
          <button
            onClick={handleNext}
            className="absolute -right-16 top-1/2 transform -translate-y-1/2 text-2xl bg-gray-200 hover:bg-[#3e93ef] hover:text-white w-10 h-10 flex items-center justify-center rounded-full shadow"
          >
          <p className="flex justify-center items-center -mt-2">›</p>
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="min-w-full grid grid-cols-6 grid-rows-2 gap-4"
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
                          width={100}
                          height={100}
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-400 hover:text-black hover:text-xl">
                        {car.label}
                      </h3>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentSlide === index
                    ? "bg-[#3e93ef]"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default BrowseUsedcard;
