import { ReactNode } from 'react'

const Container = ({ className, children }: { className?: string, children: ReactNode }) => {
  return (
    <div className={`w-full max-w-[1100px] mx-auto bg-inherit text-inherit ${className}`}>
        {children}
    </div>
  )
}

export default Container