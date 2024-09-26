import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <div className="content w-full h-screen bg-zinc-900 flex items-center justify-center p-[10vh]">
          <div className="left w-[35%] h-[40vh] py-[3vw] ">
            <div className="vid">
              <video
                autoPlay
                loop
                muted
                src="https://firebasestorage.googleapis.com/v0/b/naniportfolio.appspot.com/o/Animation%20-%201725475110427.mp4?alt=media&token=b3a0e43d-7f79-451d-b4ef-b276544b52be"
              ></video>
            </div>
            <h1>
              Ph No : <span>+91 *********</span>
            </h1>
            <h1>
              Email :{" "}
              <span className="text-[#00FFFF]">neelapunani2580@gmail.com</span>
            </h1>
          </div>
          <div className="right w-[55%] h-[40vh] leading-8">
            <div className="first flex items-center justify-between py-3">
              <div className="inputs ">
                <div className="name">Your Name</div>
                <input className="w-[20vw]" type="text" />
              </div>
              <div className="inputs ">
                <div className="email">Your Email</div>
                <input className="w-[25vw]" type="text" />
              </div>
            </div>
            <div className="second">
              <div className="inputs ">
                <div className="subject">Your Subject for contact</div>
                <input className="h-[10vh]" type="text" />
              </div>
              <div className="inputs">
                <div className="message">Message</div>
                <input className="h-[10vh]" type="text" />
              </div>
              <div className="button flex items-center justify-center py-10">
                <button className="btn">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
