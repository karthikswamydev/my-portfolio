'use client'
import React from 'react'
import Vector from '@/utils/Vector'
import { motion, useScroll, useTransform } from 'motion/react'
import LinkedIn from '@/utils/LinkedIn'
import GitLogo from '@/utils/GitLogo'
import Link from 'next/link'


const About = () => {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <motion.div style={{ opacity }} className='flex justify-between items-center p-10 relative'>

      <div className='flex flex-col gap-5 '>
        <div>
          <motion.p className='font-spaceGrotesk text-2xl font-semibold' initial={{ y: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.5, ease: 'anticipate' }}>Karthik Swamy | <span className=' text-xl font-spaceGrotesk font-light'>Software Developer</span></motion.p>

        </div>
        <div className='flex flex-col gap-2'>
          <motion.p className='font-spaceGrotesk text-5xl font-semibold animate-color-change ' initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.5, ease: 'anticipate' }} >Crafting Scalable & Intuitive Web Experiences</motion.p>
          <motion.p className='font-spaceGrotesk text-2xl font-semibold' initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, ease: 'backInOut' }}>Full Stack Developer | React & Node.js</motion.p>
        </div>
        <div>
          <motion.div className='flex items-center gap-2' initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, ease: 'backInOut' }}>
            <p className='text-sm font-thin'>Karthik.swamy1001@gmail.com</p>
            <Link href={"https://www.linkedin.com/in/karthik-swamy-383548186/"}><LinkedIn /></Link>
            <Link href={"https://github.com/karthikswamydev?tab=repositories"}><GitLogo /></Link>
          </motion.div>
          <motion.p className='font-spaceGrotesk text-sm font-thin' initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, ease: 'backInOut' }}>Chennai, TamilNadu</motion.p>
        </div>
      </div>
      <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 9, opacity: 1 }} transition={{ duration: 1.5, ease: 'backInOut' }}>
        <Vector />
      </motion.div>
    </motion.div>
  )
}

export default About