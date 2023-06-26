import React, { useState } from "react";
import useInput from "src/hook/use-input";
import { useNavigate } from "react-router-dom";
import classes from "./SignIn.module.css";
import { USER_INFO_KEY } from "src/constants/common";
import { useDispatch } from "react-redux";
import { authActions } from "src/store/auth-slice";
import { signIn } from "src/services/auth";

const isNotEmpty = (value) => value.trim() !== "";

export default function SignIn() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {
    value: usernameValue,
    isValid: usernameIsValid,
    hasError: usernameHasError,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    reset: resetUsername,
  } = useInput(isNotEmpty);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (usernameIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const submitSignInData = {
      username: usernameValue,
      password: passwordValue,
    };

    try {
      const response = await signIn(submitSignInData);
      console.log(response);
      const userInfo = response.data;
      console.log(userInfo);

      if (response.status === 200) {
        localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo));

        dispatch(authActions.login(userInfo));

        resetUsername();
        resetPassword();

        navigate("/");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="sm:w-3/4 md:w-4/5 lg:w-3/5 2xl:w-2/5 m-auto h-auto my-12 bg-transparent border-white border-4 rounded-2xl overflow-hidden">
      <div
        className={`flex items-center bg-white text-blue-700 justify-center py-5 text-center}`}
      >
        <h1 className={`font-bold text-5xl ${classes["sign-in-text"]}`}>
          Game on!
        </h1>
      </div>
      <div className="w-3/4 mx-auto py-3 leading-8">
        <form onSubmit={submitHandler}>
          <div className="flex items-center">
            <label htmlFor="username" className="w-1/4">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={usernameValue}
              onChange={usernameChangeHandler}
              onBlur={usernameBlurHandler}
              className="pl-3 text-black w-3/4 rounded my-1"
            />
          </div>

          {usernameHasError && (
            <div className="text-red-500">Please enter a username.</div>
          )}
          <div className="flex items-center">
            <label htmlFor="password" className="w-1/4">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={passwordValue}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              className="pl-3 text-black w-3/4 rounded my-1 "
            />
          </div>

          {passwordHasError && (
            <div className="text-red-500">Please enter a password.</div>
          )}

          <div className=" my-2 grid grid-cols-6">
            <button
              className="px-4 py-2 leading-none border rounded text-white font-bold text-xl border-white hover:border-transparent hover:text-blue-700 hover:bg-white mt-4 lg:mt-0 duration-500 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-300 disabled:hover:bg-gray-400 disabled:hover:border-white col-start-3 col-end-5"
              disabled={!formIsValid}
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="my-2">
          Not a member yet?{" "}
          <span
            className="cursor-pointer hover:text-blue-700 hover:bg-white p-2 rounded transition-all duration-300 font-bold"
            onClick={() => {
              navigate("/sign-up");
            }}
          >
            Create an account!
          </span>
        </p>
        <p
          onClick={() => {
            navigate("/");
          }}
          className="cursor-pointer hover:text-blue-700 hover:bg-white p-2 rounded transition-all duration-300 font-bold inline-block"
        >
          Back to home
        </p>
      </div>
    </div>
  );
}
