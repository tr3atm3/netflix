import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm((prev) => !prev);
  };
  return (
    <div className="">
      <Header />
      <form className="absolute w-[28rem] mx-auto left-0 right-0 top-[9rem] text-white bg-black bg-opacity-70 flex-col flex py-8 px-14 rounded-lg">
        <h1 className="text-3xl my-4 font-bold ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 text-l bg-gray-950 opacity-80 rounded-lg"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 my-2 text-l bg-gray-950 opacity-80 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 text-l my-2 bg-gray-950 opacity-80 rounded-lg"
        />
        <button className="p-3 my-8 text-l w-full text-center bg-red-600 rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-6">
          {isSignInForm ? "New to Netflix? " : "Already have an Account? "}{" "}
          <span className="cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? "Sign up" : "Sign In"}
          </span>
        </p>
      </form>
      <div className="w-full h-[100vh]">
        <img
          className="w-full h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background of different movie"
        />
      </div>
    </div>
  );
};

export default Login;
