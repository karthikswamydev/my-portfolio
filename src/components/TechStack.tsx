'use client'
import Aws from '@/utils/Aws'
import Docker from '@/utils/Docker'
import Ec2 from '@/utils/Ec2'
import Express from '@/utils/Express'
import Git from '@/utils/git'
import Html from '@/utils/Html'
import JS from '@/utils/JS'
import NextIcon from '@/utils/Next'
import Node from '@/utils/Node'
import Postgres from '@/utils/Postgres'
import ReactIcon from '@/utils/React'
import TypeScript from '@/utils/TypeScript'
import { motion } from 'motion/react'
import React from 'react'

function TechStack() {
    return (
        <div className='bg-black min-h-[40rem] h-auto py-10 flex justify-center items-center'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col gap-8 items-center'>
                    <motion.p className='text-white font-spaceGrotesk text-5xl font-thin text-center'>Tech</motion.p>
                    <div className='flex flex-wrap justify-center gap-6'>
                        <div className='transform translate-y-2 hover:scale-110 transition duration-500'>
                            <JS />
                        </div>
                        <div className='transform rotate-12 hover:rotate-0 transition duration-500'>
                            <TypeScript />
                        </div>
                        <div className='transform scale-90 hover:scale-100 transition duration-500'>
                            <Node />
                        </div>
                        <div className='transform translate-y-2 hover:scale-110 transition duration-500'>
                            <Html />
                        </div>
                        <div className='transform rotate-12 hover:rotate-0 transition duration-500'>
                            <Aws />
                        </div>
                        <div className='transform scale-90 hover:scale-100 transition duration-500'>
                            <Docker />
                        </div>
                        <div className='transform translate-y-2 hover:scale-110 transition duration-500'>
                            <Git />
                        </div>
                        <div className='transform translate-y-2 hover:scale-110 transition duration-500'>
                            <Ec2 />
                        </div>
                        <div className='transform rotate-12 hover:rotate-0 transition duration-500'>
                            <Express />
                        </div>
                        <div className='transform scale-90 hover:scale-100 transition duration-500'>
                            <Postgres />
                        </div>
                        <div className='transform translate-y-2 hover:scale-110 transition duration-500'>
                            <Html />
                        </div>
                        <div className='transform rotate-12 hover:rotate-0 transition duration-500'>
                            <Aws />
                        </div>
                        <div className='transform scale-90 hover:scale-100 transition duration-500'>
                            <ReactIcon />
                        </div>
                        <div className='transform translate-y-2 hover:scale-110 transition duration-500'>
                            <NextIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechStack