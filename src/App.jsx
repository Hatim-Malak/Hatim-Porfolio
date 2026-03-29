import React, { useState, useEffect } from "react";
import DarkVeil from "./components/DarkVeil.jsx";
import LogoLoop from "./components/LogoLoop.jsx";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiGithub,
  SiFigma,
  SiPostman,
  SiSwagger,
  SiLangchain,
} from "react-icons/si";
import { TbTopologyStar3 } from "react-icons/tb"; // Used for LangGraph
import { FaBrain } from "react-icons/fa"; // Used for LangSmith
import Navbar from "./components/Navbar.jsx";
import { Element } from "react-scroll";
import Tilt from "react-parallax-tilt";
import TextType from "./components/TextType.jsx";
import Particles from "./components/Particeles.jsx";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import { Loader, ExternalLink, X, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-scroll";
import Footer from "./components/Footer.jsx";
import Lenis from 'lenis';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from "react-dom";
import { GitHubCalendar } from 'react-github-calendar';
const App = () => {
  const form = useRef();
  const [load, setload] = useState(false);
  const [openpro, setopenpro] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("Home");
  const [githubStats, setGithubStats] = useState({ repos: 0, totalStars: 0, followers: 0, following: 0, topLangs: [] });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check on initial load
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userRes, repoRes] = await Promise.all([
          fetch('https://api.github.com/users/Hatim-Malak'),
          fetch('https://api.github.com/users/Hatim-Malak/repos?per_page=100')
        ]);

        const userData = await userRes.json();
        const repoData = await repoRes.json();

        // Calculate stars and languages
        const stars = repoData.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);
        const langMap = {};
        let totalSize = 0;

        repoData.forEach(repo => {
          if (repo.language && repo.size) {
            langMap[repo.language] = (langMap[repo.language] || 0) + repo.size;
            totalSize += repo.size;
          }
        });

        const sortedLangs = Object.entries(langMap)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([name, size]) => ({
            name,
            percent: Math.max(1, Math.round((size / totalSize) * 100))
          }));

        // SINGLE state update
        setGithubStats({
          repos: userData.public_repos || 0,
          followers: userData.followers || 0,
          following: userData.following || 0,
          totalStars: stars,
          topLangs: sortedLangs
        });

      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };

    fetchData();
  }, []);

  // Smooth global scrolling with Lenis
  // Smooth global scrolling with Lenis - DESKTOP ONLY
  useEffect(() => {
    // Check if it's a mobile device (standard breakpoint)
    if (window.innerWidth < 768) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  // GSAP ScrollTrigger reveal animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Section title/header reveals
    ScrollTrigger.batch(".section-reveal", {
      onEnter: (elements) => {
        gsap.fromTo(
          elements,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.9,
            ease: "power3.out",
            overwrite: true,
          }
        );
      },
      start: "top 88%",
      once: true,
    });

    // Individual card/item reveals with stagger
    ScrollTrigger.batch(".item-reveal", {
      onEnter: (elements) => {
        gsap.fromTo(
          elements,
          { opacity: 0, y: 35, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.1,
            duration: 0.7,
            ease: "power3.out",
            overwrite: true,
          }
        );
      },
      start: "top 85%",
      once: true,
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;

      const progress = Math.round((window.scrollY / totalHeight) * 100);

      // Only update if the integer value changed to prevent micro-renders
      setScrollProgress((prev) => (prev === progress ? prev : progress));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sections = ["Home", "Skills", "Projects", "GitHub", "Education", "Contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Adjusted margins for better accuracy
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.getAttribute("id")?.replace("section-", "");
          if (sectionName) {
            // CRITICAL: Only update if it's actually a different section
            setActiveSection((prev) => (prev === sectionName ? prev : sectionName));
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const el = document.getElementById(`section-${section}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setload(true);
    emailjs
      .sendForm(
        "service_noybm0n",
        "template_94jfmkj",
        form.current,
        "iHURA46DZADK4jWml"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          setload(false);
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message, please try again.");
          setload(false);
        }
      );
  };
  const skills = [
    {
      title: "Frontend",
      items: [
        { name: "HTML", icon: "./html1.png", size: "40px" },
        { name: "CSS", icon: "./css2.webp", size: "34px" },
        { name: "JAVASCRIPT", icon: "./javascript.webp", size: "40px" },
        { name: "REACT", icon: "./React-icon.svg.png", size: "40px" },
        { name: "TAILWIND CSS", icon: "./tailwindcss-icon.svg", size: "33px" },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "NODE.JS", icon: "./node.png", size: "40px" },
        { name: "EXPRESS.JS", icon: "./express-js.png", size: "40px" },
        { name: "FASTAPI", icon: "./fastapi.svg", size: "40px" },
        { name: "SOCKET.IO", icon: "./Socket-io.svg", size: "40px" },
        { name: "SPRING BOOT", icon: "https://cdn.simpleicons.org/springboot/6DB33F", size: "40px" },
      ],
    },
    {
      title: "Languages",
      items: [
        { name: "C", icon: "./c.webp", size: "45px" },
        { name: "C++", icon: "./c++.png", size: "40px", height: "45px" },
        { name: "JAVA", icon: "./java.png", size: "35px", height: "50px" },
        { name: "PYTHON", icon: "./python.png", size: "35px" },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "GITHUB", icon: "./github.png", size: "35px" },
        { name: "FIGMA", icon: "./figma.webp", size: "51px" },
        { name: "POSTMAN", icon: "./postman.webp", size: "35px" },
        { name: "SWAGGER", icon: "./swagger-logo.png", size: "35px" },
        { name: "CLAUDE CODE", icon: "https://cdn.simpleicons.org/anthropic/D97757", size: "35px" },
        { name: "ANTIGRAVITY", icon: "https://cdn.simpleicons.org/codemagic/white", size: "35px" },
      ],
    },
    {
      title: "AI Technologies",
      items: [
        { name: "LANG CHAIN", icon: "./langchain.webp", size: "45px" },
        { name: "LANG GRAPH", icon: "./langgraph (1).png", size: "45px" },
        { name: "LANG SMITH", icon: "./langsmith.png", size: "45px" },
        { name: "CREW AI", icon: "https://cdn.simpleicons.org/probot/white", size: "45px" },
      ],
    },
  ];
  const techLogos = [
    {
      node: <SiMongodb className="text-white" />,
      title: "MongoDB",
      href: "https://www.mongodb.com",
    },
    {
      node: <SiExpress className="text-white" />,
      title: "Express.js",
      href: "https://expressjs.com",
    },
    {
      node: <SiReact className="text-white" />,
      title: "React",
      href: "https://react.dev",
    },
    {
      node: <SiNodedotjs className="text-white" />,
      title: "Node.js",
      href: "https://nodejs.org",
    },
    {
      node: <SiPython className="text-white" />,
      title: "Python",
      href: "https://www.python.org",
    },

    {
      node: <SiGithub className="text-white" />,
      title: "GitHub",
      href: "https://github.com",
    },
    {
      node: <SiFigma className="text-white" />,
      title: "Figma",
      href: "https://www.figma.com",
    },
    {
      node: <SiLangchain className="text-white" />,
      title: "LangChain",
      href: "https://www.langchain.com",
    },
    {
      node: <TbTopologyStar3 className="text-white" />,
      title: "LangGraph",
      href: "https://www.langchain.com/langgraph",
    },
    {
      node: <FaBrain className="text-white" />,
      title: "LangSmith",
      href: "https://smith.langchain.com",
    },
    {
      node: <SiPostman className="text-white" />,
      title: "Postman",
      href: "https://www.postman.com",
    },
    {
      node: <SiSwagger className="text-white" />,
      title: "Swagger",
      href: "https://swagger.io",
    },
  ];

  const projects = [
    {
      id: 0,
      img: "./pro1.jpg",
      name: "OfficalChat",
      description: ` A real-time chat application built using React, Node.js,
                  Express, Socket.IO, and TailwindCSS, deployed securely on
                  Render. It enables instant bidirectional messaging with a
                  responsive and modern UI for smooth cross-device
                  communication. The backend efficiently handles live socket
                  connections, ensuring fast and reliable performance. The
                  project’s modular codebase allows easy expansion for future
                  features like group chats, file sharing, and authentication.`,
      skills: ["React.js", "Tailwindcss", "Node.js", "Express.js", "Socket.io"],
      code: "https://github.com/Hatim-Malak/officalchat",
      live: "https://officalchat.onrender.com/",
    },
    {
      id: 1,
      img: "./pro2.jpg",
      name: "Starlit Stationary",
      description: ` A full-stack stationery e-commerce platform built using the
                  MERN stack with TailwindCSS, deployed on Vercel and Railway.
                  It features secure authentication, product browsing,
                  category-based search, and a shopping cart with order
                  management. An intuitive admin panel allows efficient product
                  and order control, including user feedback-based order
                  cancellation. The deployment ensures fast, scalable, and
                  reliable performance with seamless database integration.`,
      skills: ["React.js", "Tailwindcss", "Node.js", "Express.js"],
      code: "https://github.com/Hatim-Malak/Starlit_Stationary-app",
      live: "https://starlit-stationary-frontend.vercel.app/",
    },
    {
      id: 2,
      img: "./pro3.png",
      name: "E-book Reader",
      description: ` An interactive e-book reader application built using the MERN
                  stack, allowing users to read books online seamlessly. It
                  features a clean and responsive UI for distraction-free
                  reading and smooth navigation between chapters. The platform
                  ensures fast content loading, secure data handling, and
                  scalable performance for an engaging digital reading
                  experience.`,
      skills: ["React.js", "Tailwindcss", "Node.js", "Express.js"],
      code: "https://github.com/Hatim-Malak/E-book",
      live: "https://e-book-psi-nine.vercel.app/",
    },
  ];
  const education = [
    {
      id: 1,
      img: "./chameli.jpeg",
      school: "Chameli Devi Group of Institutions, Indore",
      date: "2024-2025",
      grade: "Pursuing",
      desc: "Currently pursuing B.Tech in Information Technology at Chameli Devi Group of Institutions, Indore. Completed 1st year and developing strong technical and analytical skills in IT and software development.",
      degree: "Bachelor of Technology - Information Technology",
    },
    {
      id: 2,
      img: "./school.png",
      school: "S.T. Norbert School",
      date: "2023-2024",
      grade: "83%",
      desc: "Completed Class 12 under the CBSE board with a focus on computer science and analytical skills. Built a strong academic foundation preparing for higher technical education.",
      degree: "CBSE(XII) - Science with Computer Science",
    },
    {
      id: 3,
      img: "./school.png",
      school: "S.T. Norbert School",
      date: "2021-2022",
      grade: "82%",
      desc: "Completed Class 10 under the CBSE board, demonstrating consistent academic performance with an early interest in technology and problem-solving.",
      degree: "CBSE(X) - Science with Computer Application",
    },
  ];
  const selectedProject = projects.find(p => p.id === openpro);
  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0f] overflow-hidden">
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Particles
          particleColors={["#818cf8", "#c084fc"]}
          particleCount={isMobile ? 50 : 300}
          particleSpread={8}
          speed={0.15}
          particleBaseSize={100}
          moveParticlesOnHover={!isMobile}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <Navbar />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10"
        >
          {/* Scroll Progress Bar */}
          <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-slate-900/50">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 transition-[width] duration-150 scroll-progress"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
          <Element
            name="Home"
            id="section-Home"
            className="min-h-screen w-full justify-center items-center pt-24 flex lg:flex-row lg2:flex-row flex-col-reverse overflow-hidden px-4"
          >
            <div className="lg:w-[55%] lg2:w-[55%] lg:h-full lg2:h-full w-full h-auto flex flex-col justify-center items-center py-8">
              <div className="w-full max-w-xl lg:w-[85%] lg2:w-[100%]">
                <div className="bg-slate-800/60 border border-slate-700/50 rounded-t-xl p-2 px-4 flex items-center gap-2 ui-glow">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  <span className="text-slate-400 text-xs font-mono ml-2">~/portfolio</span>
                </div>
                <div className="bg-slate-900/80 border border-slate-700/50 rounded-b-xl p-6 font-mono text-sm flex flex-col items-start gap-4 ui-glow">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    <span className="text-indigo-300 text-sm font-medium">Available for opportunities</span>
                  </div>
                  <h1 className="text-slate-400 lg:text-2xl md:text-xl text-lg mt-2">
                    <span className="text-indigo-400 mr-2">$</span>echo "Hi, I am"
                  </h1>
                  <div className="bg-slate-800/40 border-l-2 border-indigo-500 pl-4 py-2 -ml-2 w-full">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-indigo-200 to-blue-700 bg-clip-text text-transparent">
                      Hatim Malak
                    </h1>
                  </div>
                  <h1 className="text-white lg:text-2xl lg2:text-2xl md:text-xl text-lg font-bold flex flex-wrap items-center gap-2 mt-2">
                    <span className="text-indigo-400">$</span>
                    <span className="text-slate-400">role = "</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-800 font-mono">
                      <TextType
                        text={[
                          "Software Developer",
                          "Full Stack Developer",
                          "AI Enthusiast",
                        ]}
                        textColors={["#818cf8"]}
                        typingSpeed={80}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                      />
                    </span>
                    <span className="text-slate-400">"</span>
                  </h1>
                  <div className="w-full text-slate-400 lg:text-base lg2:text-base md:text-sm text-sm leading-relaxed mt-4">
                    <div className="text-indigo-400 mb-1">$ cat about.txt</div>
                    <p className="pl-4 border-l border-slate-700/50">
                      B.Tech IT Student passionate about building scalable web applications.
                      Specialized in MERN stack, Python, and AI technologies with a focus on
                      creating elegant, user-centric solutions.
                    </p>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <Link
                      to="Contact"
                      smooth="easeInOutQuart"
                      duration={1200}
                      spy={true}
                      offset={-90}
                      className="px-6 py-3 font-semibold rounded-xl ui-btn-primary ui-glow hover:scale-105 transition-transform duration-300"
                    >
                      ./contact.sh
                    </Link>
                    <Link
                      to="Projects"
                      smooth="easeInOutQuart"
                      duration={1200}
                      spy={true}
                      offset={-90}
                      className="px-6 py-3 font-semibold rounded-xl ui-btn-ghost ui-glow"
                    >
                      --view-projects
                    </Link>
                  </div>
                </div>
                <div className="w-full relative z-9 mt-6">
                  <LogoLoop
                    logos={techLogos}
                    speed={120}
                    direction="left"
                    logoHeight={40}
                    gap={40}
                    pauseOnHover
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#0a0a0f"
                    ariaLabel="Technology stack"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:items-center lg2:items-center items-center lg:w-[45%] lg2:w-[45%] w-full h-auto py-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-900 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative lg:size-[420px] lg2:size-[380px] md:size-[320px] size-[260px] rounded-full border-2 border-slate-700 border-t-indigo-500 shadow-[0_0_60px_rgba(99,102,241,0.3)] hover:shadow-[0_0_80px_rgba(99,102,241,0.5)] transition-all duration-500 group">
                  {/* Corner decorations */}
                  <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-indigo-400 rounded-tl-sm opacity-50"></div>
                  <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-indigo-400 rounded-tr-sm opacity-50"></div>
                  <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-indigo-400 rounded-bl-sm opacity-50"></div>
                  <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-indigo-400 rounded-br-sm opacity-50"></div>

                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-indigo-500/10 to-blue-900/10"></div>
                  <img
                    src="./Profile_Photo1.png"
                    alt="profilePic"
                    className="object-cover object-top w-full h-full rounded-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-slate-800 border border-slate-600 px-4 py-2 rounded-md text-sm font-bold text-indigo-400 shadow-lg font-mono">
                    [B.Tech IT]
                  </div>
                </div>
              </div>
            </div>
          </Element>
          <Element
            name="Skills"
            id="section-Skills"
            className="min-h-screen p-3 w-full flex flex-col justify-start items-center pt-24"
          >
            <div className="flex flex-col items-center md:items-start w-full max-w-6xl mx-auto gap-4 mb-16 px-4 sm:px-6 lg:px-8 section-reveal">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-mono tracking-wider ui-glow">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                $ ls ./skills/
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-indigo-200 to-blue-700 bg-clip-text text-transparent">
                Skills_&_Technologies
              </h1>
              <p className="text-slate-400 text-lg font-mono text-center md:text-left max-w-2xl">
              // A diverse toolkit built through hands-on projects and continuous learning
              </p>
            </div>
            <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                  {skills.map((category, categoryIndex) => (
                    <Tilt
                      key={categoryIndex}
                      options={{
                        max: 12,
                        scale: 1.03,
                        speed: 300,
                        glare: true,
                        "max-glare": 0.2,
                      }}
                      className="w-full max-w-[340px] item-reveal"
                    >
                      <div className="bg-slate-900 border border-slate-700/50 h-[360px] rounded-xl backdrop-blur-sm hover:border-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col overflow-hidden ui-glow">
                        <div className="bg-slate-800/80 border-b border-slate-700/50 px-4 py-2 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500/80"></span>
                            <span className="w-2 h-2 rounded-full bg-yellow-500/80"></span>
                            <span className="w-2 h-2 rounded-full bg-green-500/80"></span>
                          </div>
                          <span className="text-slate-500 text-xs font-mono">skills/{category.title.toLowerCase().replace(/\s+/g, '-')}.json</span>
                        </div>
                        <div className="p-6 flex flex-col">
                          <div className="mb-6 mt-2">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                              <span className="text-indigo-400 font-mono">$</span>
                              <span className="text-indigo-300 font-mono">{category.title}</span>
                            </h2>
                            <div className="text-slate-600 text-xs font-mono mt-2">
                              &lt;!-- {category.items.length} items --&gt;
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-3 mt-auto">
                            {category.items.map((item, itemIndex) => (
                              <div
                                key={itemIndex}
                                className="group relative aspect-square flex flex-col items-center justify-center gap-2 rounded-lg bg-slate-900/50 border border-slate-700/30 p-2 hover:bg-gradient-to-br hover:from-indigo-500/10 hover:to-blue-900/10 transition-all duration-300 hover:scale-105 hover:border-indigo-500/30 ui-glow"
                              >
                                <div className="flex items-center justify-center flex-1 w-full bg-slate-800/40 rounded-md py-1">
                                  <img
                                    src={item.icon}
                                    alt={item.name}
                                    className="object-contain transition-transform duration-300 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                                    style={{
                                      width: item.size,
                                      height: item.height || item.size,
                                    }}
                                  />
                                </div>
                                <p className="text-[9px] font-mono text-slate-400 group-hover:text-indigo-300 transition-colors text-center leading-tight line-clamp-2">
                                  [{item.name}]
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Tilt>
                  ))}
                </div>
              </div>
            </div>
          </Element>
          <Element
            name="Projects"
            id="section-Projects"
            className="min-h-screen w-full flex flex-col justify-start items-center p-3 pt-24"
          >
            <div className="flex flex-col items-center md:items-start w-full max-w-6xl mx-auto gap-4 mb-16 px-4 section-reveal">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-mono tracking-wider ui-glow">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                $ ./display_projects.sh --featured
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-indigo-200 to-blue-700 bg-clip-text text-transparent">
                Featured_Projects
              </h1>
              <div className="w-full flex justify-center md:justify-start">
                <p className="text-slate-400 text-lg font-mono text-center md:text-left">
                // Real-world applications built with modern technologies
                </p>
              </div>
            </div>

            <div className="relative flex lg:flex-row lg2:flex-row flex-col mt-5 gap-8 justify-center items-center w-full max-w-6xl transition-all">
              {projects.map((pro) => (
                <React.Fragment key={pro.id}>
                  <div
                    onClick={() => setopenpro(pro.id)}
                    className="w-[340px] h-[480px] transition-all flex flex-col justify-start items-start bg-slate-900/80 border border-slate-700/50 rounded-xl overflow-hidden cursor-pointer hover:scale-[1.02] hover:border-indigo-500/30 duration-300 group backdrop-blur-sm ui-glow item-reveal"
                  >
                    <div className="w-full bg-slate-800/60 px-3 py-2 text-indigo-400 text-xs font-mono border-b border-slate-700/50 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500/80"></span>
                      <span className="w-2 h-2 rounded-full bg-yellow-500/80"></span>
                      <span className="w-2 h-2 rounded-full bg-green-500/80"></span>
                      <span className="ml-2 text-slate-400">{pro.name.toLowerCase().replace(/\s+/g, '')}.jsx</span>
                    </div>
                    <div className="w-full h-[35%] relative overflow-hidden border-b border-slate-700/50">
                      <img
                        src={pro.img}
                        alt="pro"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                      <div className="absolute top-2 right-2 px-2 py-1 bg-indigo-600/90 text-white text-[10px] font-mono rounded backdrop-blur-sm">
                        ./view_details.sh
                      </div>
                    </div>
                    <div className="p-5 flex flex-col justify-start gap-2 items-start w-full flex-1">
                      <h1 className="text-xl text-white font-bold font-mono text-indigo-300">
                        {pro.name}
                      </h1>
                      <div className="text-slate-500 text-xs font-mono ml-1 mb-1">
                        // {pro.skills.length} technologies used
                      </div>
                      <p className="w-full text-slate-400 text-sm leading-relaxed line-clamp-3 font-mono">
                        {pro.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {pro.skills.slice(0, 3).map((skill) => (
                          <div
                            key={skill}
                            className="ui-chip ui-glow"
                          >
                            [{skill}]
                          </div>
                        ))}
                        {pro.skills.length > 3 && (
                          <div className="text-[10px] font-mono px-2 py-1 rounded bg-slate-800/50 text-slate-500 border border-slate-700/50 ui-glow">
                            +{pro.skills.length - 3}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
              {openpro !== null &&
                createPortal(
                  <div
                    className="fixed inset-0 z-[99] flex justify-center items-center bg-black/70 backdrop-blur-md p-4 sm:p-6"
                    onClick={() => setopenpro(null)} // 1. Click backdrop to close
                  >
                    <div
                      className="w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] bg-slate-900 text-white rounded-xl flex flex-col overflow-hidden shadow-2xl border border-slate-700 font-mono text-sm relative ui-glow"
                      onClick={(e) => e.stopPropagation()} // 2. Prevent clicks inside from closing the modal
                    >
                      {/* Header - Stays fixed at the top */}
                      <div className="w-full bg-slate-800/80 border-b border-slate-700/50 flex items-center justify-between pr-2 sm:pr-4 shrink-0">
                        <div className="flex items-center h-full">
                          <div className="flex items-center gap-2 px-4 border-r border-slate-700/50 h-full py-3 sm:py-4">
                            <span className="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:opacity-80" onClick={() => setopenpro(null)}></span>
                            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                            <span className="w-3 h-3 rounded-full bg-green-500"></span>
                          </div>
                          <div className="bg-slate-900 border-r border-slate-700/50 px-3 sm:px-4 py-3 sm:py-4 text-indigo-400 text-xs flex items-center gap-2 truncate max-w-[150px] sm:max-w-none">
                            <span className="text-slate-500">📄</span> {selectedProject?.name.toLowerCase().replace(/\s+/g, '')}.jsx
                          </div>
                          <div className="px-4 py-3 text-slate-500 text-xs hidden sm:block">
                            package.json
                          </div>
                        </div>

                        {/* 3. Larger touch target for mobile close button */}
                        <button
                          onClick={() => setopenpro(null)}
                          className="p-2 mr-1 rounded-md text-slate-400 hover:text-red-400 hover:bg-slate-800 transition-all"
                          aria-label="Close"
                        >
                          <X className="w-6 h-6 sm:w-5 sm:h-5" />
                        </button>
                      </div>

                      {/* Scrollable Content Area */}
                      <div className="flex flex-col lg:flex-row w-full flex-1 overflow-y-auto">

                        {/* Line Numbers (Desktop only) */}
                        <div className="hidden lg:flex flex-col items-center py-4 bg-slate-900/50 border-r border-slate-800/80 text-slate-700 font-mono text-xs w-10 select-none shrink-0">
                          {Array.from({ length: 20 }).map((_, i) => (
                            <div key={i} className="my-[4px]">{i + 1}</div>
                          ))}
                        </div>

                        <div className="flex flex-col lg:flex-row w-full">
                          {/* Image Area - 4. Adjusted mobile height */}
                          <div className="lg:w-[40%] w-full h-[200px] sm:h-[250px] lg:h-auto relative border-b lg:border-b-0 lg:border-r border-slate-700/50 bg-slate-800/40 p-0 lg:p-4 shrink-0">
                            <div className="w-full h-full lg:rounded-lg overflow-hidden lg:border border-slate-700">
                              <img
                                src={selectedProject?.img}
                                alt="project"
                                className="h-full w-full object-cover"
                              />
                            </div>
                          </div>

                          {/* Text/Details Area - 4. Adjusted padding for mobile */}
                          <div className="lg:w-[60%] w-full p-4 sm:p-6 flex flex-col gap-3 sm:gap-4">
                            <h1 className="text-xl sm:text-2xl font-bold text-indigo-300 break-words">
                              <span className="text-pink-500">const</span> {selectedProject?.name.replace(/\s+/g, '')} <span className="text-slate-400">=</span> <span className="text-yellow-300">&#123;</span>
                            </h1>

                            <div className="pl-3 sm:pl-4 lg:pl-6 border-l border-slate-700/50">
                              <div className="text-slate-400 mb-1 text-xs sm:text-sm">description: <span className="text-green-400">`</span></div>
                              <p className="text-green-400/90 leading-relaxed text-xs sm:text-sm pl-2 sm:pl-4 whitespace-pre-line">
                                {selectedProject?.description}
                              </p>
                              <div className="text-green-400 mt-1 text-xs sm:text-sm">`</div>
                            </div>

                            <div className="text-slate-500 text-xs mt-2 pl-3 sm:pl-4 lg:pl-6">// {selectedProject?.skills.length} technologies used</div>

                            <div className="flex flex-wrap gap-1.5 sm:gap-2 pl-3 sm:pl-4 lg:pl-6">
                              {selectedProject?.skills.map((skill) => (
                                <div
                                  key={skill}
                                  className="px-2 py-1 bg-slate-800/70 rounded border border-slate-700/50 text-indigo-300 text-[10px] sm:text-xs ui-glow"
                                >
                                  [{skill}]
                                </div>
                              ))}
                            </div>

                            <div className="text-yellow-300 text-xl sm:text-2xl font-bold mt-auto pt-4 mb-2">&#125;</div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2">
                              <a
                                className="flex-1 bg-slate-800/70 text-slate-300 text-center py-2.5 sm:py-3 text-sm shadow-md rounded-md hover:bg-slate-700/80 transition-all border border-slate-600 flex items-center justify-center gap-2 ui-glow"
                                href={selectedProject?.code}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github size={18} /> git clone
                              </a>
                              <a
                                className="flex-1 bg-indigo-600/20 text-indigo-300 text-center py-2.5 sm:py-3 text-sm shadow-md rounded-md hover:bg-indigo-600/30 transition-all border border-indigo-500/30 flex items-center justify-center gap-2 ui-glow"
                                href={selectedProject?.live}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink size={18} /> npm start
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>,
                  document.body
                )}
            </div>
          </Element>

          <Element
            name="GitHub"
            id="section-GitHub"
            className="min-h-screen w-full flex flex-col justify-start items-center p-3 pt-24"
          >
            <div className="flex flex-col items-center md:items-start w-full max-w-6xl mx-auto gap-4 mb-8 px-4 section-reveal">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-mono tracking-wider ui-glow">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                $ ./fetch_github_profile.sh --user=Hatim-Malak
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-indigo-200 to-blue-700 bg-clip-text text-transparent">
                GitHub_Analytics
              </h1>
              <div className="w-full flex justify-center md:justify-start">
                <p className="text-slate-400 text-lg font-mono text-center md:text-left">
                // Open source contributions, public repositories, and activity metrics.
                </p>
              </div>
            </div>

            <div className="w-full max-w-6xl mx-auto gap-4 grid grid-cols-2 lg:grid-cols-4 px-4 section-reveal mb-8">
              {[
                { label: 'Public Repositories', value: githubStats.repos, id: 'repos' },
                { label: 'Total Stars', value: githubStats.totalStars, id: 'stars' },
                { label: 'Followers', value: githubStats.followers, id: 'followers' },
                { label: 'Following', value: githubStats.following, id: 'following' }
              ].map(stat => (
                <div key={stat.id} className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm shadow-[0_0_20px_rgba(99,102,241,0.05)] ui-glow flex flex-col items-center group hover:border-indigo-500/30 transition-colors">
                  <span className="text-slate-500 font-mono text-[10px] md:text-xs mb-2">[{stat.id}.count]</span>
                  <div className="text-3xl md:text-4xl font-bold text-indigo-300 group-hover:text-white transition-colors">{stat.value}</div>
                  <div className="text-slate-400 font-mono text-xs md:text-sm mt-1 text-center">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="w-full max-w-6xl mx-auto gap-8 grid grid-cols-1 px-4 section-reveal mb-12">
              <div className="w-full bg-slate-900/60 border border-slate-700/50 rounded-xl p-4 md:p-8 backdrop-blur-sm shadow-[0_0_20px_rgba(99,102,241,0.05)] ui-glow flex flex-col justify-center items-center overflow-hidden">
                <div className="text-indigo-400 mb-4 font-mono text-sm self-start">$ gh api user/contributions</div>
                <div className="w-full bg-slate-950/50 p-4 rounded-lg border border-slate-800/50 overflow-x-auto hide-scrollbar">
                  <div className="min-w-[750px] flex justify-center items-center mx-auto">
                    <GitHubCalendar
                      username="Hatim-Malak"
                      blockSize={13}
                      blockMargin={4}
                      colorScheme="dark"
                      fontSize={14}
                      theme={{
                        dark: ['#1e293b', '#4f46e540', '#4f46e580', '#4f46e5c0', '#4f46e5']
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="w-full bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 md:p-8 backdrop-blur-sm shadow-[0_0_20px_rgba(99,102,241,0.05)] ui-glow flex flex-col justify-center min-h-[300px]">
                <div className="text-indigo-400 mb-6 font-mono text-sm">$ get_language_stats.json</div>
                <div className="flex-1 flex flex-col md:flex-row items-stretch justify-center gap-6 bg-slate-950/50 p-4 sm:p-6 rounded-lg border border-slate-800/50">

                  <div className="w-full md:w-1/2 flex flex-col justify-center gap-4">
                    <h3 className="text-slate-300 font-mono text-xs uppercase tracking-widest mb-2 border-b border-slate-800 pb-2">Top Languages</h3>
                    {githubStats.topLangs.length > 0 ? githubStats.topLangs.map((lang, i) => (
                      <div key={lang.name} className="flex flex-col gap-1 w-full">
                        <div className="flex justify-between text-xs font-mono text-slate-400">
                          <span>{lang.name}</span>
                          <span className="text-indigo-300">{lang.percent}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                            style={{ width: `${lang.percent}%` }}
                          />
                        </div>
                      </div>
                    )) : (
                      <div className="text-slate-500 font-mono text-sm animate-pulse">Loading language data...</div>
                    )}
                  </div>

                  <div className="hidden md:flex w-px bg-slate-800/80 mx-2"></div>

                  <div className="w-full md:w-1/2 flex items-center justify-center">
                    <img
                      src="https://streak-stats.demolab.com?user=Hatim-Malak&theme=nord&hide_border=true&background=00000000&ring=818cf8&fire=818cf8&currStreakLabel=818cf8"
                      alt="GitHub Streak Stats"
                      className="w-full h-auto object-contain max-w-[400px]"
                    />
                  </div>

                </div>
              </div>
            </div>
          </Element>

          <Element
            name="Education"
            id="section-Education"
            className="py-24 pb-24 px-4 w-full"
          >
            <div className="flex flex-col items-center md:items-start w-full max-w-4xl mx-auto gap-4 mb-16 px-4 section-reveal">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-mono tracking-wider ui-glow">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                $ git log --oneline
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-indigo-200 to-blue-700 bg-clip-text text-transparent font-mono">
                Education
              </h1>
              <div className="w-full flex justify-center md:justify-start">
                <p className="text-slate-400 text-lg font-mono text-center md:text-left leading-relaxed">
                // git diff --stat<br />
                // A foundation built on continuous learning
                </p>
              </div>
            </div>

            <div className="relative w-full max-w-4xl mx-auto px-2 py-10">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-800 border-l border-r border-slate-700/50 md:-translate-x-1/2 shadow-[0_0_15px_rgba(99,102,241,0.2)]"></div>

              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  className={`relative flex items-start mb-12 w-full item-reveal ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                    }`}
                >
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-indigo-600 border-4 border-slate-900 z-10 shadow-[0_0_10px_rgba(99,102,241,0.6)] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>

                  <div
                    className={`relative ml-12 md:ml-0 w-[calc(100%-3rem)] md:w-[42%] p-5 rounded-lg bg-slate-900/60 border border-slate-700/50 backdrop-blur-sm hover:border-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 font-mono ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                      }`}
                  >
                    <div className="text-indigo-400 text-xs bg-slate-800/80 px-2 py-1 rounded inline-block mb-3 border border-slate-700/50 text-[10px] md:text-xs">
                      commit {edu.id.toString(16).padStart(7, '0')}8f2 --author="Education"
                    </div>
                    <div className="text-slate-500 text-xs mb-3 flex justify-between items-center">
                      <span>Date: {edu.date}</span>
                      <span className="bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded text-[10px]">
                        [{edu.grade}]
                      </span>
                    </div>

                    <div className="flex items-start gap-4 mb-3 border-b border-slate-800/50 pb-3">
                      <div className="w-12 h-12 bg-white/10 rounded-md overflow-hidden shrink-0 border border-slate-700 mt-1">
                        <img
                          src={edu.img}
                          alt={edu.school}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-center">
                        <h3 className="text-base font-bold text-white leading-tight">
                          {edu.degree}
                        </h3>
                        <h4 className="text-xs text-slate-400 mt-1">author: {edu.school}</h4>
                      </div>
                    </div>

                    <div className="text-slate-500 text-xs mt-3 bg-slate-800/30 p-2 rounded text-[11px] leading-relaxed">
                      <span className="text-green-500 select-none mr-2">+</span>
                      {edu.desc.substring(0, 80)}...
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Element>
          <Element
            name="Contact"
            id="section-Contact"
            className="min-h-screen w-full flex flex-col justify-start items-center pt-24 px-4 max-w-7xl mx-auto"
          >
            <div className="flex flex-col items-center md:items-start w-full max-w-5xl mx-auto gap-4 mb-16 px-4 section-reveal">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-mono tracking-wider ui-glow">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                $ ./contact_me.sh --init
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-indigo-200 to-blue-700 bg-clip-text text-transparent font-mono">
                Contact_Me
              </h1>
              <div className="w-full flex justify-center md:justify-start">
                <p className="text-slate-400 text-lg font-mono text-center md:text-left">
                // Let's build something amazing together
                </p>
              </div>
            </div>

            <div className="w-full flex lg:flex-row flex-col gap-12 items-start justify-center">
              {/* Left side: Form */}
              <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="w-full max-w-[500px] flex flex-col items-center bg-slate-900/80 border border-slate-700/50 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(99,102,241,0.1)] ui-glow"
                >
                  <div className="w-full bg-slate-800/80 border-b border-slate-700/50 px-4 py-2 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500 opacity-80"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500 opacity-80"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500 opacity-80"></span>
                    <span className="text-slate-400 text-xs font-mono ml-2">contact_form.sh</span>
                  </div>
                  <div className="w-full p-6 flex flex-col gap-4">
                    <div className="w-full bg-slate-800/35 border border-slate-700/50 rounded-lg p-3 flex items-center gap-2 group focus-within:border-indigo-500/50 transition-colors ui-glow">
                      <span className="text-indigo-400 font-mono text-sm">$ name:</span>
                      <input
                        type="text"
                        name="from_name"
                        placeholder="Your Name"
                        required
                        className="bg-transparent border-none text-white font-mono text-sm w-full focus:outline-none placeholder:text-slate-600 caret-indigo-400"
                      />
                    </div>
                    <div className="w-full bg-slate-800/35 border border-slate-700/50 rounded-lg p-3 flex items-center gap-2 group focus-within:border-indigo-500/50 transition-colors ui-glow">
                      <span className="text-indigo-400 font-mono text-sm">$ email:</span>
                      <input
                        type="email"
                        name="from_email"
                        placeholder="Your Email"
                        required
                        className="bg-transparent border-none text-white font-mono text-sm w-full focus:outline-none placeholder:text-slate-600 caret-indigo-400"
                      />
                    </div>
                    <div className="w-full bg-slate-800/35 border border-slate-700/50 rounded-lg p-3 flex flex-col gap-2 group focus-within:border-indigo-500/50 transition-colors ui-glow">
                      <span className="text-indigo-400 font-mono text-sm">$ message:</span>
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        required
                        rows={4}
                        className="bg-transparent border-none text-white font-mono text-sm w-full focus:outline-none placeholder:text-slate-600 caret-indigo-400 resize-none ml-2 leading-relaxed"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full mt-2 py-3 rounded-lg ui-btn-primary ui-glow flex items-center justify-center gap-2 group"
                    >
                      {load ? (
                        <>
                          <Loader className="animate-spin" size={16} />
                          <span>Executing...</span>
                        </>
                      ) : (
                        <>
                          <span>./send_message.sh</span>
                          <span className="w-2 h-4 bg-indigo-400 animate-pulse inline-block ml-1"></span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Right side: Resume and social links */}
              <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start justify-start gap-8 lg:pl-10">
                <div className="w-full max-w-[500px] flex flex-col gap-6">
                  <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 font-mono shadow-[0_0_20px_rgba(99,102,241,0.05)] w-full ui-glow">
                    <div className="text-indigo-400 mb-2 text-sm">$ cat about_me.txt</div>
                    <p className="leading-relaxed border-l border-slate-700/50 pl-4 py-1 text-slate-400 text-sm">
                      Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="text-indigo-400 mt-8 mb-4 text-sm">$ cat core_traits.json</div>
                    <div className="bg-slate-950/50 border border-slate-800/50 rounded-lg p-4 font-mono text-sm text-slate-400">
                      <span className="text-slate-500">{'{'}</span>
                      <ul className="pl-6 space-y-2 my-2">
                        <li><span className="text-indigo-300">"logical_thinking"</span>: <span className="text-green-400">true</span>,</li>
                        <li><span className="text-indigo-300">"team_collaboration"</span>: <span className="text-green-400">true</span>,</li>
                        <li><span className="text-indigo-300">"fast_learner"</span>: <span className="text-green-400">true</span>,</li>
                        <li><span className="text-indigo-300">"problem_solving"</span>: <span className="text-yellow-300">"efficient"</span></li>
                      </ul>
                      <span className="text-slate-500">{'}'}</span>
                    </div>
                  </div>

                  <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 w-full ui-glow">
                    <div className="text-slate-400 text-sm font-mono border-b border-slate-700/50 pb-2 mb-4">network_connect:</div>
                    <div className="flex gap-4 flex-wrap">
                      <a href="https://github.com/Hatim-Malak" className="p-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all group relative flex-1 flex justify-center ui-glow">
                        <Github size={24} />
                        <span className="text-slate-600 text-[10px] font-mono absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          [git]
                        </span>
                      </a>
                      <a href="https://www.linkedin.com/in/hatim-malak-8ba254279/" className="p-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all group relative flex-1 flex justify-center ui-glow">
                        <Linkedin size={24} />
                        <span className="text-slate-600 text-[10px] font-mono absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          [network connect]
                        </span>
                      </a>
                      <a href="mailto:hatim05042006@gmail.com" className="p-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all group relative flex-1 flex justify-center ui-glow">
                        <Mail size={24} />
                        <span className="text-slate-600 text-[10px] font-mono absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          [smtp send]
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full relative mt-16 font-mono text-slate-500 text-sm flex flex-col justify-center items-center py-6">
              <div className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-slate-700 to-transparent absolute top-0"></div>
              <Footer />
            </div>
          </Element>
          <Toaster />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
