import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Skills from "./components/Skills";
import Review from "./components/Review";

function App() {
  return (
    <div className=" bg-[#F4F1DB]">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
