'use client'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useEffect } from "react"
import SplitType from "split-type"
import BubbleTeaCarousel from "./BubbleTeaCarousel"

gsap.registerPlugin(ScrollTrigger)

const Icon = ({name}) => (
    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d={
        name === 'home' ? 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z' :
        name === 'bubble-tea' ? 'M7 3C4.79 3 3 4.79 3 7v10c0 2.21 1.79 4 4 4h10c2.21 0 4-1.79 4-4V7c0-2.21-1.79-4-4-4H7zm0 2h10c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2zm5 2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z' :
        name === 'store' ? 'M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z' :
        name === 'recipes' ? 'M15 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V9l-6-6zM8 17c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 1V4.5l5.5 5.5H14z' :
        name === 'vip' ? 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z' :
        name === 'gallery' ? 'M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z' :
        'M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z'
      } />
    </svg>
  )

const Carousel = () => {

    
    useEffect(()=> {
        const splitInstance = new SplitType('.animated-text', { types: 'chars' });

        gsap.fromTo(
            splitInstance.chars,
            { y: 100, opacity: 0 }, 
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "back.out(1.7)",
              stagger: 0.1, 
              scrollTrigger: {
                trigger: ".animated-text",
                start: "top 80%", 
                toggleActions: "play none none reverse", 
              }
            }
          );

    }, [])

  return (
    <>
        <div className="w-full flex flex-col">
            <div className="w-full flex flex-col justify-center items-center gap-10">
                <div className="w-full h-[100px] bg-gradient-to-r from-orange-200/50 to-orange-300 flex justify-center items-center">
                    <h1 className='animated-text text-4xl lg:text-5xl p-4 rounded-lg bg-white/75 shadow-black/30 shadow-sm font-semibold'>WOW! <span className='text-red-500 font-extrabold'> BOBA</span></h1>
                </div>
                <div className="icon-container flex justify-center items-center gap-10 lg:gap-20 w-full flex-wrap px-10">
                    {['home', 'bubble-tea', 'store', 'recipes', 'vip', 'gallery', 'franchise'].map((item) => (
                        <li key={item} className="text-center list-none">
                                <a href="#" className="flex flex-col items-center text-pink-600 hover:text-pink-800 transition-colors duration-300">
                                <div className="rounded-full p-5 bg-white flex justify-center items-center">
                                    <Icon name={item} />
                                </div>
                                <span className="mt-1 text-xs md:text-sm capitalize">{item.replace('-', ' ')}</span>
                                </a>
                            </li>
                    ))}
                </div>
            </div>
            <div className="carousel-container w-full px-2 lg:px-10 mt-16 flex justify-center items-center">
                <div className='w-full h-96flex justify-center items-center'>
                    {/* BubbleTea Carousel component goes here */}
                    <BubbleTeaCarousel />
                </div>
            </div>
        </div>
    </>
  )
}

export default Carousel