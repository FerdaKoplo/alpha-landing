import { SERVICESLIST } from '@/constants/appConstant'
import React from 'react'

export default function Services() {
  return (
    <div className='px-4 lg:px-32 mt-16'>
      <div className='flex flex-col gap-5 items-center justify-center text-center '>
        <h1 className='text-2xl lg:text-5xl font-bold font-montserrat text-brand'>
            Our Service
        </h1>
        <h1 className="text-brand text-2xl lg:text-3xl hover:scale-110 duration-300 font-montserrat cursor-default  font-bold ">
        Layanan Kami Buat Bisnis Owner yang Visioner 
        </h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3  gap-6 mx-10  justify-center mt-16'>
        {SERVICESLIST.map ((item, i) =>
            <div key={i} className=' py-12 lg:px-12 px-7 text-brand rounded-3xl hover:scale-110 hover:bg-brand-bone hover:text-brand duration-300'>
                <div className='flex gap-5 flex-col items-start  justify-start'>
                    <p className='animate-bounce text-xl lg:text-5xl '>{item.icon}</p>
                    <p className='text-sm lg:text-lg font-bold'>{item.label}</p>
                </div>
            </div>
        )}
      </div>
    </div>
  )
}
