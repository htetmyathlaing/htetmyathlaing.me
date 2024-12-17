import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Hero from '../components/profile/Hero';
import About from '../components/profile/About';
import Occupation from '../components/profile/Occupation';
import Contact from '../components/profile/Contact';

export default function Profile() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/profile.jpeg"
          alt="Profile Photo"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </div>
      <Navbar />
      <main className="relative flex flex-col items-center justify-center px-0 py-4 md:flex-row md:px-8 lg:px-32 xl:px-32">
        <Hero />
        <div className="mt-8 md:mt-0 md:w-1/2">
          <section className="p-8">
            <div className="space-y-8 leading-8">
              <About />
              <Occupation />
              <Contact />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
