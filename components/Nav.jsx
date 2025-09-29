import { useState } from "react";
import { NavLink } from "react-router-dom"; 
import { Menu, X } from "lucide-react"; 
import logoph from "../src/assets/logoph.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const linkClasses = ({ isActive }) =>
    `hover:text-green-500 transition ${
      isActive ? "text-green-500" : "text-black"
    }`;
  const mobileLinkClasses = ({ isActive }) =>
    `w-full text-center py-2 rounded hover:text-green-500 hover:bg-gray-200 hover:scale-105 transition duration-300 ${
      isActive ? "text-green-500" : "text-black"
    }`;

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-8">
        <NavLink to="/">
          <div className="flex items-center space-x-3">
            <img className="w-10 h-10" src={logoph} alt="Logo" />
            <h1 className="text-2xl font-bold">Preshtech</h1>
          </div>
        </NavLink>
        <div className="hidden md:flex space-x-6 text-lg font-bold">
          <NavLink className={linkClasses} to="/">HOME</NavLink>
          <NavLink className={linkClasses} to="/about">ABOUT</NavLink>
          <NavLink className={linkClasses} to="/veterinarian">VETERINARIAN</NavLink>
          <NavLink className={linkClasses} to="/service">SERVICE</NavLink>
          <NavLink className={linkClasses} to="/gallery">GALLERY</NavLink>
          <NavLink className={linkClasses} to="/pricing">PRICING</NavLink>
          <NavLink className={linkClasses} to="/blog">BLOG</NavLink>
          <NavLink className={linkClasses} to="/contact">CONTACT</NavLink>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-2 pb-4 text-lg font-bold bg-gray-50 border-t">
          <NavLink onClick={() => setIsOpen(false)} className={mobileLinkClasses} to="/">HOME</NavLink>
          <NavLink onClick={() => setIsOpen(false)} className={mobileLinkClasses} to="/about">ABOUT</NavLink>
          <NavLink onClick={() => setIsOpen(false)} className={mobileLinkClasses} to="/veterinarian">VETERINARIAN</NavLink>
          <NavLink onClick={() => setIsOpen(false)} className={mobileLinkClasses} to="/service">SERVICE</NavLink>
          <NavLink onClick={() => setIsOpen(false)} className={mobileLinkClasses} to="/gallery">GALLERY</NavLink>
          <NavLink onClick={() => setIsOpen(false)} className={mobileLinkClasses} to="/pricing">PRICING</NavLink>
          <NavLink onClick={() => setIsOpen(false)} className={mobileLinkClasses} to="/blog">BLOG</NavLink>
          <NavLink onClick={() => setIsOpen(false)} className={mobileLinkClasses} to="/contact">CONTACT</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Nav;
