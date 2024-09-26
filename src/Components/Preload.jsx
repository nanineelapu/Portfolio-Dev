import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

function Preload() {
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

  var page = document.querySelector(".page");

  setTimeout(() => {
    page.style.top = "-100%";
  }, 3000);

  return (
    <>
      <div className="page w-full bg-zinc-50 h-full text-zinc-900 t-[0] fixed  ">
        <div className="bouncer absolute w-full px-[15vw] py-[18vw]  ">
          <div className="circle p-1 absolute flex items-center justify-center rounded-full bg-[#00FFFF] w-[7vw] h-[7vw]">
            <h1>Nani's</h1>
          </div>
        </div>
        <div className="text  text-[9vw] flex px-[24vw] py-[15vw]">
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
    </>
  );
}

export default Preload;
