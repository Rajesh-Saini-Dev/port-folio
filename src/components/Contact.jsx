import React from "react";
import Button from "./UI/Button";

const Contact = () => {
  return (
    
    <section id="contact" className="px-10 py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold text-orange-400">Contact</h2>
        <form className="mt-8 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-black p-3 mb-4 rounded-xl hover:shadow-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-black p-3 mb-4 rounded-xl hover:shadow-md"
          />
          <textarea
            placeholder="Message"
            className="w-full border border-black p-3 mb-4 h-32 rounded-xl hover:shadow-md"
          ></textarea>
          <Button name ="Send Message"/>
        </form>
      </div>
      <div className=" text-gray-500  mt-10 border-t border-gray-700 pt-4">
      </div>
    </section>
  );
};

export default Contact;
