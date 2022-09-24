import React from 'react'
import statsConfig from '../config/statsConfig'
import Stat from './Stat'

const StatsSection = () => {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
        {statsConfig.map(({ text, number }, index) => (
            <Stat text={text} number={number} key={index} />
        ))}
    </section>
  )
}

export default StatsSection