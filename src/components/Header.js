import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex pt-8 w-full absolute justify-between">
            <a href="#home">
                <div className="flex items-center ml-20">
                    <img
                        src="./SVG/Project Logo.svg"
                        alt="ProjectLogo"
                        className="w-20"
                    />
                    <h1 className="font-['Pacifico'] text-4xl ml-4">
                        SecurKey
                    </h1>
                </div>
            </a>
            <div className="mr-20">
                <ul className="flex justify-end mt-5">
                    <li className="mx-10 text-lg hover:underline hover:underline-offset-4">
                        <a href="#home">Home</a>
                    </li>
                    <li className="mx-10 text-lg hover:underline hover:underline-offset-4">
                        <a href="#features">Features</a>
                    </li>
                    <li className="mx-10 text-lg hover:underline hover:underline-offset-4">
                        <Link to={"/signup"}>SignUp</Link>
                    </li>
                    <li className="mx-10 text-lg hover:underline hover:underline-offset-4">
                        <Link to={"/login"}>Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
