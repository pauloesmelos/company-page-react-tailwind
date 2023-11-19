import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { MdMenu } from 'react-icons/md';

const NavBar = () => {
  const [menu, setMenu] = React.useState(false);
  const handleClick = () => {
    setMenu(e => !e);
  }
  return (
    <header className="w-full">
        <nav className="flex justify-between items-center w-full p-4 max-w-[1200px] mx-auto">
            <div>
                <h1 className="text-[#00df9a] font-bold text-3xl">COMPANY.</h1>
            </div>
            <div>
                <ul className="text-white text-lg hidden sm:flex">
                    <li className="p-4 cursor-pointer hover:text-[#00df9a]">Home</li>
                    <li className="p-4 cursor-pointer hover:text-[#00df9a]">Company</li>
                    <li className="p-4 cursor-pointer hover:text-[#00df9a]">Resources</li>
                    <li className="p-4 cursor-pointer hover:text-[#00df9a]">About</li>
                    <li className="p-4 cursor-pointer hover:text-[#00df9a]">Contact</li>
                </ul>
            </div>
            <div className="sm:hidden hover:bg-[#00df9a] block hover:text-black duration-500 mr-2" onClick={handleClick}>
                {
                menu ?
                <IoMdClose size={50} color="#fff" cursor={"pointer"} /> :
                <MdMenu size={50} color="#fff" cursor={"pointer"} />
                }
            </div>
            <div className={`fixed ${menu ? "block" : "ml-[-100%]"} duration-300 ease-in-out w-[70%] h-screen bg-black left-0 top-0
            border-r-2 border-gray-500`}>
                <h1 className="text-[#00df9a] font-bold text-3xl p-5">COMPANY.</h1>
                <ul className="text-white font-medium uppercase p-3 duration-500">
                    <li className="p-3 border-b hover:bg-[#00df9a] duration-500">Home</li>
                    <li className="p-3 border-b hover:bg-[#00df9a] duration-500">Company</li>
                    <li className="p-3 border-b hover:bg-[#00df9a] duration-500">Resources</li>
                    <li className="p-3 border-b hover:bg-[#00df9a] duration-500">About</li>
                    <li className="p-3 hover:bg-[#00df9a] duration-500">Contact</li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default NavBar;