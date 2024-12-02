import Image from 'next/image'
import React from 'react'
import comprison1  from '../../../public/car20.jpg'
import comprison2  from '../../../public/car21.png'

function Comparision() {
  return (
    <div>
        <div className='max-w-full'>
        <div className='max-w-4xl mx-auto py-10 px-4'>
            <div className='flex justify-between'>
                    <p className='text-2xl text-gray-500 font-bold  mb-5'>Car Comparisons </p>
                    <p className='text-blue-700 hover:text-blue-500 '>All Car Comparisons</p>
            </div>
            <div className='grid items-center border-2 border-gray-300 grid-col-2 '>
                <div className='col-start-1 col-end-2 sm:col-start-1'>
                    {/* comparison  */}
                    <div className=''> 
                    <div className='flex items-center ml-5 h-[300px]'>
                <div className='-mr-12'>
                    <Image src={comprison1} alt="" className='w-[200px]'></Image>
                    <p className='text-blue-500 hover:text-blue-700 ml-5'>Cherry Tiggi 8 Pro</p>
                </div>
                <div className='bg-white absolute ml-36 flex justify-center items-center rounded-full w-[80px] h-[80px]'>
                    <p className='bg-red-800 text-white items-center flex justify-center text-center rounded-full w-[60px] h-[60px]'>VS</p>
                </div>
                <div className='ml-10'>
                    <Image src={comprison2} alt="" className='w-[200px]'></Image>
                    <p className='text-blue-500 hover:text-blue-700 ml-5'>DFSK Glory 580</p>
                </div>
                    </div>
                    <div className='bg-white ml-10 -mt-10 mb-5'>
                    <p className='border-2 items-center flex justify-center border-blue-400 w-[350px] h-[40px] text-blue-700 hover:text-blue-500'>View Comparison</p>
                    </div>
            </div>
                </div>
                {/* 2nd side  */}
                <div className='lg:col-start-2 col-end-2 sm:col-start-1'>
                <div className=' flex '>                
                    <div className='flex items-center border-gray-200 border-b-2'>
                <div className='p-5'>
                        <div className='flex justify-center'>
                        <p className='text-black'>Honda City</p>
                        </div>
                        <div className='flex justify-center mt-2 mb-2'>
                        <p className='bg-red-800 text-white items-center flex justify-center text-center rounded-full w-[60px] h-[60px]'>VS</p>
                        </div>
                        <div className='flex justify-center'>
                        <p className='text-black  '>Toyota Yais</p>
                        </div>
                </div>
                    </div>
            </div>
                <div className=' flex'>                
                    <div className='flex items-center'>
                <div className='p-5'>
                        <div className='flex justify'>
                        <p className='text-black'>MG HS</p>
                        </div>
                        <div className='flex mt-2 mb-2'>
                        <p className='bg-red-800 text-white items-center flex justify-center text-center rounded-full w-[60px] h-[60px]'>VS</p>
                        </div>
                        <div className='flex '>
                        <p className='text-black'>Changan Oshan X7</p>
                        </div>
                </div>
                    </div>
            </div>
                </div>
            <div>

            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
export default Comparision