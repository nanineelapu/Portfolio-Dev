import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

function Picture() {
  useGSAP(() => {
    gsap.to("marquee", {
      duration: 3,
      rotate: 360,
      opacity: 1,
    });
    gsap.from(".desc h1 , .desc-deatils h3,  p ", {
      y: 130,
      duration: 0.3,
      delay: 0,
      opacity: 0,
      scrollTrigger: {
        trigger: ".desc",
      },
    });
  });
  return (
    <>
      <div
        id="back"
        className="flex w-full h-[30vw] items-center justify-center mt-10"
      >
        <div className="box w-[30vw] h-[30vw] bg-zinc-700 rounded-lg items-center relative"></div>
        <div className="content w-[40vw] h-[30vw] ">
          <div className="desc text-zinc-50 leading-[2.3vw] px-10 py-10">
            <h1 className="text-[2vw] mb-5 uppercase text-[#00FFFF] font-semibold">
              Description
            </h1>
            <div className="desc-deatils  font-['Source_serif_4']">
              <h3 className="text-[1.4vw]">Email</h3>
              <p>neelapunani2580@gmail.com</p>
            </div>
            <div className="desc-deatils font-['Source_serif_4']">
              <h3 className="text-[1.4vw]">Address</h3>
              <p>Godavari Global University, Rajahmundry - 533296</p>
            </div>
            <div className="desc-deatils font-['Source_serif_4']">
              <h3 className="text-[1.4vw]">Contact</h3>
              <p>+91 7661891711</p>
            </div>
            <div className="desc-deatils font-['Source_serif_4']">
              <h3 className="text-[1.4vw]">Email</h3>
              <p>neelapunani2580@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flow  w-full py-10 text-[2vw] text-[#00FFFF]">
        <marquee behavior="" direction="">
          {["What I Do", "My Skills", "Resume", "Projects", "Contact me"].map(
            (items, index) => {
              return (
                <>
                  <span className="p-16">{items}</span>
                </>
              );
            }
          )}
        </marquee>
      </div>
    </>
  );
}

export default Picture;
