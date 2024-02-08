import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addUser } from "../utils/userSlice";

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const confPassword = useRef(null);

    const loginHandler = () => {
        navigate("/login");
    };

    const signUpHandler = async () => {
        if (!email.current.value) {
            alert("Enter Email Address");
            return;
        }
        if (
            !password.current.value ||
            !confPassword.current.value ||
            password.current.value !== confPassword.current.value
        ) {
            alert("Invalid Password or Confirm Password");
            return;
        }

        const formData = {
            email: email.current.value,
            password: password.current.value,
            username: email.current.value,
        };

        // Backend --> Authenticate User
        const res = await fetch("http://localhost:8080/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (data.status === 400) {
            console.log(data.message);
            alert("Invalid User!");
        } else if (res.ok) {
            dispatch(
                addUser({
                    email: email.current.value,
                    username: email.current.value,
                })
            );
            console.log(data.message);
            navigate("/password");
        } else {
            console.error("Failed to sign up:", data.message);
            alert("Failed to sign up. Please try again later.");
        }
    };

    return (
        <div className="flex font-['Roboto_Slab']">
            <div className="w-6/12">
                <form
                    className="my-10 mx-48 p-2"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <img
                        className="h-40 "
                        src="./SVG/Project Logo.svg"
                        alt="logo"
                    />
                    <div className="flex flex-col">
                        <h2 className="text-4xl my-4">
                            <span className="font-['Pacifico']">Create</span>{" "}
                            Your Account
                        </h2>

                        <label className="text-xl mt-4">Email</label>
                        <input
                            ref={email}
                            className="text-xl mt-2 p-2 border border-black border-solid rounded-lg"
                            type="email"
                            placeholder="Enter Email"
                        />

                        <label className="text-xl mt-4">Password</label>
                        <input
                            ref={password}
                            className="text-xl mt-2 p-2 border border-black border-solid rounded-lg"
                            type="password"
                            placeholder="Enter Password"
                        />

                        <label className="text-xl mt-4">Confirm Password</label>
                        <input
                            ref={confPassword}
                            type="password"
                            className="text-xl mt-2 p-2 border border-black border-solid rounded-lg"
                            placeholder="Re-enter Password"
                        />
                    </div>
                    <div className="mt-8 flex justify-between">
                        <button
                            className="w-7/12 p-2 border border-solid border-black rounded-lg font-bold bg-green-400 hover:bg-green-500"
                            onClick={signUpHandler}
                        >
                            SignUp
                        </button>
                        <button
                            className="w-3/12 ml-6 p-2 underline underline-offset-8 hover:font-bold"
                            onClick={loginHandler}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
            <div className="w-6/12 h-screen">
                <img
                    className="w-full h-full object-cover"
                    src="./img/signupimg.png"
                    alt="SignUp_Img"
                />
            </div>
        </div>
    );
};

export default SignUp;
