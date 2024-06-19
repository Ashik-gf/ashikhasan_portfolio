import React from "react";
import MouseIcon from "../MouseIcon/MouseIcon";
import blogs from "../../assets/blogs.png";
const Blogs = () => {
  return (
    <div>
      <MouseIcon
        title={"Blogs"}
        discription={
          "My thoughts on technology and business, welcome to subscribe"
        }
      />
      <div className="flex flex-col justify-center items-center pt-8">
        <div className=" w-full sm:w-[800px] h-[2px] rounded-full bg-gray-400 "></div>
        <div className=" w-full md:w-[800px] md:flex justify-start items-center gap-12  py-8">
          <div className=" w-full sm:w-2/4 h-full flex justify-center sm:justify-end items-center">
            <img src={blogs} className=" h-[300px] w-[300px] rounded-lg" />
          </div>
          <div className=" w-full sm:w-2/4 space-y-8">
            <h1 className=" text-4xl font-bold text-[#12F7D6] text-wrap">
              What does it take to become a web developer?
            </h1>
            <p>
              Web development, also known as website development, encompasses a
              variety of tasks and processes involved in creating websites for
              the internet…
            </p>
            <a className="text-[#12F7D6]">Read more....</a>
          </div>
        </div>
        <div className=" sm:w-[800px] h-[2px] rounded-full bg-[#12F7D6] "></div>
      </div>
      {/* Button */}
      <div className=" w-full sm:w-[400px] flex justify-center gap-8 mx-auto  py-12 ">
        <button className="  px-12 py-4 rounded-full bg-[#12F7D6] text-black">View More</button>
        <button className=" px-12 py-4 rounded-full border-2">Subscribe</button>
      </div>
    </div>
  );
};

export default Blogs;
