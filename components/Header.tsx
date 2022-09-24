import { useState } from 'react'
import Container from './Container'
import Logo from './Logo'
import NavBar from './NavBar'
import { HiMenu } from './Icons'
import useWindowSize from '../hooks/useWindowSize'
const Header = ({ className='' }: { className?: string }) => {
  const [nav, setNav] = useState(false)
  
  const handleNav = () => {
    setNav(!nav)
  }


  return (
    <header className={className}>
      <Container className='p-4 md:p-6 lg:p-7 flex items-center justify-between'>
        <Logo />
        <NavBar nav={nav} handleNav={handleNav} />
        <button onClick={handleNav} className='text-2xl md:hidden' title='Open Navbar'>
          <HiMenu />
        </button>
      </Container>
    </header>
  )
}

export default Header