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
            <div className="w-auto h-[400px] rounded-lg text-xl mt-4 p-4 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-[#a5a5a5] overflow-y-scroll">
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
