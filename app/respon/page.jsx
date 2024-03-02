'use client'
import React from 'react'
import { IconAirConditioning, IconLocation, IconMicrophone, IconSpeakerphone, IconStar, IconWifi } from '@tabler/icons-react'
import { Checkbox } from '@mantine/core'


function page() {
    return (
        <section className="bg-[#3E554B] text-white min-h-screen">
            <div>
                <div className="bg-blue-300 w-full aspect-video">
                    <img
                        src='about.jpg'
                        alt="reson"
                        className="w-full h-full object-cover object-center"
                    />
                </div>
                <div className="flex ">
                    <div className="w-1/2 aspect-video">
                        <img
                            src='about.jpg'
                            alt="reson"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                    <div className="w-1/2  aspect-video">
                        <img
                            src='about.jpg'
                            alt="reson"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </div>
            </div>
            <div className='absolute bg-red-400'>
                hai
            </div>
            {/* Navbar Start */}
            <div className="mt-4 sticky ">
                <div className="text-sm font-sans px-4 py-2 flex items-center justify-around">
                    <a href="#" className="">
                        General
                    </a>
                    <a href="#">Facilities</a>
                    <a href="#">Location</a>
                    <a href="#">About</a>
                </div>
                <hr />
            </div>
            <div className='container px-2'>
                <h1 className='capitalize text-xl font-bold py-4'>momentus hotel alexandra singapore</h1>
                {/* Excelence Start */}
                <div className='pb-8'>
                    <h1 className='text-xl underline underline-offset-1 font-bold'>
                        excelence
                    </h1>
                    <div className='grid grid-cols-2 gap-3 py-2'>
                        <div className='flex gap-1'>
                            <IconStar className='flex-none  w-7 h-full aspect-square' />
                            <div className='grow'>
                                <h1 className='text-xs font-semibold capitalize'>tempat nyaman</h1>
                                <p className='text-[8px]'>Banyak fasilitas yang tersedia</p>
                            </div>
                        </div>
                        <div className='flex gap-1'>
                            <IconLocation className='flex-none  w-7 h-full aspect-square' />
                            <div className='grow'>
                                <h1 className='text-xs font-semibold capitalize'>tempat strategis</h1>
                                <p className='text-[8px]'>dekat stasiun dan halte bus</p>
                            </div>
                        </div>
                        <div className='flex gap-1'>
                            <IconLocation className='flex-none  w-7 h-full aspect-square' />
                            <div className='grow'>
                                <h1 className='text-xs font-semibold capitalize'>ruangan kedap suara</h1>
                                <p className='text-[8px]'>dekat stasiun dan halte bus</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Excelence End */}
                {/* Fasility Start */}
                <div>
                    <h1 className='text-xl underline underline-offset-1 font-bold'>
                        Fasility
                    </h1>
                    <div className='flex gap-4 py-4 flex-wrap' >
                        <div className='flex gap-1'>
                            <IconAirConditioning />
                            <h2 className='capitalize font-semibold'>
                                ac
                            </h2>
                        </div>
                        <div className='flex gap-1'>
                            <IconWifi />
                            <h2 className='capitalize font-semibold'>
                                wifi
                            </h2>
                        </div>
                        <div className='flex gap-1'>
                            <IconSpeakerphone />
                            <h2 className='capitalize font-semibold'>
                                speaker
                            </h2>
                        </div>
                        <div className='flex gap-1'>
                            <IconMicrophone />
                            <h2 className='capitalize font-semibold'>
                                mic
                            </h2>
                        </div>
                        <div className='flex gap-1'>
                            <IconMicrophone />
                            <h2 className='capitalize font-semibold'>
                                test
                            </h2>
                        </div>
                        <div className='flex gap-1'>
                            <IconMicrophone />
                            <h2 className='capitalize font-semibold'>
                                rawr
                            </h2>
                        </div>
                        <div className='flex gap-1'>
                            <IconMicrophone />
                            <h2 className='capitalize font-semibold'>
                                lmao
                            </h2>
                        </div>
                    </div>
                </div>
                {/* Fasility End */}
                {/* Location Start */}
                <div>
                    <h1 className='text-xl underline underline-offset-1 font-bold'>
                        Location
                    </h1>
                    <div className='flex flex-col items-end justify-end px-4 py-2'>
                        <a href="#" className='underline underline-offset-1 font-bold ' >See Map</a>
                        <div className='w-full aspect-square  rounded-md overflow-hidden'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1164.9635053044342!2d106.82942013365982!3d-6.630777484919746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgriya%20katulampa%20blok%20b4%20no1%20rt8%20rw10!5e0!3m2!1sid!2sid!4v1707184583184!5m2!1sid!2sid" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-full'></iframe>
                        </div>
                    </div>
                </div>
                {/* Location Start */}
                {/* Catering Start */}
                <div className='py-8 px-2'>
                    <div className='flex items-center gap-1'>
                        <Checkbox></Checkbox>
                        <h1 className='text-2xl font-bold'>
                            Catering
                        </h1>
                    </div>
                    <div className='grid grid-cols-2 gap-2 mt-4 text-green-700'>
                        <div className='bg-orange-100 rounded-md pt-2 pb-1 px-2'>
                            <h1 className='text-xs font-semibold'>
                                Paket Prasmanan
                            </h1>
                            <div className='flex gap-1 justify-between'>
                                <ul className='text-[8px] capitalize'>
                                    <li>
                                        <span>-</span> nasi
                                    </li>
                                    <li>
                                        <span>-</span> ayam bakar
                                    </li>
                                    <li>
                                        <span>-</span> sayur bayam
                                    </li>
                                </ul>
                                <div className='flex-none w-1/2 aspect-video  flex flex-col justify-center items-center gap-1' >
                                    <img src="about.jpg" alt="reson" className='w-full h-full object-cover' />
                                    <button className='text-[8px] py-1 px-2  bg-green-800 text-white rounded-xl'>Porsi : 0</button>
                                </div>
                            </div>
                        </div>
                        <div className='bg-orange-100 rounded-md pt-2 pb-1 px-2'>
                            <h1 className='text-xs font-semibold'>
                                Paket Prasmanan
                            </h1>
                            <div className='flex gap-1 justify-between'>
                                <ul className='text-[8px] capitalize'>
                                    <li>
                                        <span>-</span> nasi
                                    </li>
                                    <li>
                                        <span>-</span> ayam bakar
                                    </li>
                                    <li>
                                        <span>-</span> sayur bayam
                                    </li>
                                </ul>
                                <div className='flex-none w-1/2 aspect-video  flex flex-col justify-center items-center gap-1' >
                                    <img src="about.jpg" alt="reson" className='w-full h-full object-cover' />
                                    <button className='text-[8px] py-1 px-2  bg-green-800 text-white rounded-xl'>Porsi : 0</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Catering End */}
                {/* About Start */}
                <div className='pb-8'>
                    <h1 className='text-xl underline underline-offset-1 font-bold'>
                        About Building
                    </h1>
                    <div className='p-2 text-sm'>
                        <p className=''>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto magnam delectus, alias maiores ut nemo dolores reprehenderit necessitatibus sed veritatis sapiente labore ipsum officia adipisci <span>...</span>
                        </p>
                        <button className='underline underline-offset-1'>Read More</button>
                    </div>
                </div>
                {/* About End */}
            </div>
        </section>
    )
}

export default page