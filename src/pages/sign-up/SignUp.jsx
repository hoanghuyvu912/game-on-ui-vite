import React from "react";
import useInput from "src/hook/use-input";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

export default function SignUp() {
  const navigate = useNavigate();

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
    value: addressValue,
    isValid: addressIsValid,
    hasError: addressHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddress,
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

  const {
    value: genderValue,
    isValid: genderIsValid,
    hasError: genderHasError,
    valueChangeHandler: genderChangeHandler,
    inputBlurHandler: genderBlurHandler,
    reset: resetGender,
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

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    console.log(
      firstNameValue,
      lastNameValue,
      emailValue,
      usernameValue,
      passwordValue,
      telValue,
      addressValue,
      dobValue,
      genderValue
    );

    resetFirstName();
    resetLastName();
    resetEmail();
    resetUsername();
    resetPassword();
    resetDob();
    resetGender();
  };

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <div className="w-1/2 m-auto h-auto my-12 bg-teal-500 rounded-3xl">
      <div className="flex items-center justify-center w-full py-5 bg-white rounded-t-3xl text-center">
        <h1 className="font-bold text-5xl text-teal-700">Ready to Game?</h1>
      </div>
      <div className="w-3/4 mx-auto py-3 leading-8">
        <form onSubmit={submitHandler}>
          <div className="control-group">
            <div className={firstNameClasses}>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                value={firstNameValue}
                onChange={firstNameChangeHandler}
                onBlur={firstNameBlurHandler}
                className="pl-3"
              />
              {firstNameHasError && (
                <p className="error-text">Please enter a first name.</p>
              )}
            </div>

            <div className={lastNameClasses}>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={lastNameValue}
                onChange={lastNameChangeHandler}
                onBlur={lastNameBlurHandler}
                className="pl-3"
              />
              {lastNameHasError && (
                <p className="error-text">Please enter a last name.</p>
              )}
            </div>

            <div className={lastNameClasses}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={usernameValue}
                onChange={usernameChangeHandler}
                onBlur={usernameBlurHandler}
                className="pl-3"
              />
              {usernameHasError && (
                <p className="error-text">Please enter a username.</p>
              )}
            </div>

            <div className={lastNameClasses}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={passwordValue}
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
                className="pl-3"
              />
              {passwordHasError && (
                <p className="error-text">Please enter a password.</p>
              )}
            </div>

            <div className={lastNameClasses}>
              <label htmlFor="tel">Telephone number (optional)</label>
              <input
                type="text"
                id="tel"
                value={telValue}
                onChange={telChangeHandler}
                onBlur={telBlurHandler}
                className="pl-3"
              />
              {telHasError && (
                <p className="error-text">
                  Please enter a valid telephone number.
                </p>
              )}
            </div>

            <div className={lastNameClasses}>
              <label htmlFor="address">Address (optional)</label>
              <input
                type="text"
                id="address"
                value={addressValue}
                onChange={addressChangeHandler}
                onBlur={addressBlurHandler}
                className="pl-3"
              />
              {addressHasError && (
                <p className="error-text">
                  Please enter a valid address.
                </p>
              )}
            </div>

            <div className={emailClasses}>
              <label htmlFor="email">E-Mail Address</label>
              <input
                type="text"
                id="email"
                value={emailValue}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                className="pl-3"
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
              />
            </div>

            <label htmlFor="gender">Gender</label>
            <div>
              <select
                name=""
                id="gender"
                value={genderValue}
                onChange={genderChangeHandler}
                onBlur={genderBlurHandler}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div className="form-actions">
            <button
              className="text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 duration-500 cursor-pointer"
              disabled={!formIsValid}
            >
              Sign up
            </button>
          </div>
        </form>
        <p>
          Already have an account?{" "}
          <span
            className="cursor-pointer hover:text-teal-700 transition-all duration-300 font-bold"
            onClick={() => {
              navigate("/signin");
            }}
          >
            Sign in!
          </span>
        </p>
        <p
          onClick={() => {
            navigate("/");
          }}
          className="cursor-pointer hover:text-teal-700 transition-all duration-300 font-bold inline-block"
        >
          Back to home
        </p>
      </div>
    </div>
  );
}
