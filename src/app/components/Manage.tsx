"use client";

import React, { useState } from "react";
import Image from "next/image";
import car1 from "../../../public/manage1.jpg";
import car2 from "../../../public/manage2.jpg";
import car3 from "../../../public/manage3.jpg";
import car4 from "../../../public/manage4.jpg";
import car5 from "../../../public/manage5.jpg";
import car6 from "../../../public/manage6.jpg";
import car7 from "../../../public/manage7.jpg";
import car8 from "../../../public/manage8.jpg";
import car9 from "../../../public/manage.jpg";
import car10 from "../../../public/car10.jpg";
import car11 from "../../../public/car11.jpg";
import car12 from "../../../public/car12.jpg";

const slides = [
    // carosel script start 
    [
      { image: car7, label: "Karachi" ,name:"Honda City", price:"700,000"},
      { image: car2, label: "Faislabad", name:"Honda Civic 2024", price:"730,000"},
      { image: car3, label: "Islamabad", name:"Honda Civic", price:"8900,000"},
      { image: car4, label: "Lahore", name:"Toyota Carola", price:"7100,000" },
    ],
    [
      { image: car5, label: "Karachi" , name:"Honda HR-V 2023", price:"2800,000" , tag:"Featured"},
      { image: car6, label: "Faislabas", name:"Toyota Yaris Hatchback 2022", price:"1100,000" },
      { image: car7, label: "Islamaba",name:"Honda Civic 2024", price:"1700,000", tag:"Featured" },
      { image: car8, label: "Lahore" ,name:"Honda City", price:"140,000"},
    ],
    [
        { image: car7, label: "Karachi" ,name:"Honda City", price:"700,000"},
        { image: car2, label: "Faislabad", name:"Honda Civic 2024", price:"730,000", tag:"Featured"},
        { image: car3, label: "Islamabad", name:"Honda Civic", price:"8900,000", tag:"Featured"},
        { image: car4, label: "Lahore", name:"Toyota Carola", price:"7100,000" , tag:"Featured"},
      ],
  ];
  

const Manage: React.FC = () => {
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
          Managed By PakWheels
          </h2>
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
                    className="min-w-full grid grid-cols-4 gap-4"
                  >
                    {slide.map((car, i) => (
                      <div
                        key={i}
                        className=" bg-white flex flex-col shadow rounded"
                      >
                        <div className="">
                          <Image
                            src={car.image}
                            alt={car.label}
                            width={250}
                            height={200}
                          />
                          <p className="absolute -mt-44 bg-red-600 text-white w-[74px] rounded-md text-center">{car.tag}</p>
                          <p className="ml-2">{car.name}</p>
                          <p className="ml-2 text-green-600">{car.price}</p>
                        </div>
                        <h3 className="text-lg ml-2 font-semibold text-gray-400 ">
                          {car.label}
                        </h3>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
  
            {/* Dots Navigation */}
            {/* <div className="flex justify-center mt-4">
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
            </div> */}
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  };

export default Manage;