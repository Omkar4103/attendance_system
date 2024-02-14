import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";


const Contact = () => {

  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3", "#title-4"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3", "#title-4"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative" ref={comp}>
        <div
          id="intro-slider"
          className="h-screen p-10 bg-l_orange absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight">
          {/* style={{ height: '61vh' }} */}

          <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-9xl transform scale-200" id="title-1">
              Reach
            </h1>
            <h1 className="text-9xl transform scale-200" id="title-2">
              out
            </h1>
            <h1 className="text-9xl transform scale-200" id="title-3">
              to
            </h1>
            <h1 className="text-9xl transform scale-200" id="title-4">
              us.
            </h1>
          </div>
        </div>

        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
          <div className="hero-overlay bg-opacity-60"></div>

          <div className="flex justify-center w-full ">
        <div className=" card glass shrink-0 w-full max-w-xl shadow-2xl bg-black  mb-10">
      <form className="card-body ">
        <div className="form-control ">
        <input type="text" placeholder="Your Name" className="max-w-xl bg-white  text-black input textarea textarea-xs w-full " required />  
        </div>
        <div className="form-control mt-5">
          <input type="email" placeholder="Email" className="max-w-xl bg-white text-black input textarea textarea-xs w-full " required />
          <label className="label mt-5 ">
          <textarea placeholder="Message" className="max-w-xl bg-white text-black textarea border-black textarea-lg w-full "  ></textarea>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-l_orange text-black transition-all duration-300 hover:text-white hover:border-d_orange">Send</button>
        </div>
      </form>
    </div>

  <div className="divider divider-horizontal ml-10 mr-10"></div>
  
 
  <div className=" hero-content flex-col lg:flex-row-reverse ">
    <div className="text-white lg:text-left ml-8 mb-60">
      <h1 className="text-5xl font-bold ">Contact Us!</h1>
      <p className="py-6 text-md font-bold">Feel free to contact us any time.<br/> We will get back to you as soon as we can.</p>
    </div> 
  </div>

</div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
