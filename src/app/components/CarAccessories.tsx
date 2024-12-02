"use client";

import React, { useState } from "react";
import Image from "next/image";
import car1 from "../../../public/accessory1.png";
import car2 from "../../../public/accessory2.png";
import car3 from "../../../public/accessory3.png";
import car4 from "../../../public/accessory4.png";
import car5 from "../../../public/accessory5.png";
import car6 from "../../../public/accessory6.png";
import car7 from "../../../public/accessory7.png";
import car8 from "../../../public/accessory8.png";
import car9 from "../../../public/accessory9.png";
import car10 from "../../../public/accessory10.png";
import car11 from "../../../public/accessory11.png";
import car12 from "../../../public/accessory12.png";
import car13 from "../../../public/accessory13.png";
import car14 from "../../../public/accessory14.png";
import car15 from "../../../public/accessory15.png";
import car16 from "../../../public/accessory16.png";

const slides = [
    // carosel script start 
    [
      { image: car1, label: "Automatic Cars" },
      { image: car2, label: "Family Cars" },
      { image: car3, label: "5 Seater Cars" },
      { image: car4, label: "Small Cars" },
      { image: car5, label: "Big Cars" },
      { image: car6, label: "Imported Cars" },
      { image: car7, label: "Automatic Cars" },
      { image: car8, label: "Family Cars" },
      { image: car9, label: "5 Seater Cars" },
      { image: car10, label: "Small Cars" },
      { image: car11, label: "Big Cars" },
      { image: car12, label: "Imported Cars" },
    ],
    [
      { image: car13, label: "Diesel Cars" },
      { image: car14, label: "4 Door Cars" },
      { image: car15, label: "1000cc Cars" },
      { image: car16, label: "1300cc Cars" },
      { image: car1, label: "Jeep" },
      { image: car2, label: "Japanese Cars" },
      { image: car3, label: "Diesel Cars" },
      { image: car7, label: "4 Door Cars" },
      { image: car6, label: "1000cc Cars" },
      { image: car8, label: "1300cc Cars" },
      { image: car5, label: "Jeep" },
      { image: car4, label: "Japanese Cars" },
    ],
  ];

const CarAccessories: React.FC =() => {
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
        <div className="max-w-full bg-gray-200">
  <div className="">
        <div className="max-w-5xl mx-auto py-10 px-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Auto Store Car Parts & Accessories
          </h2>
          <div className="flex gap-8 mb-5">
          <p className="cursor-pointer hover:border-b-2 hover:border-blue-600"
              onClick={() => setShowCarousel(true)} // Show carousel when "Category" is clicked
  >Sub Catagory</p>
          <p className="cursor-pointer hover:border-b-2 hover:border-blue-600">Make</p>
          <p className="cursor-pointer hover:border-b-2 hover:border-blue-600">Model</p>
          <p className="cursor-pointer hover:border-b-2 hover:border-blue-600">Brand</p>
          </div>
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute -left-10 top-[45%] transform -translate-y-1/2 text-2xl bg-gray-200 hover:bg-[#3e93ef] hover:text-white w-10 h-10 flex items-center justify-center rounded-full shadow"
            >
              <p className="flex justify-center items-center -mt-2">‹</p>
            </button>
            <button
              onClick={handleNext}
              className="absolute -right-10 top-[45%] transform -translate-y-1/2 text-2xl bg-gray-200 hover:bg-[#3e93ef] hover:text-white w-10 h-10 flex items-center justify-center rounded-full shadow"
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
                    className="min-w-full grid grid-cols-6 gap-4"
                  >
                    {slide.map((car, i) => (
                      <div
                        key={i}
                        className="p-4 bg-white flex flex-col items-center shadow rounded text-center hover:shadow-xl"
                      >
                        <div className="mb-4">
                          <Image
                            src={car.image}
                            alt={car.label}
                            width={100}
                            height={100}
                          />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-700 hover:text-black hover:text-lg">
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

export default CarAccessories