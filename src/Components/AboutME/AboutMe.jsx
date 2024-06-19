import React from "react";
import image from "../../assets/aboutme.jpg";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import work from '../../assets/work.jpg'

const AboutMe = () => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className=" h-full sm:h-[500px] bg-cover py-12 bg-opacity-10"
    >
      <div className=" borde  ">
        <div className="w-8 h-12 mx-auto rounded-full border-2 border-[#98FAEC]">
          <div className="w-2 h-4 mx-auto my-2 bg-[#98FAEC] rounded-3xl"></div>
        </div>
        <div className="flex justify-center items-center ">
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
      </div>
      {/* about me */}
      <div className="flex justify-between items-center px-20 pl-20">
        <div className=" w-[400px] md:w-[500px] ">
            {/* box */}
            <div className="w-[250px] h-[80px] border-2 border-[#98FAEC] rounded-tl-[40px] rounded-br-[40px]">
<h1 className=" text-[40px] text-center font-extrabold">About Me</h1>
            </div>

            <div className="bg-black/60 rounded-md shadow-md shadow-[#98FAEC] p-4 my-2">
            <p>
            Hello! 
My name is Ashik and I specialize in web developement that utilizes HTML, CSS, JS, and REACT etc.
I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.
When I'm not coding, I am writing bolgs, reading, or picking up some new hands-on art project like photography.
I like to have my perspective and belief systems challenged so that I see the world through new eyes.
            </p>
            </div>
        </div>
        <div className="w-[250px] my-auto h-[300px] border-2 border-[#98FAEC] rounded-md">
            <img className=" h-full" src={work} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
