import React from 'react'
import { Stat } from '../config/statsConfig'

const Stat = ({ text, number } : Stat) => {
  return (
    <div className='p-8 bg-gray-100 flex flex-col justify-center items-center gap-4'>
        <h3 className='text-slate-800 font-bold text-4xl'>{number}</h3>
        <p className='text-slate-800/40 text-lg capitalize'>{text}</p>
    </div>
  )
}

export default Stat