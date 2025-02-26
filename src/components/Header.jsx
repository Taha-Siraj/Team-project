import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa"; 
import { FaRegHeart } from "react-icons/fa";
 import { FaSearch } from "react-icons/fa";
  import { FaCartShopping } from "react-icons/fa6"; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div>
        <header className="bg-white h-[100px] w-full flex flex-col md:flex-row justify-between items-center px-6 md:px-8 md:h-[100px] ">
          {/* Logo & Search */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full md:w-[50%] relative">
            <h1 className="text-2xl md:text-3xl font-extrabold">TechShed</h1>
            <div className="relative flex items-center w-full md:w-[60%] md:mt-4">
              <input
                type="search"
                placeholder="Search..."
                className="py-3 px-6 border border-gray-300 bg-[#E8E8E8] outline-none rounded-full w-full text-gray-700"
              />
              <span className="absolute right-0 h-full bg-[#751FFF] px-5 rounded-r-3xl flex items-center text-white">
                <FaSearch />
              </span>
            </div>
          </div>

          {/* Icons & Menu Button */}
          <div className="flex items-center gap-4 md:gap-6 text-xl">
            <span className="hidden md:flex gap-2 items-center cursor-pointer">
              <FaRegUserCircle /> <span className="text-sm">Login</span>
            </span>
            <span className="hidden md:flex cursor-pointer">
              <FaRegHeart />
            </span>
            <span className="cursor-pointer">
              <FaCartShopping />
            </span>
            <span
              className="flex md:hidden text-4xl cursor-pointer"
              onClick={() => setMenuOpen(true)}
            >
              <IoMenu />
            </span>
          </div>
        </header>
        <nav className="bg-[#E8E8E8] h-[40px] w-full flex items-center hidden md:flex">
          <ul className="flex gap-4 items-center px-6 md:px-8 text-sm lg:text-base ">
            <li><a href="#" className="hover:text-[#751FFF]">Shop All</a></li>
            <li><a href="#" className="hover:text-[#751FFF]">Computers</a></li>
            <li><a href="#" className="hover:text-[#751FFF]">Tablets</a></li>
            <li><a href="#" className="hover:text-[#751FFF]">Drones & Cameras</a></li>
            <li><a href="#" className="hover:text-[#751FFF]">Audio</a></li>
            <li><a href="#" className="hover:text-[#751FFF]">Mobile</a></li>
            <li><a href="#" className="hover:text-[#751FFF]">TV & Home Cinema</a></li>
            <li><a href="#" className="hover:text-[#751FFF]">Wearable Tech</a></li>
            <li><a href="#" className="hover:text-[#751FFF]">Sale</a></li>
          </ul>
        </nav>
        <div
          className={`fixed top-0 right-0 h-screen w-3/4 bg-[#E8E8E8] text-black transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } z-50 shadow-lg md:hidden`}
        >
          <div className="flex justify-end p-4 text-3xl cursor-pointer" onClick={() => setMenuOpen(false)}>
            <IoClose />
          </div>
          <nav className="h-screen w-[100%] flex flex-col items-center mt-10">
            <ul className="flex flex-col gap-4 text-lg border-b border-cayn-700">
              <li><a href="#"className="hover:text-[#751FFF]">Shop All</a></li>
              <li><a href="#"className="hover:text-[#751FFF]">Computers</a></li>
              <li><a href="#"className="hover:text-[#751FFF]">Tablets</a></li>
              <li><a href="#"className="hover:text-[#751FFF]">Drones & Cameras</a></li>
              <li><a href="#"className="hover:text-[#751FFF]">Audio</a></li>
              <li><a href="#"className="hover:text-[#751FFF]">Mobile</a></li>
              <li><a href="#"className="hover:text-[#751FFF]">TV & Home Cinema</a></li>
              <li><a href="#"className="hover:text-[#751FFF]">Wearable Tech</a></li>
              <li><a href="#"className="hover:text-[#751FFF]">Sale</a></li>
            </ul>
          </nav>
        </div>
        <div className="bg-bg1 h-screen bg-cover bg-center px-[10rem] py-[5rem]">
          <div className="flex flex-col justify-center items-start gap-5">
            <p className="text-xl bg-red-500 px-1">Best Prices</p>
            <h1 className="text-[3rem] w-[60%] font-semibold">Best Prices Incredible Prices on All Your Favorite Items</h1>
            <p className="text-xl font-light">Get more for less on selected brands</p>
            <button className="bg-[#751FFF] rounded-full py-2 text-white px-8 text-[15px] border border-[#751FFF] hover:bg-transparent hover:text-black">Shop Now</button>
            </div>
           
        </div>
        <div className="h-screen flex py-6 px-6 gap-4 text-white">
          <div className="bg-bg2 h-[500px] w-full bg-cover bg-center px-[5rem] flex flex-col justify-center items-start gap-3">
          <p className="text-xl font-light">Holiday Deals
          </p>
            <h1 className="text-[3rem] w-[60%] font-semibold">Up to 30% <br /> off</h1>
            <p className="text-xl font-light">Selected Smartphone Brands</p>
            <button className="bg-[#fff] rounded-full py-2 text-black px-8 text-[15px] border border-[#fff] hover:bg-transparent hover:text-white">Shop Now</button>
          </div>
          <div className="bg-bg3 h-[500px] w-full bg-cover bg-center px-[5rem] flex flex-col justify-center items-start gap-y-[10px]">
          <p className="text-xl font-light ">Just In
          </p>
            <h1 className="text-[3rem] w-[60%] font-semibold">Take Your Sound
            Anywhere
            </h1>
            <p className="text-xl font-light">Top Headphone Brands</p>
            <button className="bg-[#fff] rounded-full py-2 text-black px-8 text-[15px] border border-[#fff] hover:bg-transparent hover:text-white">Shop Now</button>
          </div>
        </div>

      </div>
    </>
  );
};

export default Header;
