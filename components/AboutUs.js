'use client'

import { Suspense, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AboutGrid from './AboutGrid'
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

export default function AboutUs() {
  const sectionRef = useRef(null)
  const quoteRef = useRef(null)
  const leftQuoteRef = useRef(null)
  const rightQuoteRef = useRef(null)

  const textRef = useRef(null)


  useEffect(() => {
    const section = sectionRef.current
    const quote = quoteRef.current
    const leftQuote = leftQuoteRef.current
    const rightQuote = rightQuoteRef.current


    if (section && quote && leftQuote && rightQuote) {
      gsap.fromTo(section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      gsap.fromTo(quote,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.5,
          scrollTrigger: {
            trigger: quote,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      gsap.fromTo(leftQuote,
        { opacity: 0, x: -50, scale: 0, },
        {
            scale: 1.5,
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.2,
          scrollTrigger: {
            trigger: leftQuote,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      gsap.fromTo(rightQuote,
        { opacity: 0, x: 50, scale: 0, },
        {
            scale: 1.5,
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.2,
          scrollTrigger: {
            trigger: rightQuote,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    // for animating the text
    const splitText = new SplitType(textRef.current, { types: 'words' })

    gsap.fromTo(splitText.words,
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.45,
          stagger: 0.2, 
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top bottom',
            end: 'bottom top',
        
            toggleActions: 'play none none reverse',
          }
        }
    )

  }, [])

  return (
    <>
        <section ref={sectionRef} className="py-20 bg-gradient-to-r from-orange-100 to-purple-200 mt-[100px]">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-purple-800 mb-12">About Us</h2>
            <div className="relative max-w-4xl mx-auto">
            <div 
                ref={leftQuoteRef}
                className="absolute -top-12 -left-5 md:-top-11 md:-left-10 text-6xl px-5 md:text-9xl font-serif text-pink-300 opacity-50"
                style={{ transform: 'scale(1)' }}
            >
                &ldquo;
            </div>
            <div 
                ref={rightQuoteRef}
                className="absolute -bottom-20 -right-5 md:-bottom-24 md:-right-16 text-6xl px-2 md:text-9xl font-serif text-pink-300 opacity-50"
                style={{ transform: 'scale(1)' }}
            >
                &rdquo;
            </div>
            <div 
                ref={quoteRef}
                className="text-xl md:text-2xl text-center text-purple-700 italic leading-relaxed"
            >
                At <span className='font-semibold'>WOW!BOBA</span>, we believe every sip should spark joy. With refreshing blends and a passion for quality, we bring people together to savor life's sweet moments.
            </div>
            </div>
        </div>
        </section>
        <div className='aboutus-grid-container w-full flex justify-center items-center'>
            <AboutGrid />
        </div>
        <div className='w-full h-screen flex flex-col gap-64 md:gap-32 lg:flex-row justify-around items-center lg:px-10'>
            <div className='flex justify-center items-center px-5'>
                <h1 ref={textRef} className='text-5xl lg:text-7xl'>Experience the art of <span className='text-orange-700'>flavor</span>,<br /> crafted with care, enjoyed with <span className='text-orange-700'>delight</span></h1>
            </div>
            <div className='w-full flex justify-center items-center'>
                {/* <h2 className='text-7xl'>3d Model goes here</h2> */}
                <div className='model-container absolute w-full h-screen'>
                    <Canvas>
                        <Suspense fallback={null}>
                            <OrbitControls enableDamping enableZoom={false} />
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[5, 2, 1]} />
                            <Sphere args={[1, 100, 100]} scale={2.5} >
                                <MeshDistortMaterial
                                    color='orange'
                                    attach='material'
                                    distort={0.4}
                                    speed={2}
                                 />
                            </Sphere>
                        </Suspense>
                    </Canvas>
                </div>
                <div className='image-container lg:mt-0 mt-[100px] z-10 flex justify-center items-center w-full absolute left-1/2 lg:left-3/4 transform -translate-x-1/2 -translate-y-10'>
                    <img src='/images/no-bgboba.png'
                        className='object-cover w-[300px] h-[500px] -rotate-12'
                    />
                </div>
            </div>

        </div>
    </>
  )
}