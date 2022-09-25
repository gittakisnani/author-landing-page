import Adobe from '../public/assets/brands/Adobe.png'
import Google from '../public/assets/brands/Google.png'
import Android from '../public/assets/brands/Android.webp'
import Java from '../public/assets/brands/Java.png'
import Microsoft from '../public/assets/brands/Microsoft.png'
import Image from 'next/image'
import {Fade} from 'react-awesome-reveal'
const Brands = () => {
  return (
    <section id='brands'>
          <div className='flex flex-col md:flex-row md:justify-between gap-10 md:items-center'>
              <div className='mx-auto max-w-[200px]'>
                <Fade>
                  <Image src={Adobe} alt='Adobe' />
                </Fade>
              </div>
            <div className='mx-auto max-w-[200px]'>
              <Fade>
                <Image src={Google} alt='Google' />
              </Fade>
            </div>
            <div className='mx-auto max-w-[200px]'>
              <Fade>
                <Image src={Android} alt='Android' />
              </Fade>
            </div>
            <div className='mx-auto max-w-[200px]'>
              <Fade>
                <Image src={Java} alt='Java' />
              </Fade>
            </div>
            <div className='mx-auto max-w-[200px]'>
              <Fade>
                <Image src={Microsoft} alt='Microsoft' />
              </Fade>
            </div>
          </div>
    </section>
  )
}

export default Brands