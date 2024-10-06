import Image from 'next/image'
import React from 'react'

function Share() {
    return (
        <section className='py-12 container mx-auto '>
            <div className='grid items-center justify-center text-center'>
                <h2 className='text-lg'>
                    Share your setup with
                </h2>
                <h1 className='text-3xl font-extrabold'>
                    #YantFurniture
                </h1>
            </div>
            <div className='grid grid-cols-6 grid-rows-4  gap-4 h-[80vh] pt-6 '>
                <div className='row-span-2 col-span-2 '>
                    <img src="Product1.png" alt="share" className='w-full h-full object-cover object-bottom' />
                </div>
                <div className='relative row-start-2 col-start-3 col-span-2 row-span-3 '>
                    <Image
                        alt="Mountains"
                        src='/Hero.png'
                        quality={100}
                        fill
                        sizes="100vw"
                        className='object-cover'
                    />
                </div>
                <div className=' row-span-2 '>
                    <img src="Range2.png" alt="share" className='w-full h-full object-cover object-bottom' />

                </div>
                <div className='  row-span-4 '>
                    <img src="Range4.png" alt="share" className='w-full h-full object-cover object-bottom' />

                </div>
                <div className='  row-span-2 '>
                    <img src="image2.png" alt="share" className='w-full h-full object-cover object-bottom' />

                </div>
                <div className='  row-span-2 '>
                    <img src="image3.png" alt="share" className='w-full h-full object-cover object-bottom' />

                </div>
                <div className='  row-span-2 '>
                    <img src="image4.png" alt="share" className='w-full h-full object-cover object-bottom' />

                </div>

            </div>
        </section>
    )
}

export default Share