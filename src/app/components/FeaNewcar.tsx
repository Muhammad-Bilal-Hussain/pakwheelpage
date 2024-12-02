"use client";

import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Image from "next/image";
import logo1 from "../../../public/logo1.png"
import logo2 from "../../../public/logo2.png"
import logo3 from "../../../public/logo3.jpg"
import logo4 from "../../../public/logo4.jpg"
import logo5 from "../../../public/Audi.png"
import logo6 from "../../../public/BMW.png"
import logo7 from "../../../public/Deepal_new.png"
import logo8 from "../../../public/Honda.png"
import logo9 from "../../../public/JMC.png"
import logo10 from "../../../public/MG.png"
import logo11 from "../../../public/Audi.png"
import logo12 from "../../../public/Tesla.png"
import logo13 from "../../../public/United.png"
import logo14 from "../../../public/baic.png"
import logo15 from "../../../public/proton-logo.png"
import logo16 from "../../../public/ora logo.jpg"
import logo17 from "../../../public/mercedes.png"
import car1 from "../../../public/car13.jpg"
import car2 from "../../../public/car14.jpg"
import car3 from "../../../public/car15.jpg"
import car4 from "../../../public/car13.jpg"
import car5 from "../../../public/car16.jpg"
import car6 from "../../../public/car17.jpg"
import car7 from "../../../public/car18.jpg"
import car8 from "../../../public/car19.jpg"
import car11 from "../../../public/car20.jpg";

const slides = [
  // carosel script start 
  [
    { image: car1, label: "Automatic Cars",name:"Honda City", price:"700,000" },
    { image: car2, label: "Family Cars" ,name:"Honda City", price:"700,000"},
    { image: car3, label: "5 Seater Cars" ,name:"Honda City", price:"700,000"},
    { image: car4, label: "Small Cars" ,name:"Honda City", price:"700,000"},
    // { image: car11, label: "Jeep" },
    // { image: car5, label: "Big Cars" },
  ],
  [
    { image: car7, label: "Diesel Cars" ,name:"Honda City", price:"700,000"},
    { image: car8, label: "4 Door Cars" ,name:"Honda City", price:"700,000"},
    { image: car1, label: "Automatic Cars" ,name:"Honda City", price:"700,000"},
    // { image: car9, label: "1000cc Cars" },
    // { image: car10, label: "1300cc Cars" },
    { image: car11, label: "Jeep" ,name:"Honda City", price:"700,000"},
  ],
  [
    { image: car7, label: "Diesel Cars" ,name:"Honda City", price:"700,000"},
    { image: car8, label: "4 Door Cars" ,name:"Honda City", price:"700,000"},
    { image: car1, label: "Automatic Cars" ,name:"Honda City", price:"700,000"},
    // { image: car9, label: "1000cc Cars" },
    // { image: car10, label: "1300cc Cars" },
    { image: car11, label: "Jeep" ,name:"Honda City", price:"700,000"},
  ],
];

