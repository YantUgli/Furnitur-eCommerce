import { imageBall, staggerChildren, toLeft } from '@/app/animations'
import { IconCube, IconPhotoScan, IconReceipt, IconShield } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import React from 'react'


function Fetures() {
    return (
        <section className='my-8 text-slate-800 container mx-auto'>
            <div className='  md:flex px-10 pt-8 pb-12'>
                <div className='w-full md:w-1/2 md:px-6'>
                    <motion.img variants={imageBall} initial='hidden' whileInView='visible' viewport={{ once: true }} src="features.jpg" alt="" className='w-full h-[125px] md:h-[481px] object-cover' />
                </div>
                <motion.div variants={staggerChildren} initial='hidden' whileInView='visible' viewport={{ once: true }} className='w-full md:w-1/2 flex flex-col gap-4 md:gap-0 mt-6 md:mt-0 justify-around'>
                    <motion.div variants={toLeft} className='flex gap-4 '>
                        <IconReceipt className='flex-none w-7 h-7 md:w-9 md:h-9 mb-auto ' color='yellow' />
                        <div className='grow  '>
                            <h1 className='text-lg md:text-xl font-bold mb-2'>
                                Est labore ad
                            </h1>
                            <p className='text-sm md:text-base'>
                                Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip
                            </p>
                        </div>
                    </motion.div>
                    <motion.div variants={toLeft} className='flex gap-4 '>
                        <IconCube className='flex-none w-7 h-7 md:w-9 md:h-9 mb-auto ' color='yellow' />

                        <div className='grow  '>
                            <h1 className='text-lg md:text-xl font-bold mb-2'>
                                Est labore ad
                            </h1>
                            <p className='text-sm md:text-base'>
                                Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip
                            </p>
                        </div>
                    </motion.div>
                    <motion.div variants={toLeft} className='flex gap-4 '>
                        <IconPhotoScan className='flex-none w-7 h-7 md:w-9 md:h-9 mb-auto ' color='yellow' />
                        <div className='grow  '>
                            <h1 className='text-lg md:text-xl font-bold mb-2'>
                                Est labore ad
                            </h1>
                            <p className='text-sm md:text-base'>
                                Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip
                            </p>
                        </div>
                    </motion.div>
                    <motion.div variants={toLeft} className='flex gap-4 '>
                        <IconShield className='flex-none w-7 h-7 md:w-9 md:h-9 mb-auto ' color='yellow' />

                        <div className='grow  '>
                            <h1 className='text-lg md:text-xl font-bold mb-2'>
                                Est labore ad
                            </h1>
                            <p className='text-sm md:text-base'>
                                Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip
                            </p>
                        </div>
                    </motion.div>


                </motion.div>
            </div>
        </section>
    )
}

export default Fetures