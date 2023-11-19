import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-28 p-3 w-full max-w-[1200px] mx-auto grid lg:grid-cols-3 px-5">
      <div className="text-white lg:col-span-2">
        <h1 className="font-bold text-2xl sm:text-3xl">Want tips & tricks to optmize your flow?</h1>
        <p className="text-xl font-medium my-10">Sign up to our newsletter and stay up to date</p>
      </div>
      <div className="flex flex-col items-center gap-3 lg:flex-row">
        <input type="email" placeholder="Enter your email" className="p-3 rounded-md w-full outline-none hover:bg-gray-300 focus:border-4
        focus:border-[#00df9a]"/>
        <button className="my-5 p-4 bg-[#00df9a] text-black rounded-lg w-[220px] font-medium mx-auto
        hover:border-2 hover:bg-black border-[#00df9a] hover:text-[#00df9a] ease-in-out">
            Notify Me
        </button>
      </div>
    </section>
  )
}

export default Newsletter;