'use client'

import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
// import { Button } from "@/components/ui/button"
import { X, Menu } from 'lucide-react'
import Link from "next/link"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)
  const menuItemsRef = useRef([])

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    if (isOpen) {
      // Open animation
      gsap.to(menuRef.current, {
        x: '0%',
        duration: 0.5,
        ease: 'power3.out'
      })
      
      // Animate menu items
      gsap.fromTo(menuItemsRef.current,
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.5, 
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.2
        }
      )
    } else {
      // Close animation
      gsap.to(menuRef.current, {
        x: '100%',
        duration: 0.5,
        ease: 'power3.in'
      })
    }
  }, [isOpen])

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/' },
    { name: 'Services', href: '/' },
    { name: 'Contact', href: '/' }
  ]

  return (
    <>
        <nav className="navbar-container z-50">
            <div className="overlay w-full h-[70px] backdrop-blur-sm fixed"></div>
            <div className="w-full h-[70px] fixed border-b border-gray-300 justify-between flex items-center px-10 lg:px-40">
                <div className="logo-container flex justify-between items-center gap-5">
                    <Link href='/'>Logo</Link>
                    <Link href='/'><h2>BubbleTea</h2></Link>
                </div>


                {/* for larger devices full navmenubar*/}
                <div className="lg:flex hidden menu-container gap-5">
                    <Link href='/'>Home</Link>
                    <Link href='/'>About</Link>
                    <Link href='/'>Services</Link>
                    <Link href='/'>Contacts</Link>
                </div>

                {/* for smaller devices like mobile phones menu button will be shown */}
                <div className='hamburger-menu lg:hidden block'>
                    <button onClick={toggleMenu}>
                        <Menu className="h-6 w-6" />
                    </button>

                    <div 
                        ref={menuRef}
                        className="fixed inset-0 bg-primary bg-gradient-to-r from-white to-orange-200 z-50 flex flex-col justify-center items-center transform translate-x-full"
                    >
                        <button
                        onClick={toggleMenu}
                        className="absolute top-4 right-4 text-primary-foreground"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        <nav className="flex flex-col items-center space-y-6">
                        {menuItems.map((item, index) => (
                            <div
                            key={item.name}
                            ref={el => menuItemsRef.current[index] = el}
                            >
                            <Link
                                href={item.href}
                                className="text-3xl font-thin text-primary-foreground hover:text-secondary transition-colors"
                                onClick={toggleMenu}
                            >
                                {item.name}
                            </Link>
                            </div>
                        ))}
                        </nav>
                    </div>
                </div>

            </div>
        </nav>
    </>
  )
}

export default Navbar