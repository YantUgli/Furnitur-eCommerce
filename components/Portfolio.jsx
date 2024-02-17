import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Portofolio() {
    return (
        <section className='container mx-auto my-8' id='portfolio'>
            <div className='px-6 md:px-10 py-12 '>
                <div className='flex gap-4 items-center justify-start'>
                    <h2 className='text-slate-400'>Portofolio</h2>
                    <hr className='w-20  border-yellow-400' />
                </div>
                <h1 className='text-2xl md:text-4xl font-bold uppercase mb'>
                    check our portofolio
                </h1>
                <div className='py-4 md:py-16 md:px-4'>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1.5}
                        breakpoints={{
                            768: {
                                slidesPerView: 3,
                                centeredSlides: false,
                                navigation: true,

                            }
                        }}
                        centeredSlides={true}
                        // autoplay={{
                        //     delay: 2500,
                        //     disableOnInteraction: false,
                        // }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={false}
                        modules={[Pagination, Navigation]}
                        className=" "
                    >
                        <SwiperSlide className='pb-8  '>
                            <div className='rounded-md shadow-md overflow-hidden border border-slate-300'>
                                <div className='aspect-video w-full bg-red-400 relative'>
                                    <img src="roar.jpg" alt="" className='w-full h-full object-cover object-top' />
                                    <div className='absolute bg-black/60 w-full h-full z-10 flex justify-center items-center top-0 left-0 text-white text-sm opacity-0 hover:opacity-100 transition-all duration-300' >
                                        <a href="portfolio" target='_blank' className=' py-2 px-4 border-4 border-white capitalize border-double rounded-md'  >view detail</a>
                                    </div>
                                </div>
                                <h1 className='text-lg md:text-xl font-bold py-6 px-2'>Cat Industry</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='pb-8  '>
                            <div className='rounded-md shadow-md overflow-hidden border border-slate-300'>
                                <div className='aspect-video w-full bg-red-400 relative'>
                                    <img src="roar.jpg" alt="" className='w-full h-full object-cover object-top' />
                                    <div className='absolute bg-black/60 w-full h-full z-10 flex justify-center items-center top-0 left-0 text-white text-sm opacity-0 hover:opacity-100 transition-all duration-300' >
                                        <a href="portfolio" target='_blank' className=' py-2 px-4 border-4 border-white capitalize border-double rounded-md'  >view detail</a>
                                    </div>
                                </div>
                                <h1 className='text-lg md:text-xl font-bold py-6 px-2'>Cat Industry</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='pb-8  '>
                            <div className='rounded-md shadow-md overflow-hidden border border-slate-300'>
                                <div className='aspect-video w-full bg-red-400 relative'>
                                    <img src="roar.jpg" alt="" className='w-full h-full object-cover object-top' />
                                    <div className='absolute bg-black/60 w-full h-full z-10 flex justify-center items-center top-0 left-0 text-white text-sm opacity-0 hover:opacity-100 transition-all duration-300' >
                                        <a href="portfolio" target='_blank' className=' py-2 px-4 border-4 border-white capitalize border-double rounded-md'  >view detail</a>
                                    </div>
                                </div>
                                <h1 className='text-lg md:text-xl font-bold py-6 px-2'>Cat Industry</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='pb-8  '>
                            <div className='rounded-md shadow-md overflow-hidden border border-slate-300'>
                                <div className='aspect-video w-full bg-red-400 relative'>
                                    <img src="roar.jpg" alt="" className='w-full h-full object-cover object-top' />
                                    <div className='absolute bg-black/60 w-full h-full z-10 flex justify-center items-center top-0 left-0 text-white text-sm opacity-0 hover:opacity-100 transition-all duration-300' >
                                        <a href="portfolio" target='_blank' className=' py-2 px-4 border-4 border-white capitalize border-double rounded-md'  >view detail</a>
                                    </div>
                                </div>
                                <h1 className='text-lg md:text-xl font-bold py-6 px-2'>Cat Industry</h1>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </section>
    )
}

export default Portofolio