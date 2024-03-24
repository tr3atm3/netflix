import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  //handling click
  const toggleSignInForm = () => {
    setIsSignInForm((prev) => !prev);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    //validating form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    //Sign in / sign up to firebase
  };
  return (
    <div className="">
      <Header />
      <form
        className="absolute w-[28rem] mx-auto left-0 right-0 top-[9rem] text-white bg-black bg-opacity-70 flex-col flex py-8 px-14 rounded-lg"
        onSubmit={handleFormSubmit}
      >
        <h1 className="text-3xl my-4 font-bold ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 text-l bg-gray-950 opacity-80 rounded-lg"
            ref={name}
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 my-2 text-l bg-gray-950 opacity-80 rounded-lg"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 text-l my-2 bg-gray-950 opacity-80 rounded-lg"
          ref={password}
        />
        <p className="text-red-600 mt-3">{errorMessage}</p>
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
