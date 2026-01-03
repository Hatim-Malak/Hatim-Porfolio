import React, { useEffect, useState,useRef } from "react";
import { Link } from "react-scroll";
import ShinyText from "./ShinyText.jsx";
import { Menu,X } from "lucide-react";
import { Loader,Github,Linkedin } from "lucide-react";
import { Link as lunk } from "react-router-dom";

const Navbar = () => {
  const [open, setopen] = useState(false)
  useEffect(() => {
    
  }, [open])
  return (
    <>
    <div className="fixed border backdrop-blur-md border-white border-opacity-30 lg:w-[70%] lg2:w-[90%] bg-gray-400/15 w-[98%] top-5 rounded-full lg:flex lg2:flex lg:block lg2:block hidden  px-7 justify-between items-center z-10">
      <div>
        <ShinyText
          text="Hatim Malak"
          disabled={false}
          speed={10}
          className="text-3xl font-bold opacity-50"
        />
      </div>
      <div className="opacity-50 text-gray-400 text-2xl font-semibold flex gap-3 items-center ">
        <Link to="Home" className="p-3 cursor-pointer hover:text-white" smooth={true} duration={500}>Home</Link>
        <Link to="Skills" className="p-3 cursor-pointer hover:text-white" smooth={true} duration={500}>Skills</Link>
        <Link to="Projects" className="p-3 cursor-pointer hover:text-white" smooth={true} duration={500}>Projects</Link>
        <Link to="Education" className="p-3 cursor-pointer hover:text-white" smooth={true} duration={500}>Education</Link>
        <Link to="Contact" className="p-3 cursor-pointer hover:text-white" smooth={true} duration={500}>Contact</Link>
      </div>
      <div className="flex justify-center items-center gap-3">
        <a href='https://github.com/Hatim-Malak' className="bg-gray-800/30 p-3 rounded-full cursor-pointer hover:bg-gray-800 ">
          <Github className=" text-gray-400 hover:text-white"/>
        </a>
        <a href="https://www.linkedin.com/in/hatim-malak-8ba254279/" className="bg-gray-800/30 p-3 rounded-full cursor-pointer hover:bg-gray-800">
          <Linkedin className=" text-gray-400 hover:text-white "/>
        </a>
      </div>
    </div>
    <div className="flex justify-between w-full z-[99]  px-3 fixed top-5 lg:hidden lg2:hidden block  items-center">
      <div className=" bg-gray-400/15 px-3 py-2 rounded-full border backdrop-blur-md border-white border-opacity-30">
        <ShinyText
          text="Hatim Malak"
          disabled={false}
          speed={10}
          className="text-3xl font-bold opacity-50"
        />
      </div>
      {!open?(<button className="p-4 rounded-full backdrop-blur-md bg-gray-400/15 border border-white border-opacity-30 flex jsutify-center items-center" onClick={()=>setopen(true)}>
        <Menu className="text-gray-400 hover:text-white"/>
      </button>):
      (<button className="p-4 rounded-full bg-gray-400/15 border border-white border-opacity-30 flex jsutify-center items-center" onClick={()=>setopen(false)}>
        <X className="text-gray-400 hover:text-white"/>
      </button>)}
    </div>
    <div className="relative flex items-center justify-center">
    {open&&(<div className="fixed top-24 rounded-2xl w-[90%] bg-gray-800 transition-all z-50  text-gray-400 text-2xl font-semibold flex flex-col justify-center items-center ">
        <Link to="Home" className="p-3 cursor-pointer hover:text-white" smooth={true} duration={500}>Home</Link>
        <Link to="Skills" className="p-3 cursor-pointer hover:text-white" smooth={true} duration={500}>Skills</Link>
        <Link to="Projects" className="p-3 cursor-pointer hover:text-white" smooth={true} duration={500}>Projects</Link>
        <Link to="Education" className="p-3 cursor-pointer hover:text-white" smooth={true} duration={500}>Education</Link>
        <Link to="Contact" className="p-3 cursor-pointer hover:text-white" smooth={true} duration={500}>Contact</Link>
        <a href="https://github.com/Hatim-Malak" className="p-3 cursor-pointer hover:text-white flex justify-center gap-5 items-center"><Github/> Github</a>
        <a href="https://www.linkedin.com/in/hatim-malak-8ba254279/" className="p-3 cursor-pointer hover:text-white flex justify-center gap-5 items-center"><Linkedin/> Linkdin</a>
    </div>)}

    </div>
    </>
  );
};

export default Navbar;
