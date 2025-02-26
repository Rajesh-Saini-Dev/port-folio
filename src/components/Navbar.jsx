import React, { useState } from "react";
import { RiCloseLargeFill, RiMenu2Line } from "react-icons/ri";

const Navbar = () => {
  const [togle, settogle] = useState(false)
  return (
    <>
      <nav className="bg-gray-900  text-white fixed w-full z-20 shadow-lg shadow-orange-200">
      <div className="container py-4 px-8 mx-auto flex justify-between items-center">
        <h1 className="text-3xl  font-bold"><span className="text-[#ec806f]">Raj</span>esh</h1>
        <ul className="md:flex text-xl gap-6 hidden ">
          <li><a href="#home" className="hover:text-orange-400 cursor-pointer">Home</a></li>
          <li><a href="#about" className="hover:text-orange-400 cursor-pointer">About</a></li>
          <li><a href="#portfolio" className="hover:text-orange-400 cursor-pointer">Portfolio</a></li>
          <li><a href="#skills" className="hover:text-orange-400 cursor-pointer">Skills</a></li>
          <li><a href="#contact" className="hover:text-orange-400 cursor-pointer">Contact</a></li>
        </ul>
        {
            togle ?
          <RiCloseLargeFill onClick={() =>settogle(!togle)} className="self-center text-3xl inline md:hidden"/>
          :
          <RiMenu2Line onClick={() =>settogle(!togle)} className="self-center text-3xl inline md:hidden"/>
          }
      </div>
    </nav>
     {/* for responsive  */}
     <nav className={`duration-500 h-screen bg-gray-900 top-16 text-white fixed w-full z-20 md:hidden ${togle ? 'left-[0]' : 'left-[-100%]'} `}>  
        <ul className="flex gap-10 flex-col items-center text-4xl pt-28">
          <li><a href="#home" onClick={() =>settogle(!togle)} className="hover:text-orange-400 cursor-pointer">Home</a></li>
          <li><a href="#about" onClick={() =>settogle(!togle)} className="hover:text-orange-400 cursor-pointer">About</a></li>
          <li><a href="#portfolio" onClick={() =>settogle(!togle)} className="hover:text-orange-400 cursor-pointer">Portfolio</a></li>
          <li><a href="#skills" onClick={() =>settogle(!togle)} className="hover:text-orange-400 cursor-pointer">Skills</a></li>
          <li><a href="#contact" onClick={() =>settogle(!togle)} className="hover:text-orange-400 cursor-pointer">Contact</a></li>
        </ul>
    </nav>
    </>
  );
};

export default Navbar;
