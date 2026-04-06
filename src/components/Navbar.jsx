import React, { useState } from "react";
import { Link } from "react-scroll";
import ShinyText from "./ShinyText.jsx";
import { Menu, X, Github, Linkedin } from "lucide-react";

const Navbar = () => {
  const [open, setopen] = useState(false);
  const [active, setActive] = useState("Home");
  
  const navLinks = [
    { to: "Home", label: "Home" },
    { to: "Skills", label: "Skills" },
    { to: "Projects", label: "Projects" },
    { to: "GitHub", label: "GitHub" },
    { to: "Education", label: "Education" },
    { to: "Contact", label: "Contact" },
  ];

  const handleNavClick = () => setopen(false);

  return (
    <>
      <div className="fixed top-5 left-1/2 transform -translate-x-1/2 lg:w-[72%] lg2:w-[86%] w-[96%] lg:flex lg2:flex hidden px-4 py-3 justify-between items-center z-[70] backdrop-blur-xl ui-panel ui-glow bg-gradient-to-r from-indigo-500/20 via-slate-900/40 to-blue-900/20 border-indigo-500/20">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-indigo-500/25 to-blue-900/20 blur-xl opacity-60"></div>
            <div className="relative w-10 h-10 rounded-xl bg-slate-900/50 border border-slate-700/50 flex items-center justify-center ui-glow">
              <ShinyText
                text="HM"
                disabled={false}
                speed={8}
                className="text-base font-bold font-mono tracking-wider"
              />
            </div>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-white text-sm font-semibold tracking-wide">Hatim Malak</span>
            <span className="text-slate-500 text-[11px]">Full Stack • AI</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          {navLinks.map((link) => {
            const isActive = active === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                smooth="easeInOutQuart"
                duration={1200}
                spy={true}
                offset={-90}
                onSetActive={() => setActive(link.to)}
                className={[
                  "relative px-3.5 py-2 rounded-xl cursor-pointer transition-all duration-300",
                  "text-sm font-medium tracking-wide",
                  "border border-transparent",
                  isActive
                    ? "text-white bg-slate-800/40 border-indigo-500/25 shadow-[0_0_0_1px_rgba(99,102,241,0.12)_inset]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/35 hover:border-slate-700/60",
                ].join(" ")}
              >
                {link.label}
                <span
                  className={[
                    "absolute left-3.5 right-3.5 -bottom-0.5 h-px rounded-full transition-all duration-300",
                    isActive
                      ? "bg-gradient-to-r from-indigo-400/0 via-indigo-400/70 to-blue-800/0 opacity-100"
                      : "opacity-0",
                  ].join(" ")}
                />
              </Link>
            );
          })}
        </div>

        <div className="flex justify-center items-center gap-2">
          <a
            href="https://github.com/Hatim-Malak"
            className="ui-iconbtn ui-glow"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/hatim-malak-8ba254279/"
            className="ui-iconbtn ui-glow"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a href="#Contact" className="ml-2 ui-btn-primary ui-glow group">
            Let’s talk
            <span className="relative w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-green-400/90"></span>
              <span className="absolute inset-0 rounded-full bg-green-400/60 animate-ping"></span>
            </span>
          </a>
        </div>
      </div>

      <div className="fixed top-5 left-1/2 transform -translate-x-1/2 w-[96%] max-w-xl lg:hidden z-[999] flex justify-between items-center px-4 backdrop-blur-xl ui-panel ui-glow bg-gradient-to-r from-indigo-500/20 via-slate-900/40 to-blue-900/20 border-indigo-500/20">
        <div className="px-3 py-2 flex items-center gap-3 ui-panel ui-glow bg-gradient-to-r from-indigo-500/10 via-slate-900/40 to-blue-900/10 border-indigo-500/20">
          <div className="w-9 h-9 rounded-xl bg-slate-900/50 border border-slate-700/50 flex items-center justify-center ui-glow">
            <ShinyText
              text="HM"
              disabled={false}
              speed={8}
              className="text-base font-bold font-mono tracking-wider"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-white text-sm font-semibold tracking-wide">Hatim</span>
            <span className="text-slate-500 text-[11px]">Portfolio</span>
          </div>
        </div>
        <button 
          className="p-3 rounded-xl ui-panel ui-glow bg-gradient-to-r from-indigo-500/10 via-slate-900/40 to-blue-900/10 border-indigo-500/20 text-slate-300 hover:text-white transition-all"
          onClick={() => setopen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="fixed top-24 left-4 right-4 z-50 p-5 shadow-2xl ui-panel ui-glow bg-gradient-to-b from-indigo-500/10 via-slate-900/60 to-blue-900/10 border-indigo-500/20">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/45 rounded-xl cursor-pointer transition-all border border-slate-700/50 hover:border-indigo-500/25 ui-glow"
                smooth="easeInOutQuart"
                duration={1200}
                onClick={handleNavClick}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-3 mt-5 pt-5 border-t border-slate-700/50">
            <a href="https://github.com/Hatim-Malak" className="flex-1 p-3 rounded-xl bg-slate-800/35 text-slate-300 hover:text-white hover:border-indigo-500/30 border border-slate-700/50 flex items-center justify-center gap-2 transition-all ui-glow">
              <Github size={18} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/hatim-malak-8ba254279/" className="flex-1 p-3 rounded-xl bg-slate-800/35 text-slate-300 hover:text-white hover:border-indigo-500/30 border border-slate-700/50 flex items-center justify-center gap-2 transition-all ui-glow">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
