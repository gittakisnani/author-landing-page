import Image from 'next/image'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import Student from '../public/assets/Student.webp'
import Man1 from '../public/assets/Man1.webp'
import Man2 from '../public/assets/Man2.webp'
import Man3 from '../public/assets/Man3.webp'
import Man4 from '../public/assets/Man4.webp'
import Testimonial from './Testimonial'
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import useWindowSize from '../hooks/useWindowSize'


const TestimonialsSection = () => {
    const { width } = useWindowSize()
  return (
    <section id='testimonials' className='text-center'>
      <Fade cascade> 
        <h3 className='text-slate-800 font-bold'>Projects</h3>
        <h3 className='text-slate-800 font-bold text-2xl md:text-4xl lg:text-5xl mt-2 mb-10'>
            My Other Books
        </h3>

        <div className='grid grid-cols-1 grid--r relative'>
            <div className='relative w-full book max-h-[300px]'>
                <Image src={Student} alt='Students' />
                <div className='absolute z-30 inset-0 bg-green-600/70'></div>
            </div>
            <div className='w-full h-[300px]'>
            </div>
            <div className='absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 z-40'>
                <Swiper
                className='w-full h-full !p-10'
                modules={[Pagination, Autoplay]}
                autoplay={{ delay: 3000 }}
                spaceBetween={150}
                pagination={{clickable: true, currentClass: '!bg-primary'}}
                slidesPerView={width! > 1024 ? 3 : width! > 768 ? 2 : 1}
                >
                    {[Man1, Man2, Man3, Man4, Man1, Man2, Man3, Man4].map((img, index) => (
                        <SwiperSlide key={index}>
                            <Testimonial key={index} img={img} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
        </Fade>
    </section>
  )
}

export default TestimonialsSection