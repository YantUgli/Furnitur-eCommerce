import React from 'react'
import { fadeInUp, staggerChildren, zoomOut } from '@/app/animations';
import { motion } from 'framer-motion';

function About() {
    return (
        <section className=' my-8 text-slate-800 container mx-auto' id='about'>
            <motion.div
                initial="hidden"
                // animate="visible"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
                className='flex-col-reverse flex gap-4 md:gap-0 md:flex-row px-6'>
                <div className='w-full md:w-1/2'>
                    <motion.h1 variants={fadeInUp} className='text-xl md:text-3xl font-bold md:w-4/6 w-full mb-4 md:mb-8'> Light, Fast & Powerfull</motion.h1>
                    <motion.p variants={fadeInUp} className='text-sm md:text-base'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                    </motion.p>
                    <div className='py-4 grid gap-4'>
                        <div className=''>
                            <img src="icon.png" alt="" />
                            <h1 className='text-lg font-semibold'>Title Goes Here</h1>
                            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                        </div>
                        <div className=''>
                            <img src="icon.png" alt="" />
                            <h1 className='text-lg font-semibold'>Title Goes Here</h1>
                            <p className='text-sm text-slate-600'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 md:px-6'>
                    <motion.img variants={zoomOut} src="about2.png" alt="" className='w-full aspect-square ' />
                </div>
            </motion.div>
        </section>
    )
}

export default About