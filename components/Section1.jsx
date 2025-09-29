import React from "react";
import walking from "../src/assets/walking.png";
import love from "../src/assets/love.png";
import care from "../src/assets/care.png";
import { ChevronRight } from "lucide-react";

const Section1 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-25 md:gap-10 bg-gray-100 pb-20 px-4 md:px-0">
      <div className="relative bg-white p-10 rounded-lg flex mt-[-50px] flex-col items-center space-y-4 max-w-sm shadow-lg transition duration-500 cursor-pointer group hover:bg-green-500 active:bg-green-500">
        <div className="absolute -top-12 w-24 h-24 bg-white rounded-full flex justify-center items-center shadow-lg">
          <img
            src={walking}
            alt="Dog Walking"
            className="w-16 h-16 object-contain"
          />
        </div>
        <div className="mt-16 flex flex-col items-center space-y-4">
          <h1 className="text-2xl font-extrabold text-black transition duration-500 group-hover:text-white group-active:text-white">
            Dog Walking
          </h1>
          <p className="text-center text-gray-600 transition duration-500 group-hover:text-white group-active:text-white">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right.
          </p>
        </div>
        <div className="absolute -bottom-8">
          <button
            className="w-12 h-12 rounded-full flex justify-center items-center shadow-lg transform transition duration-500 
                 bg-green-500 group-hover:bg-white group-active:bg-white group-hover:translate-x-2 group-active:translate-x-2"
          >
            <ChevronRight
              className="text-white transition duration-500 group-hover:text-green-500 group-active:text-green-500"
              size={24}
            />
          </button>
        </div>
      </div>
      <div>
        <div className="relative bg-white p-10 rounded-lg flex mt-[-50px] flex-col items-center space-y-4 max-w-sm shadow-lg transition duration-500 cursor-pointer group hover:bg-green-500 active:bg-green-500">
          <div className="absolute -top-12 w-24 h-24 bg-white rounded-full flex justify-center items-center shadow-lg">
            <img
              src={love}
              alt="Dog Walking"
              className="w-16 h-16 object-contain"
            />
          </div>
          <div className="mt-16 flex flex-col items-center space-y-4">
            <h1 className="text-2xl font-extrabold text-black transition duration-500 group-hover:text-white group-active:text-white">
              Dog Walking
            </h1>
            <p className="text-center text-gray-600 transition duration-500 group-hover:text-white group-active:text-white">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right.
            </p>
          </div>
          <div className="absolute -bottom-8">
            <button
              className="w-12 h-12 rounded-full flex justify-center items-center shadow-lg transform transition duration-500 
                 bg-green-500 group-hover:bg-white group-active:bg-white group-hover:translate-x-2 group-active:translate-x-2"
            >
              <ChevronRight
                className="text-white transition duration-500 group-hover:text-green-500 group-active:text-green-500"
                size={24}
              />
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="relative bg-white p-10 rounded-lg flex mt-[-50px] flex-col items-center space-y-4 max-w-sm shadow-lg transition duration-500 cursor-pointer group hover:bg-green-500 active:bg-green-500">
          <div className="absolute -top-12 w-24 h-24 bg-white rounded-full flex justify-center items-center shadow-lg">
            <img
              src={care}
              alt="Dog Walking"
              className="w-16 h-16 object-contain"
            />
          </div>
          <div className="mt-16 flex flex-col items-center space-y-4">
            <h1 className="text-2xl font-extrabold text-black transition duration-500 group-hover:text-white group-active:text-white">
              Dog Walking
            </h1>
            <p className="text-center text-gray-600 transition duration-500 group-hover:text-white group-active:text-white">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right.
            </p>
          </div>
          <div className="absolute -bottom-8">
            <button
              className="w-12 h-12 rounded-full flex justify-center items-center shadow-lg transform transition duration-500 
                 bg-green-500 group-hover:bg-white group-active:bg-white group-hover:translate-x-2 group-active:translate-x-2"
            >
              <ChevronRight
                className="text-white transition duration-500 group-hover:text-green-500 group-active:text-green-500"
                size={24}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section1;



