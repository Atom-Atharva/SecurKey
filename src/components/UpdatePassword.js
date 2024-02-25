import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPasswords, removePassword } from "../utils/passwordSlice";
import CryptoJS from "crypto-js";

const UpdatePassword = () => {
    const title = useRef(null);
    const password = useRef(null);
    const pin = useRef(null);
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();

    const handleNewPassword = async () => {
        if (!title.current.value) {
            alert("Enter Valid Name");
            return;
        }
        if (!password.current.value) {
            alert("Enter Valid password");
            return;
        }
        if (!pin.current.value) {
            alert("Enter Valid Pin");
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
                alert("Failed to Add Password: " + data.message);
            } else {
                console.log("Added Successfully");
                dispatch(addPasswords([showData]));
            }
        }
        // Invalid Credentials
        else {
            console.log(checkPin.message);
            alert("Wrong Pin: " + checkPin.message);
            return;
        }
    };

    const updateHandler = async () => {
        if (!title.current.value) {
            alert("Enter Valid Name");
            return;
        }
        if (!password.current.value) {
            alert("Enter Valid password");
            return;
        }
        if (!pin.current.value) {
            alert("Enter Valid Pin");
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
                alert("Failed to update Password: " + data.message);
            } else {
                console.log("Updated Successfully");
                dispatch(removePassword(delData));
                dispatch(addPasswords([showData]));
            }
        } else {
            console.log(checkPin.message);
            alert("Wrong Pin: " + checkPin.message);
            return;
        }
    };

    return (
        <div>
            <div className="text-5xl">
                <span className="font-['pacifico']">Create/Update</span>
                <span> Password</span>
            </div>

            <div className="bg-[#D9D9D9] w-10/12 p-4 mt-4 rounded-lg">
                <div className="flex flex-col gap-2 items-center w-full">
                    <div className="text-2xl flex flex-col gap-2 w-3/4">
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="bg-[#a5a5a5] px-4 py-2 rounded-lg placeholder:text-gray-600"
                            ref={title}
                        />
                    </div>
                    <div className="text-2xl flex flex-col gap-2 w-3/4">
                        <label>Password</label>
                        <input
                            type="text"
                            placeholder="Enter Your Password"
                            className="bg-[#a5a5a5] px-4 py-2 rounded-lg placeholder:text-gray-600"
                            ref={password}
                        />
                    </div>
                    <div className="text-2xl flex flex-col gap-2 w-3/4">
                        <label>PIN</label>
                        <input
                            type="text"
                            placeholder="Enter SecurKey Password"
                            className="bg-[#a5a5a5] px-4 py-2 rounded-lg placeholder:text-gray-600"
                            ref={pin}
                        />
                    </div>

                    <div className="flex">
                        <button
                            className="m-4 rounded-lg p-2 px-4 bg-[#a5a5a5] hover:bg-[#929292]"
                            onClick={handleNewPassword}
                        >
                            New Password
                        </button>
                        <button
                            className="m-4  rounded-lg p-2 px-4 bg-[#a5a5a5] hover:bg-[#929292]"
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
