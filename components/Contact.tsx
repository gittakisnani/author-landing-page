import { ReactNode } from 'react'

const Contact = ({ children }: { children: ReactNode}) => {
  return (
    <div className='flex flex-col gap-2 justify-center items-center p-6 py-10 bg-gray-100'>
      {children}
    </div>
  )
}

export default Contact