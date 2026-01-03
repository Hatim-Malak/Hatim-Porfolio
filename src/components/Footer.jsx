import React from "react";
import { Link } from "react-scroll";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full relative overflow-hidden bg-black/80 backdrop-blur-lg border-t border-white/10">
      {/* Decorative Top Highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />

      <div className="flex flex-col-reverse lg:flex-row justify-between items-center py-8 px-6 lg:px-12 gap-6 lg:gap-0">
        
        {/* Left: Branding */}
        <div className="text-gray-400 text-sm font-medium tracking-wide">
          <p>
            &copy; {new Date().getFullYear()} Built with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 font-bold">
              MERN
            </span>
            {" "}Stack
          </p>
        </div>

        {/* Center: Navigation */}
        <div className="flex flex-wrap justify-center gap-8 text-gray-400 font-medium text-sm tracking-wider">
          {["Home", "Skills", "Contact"].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-white transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Right: Socials */}
        <div className="flex gap-4">
          <SocialIcon 
            href="https://github.com/Hatim-Malak" 
            icon={<Github size={20} />} 
          />
          <SocialIcon 
            href="https://www.linkedin.com/in/hatim-malak-8ba254279/" 
            icon={<Linkedin size={20} />} 
          />
          <SocialIcon 
            href="mailto:hatim05042006@gmail.com" 
            icon={<Mail size={20} />} 
          />
        </div>
      </div>
    </footer>
  );
};

// Helper component for cleaner code
const SocialIcon = ({ href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-cyan-600/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center"
    >
      {icon}
    </a>
  );
};

export default Footer;