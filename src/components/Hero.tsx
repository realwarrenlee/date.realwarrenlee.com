import React from 'react';

const Hero = () => {
  return (
    <div className="pt-8 md:pt-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-4">Date Me</h2>
      <div className="h-1 w-20 bg-white/30 rounded-full"></div>
      <p className="text-base md:text-lg leading-relaxed text-white/90 mt-4">
        They say love is blind, but my{' '}
        <a 
          href="https://ml-valentines.github.io/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-all duration-200"
        >
          <strong>vision transformer</strong>
        </a>{' '}
        has 12 attention heads just for you.
      </p>
    </div>
  );
};

export default Hero;