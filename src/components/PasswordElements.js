import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { removePassword } from "../utils/passwordSlice";
import toast from "react-hot-toast";

const PasswordElements = ({ data }) => {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);

    const handleDelete = async () => {
        const delData = {
            title: data.title,
            username: user.username,
        };

        const res = await fetch("http://localhost:8080/api/vault/delete", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(delData),
        });

        const response = res.json();
        if (!res.ok) {
            console.log(response.message);
            toast.error("Failed to Delete Passwords: " + response.message);
            return;
        } else {
            console.log("Deleted");
            toast.success("Deleted");
            dispatch(removePassword(data));
        }
    };
    return (
        <div className="flex items-baseline">
            <p className="mr-10 w-1/4 font-bold">{data.title}</p>
            <div className="border-b-2 border-black my-2 w-full flex justify-between items-baseline px-4 py-2">
                <p className="ml-3">
                    {visible ? data.password : "*************"}
                </p>
                <span className="ml-3 cursor-pointer">
                    <FaRegEyeSlash
                        onMouseDown={() => setVisible(true)}
                        onMouseUp={() => setVisible(false)}
                    />
                </span>
            </div>
            <span className="mx-5 cursor-pointer" onClick={handleDelete}>
                <RiDeleteBinFill />
            </span>
        </div>
    );
};

export default PasswordElements;
