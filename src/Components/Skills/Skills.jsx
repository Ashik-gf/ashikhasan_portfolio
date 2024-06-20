import React from "react";
import banner from "../../assets/prog.jpg";
import { IoIosDesktop } from "react-icons/io";
import html from '../../assets/HTML.svg'
import css from '../../assets/css.svg'
import js from '../../assets/js.svg'
import react2 from '../../assets/react2.svg'
import MouseIcon from "../MouseIcon/MouseIcon";
const Skills = () => {
  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className=" w-full md:h-[100%] bg-cover"
    >
      <div className="w-full md:h-full bg-gray-800/80 py-4">
        <MouseIcon title={'Skills'} discription={'I am striving to never stop learning and improving'} />
        {/* Skil */}
        <div>
          {/* Two Card */}
            <div className="flex justify-center items-center gap-12 py-12">
            <div className="w-[210px] flex flex-col items-center py-4 h-[110px] bg-[#98FAEC] rounded-md border-l-8 border-blue-500">
                <p className=" text-2xl text-center text-black"><IoIosDesktop /></p>
                <p className=" text-xl text-black space-y-4">web developement</p>
                <p className=" text-xl text-black space-y-4">HTML·CSS·JS·REACT</p>
            </div>
            <div className="w-[210px] flex flex-col items-center py-4 h-[110px] bg-[#98FAEC] rounded-md border-l-8 border-blue-500">
                <p className=" text-2xl text-center text-black"><IoIosDesktop /></p>
                <p className=" text-xl text-black space-y-4">web developement</p>
                <p className=" text-xl text-black space-y-4">HTML·CSS·JS·REACT</p>
            </div>
            </div>

            <div className=" grid grid-cols-2 sm:flex sm:justify-center items-center gap-4 sm:gap-24">
                {/* HTML */}
                <div className=" flex flex-col items-center justify-center">
                <img className=" h-20 w-20" src={html} />
                <p className=" text-center pt-2">HTML</p>
                </div>
                {/* CSS */}
                <div className="flex flex-col items-center justify-center">
                <img className=" h-20 w-20" src={css} />
                <p className=" text-center pt-2">CSS</p>
                </div>
                {/* JS */}
                <div className="flex flex-col items-center justify-center">
                <img className=" h-20 w-20" src={js} />
                <p className=" text-center pt-2">JAVA SCRIPT</p>
                </div>
                {/* React */}
                <div className="flex flex-col items-center justify-center">
                <img className=" h-20 w-20" src={react2} />
                <p className=" text-center pt-2">REACT</p>
                </div>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Skills;
