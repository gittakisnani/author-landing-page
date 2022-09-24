import Image from 'next/image'
import Man1 from '../public/assets/Man1.webp'

const ManSection = () => {
  return (
    <section id='author' className='flex items-center'>
        <div className='book self-stretch hidden md:block md:basis-1/2'>
            <Image src={Man1} alt='Man' className='!bg-cover' />
        </div>
        <div className='p-8 py-12 bg-gray-200/70 self-stretch max-w-full md:basis-1/2'>
            <h4 className='text-primary font-bold text-xl'>Know More About The Author</h4>
            <h2 className='text-2xl md:text-4xl lg:text-5xl my-6 text-slate-800 font-bold'>
                Franklin <br /> Henderson
            </h2>
            <p className='text-lg text-slate-700/70 '>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <div className='flex gap-10 my-4 p-1 md:text-lg'>
                <div className='flex flex-col gap-2 text-black font-semibold'>
                    <p>Name:</p>
                    <p>Date of birth:</p>
                    <p>Address:</p>
                    <p>Zip Code:</p>
                    <p>Email:</p>
                    <p>Phone:</p>
                </div>
                <div className='flex flex-col gap-2 text-slate-700/70'>
                    <p>Franklin Henderson</p>
                    <p>November 28, 1980</p>
                    <p>San Francisco CA 97987 USA</p>
                    <p>1000</p>
                    <p>takisnbusiness@gmail.com</p>
                    <p>+1-2234-5678-9-0</p>
                </div>
            </div>
            <button className='cta capitalize'>120 View all books</button>
        </div>
    </section>
  )
}

export default ManSection