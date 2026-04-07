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
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[96%] lg:w-[72%] lg2:w-[86%] z-[999]">
      {/* ─── DESKTOP NAVBAR ─── */}
      <div className="hidden lg:flex px-4 py-3 justify-between items-center backdrop-blur-xl ui-panel ui-glow bg-gradient-to-r from-indigo-500/20 via-slate-900/40 to-blue-900/20 border-indigo-500/20">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-indigo-500/25 to-blue-900/20 blur-xl opacity-60"></div>
            <div className="relative w-10 h-10 rounded-xl bg-slate-900/50 border border-slate-700/50 flex items-center justify-center ui-glow">
              <ShinyText text="HM" disabled={false} speed={8} className="text-base font-bold font-mono tracking-wider" />
            </div>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-white text-sm font-semibold tracking-wide">Hatim Malak</span>
            <span className="text-slate-500 text-[11px]">Full Stack • AI</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="flex items-center gap-1.5">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth="easeInOutQuart"
              duration={1200}
              spy={true}
              offset={-90}
              onSetActive={() => setActive(link.to)}
              className={`relative px-3.5 py-2 rounded-xl cursor-pointer transition-all duration-300 text-sm font-medium tracking-wide border border-transparent ${
                active === link.to ? "text-white bg-slate-800/40 border-indigo-500/25 shadow-inner" : "text-slate-400 hover:text-white hover:bg-slate-800/35"
              }`}
            >
              {link.label}
              {active === link.to && (
                <span className="absolute left-3.5 right-3.5 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent" />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href="https://github.com/Hatim-Malak" className="ui-iconbtn ui-glow" aria-label="GitHub"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/hatim-malak-8ba254279/" className="ui-iconbtn ui-glow" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href="#Contact" className="ml-2 ui-btn-primary ui-glow group flex items-center gap-2">
            Let’s talk
            <span className="relative w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-green-400/90"></span>
              <span className="absolute inset-0 rounded-full bg-green-400/60 animate-ping"></span>
            </span>
          </a>
        </div>
      </div>

      {/* ─── MOBILE NAVBAR ─── */}
      <div className="lg:hidden flex flex-col gap-4">
        {/* Mobile Header Bar */}
        <div className="flex justify-between items-center px-4 py-3 backdrop-blur-xl ui-panel ui-glow bg-gradient-to-r from-indigo-500/20 via-slate-900/40 to-blue-900/20 border-indigo-500/20">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-900/50 border border-slate-700/50 flex items-center justify-center">
              <ShinyText text="HM" disabled={false} speed={8} className="text-base font-bold font-mono" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-white text-sm font-semibold">Hatim</span>
              <span className="text-slate-500 text-[11px]">Portfolio</span>
            </div>
          </div>
          <button 
            onClick={() => setopen(!open)}
            className="p-2 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-300"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {open && (
          <div className="p-5 shadow-2xl ui-panel ui-glow bg-slate-900/90 border-indigo-500/20 animate-in fade-in slide-in-from-top-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/45 rounded-xl cursor-pointer border border-transparent hover:border-indigo-500/25"
                  smooth="easeInOutQuart"
                  onClick={handleNavClick}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex gap-3 mt-5 pt-5 border-t border-slate-700/50">
              <a href="https://github.com/Hatim-Malak" className="flex-1 p-3 rounded-xl bg-slate-800/35 text-slate-300 flex items-center justify-center gap-2 border border-slate-700/50"><Github size={18} /> GitHub</a>
              <a href="https://www.linkedin.com/in/hatim-malak-8ba254279/" className="flex-1 p-3 rounded-xl bg-slate-800/35 text-slate-300 flex items-center justify-center gap-2 border border-slate-700/50"><Linkedin size={18} /> LinkedIn</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;