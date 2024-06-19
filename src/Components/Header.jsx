import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import Search from './Search/Search';
import { IoHome } from "react-icons/io5";
import SlideMenu from './SlideMenu/SlideMenu';
import { FaBackwardFast } from "react-icons/fa6"

const navbar =[
  {
    id:'1',
    title:'Home',
    path:'/',
    icon:''
  },
  {
    id:'2',
    title:'Blog',
    path:'/blog',
  },
  {
    id:'3',
    title:'',
    path:'',
    input:<Search />
  },

  {
    id:'4',
    title:'Instagram',
    path:'/instagram',
    icon:<FaInstagram />
  },
  {
    id:'5',
    title:'Discord',
    path:'https://discord.com/channels/@me',
    icon:<FaDiscord />
  },
  {
    id:'6',
    title:'Github',
    path:'https://github.com/Ashik-gf',
    icon:<FaGithub />
  },
]
const Header = () => {
const [open, setOpen] = useState(false);
const handeOpen =()=>{
  setOpen(!open)
  console.log('click');
}
  return (
    <div>
      <div className="flex justify-between items-center py-4">
        <div className="flex-row justify-start items-center  w-full">
         <h1 className=' text-start text-xl hover:cursor-pointer'> Ashik Hasan</h1>
        </div>
        <button onClick={handeOpen} className='  sm:hidden text-3xl text-[#12F7D6]'>
           {
            open ? <span className=' text-white'><FaBackwardFast /></span> : <IoHome/>
          }
          {/* place for slide home */}
        </button>
        {
            open ? <div className=' absolute top-12 -right-20 -translate-x-20 transition-transform duration-1000 delay-700'>
              <SlideMenu open={open} /> 
            </div>: ""
            
          }
        <div className= {`  w-full text-lg hidden md:flex justify-start items-center gap-2 lg:gap-8 md:gap-4`} >
{
  navbar.map(nav=>
  <NavLink
    to={nav.path}
    className={({ isActive }) =>
      [
        isActive ? `text-[#12F7D6] ${nav.id=='3' && 'text-black'}` : " ",
      ].join(" ")
    }
  >
    <div className="flex justify-center items-center gap-2">
      <p className=' text-[#12F7D6]'>{nav.icon}</p> <span> {nav.title}</span> <span>{nav.input}</span>
    </div>
   
  </NavLink> )
}
          </div>
      </div>
    </div>
  )
}

export default Header