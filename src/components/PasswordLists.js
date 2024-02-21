import React from "react";
import PasswordElements from "./PasswordElements";
import { useSelector } from "react-redux";

const PasswordLists = () => {
    const password = useSelector((store) => store.password);
    return (
        <div className="font-['Roboto_slab'] ml-20">
            <div className="text-5xl">
                <span className="font-['pacifico'] ">Your</span> Passwords
            </div>
            <div className="bg-[#D9D9D9] w-auto rounded-sm text-xl mt-4 p-4">
                {!password || password?.length === 0 ? (
                    <h2>No Passwords Saved!</h2>
                ) : (
                    password.map((pass, index) => (
                        <PasswordElements key={index} data={pass} />
                    ))
                )}
            </div>
        </div>
    );
};

export default PasswordLists;
