import React, { useState } from 'react';
import constbg from '../src/assets/constbg.jpg';

const Consult = () => {
  const [service, setService] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    console.log({ service, name, location, date, time, email, phone, message });
    alert('Message sent!');
  };

  return (
    <div
      className="flex flex-col md:flex-row justify-end items-start bg-cover bg-center bg-fixed min-h-screen p-4 md:p-16 gap-6"
      style={{ backgroundImage: `url(${constbg})` }}
    >
      <div className="w-full md:w-1/2 p-6 md:p-8 rounded-xl flex flex-col justify-center items-start bg-gradient-to-r from-blue-200 to-green-400 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">
          Free Consultation
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
          Schedule a free consultation with our experts. Fill in your details and we will get back to you as soon as possible.
        </p>
      </div>
      <div className="w-full md:w-1/2 p-6 md:p-8 rounded-xl flex flex-col gap-4 bg-white shadow-lg">
        <div className="flex flex-col">
          <label className="text-sm md:text-base mb-1">Service:</label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="border rounded p-2 w-full bg-white cursor-pointer text-sm md:text-base"
          >
            <option className='text-green-500 font-extrabold' value="">Select Service</option>
            <option className='text-green-500 font-extrabold' value="Dog Walking">Dog Walking</option>
            <option className='text-green-500 font-extrabold' value="Pet Grooming">Pet Grooming</option>
            <option className='text-green-500 font-extrabold' value="Veterinary Consultation">Veterinary Consultation</option>
            <option className='text-green-500 font-extrabold' value="Pet Sitting">Pet Sitting</option>
          </select>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded p-2 flex-1 bg-white border-gray-300 outline-none text-sm md:text-base"
            placeholder="Your Name"
          />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border rounded p-2 flex-1 bg-white border-gray-300 outline-none text-sm md:text-base"
            placeholder="Location"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded p-2 flex-1 bg-white border-gray-300 outline-none text-sm md:text-base"
            placeholder="Email"
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border rounded p-2 flex-1 bg-white border-gray-300 outline-none text-sm md:text-base"
            placeholder="Phone Number"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border rounded p-2 flex-1 bg-white border-gray-300 outline-none text-sm md:text-base"
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="border rounded p-2 flex-1 bg-white border-gray-300 outline-none text-sm md:text-base"
          />
        </div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border rounded p-2 flex-1 bg-white border-gray-300 outline-none text-sm md:text-base mt-2"
          placeholder="Your Message"
          rows={4}
        />
        <button
          onClick={handleSend}
          className="bg-green-600 text-white py-3 rounded border cursor-pointer border-green-600 hover:bg-transparent hover:text-green-500 hover:border-green-500 transition mt-4 text-sm md:text-base"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};
export default Consult;
