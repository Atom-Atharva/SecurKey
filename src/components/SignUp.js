import React, { useRef } from "react";
import { useNavigate } from "react-router";

const SignUp = () => {
    const navigate = useNavigate();

    const email = useRef(null);
    const password = useRef(null);
    const confPassword = useRef(null);

    const loginHandler = () => {
        navigate("/login");
    };

    const signUpHandler = () => {
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

        // TODO: Backend Needed.
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
