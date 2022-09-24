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
const Home: NextPage = () => {
  const [header, setHeader] = useState(false)

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
    <main className=''>
      <Header />
      {header && <Header className=' fixed top-0 right-0 left-0 bg-white z-40' /> }
      <Container className='p-4 md:p-6 flex flex-col gap-8 md:gap-12 lg:gap-16'>
        <WelcomePage />
        <Brands />
        <AboutSection />
        <StatsSection />
        <ContentSection />
        <ServicesSection />
        <ProjectsSection />
        <ManSection />
        <ContactSection />
      </Container>
      <Footer />
    </main>
  )
}

export default Home
