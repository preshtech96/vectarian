import React from "react";
import ultimate from "../src/assets/ultimate.jpg";
import personal from "../src/assets/personal.jpg";
import business from "../src/assets/business.jpg";
import imageq from "../src/assets/imageq.png"; 
import { Check } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      img: personal,
      title: "Personal",
      price: "$52/month",
      features: [
        "5 Dog Walk",
        "3 Vet Visit",
        "3 Pet Spa",
        "24/7 Service",
      ],
    },
    {
      img: business,
      title: "Business",
      price: "$120/month",
      features: [
         "5 Dog Walk",
        "3 Vet Visit",
        "3 Pet Spa",
        "24/7 Service",
      ],
    },
    {
      img: ultimate,
      title: "Ultimate",
      price: "$200/month",
      features: [
         "5 Dog Walk",
        "3 Vet Visit",
        "3 Pet Spa",
        "24/7 Service",
      ],
    },
    {
      img: imageq,
      title: "Premium",
      price: "$300/month",
      features: [
         "5 Dog Walk",
        "3 Vet Visit",
        "3 Pet Spa",
        "24/7 Service",
      ],
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-4 md:px-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Affordable Packages
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg flex flex-col overflow-hidden hover:shadow-2xl transition"
            style={{ width: "300px", minHeight: "450px" }}
          >
            <img
              src={pkg.img}
              alt={pkg.title}
              className="w-full object-cover"
              style={{ height: "50%" }}
            />
            <div className="flex flex-col items-center text-center p-4 flex-1">
              <h2 className="text-xl md:text-2xl font-bold mt-2">{pkg.title}</h2>
              <h3 className="text-green-500 text-lg md:text-xl font-semibold mb-4">
                {pkg.price}
              </h3>
              <div className="flex flex-col gap-4 mt-2 mb-4">
                {pkg.features.map((feature, idx) => (
                  <p key={idx} className="flex items-center text-gray-600">
                    <Check className="text-green-500 mr-2" size={18} /> {feature}
                  </p>
                ))}
              </div>
              <button className="bg-green-500 hover:bg-green-600 cursor-pointer text-white font-semibold py-2 px-6 rounded-full transition mt-auto">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Packages;
