'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AboutGrid() {
  const sectionRef = useRef(null)
  const gridItemRefs = useRef([])

  useEffect(() => {
    gridItemRefs.current.forEach((item, index) => {
      gsap.fromTo(item,
        {
          opacity: 0,
          y: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-20 w-full">
      <div className="container mx-auto px-4">
        {/* First Row: About Us Info (with icons) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* First Column: About Us with icons */}
          <div className="flex flex-col items-center text-center p-4">
            <svg className="w-12 h-12 text-purple-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-2.76 0-5-2.24-5-5m0 0C7 2.35 10 0 12 0s5 2.35 5 3m-5 5v14m0 0l5-5m-5 5l-5-5" />
            </svg>
            <h3 className="text-2xl font-semibold text-purple-800 mb-2">Our Story</h3>
            <p className="text-gray-700">
              At <span className="font-bold">WOW!BOBA</span>, we blend passion, tradition, and imagination to craft tea experiences that spark joy and bring people together.
            </p>
          </div>

          {/* Second Column of the first row */}
          <div className="flex flex-col items-center text-center p-4">
            <svg className="w-12 h-12 text-purple-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16s1-2 5-2 5 2 5 2M3 12s1-2 5-2 5 2 5 2m5 6v-5a1 1 0 00-1-1h-2a1 1 0 00-1 1v5a1 1 0 001 1h2a1 1 0 001-1z" />
            </svg>
            <h3 className="text-2xl font-semibold text-purple-800 mb-2">Our Process</h3>
            <p className="text-gray-700">
              We source the finest ingredients to ensure every cup offers an unforgettable burst of flavor and refreshment.
            </p>
          </div>

          {/* Third Column of the first row */}
          <div className="flex flex-col items-center text-center p-4">
            <svg className="w-12 h-12 text-purple-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            <h3 className="text-2xl font-semibold text-purple-800 mb-2">Our Values</h3>
            <p className="text-gray-700">
              WOW!BOBA believes in building community through quality, innovation, and a shared love for delicious tea.
            </p>
          </div>
        </div>

        {/* Second Row: Image Grid with random texts and sample images*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 lg:px-10"> 
          {[
            {
              image: '/images/image4.png',
              text: 'Crafted with passion and precision, each sip of our tea is a journey into a world of flavor.',
            },
            {
              image: '/images/image.png',
              text: 'At WOW!BOBA, quality isn’t just a goal, it’s our tradition.',
            },
            {
              image: '/images/image3.png',
              text: 'Our story begins with the perfect blend of authentic ingredients and bold imagination.',
            },
            {
              image: '/images/image2.png',
              text: 'Discover a whole new way to enjoy boba tea with every visit.',
            },
          ].map((item, index) => (
            <div
              key={index}
              ref={el => gridItemRefs.current[index] = el}
              className="relative group overflow-hidden rounded-3xl shadow-lg bg-white"
            >
              {/* Image */}
              <img
                src={item.image}
                alt="Bento Item"
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
              />
              
              {/* Text overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

              {/* display this text after hovering */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <p className="text-white text-lg md:text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
