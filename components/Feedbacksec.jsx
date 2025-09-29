import React from "react";
import fdbck from '../src/assets/fdbck.jpg'
import fdbck4 from '../src/assets/fdbck4.jpg'
import fdbck2 from '../src/assets/fdbck2.jpg'
import fdbck3 from '../src/assets/fdbck3.jpg'
import feed from '../src/assets/feed.jpg' 

const Feedbacksec = () => {
  const feedbacks = [
    {
      date: "Jan 12, 2025",
      boldImg: fdbck,
      name: "John Doe",
      occupation: "Pet Owner",
      text: "Far far away, behind the word mountains, far from the countries, Vokalia and Consonantia, there live the blind texts."
    },
    {
      date: "Feb 08, 2025",
      boldImg: fdbck4,
      name: "Jane Smith",
      occupation: "Veterinarian",
      text: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
    },
    {
      date: "Mar 22, 2025",
      boldImg: fdbck2,
      name: "Alex Johnson",
      occupation: "Dog Trainer",
      text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring."
    },
    {
      date: "Apr 05, 2025",
      boldImg: fdbck3,
      name: "Emily Davis",
      occupation: "Pet Groomer",
      text: "When she reached the first hills of the Italic Mountains, she had a lot of fun discovering new things."
    },
  ];

  return (
    <div
      className="py-16 px-4 md:px-10 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${feed})` }}
    >
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-20 text-black">
        What Our Clients Say
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {feedbacks.map((item, index) => (
          <div
            key={index}
            className="relative bg-white p-6 pt-12 rounded-xl shadow-xl flex flex-col items-start text-left transform transition hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="absolute -top-6 left-4 md:left-6 bg-green-500 text-white px-3 py-1 rounded-full shadow text-sm font-medium">
              {item.date}
            </div>
            <p className="text-gray-600 mt-6 mb-6">{item.text}</p>
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden mb-3 self-end">
              <img src={item.boldImg} alt="bold" className="w-full h-full object-cover" />
            </div>
            <h2 className="font-bold text-lg">{item.name}</h2>
            <p className="text-sm text-gray-500">{item.occupation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Feedbacksec;
