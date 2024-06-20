import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import { IoIosContact } from "react-icons/io";
import { CiDesktop } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import image from "../../assets/react.svg";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdLocate } from "react-icons/io";
import { SiFreelancer } from "react-icons/si";
import { FaLink } from "react-icons/fa6";
import { CiSaveDown2 } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import AboutMe from "../../Components/AboutME/AboutMe";
import Skills from "../../Components/Skills/Skills";
import Works from "../../Components/Works/Works";
import Blogs from "../../Components/Blogs/Blogs";
import Contact from "../../Components/Contact/Contact";


const mydata = [
  {
    id: "01",
    icon: <AiOutlineMail />,
    text: "ashikhasan998@gmail.com",
  },
  {
    id: "2",
    icon: <IoMdLocate />,
    text: "Bangladesh",
  },
  {
    id: "2",
    icon: <SiFreelancer />,
    text: "Front-End Developer",
  },
  {
    id: "2",
    icon: <FaLink />,
    text: "www.ashikhasan.com",
  },
];
const Home = () => {
  return (
    <div id="#home" className=" max-w-7xl relative h-full">
      
      <div className=" w-full grid   grid-cols-12 sm:h-[800p]">
        {/* <div className="fixed top-20 left-5   pt-4 gird-cols-1 w-full ">
          <div className="w-12 h-[300px] flex flex-col gap-4 py-4 rounded-full items-center border-2 border-white">
                <div className="flex flex-col justify-between items-center ">
                   <a className="text-xl gap-8 hover:bg-white p-2 rounded-full hover:text-black"  href="#home"> <CgMenuGridO /></a>
                   <a className="text-xl gap-8 hover:bg-white p-2 rounded-full hover:text-black"  href="#contact"> <IoIosContact /></a>
                   <a className="text-xl gap-8 hover:bg-white p-2 rounded-full hover:text-black"  href="#work"> <CiDesktop /></a>
                   <a className="text-xl gap-8 hover:bg-white p-2 rounded-full hover:text-black"  href="#skills"> <FaEdit /></a>
                   <a className="text-xl gap-8 hover:bg-white p-2 rounded-full hover:text-black"  href="#contact"> <RiMessengerLine /></a>
                </div>
          
          </div>
        </div> */}

        <div className=" w-full sm:max-h-fit py-4 col-span-12 sm:col-span-12  ">
          {/* Developer heading */}
          <div className="title text-center sm:py-8 sm:pb-12">
            <h1 className="text-7xl text-[#98FAEC]">Developer</h1>
          </div>
          {/* About Myself */}
          <div className=" sm:h-[400px] sm:flex sm:justify-between items-center py-4">
            {/* left side */}
            <div
              className="border-[4px] border-r-0 border-l-[#12F7D6] border-t-[1px] border-b-0 border-t-[#12F7D6] w-[200px] mx-auto
            sm:h-[400px] rounded-tl-[75px]"
            >
              <div
                className="border-[5px] border-white w-[198px] rounded-br-[60px]
            h-[400px] rounded-tl-[70px]"
              >
                <div className=" w-full flex justify-center items-center">
                  <div className="w-full py-4">
                    <div className="flex justify-center">
                      <img
                        className=" h-20 w-20  border-2 rounded-full"
                        src={image}
                      />
                    </div>
                    <div className="text-center pt-2">
                      <h1>Ashik Hasan</h1>
                      <p>Full-stack developer</p>
                    </div>
                  </div>
                </div>
                <div className=" ">
                  <ul className="p-2 text-[14px] ">
                    {mydata.map((md) => (
                      <li>
                        <a
                          href={md.link}
                          className=" flex justify-start items-center gap-4"
                        >
                          <p className=" text-[#12F7D6]">{md.icon}</p>
                          <p>{md.text}</p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* button */}
                <div className="flex justify-between items-center px-2 py-4">
                  <button className=" bg-[#12F7D6] px-2 text-black rounded-md">
                    HTML
                  </button>
                  <button className=" bg-[#12F7D6] px-2 text-black rounded-md">
                    REACT
                  </button>
                  <button className=" bg-[#12F7D6] px-2 text-black rounded-md">
                    NEXT JS
                  </button>
                </div>
                {/* Downlode CV */}
                <div className="div">
                  <div className="flex justify-center">
                    <a
                      href={""}
                      download
                      className="bg-white text-[16px] flex justify-between gap-2 items-center text-black font-bold py-2 px-6 shadow-inner shadow-white rounded-lg hover:bg-gray-300 transition duration-300"
                    >
                      <p>Download CV</p>
                      <p className="text-xl">
                        <CiSaveDown2 />
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Side */}
            <div className=" w-full h-full sm:flex justify-between sm:px-8 mt-8 sm:mt-0 ">
              {/* Details */}
              <div className="about sm:pr-8">
                <div className="flex items-center text-[#12F7D6]">
                  <p>
                    {" "}
                    <FaAngleLeft />{" "}
                  </p>
                  h1
                  <p>
                    {" "}
                    <FaAngleRight />{" "}
                  </p>
                </div>

                <h1 className=" text-[40px]">Hey</h1>
                <h1 className=" text-[40px]">
                  I'm <span className=" text-[#12F7D6]">Ashik</span>
                </h1>
                <h1 className=" text-[40px]">Font-End developer</h1>
                <div className=" w-full flex justify-end items-center text-[#12F7D6]">
                  <p>
                    {" "}
                    <FaAngleLeft />{" "}
                  </p>
                  h1 /
                  <p>
                    {" "}
                    <FaAngleRight />{" "}
                  </p>
                </div>
                <div className=" w-full flex justify-start items-center text-[#12F7D6]">
                  <p>
                    {" "}
                    <FaAngleLeft />{" "}
                  </p>
                  p
                  <p>
                    {" "}
                    <FaAngleRight />{" "}
                  </p>
                </div>
                <p className=" text-xl">
                  I help business grow by crafting amazing web experiences. If
                  you’re looking for a developer that likes to get stuff done,
                </p>
                <div className=" w-full flex justify-end items-center text-[#12F7D6]">
                  <p>
                    {" "}
                    <FaAngleLeft />{" "}
                  </p>
                  p /
                  <p>
                    {" "}
                    <FaAngleRight />{" "}
                  </p>
                </div>
                <div className="w-full flex justify-center  text-center">
                  <div className=" flex justify-start items-center gap-8">
                    <h1 className=" text-[36px] text-[#12F7D6]">Lets's Talk</h1>
                    <a href="#">
                      <p className=" text-[#12F7D6] text-2xl bg-gray-400 p-2 rounded-full">
                        <AiOutlineMail />
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              {/* Experiences */}
              <div className=" sm:px-4 h-[400px] w-[250px] mx-auto ">
                <div className="w-[150px] mx-auto mt-12 px-2 h-[300px] rounded-full bg-[#1A1E23]">
                  <div className="flex justify-center items-center gap-2 px-2 pt-12 cursor-pointer">
                    <p className=" text-[40px] text-[#12F7D6]">2</p>
                    <p>Programming Language</p>
                  </div>
                  <div className="flex justify-center items-center gap-2 px-2 pt-3 cursor-pointer">
                    <p className=" text-[40px] text-[#12F7D6]">3</p>
                    <p>Developing Tools</p>
                  </div>
                  <div className="flex justify-center items-center gap-2 px-2 pt-3 cursor-pointer">
                    <p className=" text-[40px] text-[#12F7D6]">2</p>
                    <p>Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About me Section */}
      <div>
        <AboutMe />
      </div>
      <div id="skills" className="">
        <Skills />
      </div>
      {/* works */}
      <div id="work" className="">
        <Works />
      </div>
      <div className="">
        <Blogs />
      </div>
      <div id="contact" className="">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
