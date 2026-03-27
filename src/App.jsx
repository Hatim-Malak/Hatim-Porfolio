import React, { useState } from "react";
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
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import { Loader, ExternalLink, X, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "./components/Footer.jsx";
const App = () => {
  const form = useRef();
  const [load, setload] = useState(false);
  const [openpro, setopenpro] = useState(null);

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
      ],
    },
    {
      title: "AI Technologies",
      items: [
        { name: "LANG CHAIN", icon: "./langchain.webp", size: "45px" },
        { name: "LANG GRAPH", icon: "./langgraph (1).png", size: "45px" },
        { name: "LANG SMITH", icon: "./langsmith.png", size: "45px" },
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
  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0f] overflow-hidden">
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Particles
          particleColors={["#818cf8", "#c084fc"]}
          particleCount={300}
          particleSpread={8}
          speed={0.15}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <div className="relative z-10">
        <div className="flex justify-center">
          <Navbar />
        </div>
        <Element
          name="Home"
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
                  <a 
                    href="#Contact" 
                    className="px-6 py-3 font-semibold rounded-xl ui-btn-primary ui-glow hover:scale-105 transition-transform duration-300"
                  >
                    ./contact.sh
                  </a>
                  <a 
                    href="#Projects" 
                    className="px-6 py-3 font-semibold rounded-xl ui-btn-ghost ui-glow"
                  >
                    --view-projects
                  </a>
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
          className="min-h-screen p-3 w-full flex flex-col justify-start items-center pt-24"
        >
          <div className="flex flex-col items-center gap-2 mb-12">
            <span className="text-indigo-400 text-sm font-medium tracking-widest uppercase">What I Know</span>
            <h1 className="text-white text-4xl md:text-5xl font-bold">Skills & Technologies</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-blue-900 mx-auto rounded-full"></div>
            <p className="text-slate-400 text-lg text-center max-w-2xl mt-4">
              A diverse toolkit built through hands-on projects and continuous learning
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
                    className="w-full max-w-[340px]"
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
          className="min-h-screen w-full flex flex-col justify-start items-center p-3 pt-24"
        >
          <div className="flex flex-col items-center gap-2 mb-12 w-full max-w-4xl mx-auto">
            <span className="text-indigo-400 text-sm font-medium tracking-widest uppercase">Featured Projects</span>
            <h1 className="text-white text-4xl md:text-5xl font-bold mt-2">Featured Projects</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-blue-900 mx-auto rounded-full mt-4"></div>
            <p className="text-slate-400 text-lg font-mono text-center max-w-2xl mt-4">
              // Real-world applications built with modern technologies
            </p>
          </div>

          <div className="relative flex lg:flex-row lg2:flex-row flex-col mt-5 gap-8 justify-center items-center w-full max-w-6xl transition-all">
            {projects.map((pro) => (
              <React.Fragment key={pro.id}>
                {openpro !== pro.id ? (
                  <div
                    onClick={() => setopenpro(pro.id)}
                    className="w-[340px] h-[480px] transition-all flex flex-col justify-start items-start bg-slate-900/80 border border-slate-700/50 rounded-xl overflow-hidden cursor-pointer hover:scale-[1.02] hover:border-indigo-500/30 duration-300 group backdrop-blur-sm ui-glow"
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
                ) : (
                  <div className="fixed inset-0 h-screen z-[99] flex justify-center items-center bg-black/70 backdrop-blur-md overflow-y-auto py-10 px-4">
                    <div className="w-full max-w-4xl bg-slate-900 text-white rounded-xl flex flex-col overflow-hidden shadow-2xl border border-slate-700 font-mono text-sm relative ui-glow">
                      <div className="w-full bg-slate-800/80 border-b border-slate-700/50 flex items-center justify-between pr-4 sticky top-0 z-10">
                        <div className="flex items-center">
                          <div className="flex items-center gap-2 px-4 border-r border-slate-700/50 h-full py-3">
                            <span className="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:opacity-80" onClick={() => setopenpro(null)}></span>
                            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                            <span className="w-3 h-3 rounded-full bg-green-500"></span>
                          </div>
                          <div className="bg-slate-900 border-r border-slate-700/50 px-4 py-3 text-indigo-400 text-xs flex items-center gap-2">
                            <span className="text-slate-500">📄</span> {pro.name.toLowerCase().replace(/\s+/g, '')}.jsx
                          </div>
                          <div className="px-4 py-3 text-slate-500 text-xs hidden sm:block">
                            package.json
                          </div>
                        </div>
                        <X
                          onClick={() => setopenpro(null)}
                          className="cursor-pointer text-slate-400 hover:text-red-400 transition-colors w-5 h-5"
                        />
                      </div>
                      <div className="flex flex-col lg:flex-row w-full flex-1">
                        <div className="hidden lg:flex flex-col items-center py-4 bg-slate-900/50 border-r border-slate-800/80 text-slate-700 font-mono text-xs w-10 select-none">
                          {Array.from({ length: 20 }).map((_, i) => (
                            <div key={i} className="my-[4px]">{i + 1}</div>
                          ))}
                        </div>
                        <div className="flex flex-col lg:flex-row w-full">
                          <div className="lg:w-[40%] w-full h-[250px] lg:h-auto relative border-b lg:border-b-0 lg:border-r border-slate-700/50 bg-slate-800/40 p-0 lg:p-4">
                            <div className="w-full h-full lg:rounded-lg overflow-hidden lg:border border-slate-700">
                              <img
                                src={pro.img}
                                alt="project"
                                className="h-full w-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="lg:w-[60%] w-full p-6 flex flex-col gap-4">
                            <h1 className="text-2xl font-bold text-indigo-300">
                              <span className="text-pink-500">const</span> {pro.name.replace(/\s+/g, '')} <span className="text-slate-400">=</span> <span className="text-yellow-300">&#123;</span>
                            </h1>
                            <div className="pl-4 lg:pl-6 border-l border-slate-700/50">
                              <div className="text-slate-400 mb-1">description: <span className="text-green-400">`</span></div>
                              <p className="text-green-400/90 leading-relaxed text-sm lg:text-sm pl-4 whitespace-pre-line">
                                {pro.description}
                              </p>
                              <div className="text-green-400 mt-1">`</div>
                            </div>
                            
                            <div className="text-slate-500 text-xs mt-2 pl-4 lg:pl-6">// {pro.skills.length} technologies used</div>
                            <div className="flex flex-wrap gap-2 pl-4 lg:pl-6">
                              {pro.skills.map((skill) => (
                                <div
                                  key={skill}
                                  className="px-2 py-1 bg-slate-800/70 rounded border border-slate-700/50 text-indigo-300 text-xs ui-glow"
                                >
                                  [{skill}]
                                </div>
                              ))}
                            </div>
                            <div className="text-yellow-300 text-2xl font-bold mt-auto pt-4 mb-2">&#125;</div>
                            <div className="flex gap-4">
                              <a
                                className="flex-1 bg-slate-800/70 text-slate-300 text-center py-2 lg:py-3 text-xs lg:text-sm shadow-md rounded-md hover:bg-slate-700/80 transition-all border border-slate-600 flex items-center justify-center gap-2 ui-glow"
                                href={pro.code}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github size={16} /> git clone
                              </a>
                              <a
                                className="flex-1 bg-indigo-600/20 text-indigo-300 text-center py-2 lg:py-3 text-xs lg:text-sm shadow-md rounded-md hover:bg-indigo-600/30 transition-all border border-indigo-500/30 flex items-center justify-center gap-2 ui-glow"
                                href={pro.live}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink size={16} /> npm start
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </Element>

        <Element
          name="Education"
          className="py-24 pb-24 px-4 w-full"
        >
          <div className="text-center mb-16">
            <span className="text-indigo-400 text-sm font-mono tracking-widest uppercase">git log --oneline</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 font-mono">Education</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-blue-900 mx-auto rounded-full mt-4"></div>
            <p className="text-slate-400 mt-4 text-lg max-w-2xl mx-auto font-mono text-sm leading-relaxed">
              // git diff --stat<br/>
              A foundation built on continuous learning and academic excellence
            </p>
          </div>

          <div className="relative w-full max-w-4xl mx-auto px-2 py-10">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-800 border-l border-r border-slate-700/50 md:-translate-x-1/2 shadow-[0_0_15px_rgba(99,102,241,0.2)]"></div>

            {education.map((edu, index) => (
              <div
                key={edu.id}
                className={`relative flex items-start mb-12 w-full ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-indigo-600 border-4 border-slate-900 z-10 shadow-[0_0_10px_rgba(99,102,241,0.6)] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>

                <div
                  className={`relative ml-12 md:ml-0 w-[calc(100%-3rem)] md:w-[42%] p-5 rounded-lg bg-slate-900/60 border border-slate-700/50 backdrop-blur-sm hover:border-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 font-mono ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
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
          className="min-h-screen w-full flex flex-col justify-start items-center pt-24 px-4 max-w-7xl mx-auto"
        >
          <div className="flex flex-col items-center gap-2 mb-12 w-full">
            <span className="text-indigo-400 text-sm font-mono uppercase tracking-widest">contact.sh --init</span>
            <h1 className="text-white text-4xl md:text-5xl font-bold font-mono">Contact Me</h1>
            <div className="h-px w-20 bg-gradient-to-r from-indigo-500 via-blue-900 to-indigo-500 mx-auto mt-4"></div>
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
                  
                  <div className="text-indigo-400 mt-8 mb-4 text-sm">$ ./get_resume.sh</div>
                  <a 
                    href="/resume.pdf" 
                    download="Hatim_Malak_Resume.pdf"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3 rounded-lg ui-btn-ghost ui-glow group border-indigo-500/30 text-indigo-300"
                  >
                    <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Resume
                  </a>
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
      </div>
      <Toaster />
    </div>
  );
};

export default App;
