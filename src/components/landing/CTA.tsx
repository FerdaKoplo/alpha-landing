import Link from 'next/link'
import React from 'react'
import { FaBed } from 'react-icons/fa6'
import { IoIosArrowBack, IoIosArrowForward, IoIosTrendingUp } from 'react-icons/io'

const CTA = () => {
  return (
    <div className='px-4 lg:px-32 mt-20'>
        <div className='flex flex-col justify-center items-center gap-16 '>
            <h1 className='text-xl text-center lg:text-4xl font-bold font-montserrat'>Ada 2 Orang Business Owner Di dunia ini</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 '>
                <div className='flex flex-col items-center gap-10 text-brand group  bg-brand-bone py-9 rounded-xl px-5'>
                    <h1 className='text-6xl group-hover:translate-y-0 translate-y-full duration-300 opacity-0 group-hover:opacity-100'><IoIosTrendingUp /></h1>
                    <h2 className='text-sm text-center lg:text-xl group-hover:translate-y-0 translate-y-7 duration-300 '>Mereka yang ingin bisnisnya <span className='font-bold'>berkembang</span>  </h2>
                </div>
                <div className='flex flex-col items-center group  gap-10 text-brand bg-brand-bone py-10 overflow-hidden rounded-xl px-5'>
                    <h1 className='text-6xl group-hover:translate-x-0 -translate-x-10 duration-300 opacity-0 group-hover:opacity-100 '><FaBed /></h1>
                    <h2 className="text-sm lg:text-xl text-center group-hover:translate-y-0 translate-y-7 duration-300 ">
                      <span>Mereka yang sudah berada di stuck&nbsp;</span>
                      <span className="font-bold">Zona</span>
                      <span>&nbsp;nyaman bisnisnya</span>
                    </h2>
                </div>
            </div>
                <div className="flex mt-4  text-white group  items-center font-montserrat lg:px-16 justify-center text-center mx-4 hover:scale-105 duration-300 ">
                <Link
                  target="_blank"
                  className="py-4 px-8 flex text-center items-center bg-brand text-white rounded-md animate-bounce lg:text-2xl mt-4 hover:bg-brand-light  duration-300 font-bold "
                  href={
                    "https://bit.ly/AlphaPromo50ribu"
                  }
                >
                  <IoIosArrowForward className='group-hover:translate-x-0 -translate-x-5 duration-300'/>
                  Konsultasi Sekarang!
                  <IoIosArrowBack className='group-hover:translate-x-0 translate-x-5 duration-300'/>
                </Link>
              </div>
        </div>
    </div>
  )
}

export default CTA