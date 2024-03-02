'use client'
import { Burger, Drawer } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React, { useEffect, useState } from 'react'
import { fadeInUp, scaleIn, staggerNavbar } from '@/app/animations';
import { motion } from 'framer-motion';
import { IconHeart, IconSearch, IconShoppingCart } from '@tabler/icons-react';


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
        <nav className={`w-full flex justify-around items-center py-4  lg:px-8  fixed z-20 capitalize   ${isScrolled ? 'bg-white shadow-xl' : ''}`}>
            <motion.a
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-xl lg:text-3xl font-extrabold font-Monserrat ">
                YantDev
            </motion.a>
            <Burger color='' opened={opened} onClick={open} aria-label="Toggle navigation" className='lg:hidden' />
            <Drawer className='' radius='md' opened={opened} onClose={close} position='right' size='50%' color='black'>
                <div className='flex gap-8 mb-4'>
                    <IconSearch />
                    <IconHeart />
                    <IconShoppingCart />
                </div>
                <div className=' grid'>
                    <a href="#home" className={activeSection == 'home' ? 'text-primary' : ''} onClick={close} >Home</a>
                    <a href="#services" className={activeSection == 'services' ? 'text-primary' : ''} onClick={close} >Shop</a>
                    <a href="#about" className={activeSection == 'about' ? 'text-primary' : ''} onClick={close} >About</a>
                    <a href="#contact" className={activeSection == 'contact' ? 'text-primary' : ''} onClick={close} >Contact</a>
                </div>

            </Drawer>

            <motion.div variants={staggerNavbar} initial='hidden' animate='visible' className=" gap-7 hidden lg:flex">
                <motion.a variants={fadeInUp} href="#home" className={activeSection == 'home' ? 'text-primary' : ''} >Home</motion.a>
                <motion.a variants={fadeInUp} href="#services" className={activeSection == 'services' ? 'text-primary' : ''} >Shop</motion.a>
                <motion.a variants={fadeInUp} href="#about" className={activeSection == 'about' ? 'text-primary' : ''} >About</motion.a>
                <motion.a variants={fadeInUp} href="#contact" className={activeSection == 'contact' ? 'text-primary' : ''}>Contact</motion.a>
            </motion.div>
            <div className='lg:flex gap-8 hidden'>
                <IconSearch />
                <IconHeart />
                <IconShoppingCart />
            </div>
        </nav>
    )
}

export default Navbar