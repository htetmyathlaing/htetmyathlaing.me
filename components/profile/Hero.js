import React from 'react';
import Typewriter from '../Typewriter';

const Hero = () => {
  return (
    <div className="text-center md:mr-8 md:w-1/2 md:text-left">
      <h1 className="mb-4 text-5xl">
        I&apos;m <span className="font-josefin text-gradient"> Htet Myat</span>,
      </h1>
      <h1 className="mb-4 text-3xl text-gray-300">A Software Engineer</h1>
      <Typewriter
        text="who wants to live peacefully..."
        className="font-josefin text-xl text-gray-300"
      />
      <div className="flex items-center justify-center font-montserrat text-lg md:justify-start">
        <span className="text-5xl text-white">7</span>
        <span className="text-5xl text-gradient">+</span>
        <span className="ml-2 inline-block text-left text-sm leading-tight text-white">
          years of
          <br />
          experience
        </span>
      </div>
    </div>
  );
};

export default Hero;
