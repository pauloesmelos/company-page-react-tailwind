import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <section className="w-full bg-white mx-auto py-16 p-5 grid sm:grid-cols-2">
      <div>
        <img src={Laptop} alt="laptop image" className="w-[500px] mx-auto" />
      </div>
      <div className="flex flex-col my-5">
        <h2 className="text-[#00df9a] font-bold text-xl">DATA ANALYTICS DASHBOARD</h2>
        <h1 className="text-black font-bold text-4xl my-6">Manage Data Analytics Centrally</h1>
        <p className="text-black text-lg font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, corrupti neque. Dolorem quasi asperiores ipsam ratione.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, corrupti neque. Dolorem quasi asperiores ipsam ratione.
        </p>
        <button className="my-8 p-4 bg-[#000] text-[#00df9a] rounded-lg w-[220px] font-medium mx-auto sm:mx-0
        hover:bg-[#00df9a] border-[#000] hover:text-[#000]">
          Get Started
        </button>
      </div>
    </section>
  )
}

export default Analytics;