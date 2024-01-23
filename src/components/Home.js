import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import Footer from "./Footer";

const Home = () => {
  return (
    <div id="home" className="font-['Roboto_Slab']">
      <div className="text-white">
        <Header />
      </div>
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};
export default Home;
