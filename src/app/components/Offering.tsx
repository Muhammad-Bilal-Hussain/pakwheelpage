import Image from 'next/image'
import React from 'react'
import offer1 from '../../../public/offer1.png'
import offer2 from '../../../public/offer2.png'
import offer3 from '../../../public/offer3.png'
import offer4 from '../../../public/offer4.png'
import offer5 from '../../../public/offer5.png'
import offer6 from '../../../public/offer6.png'
import offer7 from '../../../public/offer7.png'
import offer8 from '../../../public/offer8.png'

function Offering() {
  return (
    <div>
        <div className='w-full'>
        <div className='flex justify-center'>
            <div className='w-6xl'>
            <div className="grid grid-cols-2 gap-4">
        <div className='col-span-2 flex items-center'>            
        <p className='text-3xl font-medium ml-10 -mb-10 mt-10'>PakWheels Offerings</p>
        </div>
    <div className="col-start-1 col-end-1 ">
                {/* first row  */}
                <div className='m-10 sm:w-full '>
                    <div className='border-2 border-gray-300 flex hover:shadow-lg mb-10 w-[448px] h-[100px] items-center'>
                    <Image src={offer1} alt='Offer Car' className='ml-4 w-28'></Image>
                    <div className='ml-6 font-semibold'>
                    <a href="#" className='text-blue-900 hover:text-[#3888e3]'>PakWheels</a>
                    <p className='text-gray-600 text-[17px]'>SELL IT FOR ME</p>
                    </div>
                </div>
                    <div className='border-2 border-gray-300 flex hover:shadow-lg mb-10 w-[448px] h-[100px] items-center'>
                    <Image src={offer2} alt='Offer Car' className='ml-4 w-28'></Image>
                    <div className='ml-6 font-semibold'>
                    <a href="#" className='text-blue-900 hover:text-[#3888e3]'>PakWheels</a>
                    <p className='text-gray-600 text-[17px]'>SELL IT FOR ME</p>
                    </div>
                </div>
                    <div className='border-2 border-gray-300 flex hover:shadow-lg mb-10 w-[448px] h-[100px] items-center'>
                    <Image src={offer3} alt='Offer Car' className='ml-4 w-28'></Image>
                    <div className='ml-6 font-semibold'>
                    <a href="#" className='text-blue-900 hover:text-[#3888e3]'>PakWheels</a>
                    <p className='text-gray-600 text-[17px]'>SELL IT FOR ME</p>
                    </div>
                </div>
                    <div className='border-2 border-gray-300 flex hover:shadow-lg mb-10 w-[448px] h-[100px] items-center'>
                    <Image src={offer4} alt='Offer Car' className='ml-4 w-28'></Image>
                    <div className='ml-6 font-semibold'>
                    <a href="#" className='text-blue-900 hover:text-[#3888e3]'>PakWheels</a>
                    <p className='text-gray-600 text-[17px]'>SELL IT FOR ME</p>
                    </div>
                </div>
            </div>
    </div>
    <div className="col-start-2 ">
                {/* 2nd row */}
                <div className='m-10 sm:w-full '>
                    <div className='border-2 border-gray-300 flex hover:shadow-lg mb-10 w-[448px] h-[100px] items-center'>
                    <Image src={offer5} alt='Offer Car' className='ml-4 w-28'></Image>
                    <div className='ml-6 font-semibold'>
                    <a href="#" className='text-blue-900 hover:text-[#3888e3]'>PakWheels</a>
                    <p className='text-gray-600 text-[17px]'>SELL IT FOR ME</p>
                    </div>
                </div>
                    <div className='border-2 border-gray-300 flex hover:shadow-lg mb-10 w-[448px] h-[100px] items-center'>
                    <Image src={offer6} alt='Offer Car' className='ml-4 w-28'></Image>
                    <div className='ml-6 font-semibold'>
                    <a href="#" className='text-blue-900 hover:text-[#3888e3]'>PakWheels</a>
                    <p className='text-gray-600 text-[17px]'>SELL IT FOR ME</p>
                    </div>
                </div>
                    <div className='border-2 border-gray-300 flex hover:shadow-lg mb-10 w-[448px] h-[100px] items-center'>
                    <Image src={offer7} alt='Offer Car' className='ml-4 w-28'></Image>
                    <div className='ml-6 font-semibold'>
                    <a href="#" className='text-blue-900 hover:text-[#3888e3]'>PakWheels</a>
                    <p className='text-gray-600 text-[17px]'>SELL IT FOR ME</p>
                    </div>
                </div>
                    <div className='border-2 border-gray-300 flex hover:shadow-lg mb-10 w-[448px] h-[100px] items-center'>
                    <Image src={offer8} alt='Offer Car' className='ml-4 w-28'></Image>
                    <div className='ml-6 font-semibold'>
                    <a href="#" className='text-blue-900 hover:text-[#3888e3]'>PakWheels</a>
                    <p className='text-gray-600 text-[17px]'>SELL IT FOR ME</p>
                    </div>
                </div>
            </div>
    </div>
</div>
            </div>
            </div>
        </div>
</div>
  )
}

export default Offering