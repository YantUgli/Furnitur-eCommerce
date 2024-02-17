'use client'
import { Burger, Drawer } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React, { useEffect, useState } from 'react'
import { fadeInUp, scaleIn, staggerNavbar } from '@/app/animations';
import { motion } from 'framer-motion';



function Navbar({ isScrolled, activeSection }) {
    const [opened, { open, close }] = useDisclosure();
    const [isLarge, setIsLarge] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            // Update the state based on the current window width
            setIsLarge(window.innerWidth >= 1024);
        };
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Initial check for screen size
        handleResize();

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    useEffect(() => {
        if (isLarge) {
            close();
        }
    }, [isLarge]);
    return (
        <nav className={`w-full flex justify-around items-center py-4  lg:px-8  fixed z-10 capitalize   ${isScrolled ? 'bg-purple-600/90 text-white' : ''}`}>
            <motion.a
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-3xl font-extrabold">
                KitaDigital<span className="text-yellow-400"></span>
            </motion.a>
            <Burger color={isScrolled ? 'white' : 'black'} opened={opened} onClick={open} aria-label="Toggle navigation" className='lg:hidden' />
            <Drawer className='' radius='md' opened={opened} onClose={close} position='right' size='50%' color='black'>
                <div className=' grid'>
                    <a href="#home" className={activeSection == 'home' ? 'text-yellow-400' : ''} onClick={close} >Home</a>
                    <a href="#about" className={activeSection == 'about' ? 'text-yellow-400' : ''} onClick={close} >About</a>
                    <a href="#services" className={activeSection == 'services' ? 'text-yellow-400' : ''} onClick={close} >Services</a>
                    <a href="#portfolio" className={activeSection == 'portfolio' ? 'text-yellow-400' : ''} onClick={close} >Portfolio</a>
                    <a href="#team" className={activeSection == 'team' ? 'text-yellow-400' : ''} onClick={close} >Team</a>
                    <a href="#contact" className={activeSection == 'contact' ? 'text-yellow-400' : ''} onClick={close} >Contact</a>
                </div>
            </Drawer>

            <motion.div variants={staggerNavbar} initial='hidden' animate='visible' className=" gap-7 hidden lg:flex">
                <motion.a variants={fadeInUp} href="#home" className={activeSection == 'home' ? 'text-yellow-400' : ''} >Home</motion.a>
                <motion.a variants={fadeInUp} href="#about" className={activeSection == 'about' ? 'text-yellow-400' : ''} >About</motion.a>
                <motion.a variants={fadeInUp} href="#services" className={activeSection == 'services' ? 'text-yellow-400' : ''} >services</motion.a>
                <motion.a variants={fadeInUp} href="#portfolio" className={activeSection == 'portfolio' ? 'text-yellow-400' : ''}>Portfolio</motion.a>
                <motion.a variants={fadeInUp} href="#team" className={activeSection == 'team' ? 'text-yellow-400' : ''}>Team</motion.a>
                <motion.a variants={fadeInUp} href="#contact" className={activeSection == 'contact' ? 'text-yellow-400' : ''}>contact</motion.a>
            </motion.div>
            <motion.a variants={scaleIn} initial='hidden' animate='visible' className='border-2 border-yellow-400 py-2 px-4 rounded-md hidden lg:block'>get started</motion.a>
        </nav>
    )
}

export default Navbar