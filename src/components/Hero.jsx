import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <main className="w-full h-screen flex mt-40 items-center flex-col text-center text-white p-3">
      <div>
        <h2 className="text-[#00df9a] font-bold">GROWING WITH DATA ANALYTICS</h2>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-white sm:text-7xl py-5">Grow with data.</h1>
      </div>
      <div className="flex gap-3 flex-wrap justify-center font-medium">
        <p className="text-lg sm:text-2xl">Fast, flexible financing for</p>
        <Typed
          className="text-lg sm:text-2xl"
          strings={[
          'commerce',
          'enterprise',
          'ongs']}
          typeSpeed={100}
          backSpeed={50}
          loop
        />
      </div>
      <div>
          <p className="text-xl sm:text-2xl text-slate-400 font-medium my-5">
            More acuraccy for Enterprise, Marketplace and others, let's go together in the mission.
          </p>
      </div>
      <button className="my-5 p-4 bg-[#00df9a] text-black rounded-lg w-[220px] font-medium 
      hover:border-2 hover:bg-black border-[#00df9a] hover:text-[#00df9a] ease-in-out">
        Get Started
      </button>
    </main>
  )
}

export default Hero;