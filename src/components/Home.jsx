import React from "react";
import Button from "./UI/Button";

const Home = () => {
  return (
    <section id="home" className="relative text-gray-900 pt-32 pb-16">
      <div className="container mx-auto flex flex-col items-center text-center">
      <div className="h-[275px] w-[275px] rounded-full mb-10 bg-[url(assets/image/heroimg.jpg)] bg-cover border flex justify-center items-center shadow-2xl hover:shadow-black duration-500"></div>
        <h2 className="text-5xl font-bold pb-2">
          I am <span className="text-[#ec806f]">Rajesh</span>
        </h2>
        <h2 className="text-5xl font-bold">Frontend Developer</h2>
        <p className="mt-4 mx-4 text-lg max-w-2xl">
          Creating innovative solutions for businesses with a modern touch.
        </p>
        <div className="mt-6 flex gap-4">
          <Button name="Contact With Me"/>
          <button className="bg-gray-900 text-white hover:bg-[#ea5c47] hover:shadow-lg hover:shadow-gray-800 px-6 py-2 rounded">
            Hire me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
