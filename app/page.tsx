import React from 'react';
import Banner from "@/components/Banner";
import AboutMe from '@/components/AboutMe';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Certifications from '@/components/Certifications';

export default function Home() {
  return (
    <main className="w-full bg-gray-950 text-gray-300 px-4">
      <div className="max-w-screen-lg mx-auto lg:pt-10">
        <NavBar />
        <Banner />
        {/* <AboutMe /> */}
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
