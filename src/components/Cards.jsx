import React from 'react';
import Double from '../assets/double.png';
import Single from '../assets/single.png';
import Triple from '../assets/triple.png';

const Cards = () => {
  return (
    <section className=" bg-white w-full px-8 py-[10rem]">
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="shadow-lg text-black w-full rounded-md flex flex-col hover:scale-105 duration-500 border-t p-3 my-8">
            <img src={Single} alt="/" className="w-[90px] mx-auto" />
            <h1 className="font-bold text-xl text-center sm:text-2xl py-8">Single User</h1>
            <h3 className="font-bold text-3xl text-center sm:text-4xl mb-10">$149</h3>
            <ul className="text-center font-medium text-lg">
                <li className="p-3 border-b py-5">500 GB Storage</li>
                <li className="p-3 border-b py-5">1 Grandted User</li>
                <li className="p-3 border-b py-5">Send up to 2 GB</li>
            </ul>
            <button className="my-5 p-4 bg-[#00df9a] text-black rounded-lg w-[220px] font-medium mx-auto">
                Start Trial
            </button>
        </div>
        <div className="shadow-lg text-black w-full rounded-md flex flex-col hover:scale-105 duration-500 border-t bg-gray-100 p-3 lg:my-0">
            <img src={Double} alt="/" className="w-[90px] mt-[-3rem] mx-auto bg-transparent" />
            <h1 className="font-bold text-xl text-center sm:text-2xl py-8">Single User</h1>
            <h3 className="font-bold text-3xl text-center sm:text-4xl mb-10">$149</h3>
            <ul className="text-center font-medium text-lg">
                <li className="text-lg border-b py-5">500 GB Storage</li>
                <li className="text-lg border-b py-5">1 Grandted User</li>
                <li className="border-b py-5">Send up to 2 GB</li>
            </ul>
            <button className="my-5 p-4 bg-[#00df9a] text-black rounded-lg w-[220px] font-medium mx-auto">
                Start Trial
            </button>
        </div>
        <div className="shadow-lg text-black w-full rounded-md flex flex-col hover:scale-105 duration-500 border-t p-3 my-8">
            <img src={Triple} alt="/" className="w-[90px] mx-auto" />
            <h1 className="font-bold text-xl text-center sm:text-2xl py-8">Single User</h1>
            <h3 className="font-bold text-3xl text-center sm:text-4xl mb-10">$149</h3>
            <ul className="text-center font-medium text-lg">
                <li className="p-3 border-b py-5">500 GB Storage</li>
                <li className="p-3 border-b py-5">1 Grandted User</li>
                <li className="p-3 border-b py-5">Send up to 2 GB</li>
            </ul>
            <button className="my-5 p-4 bg-[#00df9a] text-black rounded-lg w-[220px] font-medium mx-auto">
                Start Trial
            </button>
        </div>
      </div>
    </section>
  )
}

export default Cards;