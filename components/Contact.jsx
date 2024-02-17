import { IconBallBasketball, IconCurrentLocation, IconMail, IconPhone } from '@tabler/icons-react'
import React from 'react'

function Contact() {
    return (
        <section className='container mx-auto my-8' id='contact'>
            <div className='py-12 px-6 md:px-10'>
                <div className='flex gap-4 items-center justify-start'>
                    <h2 className='text-slate-400'>Contact</h2>
                    <hr className='w-20  border-yellow-400' />
                </div>
                <h1 className='text-2xl md:text-4xl font-bold uppercase'>
                    contact us
                </h1>
                <div className='pt-8 md:pt-16 '>
                    <div className='w-full h-64 bg-slate-300 rounded-md overflow-hidden'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1164.9635053044342!2d106.82942013365982!3d-6.630777484919746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgriya%20katulampa%20blok%20b4%20no1%20rt8%20rw10!5e0!3m2!1sid!2sid!4v1707184583184!5m2!1sid!2sid" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-full'></iframe>
                    </div>
                    <div className='md:flex  pt-12 gap-4'>
                        <div className='flex-initial md:w-1/3 w-full  flex flex-col gap-6 mb-6 md:mb-0'>
                            <div className='flex gap-4'>
                                <div className='aspect-square  w-12 h-12 bg-yellow-400 flex justify-center items-center rounded-md'>
                                    <IconCurrentLocation />
                                </div>
                                <div>
                                    <h1 className='text-xl capitalize font-semibold' >location :</h1>
                                    <p className='text-sm'>
                                        A108 Adam Street, New York, NY 535022
                                    </p>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div className='aspect-square  w-12  bg-yellow-400 flex justify-center items-center rounded-md'>
                                    <IconMail />
                                </div>
                                <div>
                                    <h1 className='text-xl capitalize font-semibold' >email :</h1>
                                    <p className='text-sm'>
                                        info@example.com
                                    </p>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div className='aspect-square  w-12  bg-yellow-400 flex justify-center items-center rounded-md'>
                                    <IconPhone />
                                </div>
                                <div>
                                    <h1 className='text-xl capitalize font-semibold' >call :</h1>
                                    <p className='text-sm'>
                                        +1 5589 55488 55s
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='grow  '>
                            <div className='flex gap-4'>
                                <input type="text" className='flex-initial w-1/2 py-2 px-4 rounded-md border' placeholder='Your Name' />
                                <input type="text" className='flex-initial w-1/2 py-2 px-4 rounded-md border' placeholder='Your Email' />
                            </div>
                            <input type="text" name="" id="" className=' w-full py-2 px-4 rounded-md border my-5' placeholder='Subject' />
                            <textarea name="" placeholder='Message' id="" cols="30" rows="4" className='w-full py-2 px-4 border rounded-md'></textarea>
                            <div className=' mx-auto pt-4 flex justify-center'>
                                <button className='  bg-yellow-400  py-2 px-4 rounded-md'>
                                    Send Message
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact