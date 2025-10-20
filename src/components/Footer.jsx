import React from "react";
import { Link } from "react-scroll";
import { Github,Linkedin,Mail,Phone } from "lucide-react";
const Footer = () => {
  return (
    <div className="w-full lg:h-[20%] h-[30%] flex lg:flex-row flex-col-reverse justify-between items-center lg:p-9 p-5 bg-gray-400/15 backdrop-blur-md border-t-2 border-gray-400/30 ">
      <div className="text-white font-medium">
        <h1>&copy; Hatim Built with MERN</h1>
      </div>
      <div className="flex justify-center items-center text-white font-bold gap-10">
        <Link>Home</Link>
        <Link>Skills</Link>
        <Link>Contact</Link>
      </div>
      <div className="flex justify-center items-center gap-5">
        <div className="p-3 hover:bg-gray-800 rounded-full">
          <a href="https://github.com/Hatim-Malak">
            <Github className="text-gray-400 size-[20px] hover:text-white"/>
          </a>
        </div>
        <div className="p-3 hover:bg-gray-800 rounded-full">
          <a href="https://www.linkedin.com/in/hatim-malak-8ba254279/">
            <Linkedin className="text-gray-400 size-[20px] hover:text-white"/>
          </a>
        </div>
        <div className="p-3 hover:bg-gray-800 rounded-full">
          <a href="mailto:hatim05042006@gmail.com">
            <Mail className="text-gray-400 size-[20px] hover:text-white"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
