import Image from 'next/image'
import React from 'react'
import { ServiceConfig } from '../config/servicesConfig'

const Service = ({ title, desc, image }: ServiceConfig) => {
  return (
    <div className='bg-gray-100 p-10 flex flex-col gap-8 items-center text-center'>
        <div className='w-[100px] h-[100px]'>
        <Image src={image} alt={title} />
        </div>
        <h4 className='text-slate-800 font-semibold text-xl md:text-2xl capitalize relative'>
            {title}
            <div className='absolute -bottom-3 bg-primary w-12 h-px left-1/2 -translate-x-1/2'></div>
        </h4>
        <p className='text-gray-500/70'>{desc}</p>
    </div>
  )
}

export default Service