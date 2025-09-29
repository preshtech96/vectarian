import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import imageq from "../src/assets/imageq.png";
import bbg from "../src/assets/bbg.jpg";
import Footer from "../components/Footer";


import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <Nav />
      <div
        className="flex flex-col min-h-screen w-full bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${bbg})` }}
      >
        <div className="bg-opacity-70 flex flex-col sm:flex-row sm:items-end sm:justify-start pl-5 sm:pl-10 gap-2 sm:gap-5 pt-10 sm:pt-20 pb-6">
          <Link
            className="hover:text-green-500 font-extrabold text-base sm:text-lg"
            to="/"
          >
            HOME
          </Link>
          <h4 className="text-lg sm:text-xl font-bold text-gray-100">
            Contact
          </h4>
        </div>
        <div className="bg-white bg-opacity-80 p-4 sm:p-8 flex flex-col gap-8 sm:gap-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-center">
            Get In Touch
          </h1>
          <div className="bg-gray-100 rounded-lg p-4 sm:p-6 shadow flex flex-col sm:flex-row sm:flex-wrap gap-6 sm:gap-10 justify-center">
            <div className="flex flex-col items-start gap-2 w-full sm:w-60">
              <div className="bg-green-600 text-white p-2 sm:p-3 rounded-full">
                <FaMapMarkerAlt size={20} />
              </div>
              <h1 className="text-sm sm:text-base">
                <strong>Address:</strong> 198 West 21th Street, Suite 721 New
                York NY 10016
              </h1>
            </div>
            <div className="flex flex-col items-start gap-2 w-full sm:w-60">
              <div className="bg-green-600 text-white p-2 sm:p-3 rounded-full">
                <FaPhoneAlt size={20} />
              </div>
              <h1 className="text-sm sm:text-base">
                <strong>Phone:</strong> + 1235 2355 98
              </h1>
            </div>
            <div className="flex flex-col items-start gap-2 w-full sm:w-60">
              <div className="bg-green-600 text-white p-2 sm:p-3 rounded-full">
                <FaEnvelope size={20} />
              </div>
              <h1 className="text-sm sm:text-base">
                <strong>Email:</strong> info@yoursite.com
              </h1>
            </div>
            <div className="flex flex-col items-start gap-2 w-full sm:w-60">
              <div className="bg-green-600 text-white p-2 sm:p-3 rounded-full">
                <FaGlobe size={20} />
              </div>
              <h1 className="text-sm sm:text-base">
                <strong>Website:</strong> yoursite.com
              </h1>
            </div>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h1 className="text-lg sm:text-xl font-bold mb-4">CONTACT US.</h1>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="border p-2 rounded flex-1"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="border p-2 rounded flex-1"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Email"
                    className="border p-2 rounded flex-1"
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    className="border p-2 rounded flex-1"
                  />
                </div>
                <textarea
                  placeholder="Message"
                  className="border p-2 rounded"
                  rows={5}
                ></textarea>
                <button className="bg-green-600 text-white py-3 rounded hover:bg-green-700 transition">
                  Send Message
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img
                src={imageq}
                alt="Contact Illustration"
                className="rounded-lg shadow-lg max-h-[300px] sm:max-h-[400px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
