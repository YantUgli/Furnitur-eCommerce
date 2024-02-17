import { imageAppear } from '@/app/animations'
import { IconClock, IconMoodSmile } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import React from 'react'


function Count() {
    return (
        <section className=' my-8 text-slate-800 container mx-auto'>
            <div className='md:flex px-10  w-full'>
                <div className='w-full md:w-2/5 flex-none md:px-6'>
                    <motion.img variants={imageAppear} whileHover='bounce' initial='hidden' whileInView='visible' viewport={{ once: true }} src="about.jpg" alt="" className='w-full h-full object-cover' />
                </div>
                <div className='grow py-6 md:px-4'>
                    <h1 className='text-xl md:text-3xl font-bold  mb-4'> Voluptatem dignissimos provident quasi.</h1>
                    <p className='text-sm md:text-base'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi possimus tenetur ipsa quo, harum saepe obcaecati vel asperiores aliquid unde alias! Quod modi doloribus maiores, provident, dolorum
                    </p>
                    <div className='grid md:grid-cols-2 gap-2 md:gap-6 py-6'>
                        <div className=' flex gap-4'>
                            <IconMoodSmile color='yellow' className='flex-none w-10 h-10 md:w-12 md:h-12 ' />
                            <div className='grow'>
                                <h1 className='text-xl md:text-3xl font-bold'>
                                    65
                                </h1>
                                <p className='text-xs md:text-sm'>
                                    <b>Happy Clients  </b> consequuntur voluptas nostrum aliquid ipsam architecto ut.
                                </p>
                            </div>
                        </div>
                        <div className=' flex gap-4'>
                            <IconMoodSmile color='yellow' className='flex-none w-10 h-10 md:w-12 md:h-12 ' />
                            <div className='grow'>
                                <h1 className='text-xl md:text-3xl font-bold'>
                                    65
                                </h1>
                                <p className='text-xs md:text-sm'>
                                    <b>Happy Clients  </b> consequuntur voluptas nostrum aliquid ipsam architecto ut.
                                </p>
                            </div>
                        </div>
                        <div className=' flex gap-4'>
                            <IconClock color='yellow' className='flex-none w-10 h-10 md:w-12 md:h-12 ' />
                            <div className='grow'>
                                <h1 className='text-xl md:text-3xl font-bold'>
                                    65
                                </h1>
                                <p className='text-xs md:text-sm'>
                                    <b>Happy Clients  </b> consequuntur voluptas nostrum aliquid ipsam architecto ut.
                                </p>
                            </div>
                        </div>
                        <div className=' flex gap-4'>
                            <IconMoodSmile color='yellow' className='flex-none w-10 h-10 md:w-12 md:h-12 ' />
                            <div className='grow'>
                                <h1 className='text-xl md:text-3xl font-bold'>
                                    65
                                </h1>
                                <p className='text-xs md:text-sm'>
                                    <b>Happy Clients  </b> consequuntur voluptas nostrum aliquid ipsam architecto ut.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Count