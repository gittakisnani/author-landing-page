import Image, { StaticImageData } from 'next/image'
import React from 'react'

const Book = ({ image } : { image: StaticImageData | string }) => {
  return (
    <div className='transitions hover:bg-black/30 group relative book'>
      <Image src={image} alt='Book' className='-z-[1]' width={'400px'} height={'500px'}/>
      <div className='absolute hidden group-hover:flex flex-col gap-4 bottom-0 text-left p-2 text-white'>
        <p className=' font-bold text-2xl capitalize'>You Are Your Ony Limit</p>
        <p className='text-lg uppercase font-semibold'>ROMANCE</p>
      </div>
    </div>
  )
}

export default Book