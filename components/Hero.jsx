import { IconBuildingStore, IconCalendarWeek, IconChartBar, IconCoins, IconPaint } from '@tabler/icons-react'
import React from 'react'
import { fadeInUp, scaleIn, staggerChildren, toLeft } from '@/app/animations';
import { motion } from 'framer-motion';
import Image from 'next/image';


function Hero() {
    return (
        <section className='relative  ' id='home' >
            {/* <div className='bg-black opacity-60 w-full h-full absolute' /> */}
            <img src="Path.png" alt="" className='absolute right-0 top-0  max-h-screen' />

            <div className='relative min-h-screen w-full h-full py-16 lg:py-32'>
                <div className='w-3/4  ml-auto    relative'>
                    {/* <Image src='/Path.png' width={} /> */}
                    <img src="Group.png" alt="" className='w-full h-full max-h-[50vh]' />
                </div>
                <div className='px-4 mt-4'>
                    <motion.h1 variants={scaleIn} initial='hidden' animate='visible' className='text-3xl  md:w-[525px] font-extrabold'>Portfolio KitaDigital<span className='text-yellow-400'></span></motion.h1>
                    <motion.p variants={scaleIn} initial='hidden' animate='visible' className=' text-xl my-3'>One Example of KitaDigital</motion.p>
                    <motion.p variants={scaleIn} initial='hidden' animate='visible' className=' text-sm'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</motion.p>
                    <button className='py-2 px-4 bg-purple-600 text-white font-bold mt-3'>
                        Purchase UI Kit
                    </button>
                </div>
                {/* <motion.div variants={staggerChildren} initial='hidden' animate='visible' className='flex flex-wrap mt-8 justify-center items-center gap-2 md:gap-8 container text-center '>
                    <motion.div variants={toLeft} className='border-2 border-white/40 py-3 px-6 md:py-6 md:px-16 hover:border-yellow-400 '>
                        <IconBuildingStore color='yellow' className='mx-auto w-4 h-4 md:w-8 md:h-8' />
                        <h2 className='text-sm md:text-xl font-bold'>
                            Lorem Ipsum
                        </h2>
                    </motion.div>

                    <motion.div variants={toLeft} className='border-2 border-white/40 py-3 px-6 md:py-6 md:px-16 hover:border-yellow-400 '>
                        <IconChartBar
                            color='yellow' className='mx-auto w-4 h-4 md:w-8 md:h-8' />
                        <h2 className='text-sm md:text-xl font-bold'>
                            Dolor Sitema
                        </h2>
                    </motion.div>
                    <motion.div variants={toLeft} className='border-2 border-white/40 py-3 px-6 md:py-6 md:px-16 hover:border-yellow-400 '>
                        <IconCalendarWeek
                            color='yellow' className='mx-auto w-4 h-4 md:w-8 md:h-8' />

                        <h2 className='text-sm md:text-xl font-bold'>
                            Lorem Ipsum
                        </h2>
                    </motion.div>
                    <motion.div variants={toLeft} className='border-2 border-white/40 py-3 px-6 md:py-6 md:px-16 hover:border-yellow-400 '>
                        <IconPaint
                            color='yellow' className='mx-auto w-4 h-4 md:w-8 md:h-8' />
                        <h2 className='text-sm md:text-xl font-bold'>
                            Lorem Ipsum
                        </h2>
                    </motion.div>
                    <motion.div variants={toLeft} className='border-2 border-white/40 py-3 px-6 md:py-6 md:px-16 hover:border-yellow-400 '>
                        <IconCoins
                            color='yellow' className='mx-auto w-4 h-4 md:w-8 md:h-8' />
                        <h2 className='text-sm md:text-xl font-bold'>
                            Lorem Ipsum
                        </h2>
                    </motion.div>
                </motion.div> */}
            </div>
        </section>
    )
}

export default Hero