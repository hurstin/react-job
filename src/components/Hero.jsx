// Hero Section Component
// Displays a prominent banner section with customizable title and subtitle
// Used on the home page to create an engaging first impression

import React from 'react';

const Hero = (props) => {
  return (
    <div>
      {/* Hero banner section with indigo background */}
      <section className="bg-indigo-700 py-20 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            {/* Main headline - responsive text sizing */}
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              {props.tile}
            </h1>
            {/* Subtitle text */}
            <p className="my-4 text-xl text-white">{props.subtitle}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
