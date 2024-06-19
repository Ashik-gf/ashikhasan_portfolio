import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { GoDotFill } from 'react-icons/go'
import line from '../../assets/Line22.svg'
const MouseIcon = ({title, discription}) => {
  return (
    <div>
         <div className=" relative md:pt-12 flex flex-col  ">
          <div className="w-8 h-12 mx-auto rounded-full border-2 border-[#98FAEC]">
            <div className="w-2 h-4 mx-auto my-2 bg-[#98FAEC] rounded-3xl"></div>
          </div>
          <div className="w-8 text-center mx-auto pl-2 py-2">
              <p className="">
                <BsThreeDotsVertical />
              </p>
              <p>
                <BsThreeDotsVertical />
              </p>
              <p className="">
                <BsThreeDotsVertical />
              </p>
              <p>
                <GoDotFill />
              </p>
            </div>
        
        </div>
        <h1 className=" text-[40px] text-center text-[#98FAEC]">{title}</h1>
            <div className=" flex flex-col gap-2 justify-center items-center ">
            <img src={line} />
            <p>{discription}</p>
            </div>
    </div>
  )
}

export default MouseIcon