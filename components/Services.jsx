import { bounce, fadeInUp, flip, staggerChildren, staggerNavbar, toLeft, zoomOut } from '@/app/animations'
import { IconBallBasketball } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import React from 'react'

function Services() {
    return (
        <section className='container mx-auto my-8' id='services'>
            <div className='px-6 md:px-10 py-12'>
                <motion.div variants={staggerChildren} initial='hidden' whileInView='visible' viewport={{ once: false }} className='flex gap-4 items-center justify-start'>
                    <motion.h2 variants={toLeft} className='text-slate-400'>Services</motion.h2>
                    <motion.hr variants={toLeft} className='w-20  border-yellow-400' />
                </motion.div>
                <motion.h1 variants={fadeInUp} initial='hidden' whileInView='visible' viewport={{ once: false }} className='text-2xl md:text-4xl font-bold uppercase'>
                    check our services
                </motion.h1>
                <motion.div variants={staggerNavbar} initial='hidden' whileInView='visible' viewport={{ once: false }} className='py-8 md:py-16 grid grid-cols-2 md:grid-cols-3 gap-4 text-center'>
                    <motion.div variants={bounce} className='py-6 md:py-16 px-2 md:px-4 border shadow-md rounded-md h-fit'>
                        <div className='aspect-square w-8 md:w-12 mx-auto bg-yellow-400 flex justify-center items-center rounded-md'>
                            <IconBallBasketball />
                        </div>
                        <h1 className='text-sm md:text-xl font-bold my-4'>
                            lorem ipsum
                        </h1>
                        <p className='text-xs md:text-base'>
                            Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
                        </p>
                    </motion.div>
                    <motion.div variants={bounce} className='py-6 md:py-16 px-2 md:px-4 border shadow-md rounded-md h-fit'>
                        <div className='aspect-square w-8 md:w-12 mx-auto bg-yellow-400 flex justify-center items-center rounded-md'>
                            <IconBallBasketball />
                        </div>
                        <h1 className='text-sm md:text-xl font-bold my-4'>
                            lorem ipsum
                        </h1>
                        <p className='text-xs md:text-base'>
                            Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
                        </p>
                    </motion.div>
                    <motion.div variants={bounce} className='py-6 md:py-16 px-2 md:px-4 border shadow-md rounded-md h-fit'>
                        <div className='aspect-square w-8 md:w-12 mx-auto bg-yellow-400 flex justify-center items-center rounded-md'>
                            <IconBallBasketball />
                        </div>
                        <h1 className='text-sm md:text-xl font-bold my-4'>
                            lorem ipsum
                        </h1>
                        <p className='text-xs md:text-base'>
                            Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
                        </p>
                    </motion.div>
                    <motion.div variants={bounce} className='py-6 md:py-16 px-2 md:px-4 border shadow-md rounded-md h-fit'>
                        <div className='aspect-square w-8 md:w-12 mx-auto bg-yellow-400 flex justify-center items-center rounded-md'>
                            <IconBallBasketball />
                        </div>
                        <h1 className='text-sm md:text-xl font-bold my-4'>
                            lorem ipsum
                        </h1>
                        <p className='text-xs md:text-base'>
                            Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
                        </p>
                    </motion.div>
                    <motion.div variants={bounce} className='py-6 md:py-16 px-2 md:px-4 border shadow-md rounded-md h-fit'>
                        <div className='aspect-square w-8 md:w-12 mx-auto bg-yellow-400 flex justify-center items-center rounded-md'>
                            <IconBallBasketball />
                        </div>
                        <h1 className='text-sm md:text-xl font-bold my-4'>
                            lorem ipsum
                        </h1>
                        <p className='text-xs md:text-base'>
                            Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
                        </p>
                    </motion.div>
                    <motion.div variants={bounce} div className='py-6 md:py-16 px-2 md:px-4 border shadow-md rounded-md h-fit'>
                        <div className='aspect-square w-8 md:w-12 mx-auto bg-yellow-400 flex justify-center items-center rounded-md'>
                            <IconBallBasketball />
                        </div>
                        <h1 className='text-sm md:text-xl font-bold my-4'>
                            lorem ipsum
                        </h1>
                        <p className='text-xs md:text-base'>
                            Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
                        </p>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    )
}

export default Services