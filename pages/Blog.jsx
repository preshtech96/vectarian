import React from 'react'
import { Link } from 'react-router-dom'
import Blognews from '../components/Blognews'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import blogbg from '../src/assets/blogbg.jpg'

const Blog = () => {
  return (
    <div
  className="min-h-screen flex flex-col justify-between bg-fixed bg-cover bg-center"
  style={{ backgroundImage: `url(${blogbg})` }}
>
      <Nav />
      <div className="flex gap-4 items-end pl-10 pt-50">
        <Link
          to="/"
          className="hover:text-green-500 cursor-pointer font-extrabold text-lg"
        >
          HOME
        </Link>
        <h4 className="text-xl font-bold ">Blog</h4>
      </div>
      <div className="p-6 flex flex-col items-center gap-6">
        <Blognews />
        <button className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-green-700 hover:scale-105 transition duration-300">
          View More
        </button>
      </div>
      <Footer />
    </div>
  )
}
export default Blog
