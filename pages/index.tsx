import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import AboutSection from '../components/AboutSection'
import Brands from '../components/Brands'
import ContactSection from '../components/ContactSection'
import Container from '../components/Container'
import ContentSection from '../components/ContentSection'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ManSection from '../components/ManSection'
import ProjectsSection from '../components/ProjectsSection'
import ServicesSection from '../components/ServicesSection'
import StatsSection from '../components/StatsSection'
import WelcomePage from '../components/WelcomePage'
import observer, { handleAsideLinks, handleNavLinks } from '../observer'
import TestimonialsSection from '../components/TestimonialsSection'



const Home: NextPage = () => {
  const [header, setHeader] = useState(false)

  if(typeof document !== "undefined") {
    const sections = document.querySelectorAll('section');
    const articles = document.querySelectorAll('.content-article')
    sections.forEach(sec => {
      observer(handleNavLinks).observe(sec)
    })

    articles.forEach(art => {
      observer(handleAsideLinks).observe(art)
    })
  }

  useEffect(() => {
    const handleNav = () => {
      if(typeof window === "undefined" || typeof document === "undefined") return;

      setHeader(window.scrollY > 400 ? true : false)
    }

    handleNav()

    window.addEventListener('scroll', handleNav)

    return () => {
      window.removeEventListener('scroll', handleNav)
    }
  }, [])


  return (
    <>
      <Head>
        <title>TakiSnani | Author</title>
        <meta name='description' content='A Landing page made using Next js, Tailwindcss, Typescript' />
        <meta name='keywords' content='Landing page, Author, TakiSnani.' />
        <meta name='authors' content='Landing page, Author, TakiSnani.' />
        <meta name="revised" content='Taki Snani, 9/24/2022' />
        <meta name="author" content="Taki Snani" />
      </Head>
      <main className='w-screen overflow-hidden md:overflow-visible'>
        {header ? <Header className=' fixed top-0 right-0 left-0 bg-white z-40 shadow-2xl shadow-black/10' /> : <Header />}
        <Container className='p-4 md:p-6 flex flex-col gap-10 md:gap-16 lg:gap-16'>
          <WelcomePage />
          <Brands />
          <AboutSection />
          <StatsSection />
          <ContentSection />
          <ServicesSection />
          <ProjectsSection />
          <TestimonialsSection />
          <ManSection />
          <ContactSection />
        </Container>
        <Footer />
      </main>
    </>
  )
}

export default Home
