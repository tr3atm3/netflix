import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Background_img } from "../utils/constants";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  console.log(auth);

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
    if (message) return;
    if (!isSignInForm) {
      //Sign up logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });
          console.log(user);
        })
        .catch((error) => {
          //   const errorCode = error.code;
          const errMessage = error.message;
          setErrorMessage(errMessage);
          // ..
        });
    } else {
      //Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log(user);
        })
        .catch((error) => {
          //   const errorCode = error.code;
          const errMessage = error.message;
          setErrorMessage(errMessage);
        });
    }
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
          <span
            className="cursor-pointer font-bold text-xl"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign up" : "Sign In"}
          </span>
        </p>
      </form>
      <div className="w-full h-[100vh]">
        <img
          className="w-full h-[100vh]"
          src={Background_img}
          alt="background of different movie"
        />
      </div>
    </div>
  );
};

export default Login;
