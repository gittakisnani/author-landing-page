import Image from 'next/image'
import Read from '../public/assets/Read.svg'

const WelcomePage = () => {
  return (
    <section className='flex gap-2 items-center md:justify-between min-h-[80vh]'>
          <div className='text-center md:text-left w-full mx-auto max-w-[460px]'>
            <h4 className='font-bold tracking-wider uppercase text-primary'>
              BEST SELLER BOOK OF THE WEEK
            </h4>
            <h1 className='text-4xl md:text-5xl lg:text-6xl text-slate-800 capitalize font-extrabold my-4'>
              Clue of the wooden cottage
            </h1>

            <p className='text-gray-400 text-lg'>
            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            </p>

            <button className='cta mt-4'>Buy now for $22.99</button>
          </div>
          <div className='hidden md:block'>
            <Image src={Read} alt='Read' />
          </div>
        </section>
  )
}

export default WelcomePage