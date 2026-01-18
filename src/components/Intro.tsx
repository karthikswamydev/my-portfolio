'use client'
import Aws from '@/utils/Aws';
import Git from '@/utils/git';
import Gradient from '@/utils/Gradient';
import JS from '@/utils/JS';
import Node from '@/utils/Node';
import Postgres from '@/utils/Postgres';
import ReactIcon from '@/utils/React';
import TypeScript from '@/utils/TypeScript';
import { motion } from 'motion/react';
import React from 'react'

function Intro() {
    return (
        <motion.div className='bg-black gap-y-4 p-6 md:p-20'>
            <motion.div className='flex flex-col md:flex-row gap-6 relative'>
                <motion.div className="flex-1 min-w-0 p-6 bg-black rounded-2xl shadow-lg" initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}>
                    <h2 className="text-3xl font-spaceGrotesk font-bold text-white">Karthik Swamy</h2>
                    <motion.p className="text-lg  font-thin font-spaceGrotesk text-white mt-2">
                        Full Stack Developer | Passionate about building scalable & intuitive web experiences with React & Node.js.
                    </motion.p>
                    <motion.p className='text-lg font-spaceGrotesk text-white mt-2'> BE.Automotive Engineering</motion.p>
                    <motion.p className='text-lg  font-thin font-spaceGrotesk text-white'> Sri Venkateswara College of Engineering, Sriperambadur.</motion.p>

                </motion.div>
                <motion.div className="hidden md:block w-[0.5px] bg-white"></motion.div>
                <motion.div className="flex-1 min-w-0 p-6 bg-black rounded-2xl shadow-lg" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}>
                    <h2 className="text-3xl font-spaceGrotesk font-bold text-white">Quick Intro</h2>
                    <motion.p className="text-lg font-thin font-spaceGrotesk text-white mt-2">
                        Full Stack Developer with 3+ years of experience building scalable and intuitive web applications. Proficient in React.js for dynamic frontends and Node.js for efficient backend solutions. Skilled in API integrations, authentication (OAuth, JWT), and performance optimization. Passionate about creating seamless user experiences and writing clean, maintainable code.
                    </motion.p>
                </motion.div>
            </motion.div>

            <motion.div className='flex flex-col md:flex-row gap-6 mt-6 md:mt-10' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}>
                <motion.div className='z-10 absolute top-1 left-9 animate-spin-slow hidden md:block'>
                    <Gradient />
                </motion.div>
                <motion.div className="flex-1 min-w-0 p-6 bg-black  rounded-2xl shadow-lg">
                    <h2 className="text-3xl font-spaceGrotesk font-bold text-white">Work Experience</h2>
                    <motion.p className="font-spaceGrotesk text-lg font-thin text-white mt-2">
                        MAKO IT LAB Pvt.Ltd - Frontend Developer
                    </motion.p>
                    <motion.p className="text-lg font-thin font-spaceGrotesk text-white mt-2">
                        {"TRONIQ'S RATIONALE Pvt.Ltd - Frontend Engineer"}
                    </motion.p>
                    <motion.p className="text-lg font-spaceGrotesk text-white mt-2">
                        3+ years
                    </motion.p>
                </motion.div>

                <motion.div className="hidden md:block w-[0.5px] bg-white"></motion.div>

                <motion.div className="flex-1 min-w-0 p-6 bg-black  rounded-2xl shadow-lg" whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}>
                    <h2 className="text-3xl font-spaceGrotesk font-bold text-white">Tech Stack & Tools</h2>
                    <motion.p className="text-lg  font-thin font-spaceGrotesk text-white mt-2">
                        Javascript | React JS | Next JS | Tailwind CSS | Node Js | Nest JS | Postgres | Framer-Motion | React Query | GraphQL | React Hook Forms | AWS Lambda AWS API Gateway | Git |Material UI | Zustand | Redux | Content API
                    </motion.p>
                    <motion.div className='flex flex-wrap gap-2 mt-4'>
                        <JS />
                        <TypeScript />
                        <ReactIcon />
                        <Postgres />
                        <Node />
                        <Aws />
                        <Git />
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Intro;
