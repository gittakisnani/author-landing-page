import Adobe from '../public/assets/brands/Adobe.png'
import Google from '../public/assets/brands/Google.png'
import Android from '../public/assets/brands/Android.webp'
import Java from '../public/assets/brands/Java.png'
import Microsoft from '../public/assets/brands/Microsoft.png'
import Image from 'next/image'
const Brands = () => {
  return (
    <section>
          <div className='flex flex-col md:flex-row md:justify-between gap-10 md:items-center'>
            <div className='mx-auto max-w-[200px]'>
            <Image src={Adobe} alt='Adobe' />
            </div>
            <div className='mx-auto max-w-[200px]'>
            <Image src={Google} alt='Google' />
            </div>
            <div className='mx-auto max-w-[200px]'>
            <Image src={Android} alt='Android' />
            </div>
            <div className='mx-auto max-w-[200px]'>
            <Image src={Java} alt='Java' />
            </div>
            <div className='mx-auto max-w-[200px]'>
            <Image src={Microsoft} alt='Microsoft' />
            </div>
          </div>
    </section>
  )
}

export default Brands