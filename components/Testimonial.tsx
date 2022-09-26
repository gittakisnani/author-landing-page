import Image, { StaticImageData } from 'next/image'
import { FaQuoteRight} from './Icons'

const Testimonial = ({ img }: { img: StaticImageData | string }) => {
  return (
    <div className='bg-white p-6 rounded-md relative min-w-[350px] text-left shadow-2xl shadow-gray-200'>
      <p className='text-slate-700/70'>
      A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.
      </p>
      <div className='flex items-center gap-4 mt-8'>
        <div className='book h-[80px] w-[80px] rounded-full overflow-hidden'>
          <Image src={img} alt='Testimonial' width='80px' height='80px' />
        </div>
        <div className='text-black'>
          <p className='text-lg font-semibold'>Roger Scott</p>
          <p className='text-lg font-extralight'>Marketing Manager</p>
        </div>
      </div>
      <span className='absolute top-0 left-4 -translate-y-1/2 p-2 rounded-full bg-green-600 text-white'>
        <FaQuoteRight />
      </span>
    </div>
  )
}

export default Testimonial