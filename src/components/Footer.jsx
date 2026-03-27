import React from "react";
import { Link } from "react-scroll";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full relative font-mono mt-4">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center py-4 px-4 w-full gap-6 lg:gap-0">
        <div className="text-slate-500 text-[11px] md:text-xs">
          <p className="flex items-center flex-wrap justify-center gap-1.5">
            <span className="text-indigo-500">{"//"}</span> &copy; {new Date().getFullYear()} Hatim_Malak. 
            <span className="text-slate-600 ml-1">built_with</span>
            <Heart size={12} className="text-red-500 animate-pulse" /> 
            <span className="text-slate-600">React</span>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-slate-500 text-xs">
          {["Home", "Skills", "Projects", "Education", "Contact"].map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-indigo-400 transition-colors duration-300 hidden sm:block"
            >
              <span className="text-slate-600 mr-1">cd</span>{item.toLowerCase()}
            </Link>
          ))}
        </div>

        <div className="flex gap-4">
          <SocialIcon href="https://github.com/Hatim-Malak" icon={<Github size={14} />} text="[git]" />
          <SocialIcon href="https://www.linkedin.com/in/hatim-malak-8ba254279/" icon={<Linkedin size={14} />} text="[in]" />
          <SocialIcon href="mailto:hatim05042006@gmail.com" icon={<Mail size={14} />} text="[mail]" />
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, icon, text }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="px-3 py-2 bg-slate-800/35 border border-slate-700/50 rounded-lg text-slate-500 hover:text-indigo-300 hover:bg-slate-800/60 hover:border-indigo-500/30 transition-all duration-300 flex items-center justify-center gap-2 group ui-glow"
  >
    {icon}
    <span className="text-[10px] font-bold text-slate-600 group-hover:text-indigo-400 transition-colors">{text}</span>
  </a>
);

export default Footer;