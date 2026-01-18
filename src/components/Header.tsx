'use client'
import React from 'react'

const Header = () => {
  return (
    <>
      <div className='p-4 md:p-8 h-[4rem] flex justify-between items-center'>
        <div>
          <p className='font-mono text-sm md:text-base'>Logo</p>
        </div>
        <div className='flex gap-2 md:gap-4'>
          <p className='font-mono text-sm md:text-base'>About</p>
          <p className='font-mono text-sm md:text-base'>Work</p>
          <p className='font-mono text-sm md:text-base'>Contact</p>
        </div>
      </div>

    </>
  )
}

export default Header