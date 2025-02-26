import React from "react";

const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];

const Skills = () => {
  return (
    <section className="py-24 bg-gray-900 text-center" id="skills">
      <h2 className="text-5xl font-bold text-orange-400">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 justify-center pl-16 gap-4 md:gap-0 mt-10">
        {skills.map(skill => (
          <span key={skill} className="flex text-xl md:text-3xl font-bold justify-center items-center h-36 w-36  md:h-48  md:w-48 px-4 py-2 bg-yellow-500 rounded-full border-4 hover:scale-105 duration-500">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
