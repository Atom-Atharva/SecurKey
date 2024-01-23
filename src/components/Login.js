import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  function loginhandler() {
    if (!email.current.value) {
      alert("Enter Valid Email");
      return;
    }
    if (!password.current.value) {
      alert("Enter Valid password");
      return;
    }

    //todo handle the baackend
  }

  function createAccounthandler() {
    navigate("/signup");
  }

  return (
    <div className="flex font-['Roboto_slab']">
      <div className="w-6/12 h-screen">
        <img
          className="w-full h-full object-cover"
          src="./SVG/loginimage.svg"
          alt="Login image"
        />
      </div>
      <div className="w-6/12">
        <form
          className=" my-12 mx-44 "
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <img
            className="h-40 "
            src="./SVG/Project Logo.svg"
            alt="project logo"
          />

          <div className="flex flex-col w-full h-full">
            <h2 className="text-4xl">Hello</h2>
            <h2 className="text-4xl">Welcome Again !!</h2>
            <h2 className="text-3xl mt-10">
              <span className="font-['pacifico']">Login</span> to your account.
            </h2>
            <div className="w-full h-full mt-8 ">
              <div>
                <label className="text-xl mt-4">Email</label>
              </div>

              <input
                type="email"
                ref={email}
                className="text-xl mt-2 p-2 border border-black border-solid rounded-lg w-full pt-2"
                placeholder="Email"
              ></input>
              <div>
                <label className="text-xl mt-4">Password</label>
              </div>

              <input
                type="password"
                ref={password}
                className="text-xl mt-2 p-2 border text-black border-black border-solid rounded-lg w-full pt-2"
                placeholder="Password"
              ></input>
            </div>
            <div className="flex flex-col  mt-8 ">
              <button
                className="bg-green-400 cursor-pointer mx-20 rounded-lg text-3xl p-2 hover:bg-green-500"
                onClick={loginhandler}
              >
                Login
              </button>
              <button
                className="mt-4 underline underline-offset-2"
                onClick={createAccounthandler}
              >
                Create Account
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
