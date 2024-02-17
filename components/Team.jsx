import React from 'react'

function Team() {
    return (
        <section className='container mx-auto my-8' id='team'>
            <div className='px-6 md:px-10 py-12'>
                <div className='flex gap-4 items-center justify-start'>
                    <h2 className='text-slate-400'>Team</h2>
                    <hr className='w-20  border-yellow-400' />
                </div>
                <h1 className='text-2xl md:text-4xl font-bold uppercase'>
                    check our team
                </h1>
                <div className='pt-8 md:pt-16 grid grid-cols-2 md:grid-cols-4 gap-4 '>
                    <div className='rounded-md w-full h-fit overflow-hidden border shadow-md'>
                        <div className='w-full aspect-square '>
                            <img src="team-1.jpg" alt="" className='w-full object-cover' />
                        </div>
                        <div className='py-4 px-2 md:py-6 md:px-4 capitalize'>
                            <h1 className='text-base md:text-xl font-bold'>Walter White</h1>
                            <p className='text-sm'>chief executive</p>
                        </div>
                    </div>
                    <div className='rounded-md w-full h-fit overflow-hidden border shadow-md'>
                        <div className='w-full aspect-square '>
                            <img src="team-1.jpg" alt="" className='w-full object-cover' />
                        </div>
                        <div className='py-4 px-2 md:py-6 md:px-4 capitalize'>
                            <h1 className='text-base md:text-xl font-bold'>Walter White</h1>
                            <p className='text-sm'>chief executive</p>
                        </div>
                    </div>
                    <div className='rounded-md w-full h-fit overflow-hidden border shadow-md'>
                        <div className='w-full aspect-square '>
                            <img src="team-1.jpg" alt="" className='w-full object-cover' />
                        </div>
                        <div className='py-4 px-2 md:py-6 md:px-4 capitalize'>
                            <h1 className='text-base md:text-xl font-bold'>Walter White</h1>
                            <p className='text-sm'>chief executive</p>
                        </div>
                    </div>
                    <div className='rounded-md w-full h-fit overflow-hidden border shadow-md'>
                        <div className='w-full aspect-square '>
                            <img src="team-1.jpg" alt="" className='w-full object-cover' />
                        </div>
                        <div className='py-4 px-2 md:py-6 md:px-4 capitalize'>
                            <h1 className='text-base md:text-xl font-bold'>Walter White</h1>
                            <p className='text-sm'>chief executive</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Team