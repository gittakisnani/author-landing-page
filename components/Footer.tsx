import Link from 'next/link'
import React from 'react'
import Container from './Container'
import { BsTwitter, BsGithub, BsLinkedin, FaMapMarkerAlt, FaTelegramPlane, HiPhone, AiFillHeart } from './Icons'
const Footer = () => {
  return (
    <footer className='bg-black'>
      <Container className='p-4 py-14'>
        <div className='grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 grid'>
          <div>
            <h5 className='footer_title'>About</h5>
            <p className='text-gray-400 my-6'>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className='flex gap-2 items-center'>
              <a aria-label='GitHub account' href="https://github.com/gittakisnani" target='_blank' rel='noopener noreferrer' className='footer_link'>
                <BsGithub />
              </a>
              <a aria-label='LinkedIn account' href="https://www.linkedin.com/in/taki-snani-1ba6ba236/" target='_blank' rel='noopener noreferrer' className='footer_link'>
                <BsLinkedin />
              </a>
              <a aria-label='Twitter account' href="https://twitter.com/yestakisnani" target='_blank' rel='noopener noreferrer' className='footer_link'>
                <BsTwitter />
              </a>
            </div>
          </div>
          <div className=''>
            <h5 className='footer_title'>Links</h5>
            <ul className='list-none flex flex-col gap-2 mt-6'>
              {['Home', 'About', 'Chapter', 'Reviews', 'Contact'].map((link, index) => (
                <Link key={index} href={`/#${link.replace(' ', '').toLowerCase()}`}>
                  <a aria-label={link} className='text-gray-400'>
                    <li>{link}</li>
                    </a>
                </Link>
              ))}
            </ul>
          </div>
          <div className=''>
            <h5 className='footer_title'>Services</h5>
            <ul className='list-none flex flex-col gap-2 mt-6'>
              {['Experience', 'Marketing Goals', 'Targeting Vision'].map((link, index) => (
                <Link key={index} href='/'>
                  <a aria-label={link} className='text-gray-400'>
                    <li>{link}</li>
                  </a>
                </Link>
              ))}
            </ul>
          </div>
          <div className=''>
            <h5 className='footer_title mb-6'>Have A Question?</h5>
            <ul className='flex flex-col gap-2 text-gray-400 text-lg'>
              <li className='flex gap-2 items-start'>
                <span className='text-2xl text-white'>
                  <FaMapMarkerAlt />
                </span>
                <p>
                203 Fake St. Mountain View, San Francisco, California, USA
                </p>
              </li>
              <li className='flex gap-2 items-center'>
                <span className='text-2xl text-white'><HiPhone /></span>
                <a aria-label='Call me on phone number: +2 392 3929 210' href="tel:+2 392 3929 210">+2 392 3929 210</a>
              </li>
              <li className='flex gap-2 items-center'>
                <span className='text-2xl text-white'><FaTelegramPlane /></span>
                <a aria-label='Contact me on my email: takisnbusiness@gmail.com' href="mailto:">takisnbusiness@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='text-center text-gray-400 pt-8'>
        Copyright ??2022 All rights reserved | This template is made with ???? by <a href="https://portfolio-sepia-kappa.vercel.app/" className='font-semibold'>TakiSnani</a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer