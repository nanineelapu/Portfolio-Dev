import React from "react";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Picture from "./Components/Picture";
import Skillsintro from "./Components/Skillsintro";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import LocomotiveScroll from "locomotive-scroll";
import Projects from "./Components/Projects";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Preload from "./Components/Preload";
import Final from "./Components/Final";
import Footer from "./Components/Footer";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  var tline = gsap.timeline();

  useGSAP(() => {
    gsap.from(".bouncer ", {
      x: -100,
      duration: 1,
      delay: 0.1,
      opacity: 0,
    });
  });
  useGSAP(() => {
    gsap.from("span", {
      y: 100,
      duration: 1,
      delay: 0.1,
      opacity: 0,
      stagger: 0.25,
    });
  });

  return (
    <>
      <div className="page w-full bg-zinc-800 h-full text-zinc-100 t-[0] fixed ">
        <div className="bouncer absolute w-full px-[18vw] py-[15vw]  ">
          <div className="circle p-1 absolute flex items-center justify-center rounded-full bg-[#00FFFF] w-[7vw] h-[7vw]">
            <h1 className="text-zinc-900">Nani's</h1>
          </div>
        </div>
        <div className="text  text-[6vw] flex px-[28vw] py-[14vw]">
          <span>P</span>
          <span>O</span>
          <span>R</span>
          <span>T</span>
          <span>F</span>
          <span>O</span>
          <span>L</span>
          <span>I</span>
          <span>O</span>
        </div>
      </div>
      <div className="main">
        <Navbar />
        <Landing />
        <Picture />
        <Skillsintro />
        <Projects />
        <Final />
        <Footer />
      </div>
    </>
  );
}

export default App;
