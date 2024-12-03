import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Hero() {
  return (
    <div>
      <div className='w-full flex justify-center bg-gradient-to-t from-blue-900 to-[#000000]'>
      <div className='max-w-7xl p-10 px-10'>
        <div className='flex h-[400px] justify-center items-center '>
        <div className='mb-10 text-center'>
          <h1 className='text-white text-3xl font-medium'>Find Used Cars in Pakistan</h1>
      <p className='text-white text-[15px] font-light'>With thousands of cars, we have just the right one for you</p>
      {/* search bar  */}
      <div className=" p-4">
  <div className="flex flex-col sm:flex-row items-center max-w-5xl mx-auto bg-white rounded-md shadow-md overflow-hidden">
    {/* Input for Car Make or Model */}
    <input
      type="text"
      placeholder="Car Make or Model"
      className="flex-grow px-4 w-[100%] py-2 text-gray-700 border-none focus:outline-none"
    />
    {/* Dropdown for All Cities */}
    <div className="relative border-l w-[80%] border-gray-200">
      <select className="block appearance-none w-full px-6 py-2 bg-white text-gray-700 border-none focus:outline-none cursor-pointer">
        <option value="">All Cities</option>
        <option value="Karachi">Karachi</option>
        <option value="Lahore">Lahore</option>
        <option value="Islamabad">Islamabad</option>
      </select>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 absolute right-2 top-3 pointer-events-none"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    {/* Dropdown for Price Range */}
    <div className="relative border-l w-[80%] border-gray-200">
      <select className="block appearance-none w-full px-6 py-2 bg-white text-gray-700 border-none focus:outline-none cursor-pointer">
        <option value="">Price Range</option>
        <option value="10000-20000">10,000 - 20,000</option>
        <option value="20000-30000">20,000 - 30,000</option>
        <option value="30000+">30,000+</option>
      </select>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 absolute right-2 top-3 pointer-events-none"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    {/* Search Button */}
    <button className="bg-green-500 hover:bg-green-600 px-4 py-2 text-white font-bold border-none focus:outline-none">
      <FontAwesomeIcon icon={faSearch}
      size="2x"
      />
    </button>
  </div>
</div>
</div>
      </div>
    </div>
  </div>
        {/* 2nd div for hero  */}
        <div className='w-full flex justify-center'>
          <div className='max-w-7xl p-10 px-10'>
          <div className="bg-white py-40 px-4">
  <div className="max-w-6xl mx-auto text-center mb-8">
    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
      Sell Your Car on PakWheels and Get the Best Price
    </h2>
  </div>
  <div className="max-w-6xl mx-auto bg-white rounded-md overflow-hidden flex flex-col sm:flex-row">
    {/* Left Section */}
    <div className="flex-1 p-6 border-l-2 border-gray-300">
      <h3 className="text-lg font-semibold text-blue-800 mb-4">
        Post your Ad on PakWheels
      </h3>
      <ul className="text-gray-600 space-y-2">
        <li className="flex items-center">
          <span className="text-green-500 font-bold text-lg mr-2">✔</span>
          Post your Ad for Free in 3 Easy Steps
        </li>
        <li className="flex items-center">
          <span className="text-green-500 font-bold text-lg mr-2">✔</span>
          Get Genuine offers from Verified Buyers
        </li>
        <li className="flex items-center">
          <span className="text-green-500 font-bold text-lg mr-2">✔</span>
          Sell your car Fast at the Best Price
        </li>
      </ul>
      <button className="mt-4 bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700">
        Post Your Ad
      </button>
    </div>
    {/* Divider */}
    <div className="hidden sm:block w-px bg-gray-300 " />
    {/* Right Section */}
    <div className="flex-1 p-6 border-r-2 border-gray-300">
      <h3 className="text-lg font-semibold text-blue-800 mb-4">
        Try PakWheels Sell It For Me
      </h3>
      <ul className="text-gray-600 space-y-2">
        <li className="flex items-center">
          <span className="text-green-500 font-bold text-lg mr-2">✔</span>
          Dedicated Sales Expert to Sell your Car
        </li>
        <li className="flex items-center">
          <span className="text-green-500 font-bold text-lg mr-2">✔</span>
          We Bargain for you and share the Best Offer
        </li>
        <li className="flex items-center">
          <span className="text-green-500 font-bold text-lg mr-2">✔</span>
          We ensure Safe & Secure Transaction
        </li>
      </ul>
      <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
        Register Your Car
      </button>
    </div>
  </div>
</div>  
          </div>
        </div>
      </div>

  )
}

export default Hero