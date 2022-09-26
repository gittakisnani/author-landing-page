import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/'>
      <a aria-label='Homepage'>
        <h2 className='logo'>TakiSnani<span className='text-primary'>.</span></h2>
      </a>
    </Link>
  )
}

export default Logo