'use client'
import React from 'react'
import Gradient from '@/utils/Gradient'
import ThredBg from '@/utils/ThredBg'
import { motion } from 'motion/react'

function EntryTag() {
    return (
        <motion.div className='bg-black flex justify-center items-center relative'>
            <div className='z-10 absolute top-[-9] left-9 animate-spin-slow '>
                <Gradient />
            </div>
            <ThredBg />
            <motion.p className='font-spaceGrotesk text-5xl font-thin text-white' initial={{ opacity: 0, y: 50 }} animate={{ y: -10, opacity: 1 }} transition={{ duration: 2, ease: 'backIn' }}>Create. Code. Elevate.</motion.p>
            <ThredBg />
            <ThredBg />
        </motion.div>
    )
}

export default EntryTag