const FeaNewcar: React.FC = () => {
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
      <div className="max-w-full bg-gray-100">
<div className="">
      <div className="max-w-5xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Featured New  Cars
        </h2>
        <div className="flex gap-8 mb-5">
        <p className="cursor-pointer hover:border-b-2 hover:border-blue-600"
            onClick={() => setShowCarousel(true)} // Show carousel when "Category" is clicked
>Popular</p>
        <p className="cursor-pointer hover:border-b-2 hover:border-blue-600">Upcomming</p>
        <p className="cursor-pointer hover:border-b-2 hover:border-blue-600">Newly Launched</p>
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
      {/* logos */}
      <div className="max-w-full bg-gray-100">
        <div className="max-w-5xl mx-auto py-10 px-4">
        <p className="text-2xl text-gray-500 font-bold  mb-10">New Cars by Make</p>
            <div className="flex justify-between">
                <div className="text-center mr-5">
                    <div className="bg-white rounded-full">
                        <Image src={logo1} alt="logo1" className="rounded-full w-[100px]"></Image>
                        </div>
                    <p>Suzuki</p>
                </div>
                <div className=" text-center mr-5">
                    <div className="bg-white rounded-full">                    <Image src={logo2} alt="logo1" className="rounded-full w-[100px]"></Image></div>
                    <p>Toyota</p>
                </div>
                <div className=" text-center mr-5">
                    <div className="bg-white rounded-full">                    <Image src={logo3} alt="logo1" className="rounded-full w-[100px]"></Image></div>
                    <p>Changan</p>
                </div>
                <div className=" text-center mr-5">
                    <div className="bg-white rounded-full">                    <Image src={logo4} alt="logo1" className="rounded-full w-[100px]"></Image></div>
                    <p>GUGO</p>
                </div>
                <div className=" text-center mr-5">
                    <div className="bg-white rounded-full">                    <Image src={logo5} alt="logo1" className="rounded-full w-[100px]"></Image></div>
                    <p>Audi</p>
                </div>
                <div className=" text-center mr-5">
                    <div className="bg-white rounded-full">                    <Image src={logo6} alt="logo1" className="rounded-full w-[100px]"></Image></div>
                    <p>BMW</p>
                </div>
        </div>
            <div className="flex justify-between mt-10">
                <div className=" text-center mr-5">
                    <div className="bg-white rounded-full">                    <Image src={logo7} alt="logo1" className="rounded-full w-[100px]"></Image></div>
                    <p>Deepal</p>
                </div>
                <div className=" text-center mr-5">
                    <div className="bg-white rounded-full">                    <Image src={logo8} alt="logo1" className="rounded-full w-[100px]"></Image></div>
                    <p>Honda</p>
                </div>
                <div className=" text-center mr-5">
                    <div className="bg-white rounded-full">                    <Image src={logo9} alt="logo1" className="rounded-full w-[100px]"></Image></div>
                    <p>JMC</p>
                </div>
                <div className=" text-center mr-5">
                    <div className="bg-white rounded-full">                    <Image src={logo10} alt="logo1" className="rounded-full w-[100px]"></Image></div>
                    <p>MG</p>
                </div>
                <div className=" text-center mr-5">
                    <div className="bg-white rounded-full">                    <Image src={logo11} alt="logo1" className="rounded-full w-[100px]"></Image></div>
                    <p>Mercedes Benz</p>
                </div>
                <div className=" text-center mr-5">
                    <div className="bg-white rounded-full">                    <Image src={logo9} alt="logo1" className="rounded-full w-[100px]"></Image></div>
                    <p>JMC</p>
                </div>
        </div>
            <div className="flex justify-between mt-10">
                <div className=" text-center mr-5">
                    <div className="bg-white rounded-full">                    <Image src={logo17} alt="logo1" className="rounded-full w-[100px]"></Image></div>
                    <p>Audi</p>
                </div>
                <div className=" text-center mr-5">
                    <div className="bg-white rounded-full">                    <Image src={logo14} alt="logo1" className="rounded-full w-[100px]"></Image></div>
                    <p>BAIC</p>
                </div>
                <div className=" text-center mr-5">
                    <div className="bg-white rounded-full">                    <Image src={logo15} alt="logo1" className="rounded-full w-[100px]"></Image></div>
                    <p>Proton</p>
                </div>
                <div className=" text-center mr-5">
                    <div className="bg-white rounded-full">                    <Image src={logo16} alt="logo1" className="rounded-full w-[100px]"></Image></div>
                    <p>ORA</p>
                </div>
                <div className=" text-center mr-5">
                    <div className="bg-white rounded-full">                    <Image src={logo17} alt="logo1" className="rounded-full w-[100px]"></Image></div>
                    <p>Mercedes</p>
                </div>
                <div className=" text-center mr-5">
                    <div className="bg-white rounded-full">                    <Image src={logo1} alt="logo1" className="rounded-full w-[100px]"></Image></div>
                    <p>Suzuki</p>
                </div>
        </div>
            <div className="flex justify-between mt-10">
                <div className=" text-center mr-5">
                    <div className="bg-white rounded-full">                    <Image src={logo2} alt="logo1" className="rounded-full w-[100px]"></Image></div>
                    <p>Honda</p>
                </div>
                <div className=" text-center mr-5">
                    <div className="bg-white rounded-full">                    <Image src={logo3} alt="logo1" className="rounded-full w-[100px]"></Image></div>
                    <p>Changan</p>
                </div>
                <div className=" text-center mr-5">
                    <div className="bg-white rounded-full">                    <Image src={logo7} alt="logo1" className="rounded-full w-[100px]"></Image></div>
                    <p>Deepal</p>
                </div>
                <div className=" text-center mr-5">
                    <div className="bg-white rounded-full">                    <Image src={logo9} alt="logo1" className="rounded-full w-[100px]"></Image></div>
                    <p>JMC</p>
                </div>
                <div className=" text-center mr-5">
                    <div className="bg-white rounded-full">                    <Image src={logo14} alt="logo1" className="rounded-full w-[100px]"></Image></div>
                    <p>BAIC</p>
                </div>
                <div className=" text-center mr-5">
                    <div className="bg-white rounded-full">                    <Image src={logo12} alt="logo1" className="rounded-full w-[100px]"></Image></div>
                    <p>Tesla</p>
                </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default FeaNewcar;
