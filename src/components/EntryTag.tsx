'use client'
import React from 'react'
import Gradient from '@/utils/Gradient'
import ThredBg from '@/utils/ThredBg'
import { motion } from 'motion/react'

function EntryTag() {
    return (
        <motion.div className='bg-black flex flex-col md:flex-row justify-center items-center relative p-4'>
            <div className='z-10 absolute top-4 left-4 md:top-[-9px] md:left-9 animate-spin-slow w-20 h-20 md:w-auto md:h-auto'>
                <Gradient />
            </div>
            <div className="hidden md:block">
                <ThredBg />
            </div>
            <motion.p className='font-spaceGrotesk text-3xl md:text-5xl font-thin text-white text-center my-10 md:my-0' initial={{ opacity: 0, y: 50 }} animate={{ y: -10, opacity: 1 }} transition={{ duration: 2, ease: 'backIn' }}>Create. Code. Elevate.</motion.p>
            <div className="hidden md:block">
                <ThredBg />
            </div>
            <div className="hidden md:block">
                <ThredBg />
            </div>
        </motion.div>
    )
}

export default EntryTag