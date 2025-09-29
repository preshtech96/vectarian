import React from 'react';
import blog1 from '../src/assets/blog1.jpg';
import blog2 from '../src/assets/blog2.jpg';
import blog3 from '../src/assets/blog3.jpg';
import blog4 from '../src/assets/blog4.jpg';
import blog5 from '../src/assets/blog5.jpg';
import blog6 from '../src/assets/blog6.jpg';

const Blognews = () => {
  const blogs = [
    { img: blog1, title: "Henry Mack", date: "Sep 23, 2025", desc: "Even the all-powerful Pointing has no control about the blind texts." },
    { img: blog2, title: "Micheal Joe", date: "Sep 22, 2025", desc: "Even the all-powerful Pointing has no control about the blind texts." },
    { img: blog3, title: "Brain Chars", date: "Sep 21, 2025", desc: "Even the all-powerful Pointing has no control about the blind texts." },
    { img: blog4, title: "Roberts Levis", date: "Sep 20, 2025", desc: "Even the all-powerful Pointing has no control about the blind texts." },
    { img: blog5, title: "Donald Pacttric", date: "Sep 19, 2025", desc: "Even the all-powerful Pointing has no control about the blind texts." },
    { img: blog6, title: "Tinubu Brown", date: "Sep 18, 2025", desc: "Even the all-powerful Pointing has no control about the blind texts." },
  ];

  return (
    <div className="py-16 px-4 md:px-10 bg-gray-100">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Latest News from Our Blog
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
            <img src={blog.img} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <div className="mb-2">
                <h2 className="font-bold text-lg">{blog.title}</h2>
                <span className="text-sm text-gray-500">{blog.date}</span>
              </div>
              <p className="text-gray-600 flex-1">{blog.desc}</p>
              <button className="mt-4 text-green-500 py-2 px-4 rounded cursor-pointer hover:bg-green-600 hover:text-white transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Blognews;
