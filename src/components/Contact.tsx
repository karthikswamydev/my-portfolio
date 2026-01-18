'use client'
import React from 'react'
import GitLogo from '@/utils/GitLogo'
import LinkedIn from '@/utils/LinkedIn'
import Mail from '@/utils/Mail'
import { motion } from 'motion/react'
import Link from 'next/link'

function Contact() {
    return (
        <div className='bg-black py-10'>
            <motion.div className='flex flex-col items-center gap-6'>
                <p className='text-3xl md:text-4xl font-semibold font-spaceGrotesk text-white text-center'>Let&apos;s get in Touch</p>
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-2 justify-center'>
                        <Mail />
                        <p className='text-white text-sm font-mono'>Karthik.swamy1001@gmail.com</p>
                    </div>
                    <div className='flex items-center gap-4 justify-center'>
                        <Link className='text-white hover:scale-110 transition-transform' href={"https://www.linkedin.com/in/karthik-swamy-383548186/"} ><LinkedIn /></Link>
                        <Link className='text-white hover:scale-110 transition-transform' href={"https://github.com/karthikswamydev"} ><GitLogo /></Link>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Contact