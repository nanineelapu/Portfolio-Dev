import React, { useRef } from "react";
import { CiGlobe } from "react-icons/ci";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaGithub, FaJava } from "react-icons/fa";
import { DiGithub } from "react-icons/di";
import { SiBackendless } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";

function Skillsintro() {
  useGSAP(() => {
    gsap.from(".title h1", {
      x: -100,
      duration: 1,
      stagger: 1,
      opacity: 0,
      delay: 1,
    });
  });

  var hoverRef = useRef();

  return (
    <>
      <div className="skillsintro">
        <div className="title w-full text-[3vw] px-10 py-10 ">
          <h1 className=" absolute  font-bold">Skills</h1>
        </div>
        <div
          id="intro"
          className="relative w-full px-10 py-10 mt-10 flex items-center justify-evenly gap-[3vw]"
        >
          <div className="card shadow-md shadow-[#00FFFF]  w-[30vw] py-5 px-5 text-[2vw] hover:cursor-pointer hover:bg-zinc-900">
            <div className=" card-content flex  items-center gap-[2vw] text-[#00FFFF] text-[2vw] py-5  ">
              <CiGlobe />
              <h1 className="text-[2vw]">Java Full Stack Trainee</h1>
            </div>
            <div className="content text-[1.2vw]">
              <p className="font-['Source_serif_4'] font-[300]">
                I am a Java Full Stack Trainee with 6 Months of hands-on
                experience in developing web applications using Angular, Java,
                Spring Boot, and React.js.
              </p>
            </div>
          </div>
          <div className="card shadow-md shadow-[#00FFFF] w-[30vw] py-5 px-5 text-[2vw] bg-zinc-800">
            <div className="card-content flex items-center gap-[2vw] text-[#00FFFF] text-[2vw] py-5">
              <FaJava />
              <h1> IT Specailist Java</h1>
            </div>
            <div className="content text-[1.2vw]">
              <p className="font-['Source_serif_4'] font-[300]">
                Certified IT Specailist in Java , Date: July 2024 Demonstrates
                proficiency in Java SE programming , object-oriented concepts
                and application development
              </p>
            </div>
          </div>
          <div className="card shadow-md shadow-[#00FFFF] w-[30vw] p-5 text-[2vw] bg-zinc-800 ">
            <div className="card-content flex items-center gap-[2vw] text-[#00FFFFFF] py-5">
              <FaGithub />
              <h1>VCS - Github</h1>
            </div>
            <div className="content text-[1.2vw]">
              <p className="font-['Source_serif_4'] font-[300]">
                I am a Java Full Stack Trainee with 6 Months of hands-on
                experience in developing web applications using Angular, Java,
                Spring Boot, and React.js
              </p>
            </div>
          </div>
        </div>
        <div
          id="intro-2"
          className=" flex items-center gap-[3vw] relative w-full p-10"
        >
          <div className="card shadow-md shadow-[#00FFFF] w-[29vw] p-5 text-[2vw] bg-zinc-800">
            <div className="card-content text-[#00FFFF] flex items-center gap-[2vw]">
              <SiBackendless />
              <h1>BackEnd - Restful API</h1>
            </div>
            <div className="content text-[1.2vw]  py-8">
              <p className="font-['Source_serif_4'] font-[100]">
                I am a Java Full Stack Trainee with 6 Months of hands-on
                experience in developing web applications using Angular, Java,
              </p>
            </div>
          </div>
          <div className="card shadow-md shadow-[#00FFFF] w-[30vw] p-5 text-[2vw] bg-zinc-800">
            <div className=" card-content flex text-[#00FFFF] items-center gap-[2vw]">
              <IoLogoFigma />
              <h1 className="text-[2vw]">UI & UX Designer</h1>
            </div>
            <div className="content text-[1.2vw]">
              <p
                className="font-['Source_serif_4']
               font-[100] py-5"
              >
                I am a Java Full Stack Trainee with 6 Months of hands-on
                experience in developing web applications using Angular, Java,
                Spring Boot, and React.js.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skillsintro;
