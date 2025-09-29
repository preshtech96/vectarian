import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import blogbg from '../src/assets/blogbg.jpg'
import Questionsection from '../components/Questionsection'
import Counter from '../components/Counter'
import Feedbacksec from '../components/Feedbacksec'
import Consult from '../components/Consult'

const About = () => {
  return (
    <div
  className="min-h-screen flex flex-col justify-between bg-fixed bg-cover bg-center"
  style={{ backgroundImage: `url(${blogbg})` }}
>
      <Nav />
      <div className="flex gap-4 items-end pl-10 ">
        <Link
          to="/"
          className="hover:text-green-500 cursor-pointer font-extrabold text-lg"
        >
          HOME
        </Link>
      </div>
      <div className=" flex flex-col items-center gap-6">
        <div className='flex flex-col'>
        < Questionsection/>
        < Counter />
        <Feedbacksec />
        < Consult />
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default About
