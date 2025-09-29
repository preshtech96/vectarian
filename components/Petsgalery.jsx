import React from 'react';
import cat1 from '../src/assets/cat1.jpg';
import cat2 from '../src/assets/cat2.jpg';
import cat3 from '../src/assets/cat3.jpg';
import cat4 from '../src/assets/cat4.jpg';
import dog1 from '../src/assets/dog1.jpg';
import dog2 from '../src/assets/dog2.jpg';
import dog3 from '../src/assets/dog3.jpg';
import dog4 from '../src/assets/dog4.jpg';

const Petsgalery = () => {
  const images = [cat1, cat2, cat3, cat4, dog1, dog2, dog3, dog4, cat3, cat4, dog1, dog2];
  return (
    <div className="py-16 px-4 md:px-10 bg-gray-100">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Pets Gallery
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={img}
              alt={`Pet ${index + 1}`}
              className="w-full h-48 object-cover transform hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Petsgalery;
