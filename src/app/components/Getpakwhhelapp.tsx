import React from 'react'
import news1 from '../../../public/AppGalry.jpg'
import news2 from '../../../public/Store.jpg'
import news3 from '../../../public/Apple.jpg'
import scan from '../../../public/scan img.jpg'
import app from '../../../public/app pic.jpg'
import Image from 'next/image'

function Getpakwhhelapp() {
  return (
    <div>
        <div className='w-full'>
            <div className='max-w-6xl p-10 px-28 ml-10'>
            <div className='flex justify-between gap-10'>
            <div className='w-[500px]'>
            <h1 className='text-3xl font-semibold text-blue-800'>Get The PakWheels App</h1>
            <p className='mt-5 text-gray-600'>Buy & Sell Cars, Bikes and Auto Parts faster and better
            using our App</p>
            <div className='flex gap-2 mt-10'>
                <Image src={news1} alt='app pics' className='w-[100px] h-[50px] rounded-lg'></Image>
                <Image src={news2} alt='app pics' className='w-[100px] h-[50px] rounded-lg'></Image>
                <Image src={news3} alt='app pics' className='w-[100px] h-[50px] rounded-lg'></Image>
            </div>
            </div>
            <div className='block w-[400px]'>
            <div className='flex gap-2 mt-10'>
                <Image src={scan} alt='app pics' className='w-[250px] h-[200px]'></Image>
            </div>
            </div>
            <div className='block w-[400px]'>
            <div className='flex gap-2 mt-10'>
                <Image src={app} alt='app pics' className='w-[200px] h-[200px]'></Image>
            </div>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Getpakwhhelapp