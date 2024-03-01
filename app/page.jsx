"use client"


import React, { useEffect, useState } from 'react';
import Navbar from "@/components/navbar"
import Hero from "@/components/Hero"
import Range from "@/components/Range"
import Fetures from '@/components/Fetures';
import Services from '@/components/Services';
import CTA from '@/components/CTA';
import Portfolio from '@/components/Portfolio';
import Count from '@/components/Count';
import Testimoni from '@/components/Testimoni';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { IconArrowNarrowUp } from '@tabler/icons-react';
import Product from '@/components/Product';
import Rooms from '@/components/Rooms';
import Share from '@/components/Share';


export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
      const elements = document.querySelectorAll('[id]');

      let newActiveSection = '';

      elements.forEach((element) => {
        const elementRect = element.getBoundingClientRect();
        const elementHeight = elementRect.height;
        const elementTop = elementRect.top + window.scrollY;
        if (elementTop <= scrollPosition + elementHeight * 0.5 && elementTop + elementHeight >= scrollPosition + elementHeight * 0.5) {
          newActiveSection = element.id;
        }
      });

      setActiveSection(newActiveSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className=" bg-white overflow-hidden text-maintext font-Poppins">
      <Navbar isScrolled={isScrolled} activeSection={activeSection} />
      <Hero />
      <main className=''>
        <Range />
        <Product />
        <Rooms />
        <Share />
        {/* <Fetures /> */}
        {/* <Services /> */}
        {/* <CTA /> */}
        {/* <Portfolio /> */}
        {/* <Count /> */}
        {/* <Testimoni /> */}
        {/* <Team /> */}
        {/* <Contact /> */}
      </main>
      {/* Footer */}
      <Footer />
      {isScrolled &&
        <a href="#" className='aspect-square  w-12 mx-auto bg-primary flex justify-center items-center rounded-md fixed bottom-5 right-5 z-50'>
          <IconArrowNarrowUp color='white' />

        </a>
      }

    </div>
  );
}
