import React, { useState } from "react";
import useInput from "src/hook/use-input";
import { useNavigate } from "react-router-dom";
import classes from "./SignUp.module.css";
import { signUp } from "src/services/auth";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

export default function SignUp() {
  const navigate = useNavigate();

  const [genderInput, setGenderInput] = useState("Male");

  const handleGenderChange = (event) => {
    setGenderInput(event.target.value);
  };

  const [addressInput, setAddressInput] = useState("");

  const handleAddressChange = (event) => {
    setAddressInput(event.target.value);
  };

  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);

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

  const {
    value: telValue,
    isValid: telIsValid,
    hasError: telHasError,
    valueChangeHandler: telChangeHandler,
    inputBlurHandler: telBlurHandler,
    reset: resetTel,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: dobValue,
    isValid: dobIsValid,
    hasError: dobHasError,
    valueChangeHandler: dobChangeHandler,
    inputBlurHandler: dobBlurHandler,
    reset: resetDob,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (
    firstNameIsValid &&
    lastNameIsValid &&
    emailIsValid &&
    usernameIsValid &&
    passwordIsValid &&
    dobIsValid
    // genderIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const submitSignUpData = {
      firstName: firstNameValue,
      lastName: lastNameValue,
      email: emailValue,
      username: usernameValue,
      password: passwordValue,
      tel: telValue,
      address: addressInput,
      dob: dobValue,
      gender: genderInput,
    };

    try {
      const response = await signUp(submitSignUpData);
      console.log(response);

      if (response.status === 200) {
        resetFirstName();
        resetLastName();
        resetUsername();
        resetPassword();
        resetTel();
        setAddressInput("");
        resetEmail();
        resetDob();

        alert(response.data);

        navigate("/sign-in");
      }
    } catch (error) {}
  };

  return (
    <div className="sm:w-3/4 md:w-4/5 lg:w-3/5 2xl:w-2/5 m-auto h-auto my-12 bg-transparent border-white border-4 rounded-2xl overflow-hidden">
      <div
        className={`flex items-center bg-white text-white justify-center py-5 text-center}`}
      >
        <h1 className={`font-bold text-5xl ${classes["sign-up-text"]}`}>
          Ready to Game?
        </h1>
      </div>
      <div className="w-3/4 mx-auto py-3 leading-8">
        <form onSubmit={submitHandler}>
          <div className="control-group">
            <div className="flex flex-col">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                value={firstNameValue}
                onChange={firstNameChangeHandler}
                onBlur={firstNameBlurHandler}
                className="pl-3 text-black rounded"
              />
              {firstNameHasError && (
                <p className="text-red-500 font-bold">
                  Please enter a first name.
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={lastNameValue}
                onChange={lastNameChangeHandler}
                onBlur={lastNameBlurHandler}
                className="pl-3 text-black rounded"
              />
              {lastNameHasError && (
                <p className="error-text">Please enter a last name.</p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={usernameValue}
                onChange={usernameChangeHandler}
                onBlur={usernameBlurHandler}
                className="pl-3 text-black rounded"
              />
              {usernameHasError && (
                <p className="error-text">Please enter a username.</p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={passwordValue}
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
                className="pl-3 text-black rounded"
              />
              {passwordHasError && (
                <p className="error-text">Please enter a password.</p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="tel">Telephone number (optional)</label>
              <input
                type="text"
                id="tel"
                value={telValue}
                onChange={telChangeHandler}
                onBlur={telBlurHandler}
                className="pl-3 text-black rounded"
              />
              {telHasError && (
                <p className="error-text">
                  Please enter a valid telephone number.
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="address">Address (optional)</label>
              <input
                type="text"
                id="address"
                value={addressInput}
                onChange={handleAddressChange}
                className="pl-3 text-black rounded"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email">E-Mail Address</label>
              <input
                type="text"
                id="email"
                value={emailValue}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                className="pl-3 text-black rounded"
              />
              {emailHasError && (
                <p className="error-text">
                  Please enter a valid email address.
                </p>
              )}
            </div>

            <div>
              <label htmlFor="dob">Date of birth: </label>
              <br />
              <input
                type="date"
                name=""
                id="dob"
                required
                value={dobValue}
                onChange={dobChangeHandler}
                onBlur={dobBlurHandler}
                className="pl-3 text-black rounded"
              />
            </div>

            <div>
              <label htmlFor="gender">Gender</label>
              <select
                name=""
                id="gender"
                value={genderInput}
                onChange={handleGenderChange}
                className="pl-3 py-1 text-black rounded block"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div className="form-actions my-2">
            <button
              className="text-xl px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-700 hover:bg-white mt-4 lg:mt-0 duration-500 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-300 disabled:hover:bg-gray-400 disabled:hover:border-white"
              disabled={!formIsValid}
            >
              Sign up
            </button>
          </div>
        </form>
        <p>
          Already have an account?{" "}
          <span
            className="cursor-pointer hover:text-blue-700 hover:bg-white p-2 rounded transition-all duration-300 font-bold"
            onClick={() => {
              navigate("/sign-in");
            }}
          >
            Sign in!
          </span>
        </p>
        <p
          onClick={() => {
            navigate("/");
          }}
          className="cursor-pointer hover:text-blue-700 hover:bg-white p-2 rounded transition-all duration-300 font-bold w-fit"
        >
          Back to home
        </p>
      </div>
    </div>
  );
}
