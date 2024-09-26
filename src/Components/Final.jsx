import React from "react";
import { FaDownload } from "react-icons/fa";

function Final() {
  return (
    <>
      <div className="final w-full ">
        <div className="header">
          <header>
            <div className="flex items-center justify-center">All About Me</div>
            <h2 className="text-[3vw] flex justify-center items-center gap-[1vw] text-[#00FFFF]">
              My Resume <FaDownload />
            </h2>
          </header>
          <div className="buttons flex items-center px-[3vw] py-[3vw] justify-between bg-zinc-800 mt-[3vw]">
            <div className="title">
              <span>Education</span>
            </div>
            <div className="title">
              <span>Services</span>
            </div>
            <div className="title">
              <span>Certifications</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Final;
