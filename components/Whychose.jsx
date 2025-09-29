import React from "react";
import puppi from "../src/assets/puppi.jpg";
import stetoscope from "../src/assets/stetoscope.png";
import help from "../src/assets/help.png";
import emergency from "../src/assets/emergency.png";
import support from "../src/assets/support.png";

const features = [
  { title: "24/7 Care Advices", desc: "Far far away, behind the word mountains, far from the countries.", icon: stetoscope },
  { title: "24/7 Customer Supports", desc: "Far far away, behind the word mountains, far from the countries.", icon: help },
  { title: "24/7 Emergency Services", desc: "Far far away, behind the word mountains, far from the countries.", icon: emergency },
  { title: "24/7 Veterinary Help", desc: "Far far away, behind the word mountains, far from the countries.", icon: support },
];

const Whychose = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-screen w-full justify-center items-center gap-6 md:gap-16 p-4 md:p-6">
      <div className="flex flex-col justify-center items-center md:items-start w-full md:w-3/5 space-y-6 md:space-y-8 px-2 sm:px-4 md:px-10 lg:px-20">
        <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold text-center md:text-left">
          WHY CHOOSE US?
        </h1>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 w-full">
          {features.map((item, index) => (
            <div key={index} className="flex items-start gap-3 sm:gap-4 w-full sm:w-[48%]">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full flex justify-center items-center flex-shrink-0">
                <img src={item.icon} alt={item.title} className="w-8 h-8 sm:w-12 sm:h-12" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-extrabold">{item.title}</h1>
                <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center w-full md:w-2/5 mt-6 md:mt-0">
        <img
          className="w-[70%] sm:w-[60%] md:w-full h-auto object-contain"
          src={puppi}
          alt="puppi"
        />
      </div>
    </div>
  );
};
export default Whychose;
