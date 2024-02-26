import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { IconArrowNarrowRight } from '@tabler/icons-react';


function Rooms() {
    return (
        <section className=' bg-secondary '>
            <div className=' flex w-full h-full pl-28'>
                <div className='flex-none w-2/5   flex justify-end items-center'>
                    <div>
                        <h1 className='text-4xl font-extrabold'>50+ Beautiful rooms
                            inspiration</h1>
                        <p className='w-4/5'>
                            Our designer already made a lot of beautiful prototipe of rooms that inspire you
                        </p>
                        <button className='bg-primary py-3 px-6 text-white font-bold mt-4'>
                            Explore More
                        </button>
                    </div>
                </div>
                <div className='w-3/5 py-10 flex justify-center items-center'>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1.5}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper "
                    >
                        <SwiperSlide>
                            <div className='w-[400px] h-[580px]  rounded-sm overflow-hidden relative'>
                                <img src="Cozy.png" alt="" className='w-full h-full object-cover' />
                                <div className='absolute  bottom-5  left-5 flex items-end'>
                                    <div className='bg-white/85 py-8 px-6 h-full'>
                                        <div className='flex items-center gap-2'>
                                            <h3>
                                                01
                                            </h3>
                                            <hr className='w-6 border border-maintext' />
                                            <h3>
                                                Bed Room
                                            </h3>
                                        </div>
                                        <h2 className='text-3xl font-bold'>
                                            Inner Peace
                                        </h2>
                                    </div>
                                    <div className='bg-primary w-10 h-10'>
                                        <IconArrowNarrowRight className='w-full h-full' color='white' />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-[400px] h-[580px]  rounded-sm overflow-hidden relative'>
                                <img src="Cozy.png" alt="" className='w-full h-full object-cover' />
                                <div className='absolute  bottom-5  left-5 flex items-end'>
                                    <div className='bg-white/85 py-8 px-6 h-full'>
                                        <div className='flex items-center gap-2'>
                                            <h3>
                                                01
                                            </h3>
                                            <hr className='w-6 border border-maintext' />
                                            <h3>
                                                Bed Room
                                            </h3>
                                        </div>
                                        <h2 className='text-3xl font-bold'>
                                            Inner Peace
                                        </h2>
                                    </div>
                                    <div className='bg-primary w-10 h-10'>
                                        <IconArrowNarrowRight className='w-full h-full' color='white' />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-[400px] h-[580px]  rounded-sm overflow-hidden relative'>
                                <img src="Cozy.png" alt="" className='w-full h-full object-cover' />
                                <div className='absolute  bottom-5  left-5 flex items-end'>
                                    <div className='bg-white/85 py-8 px-6 h-full'>
                                        <div className='flex items-center gap-2'>
                                            <h3>
                                                01
                                            </h3>
                                            <hr className='w-6 border border-maintext' />
                                            <h3>
                                                Bed Room
                                            </h3>
                                        </div>
                                        <h2 className='text-3xl font-bold'>
                                            Inner Peace
                                        </h2>
                                    </div>
                                    <div className='bg-primary w-10 h-10'>
                                        <IconArrowNarrowRight className='w-full h-full' color='white' />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-[400px] h-[580px]  rounded-sm overflow-hidden relative'>
                                <img src="Cozy.png" alt="" className='w-full h-full object-cover' />
                                <div className='absolute  bottom-5  left-5 flex items-end'>
                                    <div className='bg-white/85 py-8 px-6 h-full'>
                                        <div className='flex items-center gap-2'>
                                            <h3>
                                                01
                                            </h3>
                                            <hr className='w-6 border border-maintext' />
                                            <h3>
                                                Bed Room
                                            </h3>
                                        </div>
                                        <h2 className='text-3xl font-bold'>
                                            Inner Peace
                                        </h2>
                                    </div>
                                    <div className='bg-primary w-10 h-10'>
                                        <IconArrowNarrowRight className='w-full h-full' color='white' />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Rooms