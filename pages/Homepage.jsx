import React from 'react'
import Nav from '../components/Nav'
import bg1 from '../src/assets/bg1.jpg'
import Section1 from '../components/Section1'
import Whychose from '../components/Whychose'
import Counter from '../components/Counter'
import Questionsection from '../components/Questionsection'
import Feedbacksec from '../components/Feedbacksec'
import Packages from '../components/Packages'
import Petsgalery from '../components/Petsgalery'
import Blognews from '../components/Blognews'
import Consult from '../components/Consult'
import Footer from '../components/Footer'


const Homepage = () => {
  return (
    <div>
        <Nav />
        <div
  className="h-screen flex flex-col justify-center items-center text-white text-4xl font-bold bg-cover bg-center relative"
  style={{ backgroundImage:`linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url(${bg1})` }}
>
  <div className="absolute inset-0 "></div>
  <div className="relative z-10 flex flex-col items-center space-y-6">
    <h1 className="text-center text-5xl md:text-6xl lg:text-7xl font-bold">
  HIGH QUALITY CARE FOR PETS <br /> YOU'LL LOVE
</h1>
    <button className="px-6 py-3 bg-green-500 text-white text-lg rounded-lg border border-transparent 
  transition-all duration-[300ms] ease-in-out 
  hover:bg-transparent hover:text-green-500 hover:border-green-500 cursor-pointer">
  LEARN MORE
</button>
  </div>
</div>
< Section1 />
< Whychose />
< Counter />
< Questionsection />
< Feedbacksec />
< Packages />
< Petsgalery />
< Blognews />
< Consult />
< Footer />
    </div>
  )
}
export default Homepage
