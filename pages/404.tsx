import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const NotFound: NextPage = () => {
  return (
    <>
    <Head>
        <title>Not Found</title>
        <meta name='description' content='Page not found, 404 Page.' />
    </Head>
    <Header />
    <main className='bg-white h-screen flex flex-col justify-center items-center'>
        <h2 className='font-bold text-2xl md:text-4xl lg:text-6xl tracking-tighter'>4😢4</h2>
        <p className='desc text md:text-2xl my-2 uppercase font-semibold'>OOPS! PAGE DOES NOT EXIST!</p>
        <p className='text-slate-700/70 text-sm font-light max-w-[400px] text-center'>
            Sorry but the page you're looking for does not exist. Have been removed, name changed or it's temporarily unavailable
        </p>
        <Link href='/'>
            <a className='cta capitalize mt-2'>Back to home</a>
        </Link>
    </main>
    <Footer />
    </>
  )
}

export default NotFound