import { IconBuildingStore, IconCalendarWeek, IconChartBar, IconCoins, IconPaint } from '@tabler/icons-react'
import React from 'react'
import { fadeInUp, scaleIn, staggerChildren, toLeft } from '@/app/animations';
import { motion } from 'framer-motion';
import Image from 'next/image';


function Hero() {
    return (
        <section className='relative bg-cover bg-bottom ' id='home' style={{ backgroundImage: 'url(Hero.png)' }} >
            <div className='relative min-h-screen w-full h-full py-16 lg:py-32 px-8 grid grid-cols-2'>
                <div className='col-start-2  flex justify-center items-end'>
                    <div className='bg-secondary py-12 px-10 w-full'>
                        <div className='grid gap-3 mb-4'>
                            <h4 className=''>
                                New Arrival
                            </h4>
                            <h1 className='text-primary text-5xl font-extrabold capitalize'>
                                discover our new  collection
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                            </p>
                        </div>
                        <button className='uppercase text-white font-bold py-4 px-8 bg-primary'>
                            buy now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero