import React from 'react'
import news1 from '../../../public/new1.jpg'
import news2 from '../../../public/new2.jpg'
import Image from 'next/image'

function NewsDiscuss() {
  return (
    <div>
        <div className='w-full bg-gray-200'>
        <div className="max-w-5xl mx-auto px-4 py-8">
  {/* Heading Section */}
  <div className="flex justify-between items-center">
    <h2 className="text-2xl font-semibold">News, Reviews &amp; Discussions</h2>
    <a href="#" className="text-blue-500 hover:underline">
      Read All Recent News
    </a>
  </div>
  {/* Tabs */}
  <div className="mt-4 flex space-x-8 border-b border-gray-300">
    <button className="pb-2 text-blue-500 border-b-2 border-blue-500">
      Automotive News
    </button>
    <button className="pb-2 text-gray-500 hover:text-blue-500">
      Car Reviews
    </button>
    <button className="pb-2 text-gray-500 hover:text-blue-500">
      Discussions
    </button>
  </div>
  {/* Content Section */}
  <div className="mt-4 space-y-4">
    {/* Article 1 */}
    <div className="flex space-x-4">
      <Image
        src={news1}
        alt="Petrol Price Image"
        className="w-32 h-20 object-cover rounded"
      ></Image>
      <div>
        <h3 className="font-semibold text-blue-500 hover:underline">
          Petrol Price in Pakistan is Increased by Rs. 3.72/Liter
        </h3>
        <p className="text-sm text-gray-500">November 30, 2024</p>
        <p className="text-sm text-gray-700 mt-1 w-[450px]">
          Petrol price in Pakistan has been revised by the federal government
          for the next fortnight. The new prices will be applicable from
          December 1, 2024. According to a notification by the Ministry of
          Finance...
        </p>
      </div>
    </div>
    {/* Article 2 */}
    <div className="flex space-x-4">
    <Image
        src={news2}
        alt="Petrol Price Image"
        className="w-32 h-20 object-cover rounded"
      ></Image>
      <div>
        <h3 className="text font-semibold text-blue-500 hover:underline">
          First Locally Assembled Seres 3 EV Rolled Out – Price, Specs and
          Pho...
        </h3>
        <p className="text-sm text-gray-500">November 30, 2024</p>
        <p className="text-sm text-gray-700 mt-1 w-[450px]">
          Regal Motors today rolled out the first locally assembled Seres 3 EV.
          The company held an event attended by the top officials of the
          company. Here are all the details we know about the new car...
        </p>
      </div>
    </div>
  </div>
        </div>
        </div>

    </div>
  )
}

export default NewsDiscuss