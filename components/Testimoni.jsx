import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { IconQuote, IconQuotes } from '@tabler/icons-react';

function Testimoni() {
    return (
        <section className='flex justify-center items-center bg-no-repeat bg-fixed bg-cover py-16 relative bg-black/50 bg-blend-multiply text-white text-center' style={{ backgroundImage: 'url(testimonials-bg.jpg)' }} >
            <div className='container '>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    // navigation={true}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='pb-8 '>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='aspect-square w-20 border-4 border-white/70 rounded-full overflow-hidden '>
                                <img src="testimonials-5.jpg" alt="" className='w-full object-cover' />
                            </div>
                            <h1 className='capitalize text-lg font-bold'>Matt Brandon</h1>
                            <h2 className='capitalize text-sm'>
                                freelancer
                            </h2>
                            <div className=' w-4/5 flex py-4'>
                                <p className='italic text-wrap inl'>
                                    <IconQuote color='white' className='inline  -mt-2 mr-2' />
                                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                    <IconQuote color='white' className='inline mt-2 ml-2' />
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pb-8 '>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='aspect-square w-20 border-4 border-white/70 rounded-full overflow-hidden '>
                                <img src="testimonials-5.jpg" alt="" className='w-full object-cover' />
                            </div>
                            <h1 className='capitalize text-lg font-bold'>Matt Brandon</h1>
                            <h2 className='capitalize text-sm'>
                                freelancer
                            </h2>
                            <div className=' w-4/5 flex py-4'>
                                <p className='italic text-wrap inl'>
                                    <IconQuote color='white' className='inline  -mt-2 mr-2' />
                                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                    <IconQuote color='white' className='inline mt-2 ml-2' />
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pb-8 '>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='aspect-square w-20 border-4 border-white/70 rounded-full overflow-hidden '>
                                <img src="testimonials-5.jpg" alt="" className='w-full object-cover' />
                            </div>
                            <h1 className='capitalize text-lg font-bold'>Matt Brandon</h1>
                            <h2 className='capitalize text-sm'>
                                freelancer
                            </h2>
                            <div className=' w-4/5 flex py-4'>
                                <p className='italic text-wrap inl'>
                                    <IconQuote color='white' className='inline  -mt-2 mr-2' />
                                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                    <IconQuote color='white' className='inline mt-2 ml-2' />
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>



                </Swiper>
            </div>
        </section>
    )
}

export default Testimoni