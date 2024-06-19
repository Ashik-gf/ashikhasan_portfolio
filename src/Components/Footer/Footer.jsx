import React from 'react'
import { IoLogoInstagram } from "react-icons/io5";
import { BsDiscord } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <hr className=' mt-12 text-gray-400' />
      <div className=' flex flex-col-reverse gap-8 sm:flex-row justify-between items-center py-8'>
        <p>© 2023 SinanTokmak. All rights reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
        <div className=' flex justify-center items-center gap-8'>
      <div className=' w-10 h-10 p-3 rounded-full text-black bg-gray-300 cursor-pointer hover:bg-gray-400'><IoLogoInstagram /></div>
      <div className=' w-10 h-10 p-3 rounded-full text-black bg-gray-300 cursor-pointer hover:bg-gray-400'><BsDiscord /></div>
      <div className=' w-10 h-10 p-3 rounded-full text-black bg-gray-300 cursor-pointer hover:bg-gray-400'><FaGithub /></div>
        </div>
      </div>
      <h1 className='text-center py-4 sm:py-0'><a>www.devloperashik.com</a></h1>
    </div>
  )
}

export default Footer