import React from 'react'
import Search from '../Search/Search'
import { FaDiscord, FaGithub, FaInstagram } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
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
      path:'/discord',
      icon:<FaDiscord />
    },
    {
      id:'6',
      title:'Github',
      path:'/github',
      icon:<FaGithub />
    },
  ]
const SlideMenu = ({open}) => {
  return (
    <div>
        <div className= {` bg-gray-900 py-4 px-2 transition duration-1000 delay-75 rouneded-lg  w-[120px] text-lg  flex flex-col justify-start items-start gap-2 lg:gap-8 md:gap-4`} >
{
  navbar.map(nav=>
  <NavLink
    to={nav.path}
    className={({ isActive }) =>
      [
        isActive ? `text-[#12F7D6] ` : " ",
      ].join(" ")
    }
  >
    <div className="flex justify-center items-center gap-2 cursor-pointer">
      <p className=' text-[#12F7D6]'>{nav.icon}</p> <span className=' hover:text-[#047262]'> {nav.title}</span> <span className={`${open?"hidden":""}`}>{nav.input}</span>
    </div>
   
  </NavLink> )
}
          </div>
    </div>
  )
}

export default SlideMenu