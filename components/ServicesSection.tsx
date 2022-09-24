import React from 'react'
import servicesConfig from '../config/servicesConfig'
import Service from './Service'

const ServicesSection = () => {
  return (
    <section id='services'>
        <h3 className='text-slate-800 font-semibold text-2xl md:text-4xl lg:text-5xl text-center'>
            Services
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-10'>
            {servicesConfig.map(({ title, desc, image }, index) => (
                <Service title={title} image={image} desc={desc} key={index}  />
            ))}
        </div>
    </section>
  )
}

export default ServicesSection