"use client"


import React, { useEffect, useState } from 'react';
import Navbar from "@/components/navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
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
    <div className=" bg-white overflow-hidden">
      <Navbar isScrolled={isScrolled} activeSection={activeSection} />
      {/* Hero Section */}
      <Hero />
      <main>
        {/* About Section */}
        <About />
        {/* Fetures Section */}
        <Fetures />
        {/* Services Section */}
        <Services />
        {/* CTA Section */}
        {/* <CTA /> */}
        {/* Portofolio Section */}
        {/* <Portfolio /> */}
        {/* Count Section */}
        {/* <Count /> */}
        {/* Testimoni Section */}
        {/* <Testimoni /> */}
        {/* Team Section */}
        {/* <Team /> */}
        {/* Contact Section */}
        {/* <Contact /> */}
      </main>
      {/* Footer */}
      <Footer />
      {isScrolled &&
        <a href="#" className='aspect-square  w-12 mx-auto bg-purple-700 flex justify-center items-center rounded-md fixed bottom-5 right-5'>
          <IconArrowNarrowUp color='white' />

        </a>
      }

    </div>
  );
}
