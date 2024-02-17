import React from 'react'

function CTA() {
    return (
        <section className='flex justify-center items-center bg-no-repeat bg-fixed bg-cover py-10 relative bg-black/50 bg-blend-multiply text-white text-center' style={{ backgroundImage: 'url(cta-bg.jpg)' }} >
            <div className='container'>
                <h1 className='capitalize text-xl md:text-2xl font-bold'>call to action</h1>
                <p className='py-6 px-4 md:text-base text-sm'>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <a href="#" className='text-sm md:text-base font-bold py-2 px-4 border border-white rounded-md capitalize'>
                    call to action
                </a>
            </div>
        </section>
    )
}

export default CTA