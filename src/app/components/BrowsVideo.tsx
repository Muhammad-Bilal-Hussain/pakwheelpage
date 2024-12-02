import Image from 'next/image'
import React from 'react'

function BrowsVideo() {
  return (
    <div>
        <div className='w-full'>
            <div className='max-w-7xl p-10 px-20'>
            <div className='p-10 flex justify-between'>
                        <h1 className='text-3xl font-semibold text-gray-800'>Browse Our Video</h1>
                        <p className='text-blue-700 hover:underline hover:text-blue-500'>View All Video</p>
                    </div>
                <div className='flex justify-center'>
                <div className='grid grid-cols-4 grid-rows-2 gap-4'>
                <div className='col-start-1 col-end-3 row-start-1 row-end-3 border-2 border-gray-200'>
                <div className="">
                <iframe src="https://www.youtube.com/embed/kvHcp0Yni1o?si=kvWA2zDcHj-NtaqX" 
                className='w-[540px] h-[300px]'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                  <p className='text-blue-700 hover:text-blue-500 ml-2 cursor-pointer'>Elantra Ny Ghar Bachaya | Owner Review.</p>
                </div>
                </div>
                <div className='lg:col-start-3 col-end-3 lg:row-start-1 row-end-2 border-2 sm:col-start-1 sm:row-start-2 border-gray-200'>
                <div className="aspect-w-16 aspect-h-16">
                <iframe src="https://www.youtube.com/embed/tQ5KnPOcJqE?si=QNZ2x7xPpVP98Mcm" 
                className='w-[260px] h-[120px]'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                    <p className='text-blue-700 hover:text-blue-500 ml-2 cursor-pointer'>Hyundai Ioniq 6 ke discussion</p>
                </div>
                </div>
                <div className='lg:col-start-4 col-end-5 border-2 sm:col-start-1 border-gray-200 lg:row-start-1 row-end-2 sm:row-start-3'>
                <div className="aspect-w-16 aspect-h-16">
                <iframe src="https://www.youtube.com/embed/sRwxM5UNk2s?si=64S4ZmjP8nIKB4WT" 
                className='w-[260px] h-[120px]'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                  </iframe>
                  <p className='text-blue-700 hover:text-blue-500 ml-2 cursor-pointer'>Old Prado vs New Prado | PakWheels...</p>
                </div>
                </div>
                <div className='lg:row-start-2 row-end-3 lg:col-start-3 col-end-4 sm:col-start-1 border-2 border-gray-200 sm:row-start-4'>
                <div className="aspect-w-16 aspect-h-16">
                <iframe src="https://www.youtube.com/embed/-LEF_OJt_7k?si=YLi3EkPmgCv-ye9l" 
                className='w-[260px] h-[120px]'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                    <p className='text-blue-700 hover:text-blue-500 ml-2 cursor-pointer'>All New Toyota Land Cruiser Prado J2..</p>
                </div>
                </div>
                <div className='lg:row-start-2 row-end-3 lg:col-start-4 col-end-5 border-2 sm:col-start-1 border-gray-200 sm:row-start-5'>
                <div className="aspect-w-16 aspect-h-16">
                <iframe src="https://www.youtube.com/embed/F31FKbte4JY?si=XX9TqtoR8XPTvU2r" 
                className='w-[260px] h-[120px]'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                    <p className='text-blue-700 hover:text-blue-500 ml-2 cursor-pointer'>Shehzad Khan Garage Tour</p>
                </div>
                </div>
            </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BrowsVideo