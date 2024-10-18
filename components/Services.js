'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiCoffee, FiSmile, FiShoppingCart } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const serviceRefs = useRef([])

  useEffect(() => {
    serviceRefs.current.forEach((item, index) => {
      gsap.fromTo(item,
        {
          opacity: 0,
          y: 50,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.1, // Stagger the animations slightly based on their index
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

  const services = [
    {
      title: 'Premium Ingredients',
      description: 'We use only the best ingredients to craft a unique, flavor-packed experience.',
      icon: <FiCoffee size={40} className="text-orange-700" />,
    },
    {
      title: 'Customer Satisfaction',
      description: 'Our customers come first, and we go the extra mile to ensure a delightful experience.',
      icon: <FiSmile size={40} className="text-orange-700" />,
    },
    {
      title: 'Fast Delivery',
      description: 'Get your favorite flavors delivered straight to your door, in no time!',
      icon: <FiShoppingCart size={40} className="text-orange-700" />,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-100 w-full mt-[300px] lg:mt-[100px]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-purple-800 mb-12">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => serviceRefs.current[index] = el}
              className="bg-white shadow-lg rounded-lg p-6 group hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex justify-center items-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-purple-800 group-hover:text-orange-700 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-center text-gray-600 mb-6">
                {service.description}
              </p>
              <div className="flex justify-center">
                <a href="#" className="text-orange-700 font-semibold underline group-hover:no-underline transition-all duration-300">
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
