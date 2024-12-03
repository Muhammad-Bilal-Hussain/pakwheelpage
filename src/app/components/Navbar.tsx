"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { faTag } from "@fortawesome/free-solid-svg-icons/faTag";
import { faBook } from "@fortawesome/free-solid-svg-icons/faBook";
import { faBullseye } from "@fortawesome/free-solid-svg-icons/faBullseye";
import { faCheck, faMobile, faMobileAndroid, faMobilePhone, faShoppingCart, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faSheetPlastic } from "@fortawesome/free-solid-svg-icons/faSheetPlastic";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {/* top part  */}
      <div className="bg-black text-white w-full flex justify-center">
        <div className="max-w-7xl px-10">
        <div className="">
        <div className="flex px-10 justify-between content-center ml-2 mr-2 border-b-2 border-gray-300">
      <div className="m-5">
      <p className="font-normal"><FontAwesomeIcon icon={faMobilePhone} className="mr-2 ml-2"/>Download App via SMS</p>
      </div>
      <div className="flex items-center">
      <a href="" className="mr-2 ">اردو</a>
      <div className="border-l-2 border-r-2 border-gray-200">      
        <a href="" className="mr-2 ml-2 ">Sign Up</a>
        </div>
      <a href="" className="mr-2 ml-2 ">Sign In</a>
      </div>
      </div>
        </div>
          <div className="flex justify-center items-center">
        {/* navbar start  */}
            <header className="shadow-md -top-0 bg-gradient-to-t from-[#000000] to-[#000003] font-[sans-serif] tracking-wide relative z-50">
      <div className="flex justify-between items-center px-16 py-3">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-[#ffffff]">
          MyWebsite
        </a>

        {/* Hamburger Menu Button */}
        <button
          id="toggleMenu"
          onClick={handleToggle}
          className="lg:hidden p-2 text-white"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-5 absolute lg:static top-16 left-0 bg-black w-[50%] lg:w-auto lg:bg-transparent shadow-md lg:shadow-none z-50`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 px-16 lg:px-16">
            {/* first drop down  */}
          <li className="relative group">
              <a
                href="#"
                className="block text-white hover:bg-[#fff] hover:text-[red] py-2 px-2"
              >
                Used Cars
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-1 inline-block"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16" data-original="#000000" />
                </svg>
              </a>
              {/* Dropdown Menu */}
              <div className="absolute hidden group-hover:flex bg-white shadow-md p-6 w-[900px] left-0 mt-2"
                style={{ zIndex: 1000 }}
  >
                {/* 1st colume  */}
                <div className="w-[40%] border-r-2 border-gray-300 mr-5">
                <a href="#" className="font-semibold block text-gray-600 hover:text-[#007bff]"> <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="mr-2"
      />Find Cars</a>
      <p className="text-gray-300 text-sm font-light mt-0 mb-2 ml-5">Search from over 110k options</p>
      <ul>
        <li>
          <a
            href="#"
            className="block text-gray-600 hover:text-[#007bff]"
          ><FontAwesomeIcon icon={faStar} className="mr-2"/> 
            Find Used Cars for Sale
          </a>
          <p className="text-gray-300 text-sm font-light mt-0 mb-2 ml-5">Search from over 110k options</p>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-600 hover:text-[#007bff] mb-1"
          ><FontAwesomeIcon icon={faTag} className="mr-2"/>
            Featured Used Cars
          </a>
          <p className="text-gray-300 text-sm font-light mt-0 mb-2 ml-5">Search from over 110k options</p>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-600 hover:text-[#007bff] mb-1"
          ><FontAwesomeIcon icon={faBook} className="mr-2"/>
            Sell Your Car
          </a>
          <p className="text-gray-300 text-sm font-light mt-0 mb-2 ml-5">Search from over 110k options</p>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-600 hover:text-[#007bff] mb-1"
          ><FontAwesomeIcon icon={faBullseye} className="mr-2"/>
            Price Calculator
          </a>
          <p className="text-gray-300 text-sm font-light mt-0 mb-2 ml-5">Search from over 110k options</p>
        </li>
      </ul>
              </div>
              {/* 2nd colume  */}
              <div className="w-[45%] border-r-2 border-gray-300 mr-5">
                <a href="#" className="font-semibold text-[16px] block text-gray-600 hover:text-[#007bff]"> <FontAwesomeIcon
        icon={faCheck}
        className="mr-2"
      />PakWheels Certified Cars</a>
      <p className="text-gray-300 text-sm font-light mt-0 mb-2 ml-5">Search from over 110k options</p>
      <ul>
        <li>
          <a
            href="#"
            className="block text-gray-600 hover:text-[#007bff]"
          ><FontAwesomeIcon icon={faThumbsUp} className="mr-2"/> 
            Find Used Cars for Sale
          </a>
          <p className="text-gray-300 text-sm font-light mt-0 mb-2 ml-5">Search from over 110k options</p>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-600 hover:text-[#007bff] mb-1"
          ><FontAwesomeIcon icon={faThumbsUp} className="mr-2"/>
            Featured Used Cars
          </a>
          <p className="text-gray-300 text-sm font-light mt-0 mb-2 ml-5">Search from over 110k options</p>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-600 hover:text-[#007bff] mb-1"
          ><FontAwesomeIcon icon={faSheetPlastic} className="mr-2"/>
            Sell Your Car
          </a>
          <p className="text-gray-300 text-sm font-light mt-0 mb-2 ml-5">Search from over 110k options</p>
        </li>
      </ul>
              </div>
             {/* 3rd colume  */}
              <div className="w-[30%] border-r-2 border-gray-300 mr-5">
      <a href="#" className="font-semibold text-gray-600 hover:text-[#007bff] mb-2"><FontAwesomeIcon icon={faLocationDot} className="mr-2"/> Popular Cities</a>
      <ul>
        <li>
          <a
            href="#"
            className="block text-gray-400 hover:text-[#007bff] mb-1 mt-2 ml-6"
          >
            Karachi
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-400 hover:text-[#007bff] mb-1 ml-6"
          >
            Lahore
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-400 hover:text-[#007bff] mb-1 ml-6"
          >
            Islamabad
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-400 hover:text-[#007bff] mb-1 ml-6"
          >
            Multan
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-400 hover:text-[#007bff] mb-1 ml-6"
          >
            Peshawar
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-400 hover:text-[#007bff] mb-1 ml-6"
          >
            Gujrawala
          </a>
        </li>
      </ul>
              </div>
              {/* 4th colume  */}
              <div className="w-[30%]  mr-5">
      <a href="#" className="font-semibold text-gray-600 hover:text-[#007bff] mb-2"><FontAwesomeIcon icon={faLocationDot} className="mr-2"/> Popular Models</a>
      <ul>
        <li>
          <a
            href="#"
            className="block text-gray-400 hover:text-[#007bff] mb-1 mt-2 ml-6"
          >
            Toyota Corolla
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-400 hover:text-[#007bff] mb-1 ml-6"
          >
            Honda Civic
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-400 hover:text-[#007bff] mb-1 ml-6"
          >
            Honda City
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-400 hover:text-[#007bff] mb-1 ml-6"
          >
            Suzuki Cultus
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-400 hover:text-[#007bff] mb-1 ml-6"
          >
            Suzuki Mehran
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-400 hover:text-[#007bff] mb-1 ml-6"
          >
            Toyota Vitz
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-400 hover:text-[#007bff] mb-1 ml-6"
          >
            Suzuki Alto
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-400 hover:text-[#007bff] mb-1 ml-6"
          >
            Toyota Prado
          </a>
        </li>
      </ul>
              </div>
              </div>
            </li>
            {/* 2nd nav option  */}
          <li className="relative group">
              <a
                href="#"
                className="block text-white hover:bg-[#fff] hover:text-[red] py-2 px-2"
              >
                New Cars
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-1 inline-block"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16" data-original="#000000" />
                </svg>
              </a>
              {/* Dropdown Menu */}
              <div className="absolute hidden group-hover:flex bg-white shadow-md p-6 w-[900px] left-0 mt-2"
                style={{ zIndex: 1000 }}
  >
                {/* 1st colume  */}
                <div className="w-[40%] border-r-2 border-gray-300 mr-5">
                <a href="#" className="font-semibold block text-gray-600 hover:text-[#007bff]"> <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="mr-2"
      />Find Cars</a>
      <p className="text-gray-300 text-sm font-light mt-0 mb-2 ml-5">Search from over 110k options</p>
      <ul>
        <li>
          <a
            href="#"
            className="block text-gray-600 hover:text-[#007bff]"
          ><FontAwesomeIcon icon={faStar} className="mr-2"/> 
            Find Used Cars for Sale
          </a>
          <p className="text-gray-300 text-sm font-light mt-0 mb-2 ml-5">Search from over 110k options</p>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-600 hover:text-[#007bff] mb-1"
          ><FontAwesomeIcon icon={faTag} className="mr-2"/>
            Featured Used Cars
          </a>
          <p className="text-gray-300 text-sm font-light mt-0 mb-2 ml-5">Search from over 110k options</p>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-600 hover:text-[#007bff] mb-1"
          ><FontAwesomeIcon icon={faBook} className="mr-2"/>
            Sell Your Car
          </a>
          <p className="text-gray-300 text-sm font-light mt-0 mb-2 ml-5">Search from over 110k options</p>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-600 hover:text-[#007bff] mb-1"
          ><FontAwesomeIcon icon={faBullseye} className="mr-2"/>
            Price Calculator
          </a>
          <p className="text-gray-300 text-sm font-light mt-0 mb-2 ml-5">Search from over 110k options</p>
        </li>
      </ul>
              </div>
              {/* 2nd colume  */}
              <div className="w-[45%] border-r-2 border-gray-300 mr-5">
                <a href="#" className="font-semibold text-[16px] block text-gray-600 hover:text-[#007bff]"> <FontAwesomeIcon
        icon={faCheck}
        className="mr-2"
      />PakWheels Certified Cars</a>
      <p className="text-gray-300 text-sm font-light mt-0 mb-2 ml-5">Search from over 110k options</p>
      <ul>
        <li>
          <a
            href="#"
            className="block text-gray-600 hover:text-[#007bff]"
          ><FontAwesomeIcon icon={faThumbsUp} className="mr-2"/> 
            Find Used Cars for Sale
          </a>
          <p className="text-gray-300 text-sm font-light mt-0 mb-2 ml-5">Search from over 110k options</p>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-600 hover:text-[#007bff] mb-1"
          ><FontAwesomeIcon icon={faThumbsUp} className="mr-2"/>
            Featured Used Cars
          </a>
          <p className="text-gray-300 text-sm font-light mt-0 mb-2 ml-5">Search from over 110k options</p>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-600 hover:text-[#007bff] mb-1"
          ><FontAwesomeIcon icon={faSheetPlastic} className="mr-2"/>
            Sell Your Car
          </a>
          <p className="text-gray-300 text-sm font-light mt-0 mb-2 ml-5">Search from over 110k options</p>
        </li>
      </ul>
              </div>
             {/* 3rd colume  */}
              <div className="w-[30%] mr-5">
      <a href="#" className="font-semibold text-gray-600 hover:text-[#007bff] mb-2"><FontAwesomeIcon icon={faLocationDot} className="mr-2"/> Popular Cities</a>
      <ul>
        <li>
          <a
            href="#"
            className="block text-gray-400 hover:text-[#007bff] mb-1 mt-2 ml-6"
          >
            Karachi
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-400 hover:text-[#007bff] mb-1 ml-6"
          >
            Lahore
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-400 hover:text-[#007bff] mb-1 ml-6"
          >
            Islamabad
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-400 hover:text-[#007bff] mb-1 ml-6"
          >
            Multan
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-400 hover:text-[#007bff] mb-1 ml-6"
          >
            Peshawar
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-400 hover:text-[#007bff] mb-1 ml-6"
          >
            Gujrawala
          </a>
        </li>
      </ul>
              </div>
              </div>
            </li>
            {/* 3rd nav option  */}
          <li className="relative group">
              <a
                href="#"
                className="block text-white hover:bg-[#fff] hover:text-[red] py-2 px-2"
              >
                Bikes
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-1 inline-block"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16" data-original="#000000" />
                </svg>
              </a>
              {/* Dropdown Menu */}
              <div className="absolute hidden group-hover:flex bg-white shadow-md p-6 w-[900px] left-0 mt-2"
                style={{ zIndex: 1000 }}
  >
                {/* 1st colume  */}
                <div className="w-[45%] border-r-2 border-gray-300 mr-5">
                <a href="#" className="font-semibold block text-gray-600 hover:text-[#007bff]"> <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="mr-2"
      />Find Bikes</a>
      <p className="text-gray-300 text-sm font-light mt-0 mb-2 ml-5">Search from over 110k options</p>
      <ul>
        <li>
          <a
            href="#"
            className="block text-gray-600 hover:text-[#007bff]"
          ><FontAwesomeIcon icon={faStar} className="mr-2"/> 
            Find Used Bikes for Sale
          </a>
          <p className="text-gray-300 text-sm font-light mt-0 mb-2 ml-5">Search from over 110k options</p>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-600 hover:text-[#007bff] mb-1"
          ><FontAwesomeIcon icon={faTag} className="mr-2"/>
            Featured Used Bikes
          </a>
          <p className="text-gray-300 text-sm font-light mt-0 mb-2 ml-5">Search from over 110k options</p>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-600 hover:text-[#007bff] mb-1"
          ><FontAwesomeIcon icon={faBook} className="mr-2"/>
            Sell Your Bikes
          </a>
          <p className="text-gray-300 text-sm font-light mt-0 mb-2 ml-5">Search from over 110k options</p>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-600 hover:text-[#007bff] mb-1"
          ><FontAwesomeIcon icon={faBullseye} className="mr-2"/>
            Price Calculator
          </a>
          <p className="text-gray-300 text-sm font-light mt-0 mb-2 ml-5">Search from over 110k options</p>
        </li>
      </ul>
              </div>
              {/* 2nd colume  */}
              <div className="w-[50%] border-r-2 border-gray-300 mr-5">
                <a href="#" className="font-semibold text-[16px] block text-gray-600 hover:text-[#007bff]"> <FontAwesomeIcon
        icon={faCheck}
        className="mr-2"
      />PakWheels Certified Bikes</a>
      <p className="text-gray-300 text-sm font-light mt-0 mb-2 ml-5">Search from over 110k options</p>
      <ul>
        <li>
          <a
            href="#"
            className="block text-gray-600 hover:text-[#007bff]"
          ><FontAwesomeIcon icon={faThumbsUp} className="mr-2"/> 
            Find Used Bikes for Sale
          </a>
          <p className="text-gray-300 text-sm font-light mt-0 mb-2 ml-5">Search from over 110k options</p>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-600 hover:text-[#007bff] mb-1"
          ><FontAwesomeIcon icon={faThumbsUp} className="mr-2"/>
            Featured Used Bikes
          </a>
          <p className="text-gray-300 text-sm font-light mt-0 mb-2 ml-5">Search from over 110k options</p>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-600 hover:text-[#007bff] mb-1"
          ><FontAwesomeIcon icon={faSheetPlastic} className="mr-2"/>
            Sell Your Bikes
          </a>
          <p className="text-gray-300 text-sm font-light mt-0 mb-2 ml-5">Search from over 110k options</p>
        </li>
      </ul>
              </div>
             {/* 3rd colume  */}
              <div className="w-[30%] border-r-2 border-gray-300 mr-2">
      <a href="#" className="font-semibold text-gray-600 hover:text-[#007bff] mb-2"><FontAwesomeIcon icon={faLocationDot} className="mr-2"/> Popular Cities</a>
      <ul>
        <li>
          <a
            href="#"
            className="block text-gray-400 hover:text-[#007bff] mb-1 mt-2 ml-6"
          >
            Karachi
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-400 hover:text-[#007bff] mb-1 ml-6"
          >
            Lahore
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-400 hover:text-[#007bff] mb-1 ml-6"
          >
            Islamabad
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-400 hover:text-[#007bff] mb-1 ml-6"
          >
            Multan
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-400 hover:text-[#007bff] mb-1 ml-6"
          >
            Peshawar
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-400 hover:text-[#007bff] mb-1 ml-6"
          >
            Gujrawala
          </a>
        </li>
      </ul>
              </div>
              {/* 4th colume  */}
              <div className="w-[30%] mr-5">
      <a href="#" className="font-semibold text-gray-600 hover:text-[#007bff] mb-2"><FontAwesomeIcon icon={faLocationDot} className="mr-2"/> Popular Bikes</a>
      <ul>
        <li>
          <a
            href="#"
            className="block text-gray-400 hover:text-[#007bff] mb-1 mt-2 ml-6"
          >
            Super Power
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-400 hover:text-[#007bff] mb-1 ml-6"
          >
            Honda 70cc
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-400 hover:text-[#007bff] mb-1 ml-6"
          >
            Honda 125cc
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-400 hover:text-[#007bff] mb-1 ml-6"
          >
            Super Star
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-400 hover:text-[#007bff] mb-1 ml-6"
          >
            Super Speed 
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-400 hover:text-[#007bff] mb-1 ml-6"
          >
            Speed
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-400 hover:text-[#007bff] mb-1 ml-6"
          >
            Suzuki 125cc
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-400 hover:text-[#007bff] mb-1 ml-6"
          >
            Suzuki 200cc
          </a>
        </li>
      </ul>
              </div>
              </div>
            </li>
            {/* 4th nav option  */}
          <li className="relative group">
              <a
                href="#"
                className="block text-white hover:bg-[#fff] hover:text-[red] py-2 px-2"
              >
                Auto Store
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-1 inline-block"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16" data-original="#000000" />
                </svg>
              </a>
              {/* Dropdown Menu */}
              <div className="absolute hidden group-hover:flex bg-white shadow-md p-6 w-[300px] left-0 mt-2"
                style={{ zIndex: 1000 }}
  >
                {/* 1st colume  */}
                <div className="w-[100%] mr-5">
                <a href="#" className="font-semibold block text-gray-600 hover:text-[#007bff]"> <FontAwesomeIcon
        icon={faShoppingCart}
        className="mr-2"
      />PakWheel Auto Store</a>
      <p className="text-gray-300 text-sm font-light mt-0 mb-5 ml-6">Buy auto part and accessories directly from PakWheels</p>
      <ul>
        <li>
          <a
            href="#"
            className="block text-gray-600 hover:text-[#007bff] "
          ><FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2 "/> 
            Find Auto Parts
          </a>
          <p className="text-gray-300 text-sm font-light mt-0 mb-5 ml-6">Search from over 110k options</p>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-600 hover:text-[#007bff] mb-1"
          ><FontAwesomeIcon icon={faTag} className="mr-2"/>
            Sell For Car Parts
          </a>
          <p className="text-gray-300 text-sm font-light mt-0 mb-2 ml-5">Search from over 110k options</p>
        </li>
      </ul>
              </div>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="block text-white hover:bg-[#fff] hover:text-[red] py-2 px-2"
              >
                Videos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-white hover:bg-[#fff] hover:text-[red] py-2 px-2"
              >
                Forums
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-white hover:bg-[#fff] hover:text-[red] py-2 px-2"
              >
                Blogs
              </a>
            </li>
            <li className="relative group">
              <a
                href="#"
                className="block text-white hover:bg-[#fff] hover:text-[red] py-2 px-2"
              >
                More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-1 inline-block"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16" data-original="#000000" />
                </svg>
              </a>
              {/* Dropdown Menu */}
              <div className="absolute hidden group-hover:flex bg-white shadow-md p-6 w-[300px] left-0 mt-2"
                style={{ zIndex: 1000 }}
  >
                {/* 1st colume  */}
                <div className="w-[100%] mr-5">
                <a href="#" className="font-semibold block text-gray-600 hover:text-[#007bff]"> <FontAwesomeIcon
        icon={faShoppingCart}
        className="mr-2"
      />PakWheel Auto Store</a>
      <p className="text-gray-300 text-sm font-light mt-0 mb-5 ml-6">Buy auto part and accessories directly from PakWheels</p>
      <ul>
        <li>
          <a
            href="#"
            className="block text-gray-600 hover:text-[#007bff] "
          ><FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2 "/> 
            Find Auto Parts
          </a>
          <p className="text-gray-300 text-sm font-light mt-0 mb-5 ml-6">Search from over 110k options</p>
        </li>
        <li>
          <a
            href="#"
            className="block text-gray-600 hover:text-[#007bff] mb-1"
          ><FontAwesomeIcon icon={faTag} className="mr-2"/>
            Sell For Car Parts
          </a>
          <p className="text-gray-300 text-sm font-light mt-0 mb-2 ml-5">Search from over 110k options</p>
        </li>
      </ul>
              </div>
              </div>
            </li>
            <li className="relative group">
              <a
                href="#"
                className="block bg-red-700 rounded-lg text-white w-[120px] text-center font-semibold py-2 "
              >
                Post an Ad
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-1 inline-block"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16" data-original="#000000" />
                </svg>
              </a>
              {/* Dropdown Menu */}
              <ul className="absolute hidden group-hover:block bg-white shadow-md py-2 w-40 transition-all duration-300 ease-in-out opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-400 hover:text-[#007bff]"
                  >
                    Sell Car
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-400  hover:text-[#007bff]"
                  >
                    Sell Bike
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-400 hover:text-[#007bff]"
                  >
                    Sell Accessory
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar