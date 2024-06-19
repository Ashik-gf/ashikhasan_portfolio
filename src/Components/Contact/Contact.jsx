import React from "react";
import MouseIcon from "../MouseIcon/MouseIcon";
import { LuSend } from "react-icons/lu";

const Contact = () => {
  return (
    <div>
      <MouseIcon
        title={"Contact"}
        discription={"I’m currently available for freelance work"}
      />
      <div className="w-full flex justify-center sm:py-12">
      <div className=" flex items-center justify-center w-[250px] h-[80px]  border-white rounded-tl-[40px] rounded-br-[40px]">
        <h1 className=" text-[30px] text-center font-bold text-[#12F7D6]">Send Me a SMS</h1>
      </div>
      </div>
       {/* From */}
      <div className=" sm:w-[800px]  mx-auto px-2 flex flex-col gap-12 ">
        <div className=" sm:flex justify-between gap-4 items-center">
            <label>
                <p className=" pb-4 text-[#12F7D6]">Your Name</p>
                <input type="text"
                
                required
                className=" w-full sm:w-[300px] border-b-2 px-4 border-[#12F7D6] outline-none appearance-none bg-transparent"
                 />
            </label>
            <label>
                <p className=" pb-4 text-[#12F7D6]">Email</p>
                <input type="email"
                
                required
                className=" w-full sm:w-[300px] border-b-2 px-4 border-[#12F7D6] outline-none appearance-none bg-transparent"
                 />
            </label>
        </div>
        <div className=" w-full">
        <label>
                <p className=" pb-12 text-[#12F7D6]">Your Messege</p>
                <input type="text"
                
                required
                className=" w-full h-[40px] border-b-2 px-4 border-[#12F7D6] outline-none appearance-none bg-transparent"
                 />
            </label>
        </div>

        <div className=" flex justify-center">
            <button className=" px-8 py-2 flex justify-center items-center gap-2
             bg-[#12f8d6] hover:bg-[#055347] hover:text-white rounded-full
              transition hover:duration-500 hover:delay-50
              text-black">Send Message
            <p><LuSend /></p>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
