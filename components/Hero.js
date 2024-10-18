'use client'

import gsap from "gsap"
import Image from "next/image"
import { useEffect } from "react"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    gsap.fromTo('.hero-heading', 
      { x: -200, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 1.5, ease: "power3.out" } // Animate to original position
    );

    gsap.fromTo(
      ".hero-image img",
      { x: 200, opacity: 0, scale: 0.8 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hero-image",
          start: "top 80%", // When the top of the image hits 80% of the viewport height
          toggleActions: "play none none none", // Play animation once
        }
      })
  }, []);
  return (
    <>
    {/* to have gap between nabar and the hero section mt is given */}
    <div className="Hero-section w-full mt-[100px] flex flex-col lg:flex-row gap-10 items-center justify-between px-0 lg:px-10 mb-[80px] md:mb-[120px] lg:mb-[250px]">
      <div className="hero-heading flex flex-col gap-10 justify-center items-start px-10">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-semibold">Savor the Perfect Blend of
           <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-pink-600"> Flavor!</span>
        </h1>
        <h2 className="text-2xl">Happiness in every sip, crafted just for you!</h2>
        <button className='bg-gradient-to-r font-semibold from-orange-200 to-orange-400 px-8 py-4 text-xl rounded-2xl'>Order Now</button>

      </div>
      <div className="hero-image w-full lg:w-1/2 h-[500px] flex justify-center items-center lg:mt-[80px] px-10">
        <img src='/images/bubbleTea2.png' alt="image"
        className="rounded-3xl object-contain h-[800px] w-3/4 sm:w-1/2 lg:w-full"
         />
      </div>
        
    </div>
    </>
  )
}

export default Hero