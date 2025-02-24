'use client'
import React from 'react'
import GitLogo from '@/utils/GitLogo'
import LinkedIn from '@/utils/LinkedIn'
import Mail from '@/utils/Mail'
import { motion } from 'motion/react'
import Link from 'next/link'

function Contact() {
    return (
        <div className='h-[20rem] bg-black'>
            <motion.div>
                <p className=' text-4xl font-semibold font-spaceGrotesk text-white text-center'>Let's get in Touch</p>
                <div className='flex items-center gap-2'>
                    <Mail />
                    <p className='text-white text-sm font-mono'>Karthik.swamy1001@gmail.com</p>
                </div>
                <div className='flex items-center gap-2'>
                    <Link className='text-white' href={"https://www.linkedin.com/in/karthik-swamy-383548186/"} ><LinkedIn /></Link>
                </div>
                <div className='flex items-center gap-2'>
                    <Link className='text-white' href={"https://www.linkedin.com/in/karthik-swamy-383548186/"} ><GitLogo /></Link>
                </div>
            </motion.div>
        </div>
    )
}

export default Contact