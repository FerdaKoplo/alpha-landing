import { WHYUSLIST } from '@/constants/appConstant'
import Image from 'next/image'
import React from 'react'

const WhyUs = () => {
  return (
    <div className='px-4 lg:px-32 mt-20'>
        <div className='flex flex-col gap-7 text-center justify-center items-center'>
            <h1 className='font-bold  text-brand text-3xl lg:text-5xl font-montserrat'>Why Us?</h1>
            <h2 className='font-semibold text-xl text-brand lg:text-3xl font-montserrat'>Kenapa Harus Alpha Project? </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-3 group  justify-center items-center pt-8  mx-4 lg:mx-20 ">
        <div className="flex items-center relative justify-center">
          <div className="w-3/6 rounded-xl relative aspect-square z-10">
            <Image
              src={"/assets/1.png"}
              className="object-cover group-hover:scale-110 duration-500"
              alt=""
              fill
            />
          </div>
          <div className="bg-brand-bone h-1/2 w-3/5 absolute bottom-0 rounded-3xl z-0"></div>
        </div>
        <div className="font-montserrat mt-10">
          <ul className="flex flex-col gap-8">
            {WHYUSLIST.map((value, i) => (
              <li
                key={i}
                className="flex text-sm items-center md:text-lg lg:text-xl gap-2"
              >
                <p >{value.icons}</p>
                <p>{value.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WhyUs