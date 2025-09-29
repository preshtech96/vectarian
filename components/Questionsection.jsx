import React, { useState } from "react";
import medic from "../src/assets/medic.png";
import { Plus, Minus } from "lucide-react";

const Questionsection = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-6 md:gap-10 p-4 md:p-10">
      <div className="w-full md:w-3/5 flex flex-col gap-4">
        <div>
          <h1 className="text-2xl font-extrabold mb-10 text-center">Frequently Asked Questions</h1>
          <p className="text-gray-600">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
            there live the blind texts.
          </p>
        </div>
        <div
          onClick={() => setOpen1(!open1)}
          className={`border rounded-lg p-4 cursor-pointer shadow transition duration-300 ${
            open1 ? "bg-green-500 text-white" : "bg-white hover:bg-green-50"
          }`}
        >
          <div className="flex justify-between items-center">
            <h2 className="font-extrabold text-lg">How To Train Your Pet Dog?</h2>
            {open1 ? <Minus size={30} /> : <Plus className="text-green-500" size={30} />}
          </div>
          {open1 && (
            <div className="mt-2 p-2 font-medium">
              <ul>
                <li>1. Far far away, behind the word mountains</li>
                <li>2. Consonantia, there live the blind texts</li>
                <li>3. When she reached the first hills of the Italic Mountains</li>
                <li>4. Bookmarksgrove, the headline of Alphabet Village</li>
                <li>5. Separated they live in Bookmarksgrove right</li>
              </ul>
            </div>
          )}
        </div>
        <div
          onClick={() => setOpen2(!open2)}
          className={`border rounded-lg p-4 cursor-pointer shadow transition duration-300 ${
            open2 ? "bg-green-500 text-white" : "bg-white hover:bg-green-50"
          }`}
        >
          <div className="flex justify-between items-center">
            <h2 className="font-extrabold text-lg">How To Manage Your Pets?</h2>
            {open2 ? <Minus size={30} /> : <Plus className="text-green-500" size={30} />}
          </div>
          {open2 && (
            <div className="mt-2 p-2 font-medium">
              <ul>
                <li>1. Far far away, behind the word mountains</li>
                <li>2. Consonantia, there live the blind texts</li>
                <li>3. When she reached the first hills of the Italic Mountains</li>
                <li>4. Bookmarksgrove, the headline of Alphabet Village</li>
                <li>5. Separated they live in Bookmarksgrove right</li>
              </ul>
            </div>
          )}
        </div>
        <div
          onClick={() => setOpen3(!open3)}
          className={`border rounded-lg p-4 cursor-pointer shadow transition duration-300 ${
            open3 ? "bg-green-500 text-white" : "bg-white hover:bg-green-50"
          }`}
        >
          <div className="flex justify-between items-center">
            <h2 className="font-extrabold text-lg">What Is Best Grooming For Your Pets?</h2>
            {open3 ? <Minus size={30} /> : <Plus className="text-green-500" size={30} />}
          </div>
          {open3 && (
            <div className="mt-2 p-2 font-medium">
              <ul>
                <li>1. Far far away, behind the word mountains</li>
                <li>2. Consonantia, there live the blind texts</li>
                <li>3. When she reached the first hills of the Italic Mountains</li>
                <li>4. Bookmarksgrove, the headline of Alphabet Village</li>
                <li>5. Separated they live in Bookmarksgrove right</li>
              </ul>
            </div>
          )}
        </div>
        <div
          onClick={() => setOpen4(!open4)}
          className={`border rounded-lg p-4 cursor-pointer shadow transition duration-300 ${
            open4 ? "bg-green-500 text-white" : "bg-white hover:bg-green-50"
          }`}
        >
          <div className="flex justify-between items-center">
            <h2 className="font-extrabold text-lg">What Are The Requirements For Sitting Pets?</h2>
            {open4 ? <Minus size={30} /> : <Plus className="text-green-500" size={30} />}
          </div>
          {open4 && (
            <div className="mt-2 p-2 font-medium">
              <ul>
                <li>1. Far far away, behind the word mountains</li>
                <li>2. Consonantia, there live the blind texts</li>
                <li>3. When she reached the first hills of the Italic Mountains</li>
                <li>4. Bookmarksgrove, the headline of Alphabet Village</li>
                <li>5. Separated they live in Bookmarksgrove right</li>
              </ul>
            </div>
          )}
        </div>
        <div
          onClick={() => setOpen5(!open5)}
          className={`border rounded-lg p-4 cursor-pointer shadow transition duration-300 ${
            open5 ? "bg-green-500 text-white" : "bg-white hover:bg-green-50"
          }`}
        >
          <div className="flex justify-between items-center">
            <h2 className="font-extrabold text-lg">What Are The Advantages And Disadvantages?</h2>
            {open5 ? <Minus size={30} /> : <Plus className="text-green-500" size={30} />}
          </div>
          {open5 && (
            <div className="mt-2 p-2 font-medium">
              <ul>
                <li>1. Far far away, behind the word mountains</li>
                <li>2. Consonantia, there live the blind texts</li>
                <li>3. When she reached the first hills of the Italic Mountains</li>
                <li>4. Bookmarksgrove, the headline of Alphabet Village</li>
                <li>5. Separated they live in Bookmarksgrove right</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="w-full md:w-2/5 flex justify-center items-start">
        <img className="w-full h-auto object-contain rounded-lg" src={medic} alt="medic" />
      </div>
    </div>
  );
};
export default Questionsection;
