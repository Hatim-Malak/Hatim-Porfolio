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
import { Loader, ExternalLink, X } from "lucide-react";
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
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={400}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="relative z-10">
        <div className="flex justify-center">
          <Navbar />
        </div>
        <Element
          name="Home"
          className="min-h-screen w-full justify-center items-center pt-24 flex lg:flex-row  lg2:flex-row  flex-col-reverse overflow-hidden "
        >
          <div className="lg:w-[50%] lg2:w-[50%] lg:h-full lg2:h-full w-full h-[60%] flex flex-col justify-center items-center">
            <div className="flex flex-col items-start gap-3 lg:w-[60%] lg2:w-[80%] w-[90%]">
              <h1 className="text-white lg:text-4xl md:text-4xl mb-4 text-2xl font-bold">
                Hi, I am
              </h1>
              <h1 className="text-white lg:text-6xl lg2:text-6xl md:text-6xl text-4xl font-bold">
                Hatim Malak
              </h1>
              <h1 className="text-white lg:text-3xl lg2:text-3xl md:text-3xl text-xl  font-bold flex gap-2">
                I am a
                <TextType
                  className=" text-gray-800 font-bold"
                  text={[
                    "Software Developer",
                    "Full Stack developer",
                    "Java Enthusiast",
                  ]}
                  textColors={["#6609b3"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </h1>
              <p className="w-full text-white lg:text-xl lg2:text-xl md:text-xl text-lg font-semibold">
                Aspiring MERN Stack Developer | B.Tech IT Student Passionate and
                driven full-stack web developer with a strong foundation in
                JavaScript, Python, React, Node.js, and MongoDB. Skilled in
                building scalable, efficient, and user-friendly applications,
                with hands-on experience in designing and consuming RESTful
                APIs. Proficient in data structures, algorithms, and modern
                software development practices.
              </p>
              <div className="w-full relative z-9">
                <LogoLoop
                  logos={techLogos}
                  speed={120}
                  direction="left"
                  logoHeight={48}
                  gap={40}
                  pauseOnHover
                  scaleOnHover
                  fadeOut
                  fadeOutColor="#000000"
                  ariaLabel="Technology partners"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:items-center lg2:items-center items-end lg:w-[50%] lg2:w-[50%] lg:h-full lg2:h-full w-full h-[40%] ">
            <div
              className="lg:size-[500px] lg2:size-[400px] md:size-[300px] size-[230px] rounded-full border-[5px] border-purple-500 
  shadow-[0_0_20px_rgba(168,85,247,0.5)]
  hover:shadow-[0_0_30px_rgba(168,85,247,0.8)]
  transition-all duration-300"
            >
              <img
                src="./Profile_Photo1.png"
                alt="profilePic"
                className="object-cover object-top w-full h-full rounded-full"
              />
            </div>
          </div>
        </Element>
        <Element
          name="Skills"
          className="min-h-screen p-3 w-full flex flex-col justify-start items-center pt-24 "
        >
          <div className="flex flex-col items-center gap-2 ">
            <h1 className="text-white text-4xl font-bold">SKILLS</h1>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-white text-xl text-center font-semibold my-3">
              A collection of my technical skills and expertise honed through
              various project and experience
            </p>
          </div>
          <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                {skills.map((category, categoryIndex) => (
                  <Tilt
                    key={categoryIndex}
                    options={{
                      max: 15,
                      scale: 1.05,
                      speed: 250,
                      glare: true,
                      "max-glare": 0.3,
                    }}
                    className="w-full max-w-[320px]"
                  >
                    <div className="bg-gray-400/15  min-h-[300px] border border-white/10 rounded-2xl p-6 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
                      {/* Card Header */}
                      <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-white mb-2">
                          {category.title}
                        </h2>
                        <div className="h-0.5 w-16 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
                      </div>

                      {/* Skills Icons Grid */}
                      <div className="grid grid-cols-3 gap-4">
                        {category.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="group relative aspect-square flex flex-col items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-gray-700/40 to-gray-800/40 p-3 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 hover:scale-105 border border-white/5 hover:border-white/20"
                          >
                            {/* Icon */}
                            <div className="flex items-center justify-center flex-1">
                              <img
                                src={item.icon}
                                alt={item.name}
                                className="object-contain transition-transform duration-300 group-hover:scale-110"
                                style={{
                                  width: item.size,
                                  height: item.height || item.size,
                                }}
                              />
                            </div>

                            {/* Label */}
                            <div className="text-center w-full">
                              <p className="text-[10px] font-semibold text-white/90 leading-tight line-clamp-2">
                                {item.name}
                              </p>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300 pointer-events-none"></div>
                          </div>
                        ))}
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
          className={`min-h-screen w-full flex flex-col justify-start items-center p-3 pt-24`}
        >
          <div className="flex flex-col items-center gap-2 ">
            <h1 className="text-white text-4xl font-bold">PROJECTS</h1>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-white text-xl font-semibold text-center my-3">
              A showcase of the projects I have worked on, highlighting my
              skills and technologies.
            </p>
          </div>

          <div className="relative flex lg:flex-row lg2:flex-row flex-col mt-5 gap-8 justify-center items-center w-full h-full transition-all">
            {projects.map((pro) => (
              <React.Fragment key={pro.id}>
                {openpro !== pro.id ? (
                  // Normal Project Card
                  <div
                    onClick={() => setopenpro(pro.id)}
                    className="w-[300px] h-[500px] transition-all flex flex-col justify-start gap-3 items-start bg-gray-400/15 border-2 border-purple-500 
  shadow-[0_0_20px_rgba(168,85,247,0.5)]
  hover:shadow-[0_0_30px_rgba(168,85,247,0.8)]
   rounded-lg cursor-pointer hover:scale-105 duration-300"
                  >
                    <div className="w-full h-[35%]">
                      <img
                        src={pro.img}
                        alt="pro"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="p-3 flex flex-col justify-start gap-2 items-start w-full h-full">
                      <h1 className="text-3xl text-white font-bold text-start">
                        {pro.name}
                      </h1>
                      <p className="w-full h-[30%] overflow-hidden text-xl text-white font-semibold ">
                        {pro.description}
                      </p>
                      <div className="grid grid-cols-3 grid-rows-2 items-center justify-center gap-2 mt-2">
                        {pro.skills.map((skill) => (
                          <div
                            key={skill}
                            className="text-md px-2 py-1 flex justify-center rounded-md items-center bg-[#6609b3]/50 text-white font-medium"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="fixed inset-0 h-screen z-[99] flex justify-center items-center bg-black/60 backdrop-blur-md overflow-y-auto py-10 px-3">
                    <div className="w-[90%] max-h-[95%] lg:w-[60%] lg2:w-[60%] bg-gray-800 text-white rounded-2xl flex  flex-col lg:flex-row lg2:flex-row overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                      <div className="lg:w-[30%] lg2:w-[30%] w-full h-[250px] lg:h-auto lg2:h-auto">
                        <img
                          src={pro.img}
                          alt="project"
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="lg:w-[70%] lg2:w-[70%] w-full p-6 flex flex-col justify-around gap-2 lg:gap-5 lg2:gap-5">
                        <h1 className="text-3xl font-bold flex justify-between items-center">
                          {pro.name}
                          <X
                            onClick={() => setopenpro(null)}
                            className="cursor-pointer hover:text-red-400"
                          />
                        </h1>

                        <p className="text-lg overflow-y-auto max-h-[200px] lg:max-h-[300px] lg2:max-h-[300px] pr-2">
                          {pro.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-2">
                          {pro.skills.map((skill) => (
                            <div
                              key={skill}
                              className="px-3 py-1 bg-[#6609b3]/50 rounded-md text-white font-medium"
                            >
                              {skill}
                            </div>
                          ))}
                        </div>

                        <div className="flex justify-around gap-3 mt-5">
                          <a
                            className="bg-gray-600 text-white lg:w-[50%] lg2:w-[50%] text-lg flex gap-2 justify-center items-center px-5 py-3 rounded-2xl font-bold"
                            href={pro.code}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Code
                            <ExternalLink className="text-white" />
                          </a>
                          <a
                            className="bg-[#6609b3] text-white lg:w-[50%] lg2:w-[50%] text-lg flex gap-2 justify-center items-center px-5 py-3 rounded-2xl font-bold"
                            href={pro.live}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Live
                            <ExternalLink className="text-white" />
                          </a>
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
          className="py-24 pb-24 px-[12vw] lg2:px-[7vw] lg:px-[16vw] lg2:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-white mt-4 text-lg font-semibold">
              My education has been a journey of learning and development. Here
              are the details of my academic background
            </p>
          </div>

          <div className="relative w-full max-w-7xl mx-auto px-2 lg:px-4 lg2:px-4 py-10 overflow-hidden">
            {/* VERTICAL LINE */}
            {/* Mobile: Anchored to left-6 (24px). Desktop: Anchored to center (50%) */}
            <div className="absolute left-6 lg2:left-1/2 top-1/2 -translate-y-1/2 w-1 h-[83%] bg-white transform lg2:-translate-x-1/2"></div>

            {/* Education Entries */}
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className={`relative flex items-center mb-12 w-full ${
                  /* Desktop: Alternate Left/Right alignment */
                  index % 2 === 0 ? "lg2:justify-start" : "lg2:justify-end"
                }`}
              >
                {/* TIMELINE DOT */}
                {/* Mobile: Fixed at left-6. Desktop: Fixed at center */}
                <div className="absolute left-6 lg2:left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-[#6609b3] w-12 h-12 rounded-full flex justify-center items-center z-10 shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* CARD CONTENT */}
                {/* Mobile logic: 
         - ml-16: Pushes card right of the line (24px line + space)
         - w-full: Takes remaining width
         
         Desktop logic:
         - md:ml-0: Resets mobile margin
         - md:w-[45%]: Takes up slightly less than half width
         - md:pr/pl-12: Adds spacing between card and center line
      */}
                <div
                  className={`relative p-6 rounded-2xl border border-white bg-gray-400/15 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] backdrop-blur-sm 
        
        /* Mobile: Push to right of line */
        ml-16 w-auto

        /* Desktop: Width and Spacing */
        lg2:w-[45%] lg2:ml-0
        ${index % 2 === 0 ? "lg2:mr-12" : "lg2:ml-12"}
        
        transform transition-transform duration-300 hover:scale-105`}
                >
                  {/* Inner Card Content */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    {/* Logo */}
                    <div className="w-16 h-16 bg-white rounded-md overflow-hidden shrink-0">
                      <img
                        src={edu.img}
                        alt={edu.school}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Text Info */}
                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold text-white">
                        {edu.degree}
                      </h3>
                      <h4 className="text-sm text-gray-200">{edu.school}</h4>
                      <p className="text-xs text-gray-300 mt-1">{edu.date}</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-white font-bold text-sm">
                      Grade: {edu.grade}
                    </p>
                    <p className="mt-2 text-gray-200 text-sm">{edu.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Element>
        <Element
          name="Contact"
          className="min-h-screen w-full flex flex-col justify-between items-center pt-24"
        >
          <div className="flex flex-col items-center gap-2 ">
            <h1 className="text-white text-4xl font-bold">CONTACT US</h1>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-white text-xl font-semibold text-center">
              I'd love to hear from you - reach out for any opportunities !
            </p>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col h-full w-full justify-start pt-24 items-center gap-3"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="p-3 lg:w-[30%] lg2:w-[30%] w-[90%] border border-gray-400/30 bg-gray-400/15 text-white text-lg font-semibold rounded"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="p-3 lg:w-[30%] lg2:w-[30%] w-[90%] border border-gray-400/30 bg-gray-400/15 text-white text-lg font-semibold rounded"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="p-3 lg:w-[30%] lg2:w-[30%] h-[30%] w-[90%] border border-gray-400/30 bg-gray-400/15 text-white text-lg font-semibold rounded"
            />
            <button
              type="submit"
              className="bg-[#6609b3] lg:w-[30%] lg2:w-[30%] w-[90%] text-lg font-semibold text-white p-3 rounded "
            >
              {load ? (
                <div className="flex justify-center items-center gap-2">
                  <Loader className="animate-spin" />
                  <h1>Loading...</h1>
                </div>
              ) : (
                <h1>Submit</h1>
              )}
            </button>
          </form>
          <Footer />
        </Element>
      </div>
      <Toaster />
    </div>
  );
};

export default App;
