import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPasswords, removePassword } from "../utils/passwordSlice";
import toast from "react-hot-toast";
import CryptoJS from "crypto-js";

const UpdatePassword = () => {
    const title = useRef(null);
    const password = useRef(null);
    const pin = useRef(null);
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();

    const handleNewPassword = async () => {
        if (!title.current.value) {
            toast.error("Enter Valid Name");
            return;
        }
        if (!password.current.value) {
            toast.error("Enter Valid Password");
            return;
        }
        if (!pin.current.value) {
            toast.error("Enter Valid Pin");
            return;
        }

        // Pin is Same as Password
        const pinData = {
            email: user.email,
            password: pin.current.value,
        };

        // BackEnd

        const response = await fetch("http://localhost:8080/api/auth/signin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(pinData),
        });
        const checkPin = await response.json();

        if (response.ok) {
            // Encryption Front-End
            const encrypt = CryptoJS.AES.encrypt(
                password.current.value,
                pin.current.value
            ).toString();

            const formData = {
                title: title.current.value,
                password: encrypt,
                username: user.username,
            };

            const showData = {
                title: title.current.value,
                password: password.current.value,
                username: user.username,
            };

            const res = await fetch("http://localhost:8080/api/vault/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await res.json();

            if (!res.ok) {
                console.log(data.message);
                toast.error(data.message);
            } else {
                console.log("Added Successfully");
                toast.success("Added Successfully");
                title.current.value = null;
                pin.current.value = null;
                password.current.value = null;
                dispatch(addPasswords([showData]));
            }
        }
        // Invalid Credentials
        else {
            console.log(checkPin.message);
            toast.error(checkPin.message);
            return;
        }
    };

    const updateHandler = async () => {
        if (!title.current.value) {
            toast.error("Enter Valid Name");
            return;
        }
        if (!password.current.value) {
            toast.error("Enter Valid Password");
            return;
        }
        if (!pin.current.value) {
            toast.error("Enter Valid Pin");
            return;
        }

        const verifyUser = {
            email: user.username,
            password: pin.current.value,
        };
        const response = await fetch("http://localhost:8080/api/auth/signin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(verifyUser),
        });
        const checkPin = await response.json();

        if (response.ok) {
            const encrypt = CryptoJS.AES.encrypt(
                password.current.value,
                pin.current.value
            ).toString();

            const formData = {
                title: title.current.value,
                password: encrypt,
                username: user.username,
            };

            const showData = {
                title: title.current.value,
                password: password.current.value,
                username: user.username,
            };

            const delData = {
                title: title.current.value,
                username: user.username,
            };

            const res = await fetch("http://localhost:8080/api/vault/update", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await res.json();

            if (!res.ok) {
                console.log(data.message);
                toast.error(data.message);
            } else {
                console.log("Updated Successfully");
                toast.success("Updated Successfully");
                title.current.value = null;
                pin.current.value = null;
                password.current.value = null;
                dispatch(removePassword(delData));
                dispatch(addPasswords([showData]));
            }
        } else {
            console.log(checkPin.message);
            toast.error(checkPin.message);
            return;
        }
    };

    return (
        <div className="border-l border-black pl-6">
            <div className="text-5xl">
                <span className="font-['pacifico']">Create/Update</span>
                <span> Password</span>
            </div>

            <div className="w-10/12 p-4 mt-4">
                <div className="flex flex-col gap-2 items-center w-full">
                    <div className="text-2xl flex flex-col gap-2 w-3/4">
                        <label className="font-bold">Name</label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="border-black border-b-2 px-4 py-2 placeholder:text-gray-600 focus:outline-none"
                            ref={title}
                        />
                    </div>
                    <div className="text-2xl flex flex-col gap-2 w-3/4">
                        <label className="font-bold">Password</label>
                        <input
                            type="text"
                            placeholder="Enter Your Password"
                            className="border-black border-b-2 px-4 py-2 placeholder:text-gray-600 focus:outline-none"
                            ref={password}
                        />
                    </div>
                    <div className="text-2xl flex flex-col gap-2 w-3/4">
                        <label className="font-bold">PIN</label>
                        <input
                            type="password"
                            placeholder="Enter SecurKey Password"
                            className="border-black border-b-2 px-4 py-2 placeholder:text-gray-600 focus:outline-none"
                            ref={pin}
                        />
                    </div>

                    <div className="flex">
                        <button
                            className="m-4 rounded-lg p-2 px-4 bg-[#D9D9D9] hover:bg-[#a5a5a5]"
                            onClick={handleNewPassword}
                        >
                            New Password
                        </button>
                        <button
                            className="m-4  rounded-lg p-2 px-4 bg-[#D9D9D9] hover:bg-[#a5a5a5]"
                            onClick={updateHandler}
                        >
                            Update Password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdatePassword;
