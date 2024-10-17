import AboutUs from "@/components/AboutUs"
import Carousel from "@/components/Carousel"
import Hero from "@/components/Hero"

const Home = () => {
  return (
    <>
      <Hero />
      <Carousel />
      <AboutUs />
      <div className="h-[100vh]"></div>
    </>
  )
}

export default Home