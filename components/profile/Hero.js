import React from 'react';
import Typewriter from '../Typewriter';

const Hero = () => {
  return (
    <div className="md:w-1/2 text-center md:text-left md:mr-8">
      <h1 className="text-5xl mb-4">I&apos;m <span className="font-josefin text-gradient"> Htet Myat</span>,</h1>
      <h1 className="text-3xl mb-4 text-gray-300">A Software Engineer</h1>
      <Typewriter text="who wants to live peacefully..." className=" text-xl text-gray-300 font-josefin" />
      <div className="text-lg flex items-center justify-center md:justify-start font-montserrat">
        <span className="text-5xl text-white">7</span>
        <span className="text-5xl text-gradient">+</span>
        <span className="text-sm text-white ml-2 leading-tight inline-block text-left">
          years of<br />experience
        </span>
      </div>
    </div>
  );
};

export default Hero;
