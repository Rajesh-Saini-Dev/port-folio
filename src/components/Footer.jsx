import { FaYoutube, FaInstagram, FaGithub, FaGamepad } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#121214] text-white p-10">
      <div className="container mx-auto px-5 grid md:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">Brand</h2>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <FaYoutube className="text-xl border rounded-full p-2 w-10 h-10 hover:bg-[#ec806f]" />
            <FaGamepad className="text-xl border rounded-full p-2 w-10 h-10 hover:bg-[#ec806f]" />
            <FaInstagram className="text-xl border rounded-full p-2 w-10 h-10 hover:bg-[#ec806f]" />
            <FaGithub className="text-xl border rounded-full p-2 w-10 h-10 hover:bg-[#ec806f]" />
          </div>
        </div>

        {/* Navigation and Description */}
        <div className="text-center md:text-left">
          <nav className="mb-4">
            <ul className="flex flex-wrap justify-center md:justify-start space-x-4 font-semibold">
              <li className="hover:text-[#ec806f]">Home</li>
              <li className="hover:text-[#ec806f]">About</li>
              <li className="hover:text-[#ec806f]">Portfolio</li>
              <li className="hover:text-[#ec806f]">Skills</li>
              <li className="hover:text-[#ec806f]">Contact</li>
            </ul>
          </nav>
          <p className="text-gray-400 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem excepturi ipsum unde obcaecati iusto velit labore consequatur officiis aut neque?
          </p>
        </div>

        {/* Newsletter Subscription */}
        <div className="text-center md:text-right">
          <h3 className="font-semibold mb-2 text-center">Subscribe to our newsletter</h3>
          <div className="flex items-center border rounded overflow-hidden w-full max-w-sm mx-auto md:mx-0">
            <input
              type="email"
              placeholder="ex@gmail.com"
              className="w-full p-2 bg-[#1f2229] text-white outline-none"
            />
            <button className="bg-green-500 hover:bg-green-300 p-3">
              <FiSend className="text-white" />
            </button>
          </div>
         
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        @rejeshWebDev 2025 - All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
