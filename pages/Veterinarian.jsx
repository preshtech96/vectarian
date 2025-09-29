import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import medic from "../src/assets/medic.png";
import dc1 from "../src/assets/dc1.jpg";
import dc2 from "../src/assets/dc2.jpg";
import dc3 from "../src/assets/dc3.jpg";
import dc4 from "../src/assets/dc4.jpg";
import dc5 from "../src/assets/dc5.jpg";
import dc6 from "../src/assets/dc6.jpg";
import dc7 from "../src/assets/dc7.jpg";
import constbg from "../src/assets/constbg.jpg";

const Veterinarian = () => {
  const vets = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Pet Surgery",
      description: "Experienced in advanced surgical care for pets.",
      image: medic,
    },
    {
      id: 2,
      name: "Dr. Michael Lee",
      specialty: "Dermatology",
      description: "Specialist in pet skin conditions and treatments.",
      image: dc1,
    },
    {
      id: 3,
      name: "Dr. Emily Brown",
      specialty: "Dentistry",
      description: "Focused on pet dental hygiene and oral health.",
      image: dc2,
    },
    {
      id: 4,
      name: "Dr. Daniel Smith",
      specialty: "Nutrition",
      description: "Helping pets maintain a balanced, healthy diet.",
      image: dc3,
    },
    {
      id: 5,
      name: "Dr. Olivia Wilson",
      specialty: "Cardiology",
      description: "Expert in diagnosing and treating heart diseases.",
      image: dc4,
    },
    {
      id: 6,
      name: "Dr. James Miller",
      specialty: "Radiology",
      description: "Advanced imaging techniques for better diagnosis.",
      image: dc5,
    },
    {
      id: 7,
      name: "Dr. Sophia Davis",
      specialty: "Oncology",
      description: "Providing compassionate cancer care for pets.",
      image: dc6,
    },
    {
      id: 8,
      name: "Dr. William Anderson",
      specialty: "Emergency Care",
      description: "Specialist in urgent and critical pet treatment.",
      image: dc7,
    },
  ];

  return (
    <div>
      <Nav />
      <div
        className="min-h-screen bg-fixed bg-center bg-cover pt-50"
        style={{ backgroundImage: `url(${constbg})` }}
      >
        <Link to="/" className="pl-10 hover:text-green-600 font-extrabold cursor-pointer">HOME</Link>
        <h1 className="text-3xl font-bold text-center mb-8 ">
          Our Veterinarians
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-gray-100 lg:grid-cols-4 gap-8 px-6">
          {vets.map((vet) => (
            <div
              key={vet.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:bg-gray-100 transition group"
            >
              <div className="overflow-hidden">
                <img
                  src={vet.image}
                  alt={vet.name}
                  className="w-full h-48 object-cover transform transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4 bg-white transition duration-500 group-hover:bg-green-600">
                <h1 className="text-black text-lg font-bold mb-1 transition duration-500 group-hover:text-white">
                  {vet.name}
                </h1>
                <h4 className="text-green-600 text-sm font-semibold mb-2 transition duration-500 group-hover:text-white">
                  {vet.specialty}
                </h4>
                <p className="text-gray-600 text-sm transition duration-500 group-hover:text-white">
                  {vet.description}
                </p>
              </div>
              <div>
                <button className="m-4 bg-green-600 cursor-pointer text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-green-700 hover:scale-105 transition duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="m-10 bg-green-600 cursor-pointer text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-green-700 hover:scale-105 transition duration-300">
            View More
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Veterinarian;
