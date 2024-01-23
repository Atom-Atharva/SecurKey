import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="bg-[#7E58D1] h-screen flex">
            <div className="p-20 pt-48 w-8/12 text-white">
                <div className="w-10/12">
                    <h1 className="text-7xl">
                        Your Fortress of Password Security
                    </h1>
                    <h2 className="text-3xl mt-10">
                        Unlock Peace of Mind with Cutting-Edge Password
                        Management Solutions
                    </h2>
                    <Link to={"/login"}>
                        <button className="text-3xl mt-10 border border-solid bg-[#FFDE55] text-black p-4 rounded-lg px-8">
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>
            <div>
                <img
                    src="./SVG/Hero BG.svg"
                    alt="Hero"
                    className="overflow-hidden object-cover"
                />
            </div>
        </div>
    );
};

export default Hero;
