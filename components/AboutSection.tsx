import Image from 'next/image'
import About from '../public/assets/About.png'
const AboutSection = () => {
  return (
    <section id='about' className="flex gap-10 md:items-center md:justify-between">
        <div className='hidden md:block self-stretch book'>
            <Image className='w-full h-full bg-cover' src={About} alt='About' />
        </div>
        <article className='md:basis-1/2'>
            <h2 className='text-slate-800 font-bold text-2xl md:text-4xl lg:text-5xl'>
            About The Book
            </h2>
            <p className='text-gray-400 text-lg mt-10 mb-4'>
            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            </p>
            <h4 className='text-slate-800 font-extrabold text-lg md:text-xl'>
            Award achievements
            </h4>
            <p className='text-gray-400 text-lg my-4'>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
            <h4 className='text-slate-800 font-extrabold text-lg md:text-xl'>
            Read On Any Devices
            </h4>
            <p className='text-gray-400 text-lg my-4'>
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
            <h4 className='text-slate-800 font-extrabold text-lg md:text-xl'>
            Very High Resolution
            </h4>
            <p className='text-gray-400 text-lg my-4'>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
        </article>
    </section>
  )
}

export default AboutSection