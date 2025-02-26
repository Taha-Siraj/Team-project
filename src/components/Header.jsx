import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <div>
        <div className='h-[70px] bg-[#FFFFFF] text-black w-full flex justify-between  border-b border-cyan-200 py-3 px-4'>
            <div className='flex gap-10 justify-center items-center'>
            <h1 className='text-3xl font-extrabold'>TechShed</h1>
            <div className="input flex p-0 m-0 h-10 w-full">
                <input type="search" placeholder='search' className='py-4 px-5 border rounded-3xl border-black outline-none h-10  w-full '/>
                <span className=' text-3xl relative p-4 left-[-60px] top-[-1px] bg-[#751FFF] rounded-3xl flex justify-center items-center'>
                < FaSearch />
                </span>
                </div>
            </div>
            <div className='flex gap-5 justify-center items-center text-2xl'>
                <FaRegUserCircle/>
                <span className='text-xl'>Login</span>
                <FaHeart />
                <FaCartShopping />
            </div>
        </div>
    </div>
  )
}

export default Header