import React, { useEffect } from "react";
import PasswordLists from "./PasswordLists";
import PassHeader from "./PassHeader";
import UpdatePassword from "./UpdatePassword";
import { useDispatch, useSelector } from "react-redux";
import { addPasswords } from "../utils/passwordSlice";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
import { Toaster } from "react-hot-toast";

const PasswordPage = () => {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const navigate = useNavigate();

    const getPasswords = async () => {
        const userData = {
            username: user.username,
        };

        const res = await fetch("http://localhost:8080/api/vault/show", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });
        const data = await res.json();

        if (!res.ok) {
            console.log(data.message);
            return;
        } else {
            // Decrypting
            const decryptArray = data.map((object) => {
                // Decrypt
                const bytes = CryptoJS.AES.decrypt(object.password, user.pin);
                const decrypt = bytes.toString(CryptoJS.enc.Utf8);

                return { ...object, password: decrypt };
            });
            dispatch(addPasswords(decryptArray));
        }
    };

    useEffect(() => {
        if (!user) {
            navigate("/login");
            return;
        }

        console.log("Called");
        getPasswords();
    }, []);

    return (
        <div className="font-['Roboto_slab']">
            <div>
                <Toaster position="bottom-right" reverseOrder={false} />
            </div>
            <PassHeader />
            <div className="flex w-full">
                <div className="mt-52 w-7/12">
                    <PasswordLists />
                </div>
                <div className="mt-52 ml-20 w-5/12">
                    <UpdatePassword />
                </div>
            </div>
        </div>
    );
};

export default PasswordPage;
