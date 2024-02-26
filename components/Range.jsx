import React from 'react'
import { fadeInUp, staggerChildren, zoomOut } from '@/app/animations';
import { motion } from 'framer-motion';

function Range() {
    return (
        <section className=' pt-16 container mx-auto' id='range'>
            <motion.div
                initial="hidden"
                // animate="visible"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
                className=' px-6 '>
                <div className='grid justify-center items-center text-center'>
                    <h1 className='capitalize text-3xl font-extrabold pb-2'>
                        browse the range
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className='grid grid-cols-3 gap-4 justify-center items-center pt-12 text-center font-bold text-2xl'>
                    <div className=''>
                        <div className='w-full aspect-card mb-6 rounded-lg overflow-hidden'>
                            <img src="Range1.png" alt="" className='w-full h-full object-cover' />
                        </div>
                        <h2>Dining</h2>
                    </div>
                    <div className=''>
                        <div className='w-full aspect-card mb-6 rounded-lg overflow-hidden'>
                            <img src="Range4.png" alt="" className='w-full h-full object-cover' />
                        </div>
                        <h2>Living</h2>
                    </div>
                    <div className=''>
                        <div className='w-full aspect-card mb-6 rounded-lg overflow-hidden'>
                            <img src="Range3.png" alt="" className='w-full h-full object-cover' />
                        </div>
                        <h2>Bedroom</h2>
                    </div>

                </div>
            </motion.div>
        </section>
    )
}

export default Range