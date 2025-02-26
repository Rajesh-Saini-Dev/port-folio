import React from "react";
import pexels from "../assets/image/pexels.jpg";

const projects = [
  { title: "Business Card Design", img: pexels },
  { title: "Brand Identity", img: pexels },
  { title: "Website UI", img: pexels },
  { title: "Marketing Campaign", img: pexels },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-[#F4F1DB] px-10 p-32">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">Portfolio</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#ec806f] p-4 rounded shadow hover:bg-[#da6f5f]">
              <img src={project.img} alt={project.title} className="rounded" />
              <h3 className="mt-2 font-semibold">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
