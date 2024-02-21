import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { clearPassword } from "../utils/passwordSlice";

const PassHeader = () => {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(removeUser());
        dispatch(clearPassword());
        navigate("/");
    };

    return (
        <div className="flex py-8 w-full absolute bg-[#D9D9D9] justify-between">
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
            <div className="flex items-center mx-10 text-lg font-bold">
                Welcome to your Vault
            </div>
            <div className="items-center mr-20">
                <ul className="flex justify-end mt-5">
                    <li className="mx-10 text-lg underline underline-offset-4 flex">
                        <img
                            src="./SVG/user-solid.svg"
                            className="w-6 mx-2"
                            alt="user"
                        />
                        <p>Hi! {user?.username}</p>
                    </li>
                    <li
                        className="mx-10 text-lg hover:underline hover:underline-offset-4 cursor-pointer"
                        onClick={handleLogout}
                    >
                        Logout
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PassHeader;
