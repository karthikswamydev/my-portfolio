'use client'
import React from 'react'

const Header = () => {
  return (
    <>
      <div className=' p-8 h-[4rem] flex justify-between items-center'>
        <div>
          <p className='font-mono'>Logo</p>
        </div>
        <div className='flex gap-4'>
          <p className='font-mono'>About</p>
          <p className='font-mono'>Work</p>
          <p className='font-mono'>Contact</p>
        </div>
      </div>

    </>
  )
}

export default Header