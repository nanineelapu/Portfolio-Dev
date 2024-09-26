import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { FaAngular, FaInstagram, FaLink, FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiCyberdefenders } from "react-icons/si";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Landing() {
  var t1 = gsap.timeline();

  useGSAP(() => {
    gsap.from(".back img", {
      x: -500,
      y: -500,
      opacity: 0,
      scale: 0.3,
      delay: 5,
      duration: 1,
    });
  });

  useGSAP(() => {
    t1.from(".landing .heading ", {
      x: -100,
      opacity: 0,
      duration: 0.6,
      delay: 5,
    });
    t1.from(".landing h2", {
      x: -100,
      opacity: 0,
      duration: 0.6,
    });
    t1.from(".landing .fullname", {
      x: -100,
      opacity: 0,
      duration: 0.6,
    });
    t1.from(".landing .about", {
      x: -100,
      opacity: 0,
      duration: 0.6,
    });
    t1.from(".landing .landing-bottom", {
      x: -100,
      opacity: 0,
      duration: 0.6,
      delay: 0.1,
    });
    t1.from(".icons a", {
      y: -30,
      opacity: 0,
      duration: 0.8,
    });
  });

  return (
    <>
      <div className="back">
        <div className="background w-full  flex items-end absolute px-[5vw] py-[0vw] justify-end">
          <img
            className=" w-[30vw h-[30vw] drop-shadow-[0_32px_35px_rgba(0,255,255,255)] shadow-[#00FFFF]"
            src="https://firebasestorage.googleapis.com/v0/b/naniportfolio.appspot.com/o/portfolio%20reactpng.png?alt=media&token=fa889f00-6a6b-449b-8833-dd681ef00de3"
            alt=""
          />
        </div>
        <div className="landing pt-[2vw] flex px-[3vw] py-[4vw] bg-transparent w-full  ">
          <div className="head  w-full ">
            <div className="heading">
              <h4 className="text-[2vw] uppercase font-sans font-semibold text-zinc-400">
                Welcome to my profile
              </h4>
            </div>
            <h2>Hello , </h2>
            <div className="fullname flex gap-2 text-[5vw]">
              <h1>I am</h1>
              <h1 className="text-[#00FFFF]  "> Nani Neelapu</h1>
            </div>
            <div className="about w-[60%] ">
              <span className="font-[100] text-[1.3vw]">
                Currently pursuing Bachelor’s of Technology in Computer Science
                with Cyber security at GIET with hands-on experience in
                Web-development & Cyber-Security through academic projects and a
                training intern at Techwing. Eager to apply my skills and
                enthusiasm to a development role and to learn for professional
                growth.
              </span>
              <h1
                className="text-[1.1vw] py-4  cursor-pointer w-fit"
                onClick={() => {
                  window.open("https://techwing.org/");
                }}
              >
                Visit Techwing.org
              </h1>
            </div>
            <div className="landing-bottom flex">
              <div className="contacts w-full h-10 flex gap-10 py-10 items-center">
                <h1 className="text-[1.4vw] text-zinc-400 font-sans ">
                  Contact Me In
                </h1>
                {[
                  <FaLinkedinIn
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/in/nani-neelapu-359a85232/"
                      );
                    }}
                  />,
                  <FaGithub
                    onClick={() => {
                      window.open("https://github.com/nanineelapu");
                    }}
                  />,
                  <FaWhatsapp
                    onClick={() => {
                      window.open(
                        "https://wa.me/+919918001006?text=Hello%20Nani%20Neelapu%20I%20am%20interested%20in%20working%20with%20you."
                      );
                    }}
                  />,
                  <FaInstagram />,
                ].map((items, index) => {
                  return (
                    <div className="icons w-[2.5vw] h-[2.5vw] text-[1vw] drop-shadow-[0_5px_10px_rgba(122,251,208,0.4)] rounded-full border-[1px] border-[#444] text-[#00FFFF] bg-zinc-800 items-center flex justify-center hover:bg-zinc-50 hover:text-[#000] hover:drop-shadow-[0_5px_10px_rgba(255,251,255,0.5)]">
                      <a href="">{items}</a>
                    </div>
                  );
                })}
              </div>
              <div className="skills-icons flex items-center w-full h-10  gap-10 py-10 ">
                <h1 className="text-[1.4vw] font-sans text-zinc-400">
                  Skill On
                </h1>
                <div className="icons flex items-center gap-10 p-10">
                  {[<SiCyberdefenders />, <RiReactjsFill />, <FaAngular />].map(
                    (items, index) => {
                      return (
                        <div className="icons w-[2.5vw] h-[2.5vw] text-[1.2vw]  drop-shadow-[0_5px_10px_rgba(122,251,208,0.4)] rounded-full border-[1px] border-[#444] text-[#00FFFF] bg-zinc-800 items-center flex justify-center hover:bg-zinc-50 hover:text-[#000] hover:drop-shadow-[0_5px_10px_rgba(255,251,255,0.5) ]">
                          <a href="">{items}</a>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
