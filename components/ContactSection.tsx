import React from 'react'
import Contact from './Contact'
import { FaMapMarkerAlt, HiPhone, FaTelegramPlane, GiEarthAmerica } from './Icons'
const ContactSection = () => {
  return (
    <section id='contact'>
        <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold text-center text-slate-800'>Contact Me</h2>
        <p className='text-center text-slate-500 my-6 max-w-[500px] mx-auto'>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
            <Contact>
                <div className='flex flex-col items-center gap-1'>
                    <span className='h-[100px] w-[100px] bg-primary flex items-center justify-center text-2xl text-white rounded-full'>
                        <FaMapMarkerAlt />
                    </span>
                    <p className='font-semibold text-lg text-slate-800'>Address</p>
                </div>
                <div className='flex flex-col gap-1 items-center text-slate-700/70'>
                    <p>198 West 21th Street, Suite</p>
                    <p>721 New York NY 10016</p>
                </div>
            </Contact>
            <Contact>
                <div className='flex flex-col items-center gap-1'>
                    <span className='h-[100px] w-[100px] bg-primary flex items-center justify-center text-2xl text-white rounded-full'>
                        <HiPhone />
                    </span>
                    <p className='font-semibold text-lg text-slate-800'>Contact Number</p>
                </div>
                <a href='tel:+ 1235 2355 98' className='text-primary text-center'>
                    + 1235 2355 98
                </a>
            </Contact>
            <Contact>
                <div className='flex flex-col items-center gap-1'>
                    <span className='h-[100px] w-[100px] bg-primary flex items-center justify-center text-2xl text-white rounded-full'>
                        <FaTelegramPlane />
                    </span>
                    <p className='font-semibold text-lg text-slate-800'>Email Address</p>
                </div>
                <a href='mailto:takisnbusiness@gmail.com' className='text-primary text-center'>
                    takisnbusiness@gmail.com
                </a>
            </Contact>
            <Contact>
                <div className='flex flex-col items-center gap-1'>
                    <span className='h-[100px] w-[100px] bg-primary flex items-center justify-center text-2xl text-white rounded-full'>
                        <GiEarthAmerica />
                    </span>
                    <p className='font-semibold text-lg text-slate-800'>Website</p>
                </div>
                <a className='text-primary' href="https://portfolio-sepia-kappa.vercel.app/">
                    Taki Snani
                </a>
            </Contact>
        </div>

        <div className='bg-gray-100 p-8 my-10'>
            <form className='flex flex-col gap-4'>
                <label htmlFor='name' className='offscreen'>
                    Name
                </label>
                <input 
                type="text" 
                className='input'
                id='name'
                placeholder='Name'
                />
                <label htmlFor='email' className='offscreen'>
                    Email
                </label>
                <input 
                type="email" 
                className='input'
                id='email'
                placeholder='Email'
                />
                <label htmlFor='sub' className='offscreen'>
                    Subject
                </label>
                <input 
                type="text" 
                className='input'
                id='sub'
                placeholder='Subject'
                />
                <label htmlFor='message' className='offscreen'>
                    Message
                </label>
                <textarea 
                className='input resize-y min-h-[100px]'
                id='name'
                placeholder='Message'
                />

                <button className='cta'>Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default ContactSection