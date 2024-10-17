'use client'
import Link from "next/link"

 

const Navbar = () => {
  return (
    <>
        <nav className="navbar-container z-50">
            <div className="overlay w-full h-[70px] backdrop-blur-sm fixed"></div>
            <div className="w-full h-[70px] fixed border-b border-gray-300 justify-between flex items-center px-60">
                <div className="logo-container flex justify-between items-center gap-5">
                    <Link href='/'>Logo</Link>
                    <h2>BubbleTea</h2>
                </div>
                <div className="flex menu-container gap-5">
                    <Link href='/'>Home</Link>
                    <Link href='/'>About</Link>
                    <Link href='/'>Contacts</Link>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar