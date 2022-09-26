import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/'>
      <a>
        <h2 className='logo'>TakiSnani<span className='text-primary'>.</span></h2>
      </a>
    </Link>
  )
}

export default Logo