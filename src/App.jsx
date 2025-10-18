import React, { useState } from "react";
import DarkVeil from "./components/DarkVeil.jsx";
import Navbar from "./components/Navbar.jsx";
import { Element } from "react-scroll";
import Tilt from "react-parallax-tilt";
import TextType from "./components/TextType.jsx";
import Particles from "./components/Particeles.jsx";
import { useRef } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import { Loader } from "lucide-react";

const App = () => {
  const form = useRef();
  const [load, setload] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    setload(true)
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
          setload(false)
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message, please try again.");
          setload(false)
        }
      );
  };
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
          className="h-screen w-full flex lg:flex-row  flex-col-reverse overflow-hidden "
        >
          <div className="lg:w-[50%] lg:h-full w-full h-[60%] flex flex-col justify-center items-center">
            <div className="flex flex-col items-start gap-3 lg:w-[60%] w-[90%]">
              <h1 className="text-white lg:text-4xl md:text-4xl text-2xl font-bold">
                Hi, I am
              </h1>
              <h1 className="text-white lg:text-6xl md:text-6xl text-4xl font-bold">
                Hatim Malak
              </h1>
              <h1 className="text-white lg:text-3xl md:text-3xl text-xl  font-bold flex gap-2">
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
              <p className="w-full text-white lg:text-xl md:text-xl text-lg font-semibold">
                Aspiring MERN Stack Developer | B.Tech IT Student Passionate and
                driven full-stack web developer with a strong foundation in
                JavaScript, Python, React, Node.js, and MongoDB. Skilled in
                building scalable, efficient, and user-friendly applications,
                with hands-on experience in designing and consuming RESTful
                APIs. Proficient in data structures, algorithms, and modern
                software development practices.
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:items-center items-end lg:w-[50%] lg:h-full w-full h-[40%] ">
            <div className="lg:size-[450px] size-[230px] rounded-full border-[5px] border-[#6609b3]">
              <img
                src="./Profile_Photo.jpg"
                alt="profilePic"
                className="object-cover w-full h-full rounded-full"
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
            <div className="w-[120px] border-2  border-[#6609b3]"></div>
            <p className="text-white text-xl text-center font-semibold my-3">
              A collection of my technical skills and expertise honed through
              various project and experience
            </p>
          </div>
          <div className=" lg:grid lg:grid-cols-3 lg:gap-8 lg:place-items-center flex flex-col gap-5 items-center justify-start ">
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.3}
              scale={1.05}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              transitionSpeed={250}
              className="bg-gray-400/15 size-[300px] rounded-lg flex flex-col justify-center gap-5 items-center border border-white/30"
            >
              <h1 className="text-white text-3xl font-bold">Frontend</h1>
              <div className="grid grid-cols-3 gap-x-2 gap-y-4 items-center justify-center grid-rows-2">
                <div className="size-[80px]">
                  <img src="./html1.png" alt="html" />
                </div>
                <div className="size-[70px]">
                  <img src="./css2.webp" alt="html" />
                </div>
                <div className="size-[85px]">
                  <img src="./javascript.webp" alt="html" />
                </div>
                <div className="size-[75px]">
                  <img src="./React-icon.svg.png" alt="html" />
                </div>
                <div className="size-[75px]">
                  <img src="./tailwindcss-icon.svg" alt="html" />
                </div>
              </div>
            </Tilt>
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.3}
              scale={1.05}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              transitionSpeed={250}
              className="bg-gray-400/15 size-[300px] rounded-lg flex flex-col justify-center gap-5 items-center border border-white/30"
            >
              <h1 className="text-white text-3xl font-bold">Backend</h1>
              <div className="grid grid-cols-3 gap-x-2 gap-y-4 items-center justify-center grid-rows-2">
                <div className="size-[75px]">
                  <img src="./node.png" alt="html" />
                </div>
                <div className="size-[70px]">
                  <img src="./express-js.png" alt="html" />
                </div>
                <div className="size-[70px]">
                  <img src="./fastapi.svg" alt="html" />
                </div>
                <div className="size-[80px]">
                  <img src="./Socket-io.svg" alt="html" />
                </div>
              </div>
            </Tilt>
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.3}
              scale={1.05}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              transitionSpeed={250}
              className="bg-gray-400/15 size-[300px] rounded-lg flex flex-col justify-center gap-5 items-center border border-white/30"
            >
              <h1 className="text-white text-3xl font-bold">Languages</h1>
              <div className="grid grid-cols-3 gap-x-4 gap-y-4 items-center justify-center grid-rows-2">
                <div className="size-[75px] flex justify-center items-center">
                  <img src="./c.webp" alt="html" />
                </div>
                <div className="size-[67px] flex justify-center items-center">
                  <img src="./c++.png" alt="html" />
                </div>
                <div className="size-[60px] flex justify-center items-center">
                  <img src="./java.png" alt="html" />
                </div>
                <div className="size-[70px] flex justify-center items-center">
                  <img src="./python.png" alt="html" />
                </div>
              </div>
            </Tilt>
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.3}
              scale={1.05}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              transitionSpeed={250}
              className="bg-gray-400/15 size-[300px] rounded-lg flex flex-col justify-center gap-5 items-center border border-white/30"
            >
              <h1 className="text-white text-3xl font-bold">Tools</h1>
              <div className="grid grid-cols-3 gap-x-2 gap-y-4 items-center justify-center grid-rows-2">
                <div className="size-[70px]">
                  <img src="./github.png" alt="html" />
                </div>
                <div className="size-[85px]">
                  <img src="./figma.webp" alt="html" />
                </div>
                <div className="size-[70px]">
                  <img src="./postman.webp" alt="html" />
                </div>
                <div className="size-[70px]">
                  <img src="./swagger-logo.png" alt="html" />
                </div>
              </div>
            </Tilt>
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.3}
              scale={1.05}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              transitionSpeed={250}
              className="bg-gray-400/15 size-[300px] rounded-lg flex flex-col justify-center gap-5 items-center border border-white/30"
            >
              <h1 className="text-white text-3xl font-bold">AI Technologies</h1>
              <div className="grid grid-cols-3 gap-x-2 gap-y-4 items-center justify-center grid-rows-2">
                <div className="size-[85px]">
                  <img src="./langchain.webp" alt="html" />
                </div>
                <div className="size-[85px]">
                  <img src="./langgraph (1).png" alt="html" />
                </div>
                <div className="size-[85px]">
                  <img src="./langsmith.png" alt="html" />
                </div>
              </div>
            </Tilt>
          </div>
        </Element>
        <Element
          name="Projects"
          className="min-h-screen w-full flex flex-col justify-start items-center p-3 pt-24 "
        >
          <div className="flex flex-col items-center gap-2 ">
            <h1 className="text-white text-4xl font-bold">PROJECTS</h1>
            <div className="w-[150px] my-2 border-2 border-[#6609b3] "></div>
            <p className="text-white text-xl font-semibold text-center my-3">
              A showcase of the project, I have worked on, highlighting my
              skills on technologies
            </p>
          </div>
          <div className=" flex lg:flex-row flex-col mt-5 gap-8 place-items-center ">
            <div className="w-[300px] h-[500px] flex flex-col justify-start gap-3 items-start bg-gray-400/15 border-2 border-white/30 rounded-lg">
              <div className="w-full h-[35%]">
                <img
                  src="./pro1.jpg"
                  alt="pro"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="p-3 flex flex-col justify-start gap-2 items-start w-full h-full">
                <h1 className="text-3xl text-white font-bold text-start">
                  OfficalChat
                </h1>
                <p className="w-full h-[30%] overflow-hidden text-xl text-white font-semibold ">
                  A real-time chat application built using React, Node.js,
                  Express, Socket.IO, and TailwindCSS, deployed securely on
                  Render. It enables instant bidirectional messaging with a
                  responsive and modern UI for smooth cross-device
                  communication. The backend efficiently handles live socket
                  connections, ensuring fast and reliable performance. The
                  project’s modular codebase allows easy expansion for future
                  features like group chats, file sharing, and authentication.
                </p>
                <div className="grid grid-cols-3 grid-rows-2 items-center justify-center gap-2 mt-2">
                  <div className="text-md px-2 py-1 flex justify-center rounded-md items-center bg-[#6609b3]/50 text-white font-medium">
                    React.js
                  </div>
                  <div className="text-md px-2 py-1 flex justify-center rounded-md items-center bg-[#6609b3]/50 text-white font-medium">
                    Tailwindcss
                  </div>
                  <div className="text-md px-2 py-1 flex justify-center rounded-md items-center bg-[#6609b3]/50 text-white font-medium">
                    Node.js
                  </div>
                  <div className="text-md px-2 py-1 flex justify-center rounded-md items-center bg-[#6609b3]/50 text-white font-medium">
                    Express.js
                  </div>
                  <div className="text-md px-2 py-1 flex justify-center rounded-md items-center bg-[#6609b3]/50 text-white font-medium">
                    Socket.io
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[300px] h-[500px] flex flex-col justify-start gap-3 items-start bg-gray-400/15 border-2 border-white/30 rounded-lg">
              <div className="w-full h-[35%]">
                <img
                  src="./pro2.jpg"
                  alt="pro"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="p-3 flex flex-col justify-start gap-2 items-start w-full h-full">
                <h1 className="text-3xl text-white font-bold text-start">
                  Starlit Stationary
                </h1>
                <p className="w-full h-[30%] overflow-hidden text-xl text-white font-semibold ">
                  A full-stack stationery e-commerce platform built using the
                  MERN stack with TailwindCSS, deployed on Vercel and Railway.
                  It features secure authentication, product browsing,
                  category-based search, and a shopping cart with order
                  management. An intuitive admin panel allows efficient product
                  and order control, including user feedback-based order
                  cancellation. The deployment ensures fast, scalable, and
                  reliable performance with seamless database integration.
                </p>
                <div className="grid grid-cols-3 grid-rows-2 items-center justify-center gap-2 mt-2">
                  <div className="text-md px-2 py-1 flex justify-center rounded-md items-center bg-[#6609b3]/50 text-white font-medium">
                    React.js
                  </div>
                  <div className="text-md px-2 py-1 flex justify-center rounded-md items-center bg-[#6609b3]/50 text-white font-medium">
                    Tailwindcss
                  </div>
                  <div className="text-md px-2 py-1 flex justify-center rounded-md items-center bg-[#6609b3]/50 text-white font-medium">
                    Node.js
                  </div>
                  <div className="text-md px-2 py-1 flex justify-center rounded-md items-center bg-[#6609b3]/50 text-white font-medium">
                    Express.js
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[300px] h-[500px] flex flex-col justify-start gap-3 items-start bg-gray-400/15 border-2 border-white/30 rounded-lg">
              <div className="w-full h-[35%] mb-8">
                <img
                  src="./pro3.png"
                  alt="pro"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="p-3 flex flex-col justify-start gap-2 items-start w-full h-full">
                <h1 className="text-3xl text-white font-bold text-start">
                  E-book Reader
                </h1>
                <p className="w-full h-[30%] overflow-hidden text-xl text-white font-semibold ">
                  An interactive e-book reader application built using the MERN
                  stack, allowing users to read books online seamlessly. It
                  features a clean and responsive UI for distraction-free
                  reading and smooth navigation between chapters. The platform
                  ensures fast content loading, secure data handling, and
                  scalable performance for an engaging digital reading
                  experience.
                </p>
                <div className="grid grid-cols-3 grid-rows-2 items-center justify-center gap-2 mt-2">
                  <div className="text-md px-2 py-1 flex justify-center rounded-md items-center bg-[#6609b3]/50 text-white font-medium">
                    React.js
                  </div>
                  <div className="text-md px-2 py-1 flex justify-center rounded-md items-center bg-[#6609b3]/50 text-white font-medium">
                    Tailwindcss
                  </div>
                  <div className="text-md px-2 py-1 flex justify-center rounded-md items-center bg-[#6609b3]/50 text-white font-medium">
                    Node.js
                  </div>
                  <div className="text-md px-2 py-1 flex justify-center rounded-md items-center bg-[#6609b3]/50 text-white font-medium">
                    Express.js
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Element>
        <Element
          name="Education"
          className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
            <div className="w-32 h-1 bg-[#6609b3] mx-auto mt-4"></div>
            <p className="text-white mt-4 text-lg font-semibold">
              My education has been a journey of learning and development. Here
              are the details of my academic background
            </p>
          </div>

          {/* Education Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

            {/* Education Entries */}
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className={`flex flex-col sm:flex-row items-center mb-16 ${
                  index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                }`}
              >
                {/* Timeline Circle */}
                <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#6609b3] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Content Section */}
                <div
                  className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl  border border-white bg-gray-400/15 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                    index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
                  } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
                >
                  {/* Flex container for image and text */}
                  <div className="flex items-center space-x-6">
                    {/* School Logo/Image */}
                    <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                      <img
                        src={edu.img}
                        alt={edu.school}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Degree, School Name, and Date */}
                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl sm:text-xl font-semibold text-white">
                          {edu.degree}
                        </h3>
                        <h4 className="text-md sm:text-sm text-white">
                          {edu.school}
                        </h4>
                      </div>
                      {/* Date at the bottom */}
                      <p className="text-sm text-white mt-2">{edu.date}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-white font-bold">
                    Grade: {edu.grade}
                  </p>
                  <p className="mt-4 text-white">{edu.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Element>
        <Element name="Contact" className="h-screen w-full flex flex-col justify-center items-center p-3 pt-24">
          <div className="flex flex-col items-center gap-2 ">
            <h1 className="text-white text-4xl font-bold">CONTACT US</h1>
            <div className="w-[180px] my-2 border-2 border-[#6609b3] "></div>
            <p className="text-white text-xl font-semibold text-center">
              I'd love to hear from you - reach out for any opportunities !
            </p>
          </div>
          
          <form ref={form} onSubmit={sendEmail} className="flex flex-col h-full w-full justify-start pt-24 items-center gap-3">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="p-3 lg:w-[30%] w-[90%] border border-gray-400/30 bg-gray-400/15 text-white text-lg font-semibold rounded"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="p-3 lg:w-[30%] w-[90%] border border-gray-400/30 bg-gray-400/15 text-white text-lg font-semibold rounded"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="p-3 lg:w-[30%] h-[30%] w-[90%] border border-gray-400/30 bg-gray-400/15 text-white text-lg font-semibold rounded"
            />
            <button
              type="submit"
              className="bg-[#6609b3] lg:w-[30%] w-[90%] text-lg font-semibold text-white p-3 rounded "
            >
              {load?(
                <div className="flex justify-center items-center gap-2">
                  <Loader className="animate-spin"/>
                  <h1>Loading...</h1>
                </div>
              ):(
                <h1>Submit</h1>
              )}
            </button>
          </form>
        </Element>
      </div>
      <Toaster/>
    </div>
  );
};

export default App;
