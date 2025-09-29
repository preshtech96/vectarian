import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-12 px-4 md:px-16">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">Petsitting</h1>
          <p className="text-gray-300 mb-4">
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </p>
          <div>
            <h2 className="font-semibold mb-2">Follow Us</h2>
            <div className="flex gap-4">
              <a href="#" className="hover:text-green-500 transition flex items-center gap-1">
                <Facebook size={20} /> Facebook
              </a>
              <a href="#" className="hover:text-green-500 transition flex items-center gap-1">
                <Twitter size={20} /> Twitter
              </a>
              <a href="#" className="hover:text-green-500 transition flex items-center gap-1">
                <Instagram size={20} /> Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">Quick Links</h1>
          <div className="flex flex-col gap-2">
            <Link to="/" className="hover:text-green-500 transition">Home</Link>
            <Link to="/About" className="hover:text-green-500 transition">About</Link>
            <Link to="/Service" className="hover:text-green-500 transition">Services</Link>
            <Link to="/Blog" className="hover:text-green-500 transition">Blog</Link>
            <Link to="/Contact" className="hover:text-green-500 transition">Contact</Link>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">Have a Questions?</h1>
          <div className="flex flex-col gap-2 text-gray-300">
            <span className="flex items-center gap-2">
              <MapPin size={18} /> 198 West 21th Street, Suite 721, New York NY 10016
            </span>
            <span className="flex items-center gap-2">
              <Phone size={18} /> +1235 2355 98
            </span>
            <span className="flex items-center gap-2">
              <Mail size={18} /> 5Gt2d@example.com
            </span>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-8 text-sm">
        &copy; 2025 PreshTech. All rights reserved.
      </div>
    </div>
  );
};
export default Footer;
