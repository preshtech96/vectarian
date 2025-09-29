import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import price from "../src/assets/price.jpg";
import Petsgalery from "../components/Petsgalery";

const Pricing = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-between bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${price})` }}
    >
      <Nav />
      <div className="flex gap-4 pb-5 items-end pl-10 pt-80">
        <Link
          to="/"
          className="hover:text-green-500 text-white cursor-pointer font-extrabold text-lg"
        >
          HOME
        </Link>
        <h4 className="text-xl font-bold text-white">Gallry</h4>
      </div>
      <div className="flex flex-col items-center gap-6">
        <Petsgalery />
        <button className="bg-green-600 text-white cursor-pointer font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-green-700 hover:scale-105 transition duration-300">
          View More
        </button>
      </div>
      <Footer />
    </div>
  );
};
export default Pricing;
