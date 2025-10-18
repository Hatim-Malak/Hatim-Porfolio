import React, { useEffect, useState,useRef } from "react";
import { Link } from "react-scroll";
import ShinyText from "./ShinyText.jsx";
import { Menu,X } from "lucide-react";

const Navbar = () => {
  const [open, setopen] = useState(false)
  useEffect(() => {
    
  }, [open])
  return (
    <>
    <div className="fixed border border-white border-opacity-30 lg:w-[70%] bg-gray-400/15 w-[90%] top-5 rounded-full lg:flex lg:block hidden  px-7 justify-between items-center z-10">
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
    </div>
    <div className="flex justify-between w-full  px-3 fixed top-5 lg:hidden block  items-center">
      <div className=" bg-gray-400/15 p-3 rounded-full border border-white border-opacity-30">
        <ShinyText
          text="Hatim Malak"
          disabled={false}
          speed={10}
          className="text-3xl font-bold opacity-50"
        />
      </div>
      {!open?(<button className="p-4 rounded-full bg-gray-400/15 border border-white border-opacity-30 flex jsutify-center items-center" onClick={()=>setopen(true)}>
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
    </div>)}

    </div>
    </>
  );
};

export default Navbar;
