import Link from "next/link"
import navLinks from "../config/navLinks"
import useWindowSize from "../hooks/useWindowSize"
import { MdOutlineClose } from './Icons'
import { useRef } from 'react'
const NavBar = ({ nav, handleNav }: { nav: boolean, handleNav: () => void }) => {
  const navRef = useRef<HTMLElement | null>(null!)
  return (
    <nav ref={navRef} className={`flex flex-col md:flex-row gap-4 md:gap-8 md:items-center py-8 p-4 md:!p-0 bg-black md:bg-transparent text-white md:text-slate-800 fixed md:static top-0 ${nav ? 'right-0' : 'right-[-100%]'} bottom-0 w-[60%] md:w-fit transitions z-50 md:z-0 `}>
      <button onClick={handleNav} title="close" className="w-full flex items-center justify-end pb-4 text-right text-2xl md:hidden">
        <MdOutlineClose />
      </button>
      {navLinks.map(({ text }, index) => (
        <Link key={index} href={`/${text}`}>
          <a className="navLink">{text}</a>
        </Link>
      ))}
    </nav>
  )
}

export default NavBar