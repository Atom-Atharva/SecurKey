import React from "react";
import Header from "./Header";

const Footer = () => {
  return (
    <div className="bg-[#d9d9d9] h-48 mt-20">
      <Header />
      <div className="px-20 pt-32 flex justify-between">
        <div>
          <h3>© Atharva 2024</h3>
          <h3>© Raghav 2024</h3>
        </div>
        <div className="flex gap-16 cursor-pointer mr-10">
          <a href="https://www.linkedin.com/in/atharva-sugandhi-391a4b225/">
            <img src="./SVG/linkedin.svg" className="w-8" />
          </a>
          <a href="https://www.instagram.com/raghav_kanungo28/">
            <img src="./SVG/instagram.svg" className="w-8" />
          </a>
          <a href="mailto:raghavkanungo065@gmail.com">
            <img src="./SVG/envelope-solid.svg" className="w-8" />
          </a>
          <a href="https://github.com/Atom-Atharva/SecurKey">
            <img src="./SVG/github.svg" className="w-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
