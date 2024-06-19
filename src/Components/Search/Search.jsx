import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  return (
    <div className=' relative '>
        <input type='text' 
        placeholder=''
    className=' w-[150px] rounded-md outline-none placeholder:text-black bg-gray-300 px-2 '
        />
        <p className=' absolute top-1 right-2 text-black '><IoSearchOutline /></p>
    </div>
  )
}

export default Search