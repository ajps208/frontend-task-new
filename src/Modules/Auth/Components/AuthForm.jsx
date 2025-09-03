import React, { useRef, useState } from "react";
import logo from "../../../assets/logo.png";
import googlelogo from "../../../assets/google-logo.webp";
import InputField from "../../../Components/InuputField/InputField";
import "../../../App.css";
import API from "../../../Services/api";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  // toggle between Sign In and Sign Up
  const [isSignIn, setIsSignIn] = useState(true);

  // toast message state
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // track errors for validation
  const [errors, setErrors] = useState({});

  // loading state for button spinner
  const [loading, setLoading] = useState(false);

  // navigate after login
  const navigate = useNavigate();

  // terms acceptance for signup
  const [terms, setTerms] = useState(false);

  // form data
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // refs for focus on input fields
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // reset form fields
  const resetForm = () =>
    setForm({ firstName: "", lastName: "", email: "", password: "" });

  // update input values + validate empty fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({
      ...prev,
      [name]: value.trim() === "" ? true : false,
    }));
  };

  // handle form submit (login/signup)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // validate required fields
    let newErrors = {};
    if (!form.firstName && !isSignIn) newErrors.firstName = true;
    if (!form.lastName && !isSignIn) newErrors.lastName = true;
    if (!form.email) newErrors.email = true;
    if (!form.password) newErrors.password = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      if (newErrors.firstName) firstNameRef.current.focus();
      else if (newErrors.lastName) lastNameRef.current.focus();
      else if (newErrors.email) emailRef.current.focus();
      else if (newErrors.password) passwordRef.current.focus();
      return;
    }

    try {
      setLoading(true); // show loader

      if (!isSignIn) {
        // sign up flow
        if (!terms) {
          setShowToast(true);
          setToastMessage(
            "Please accept the terms of service and privacy policy to create your account"
          );
          setLoading(false);
          return;
        }

        const res = await API.post("/signup", form);
        if (res.status === 201) {
          // after signup, redirect to signin form
          setIsSignIn(true);
        }
      } else {
        // sign in flow
        const res = await API.post("/login", {
          email: form.email,
          password: form.password,
        });

        if (res.data.data.token) {
          // save token & email for session
          localStorage.setItem("token", res.data.data.token);
          localStorage.setItem("email", JSON.stringify(form.email));
          navigate("/dashboard");
        }
      }
    } catch (err) {
      // handle errors
      const msg =
        err.response?.data?.message || "Oops! Something broke at our end";

      if (isSignIn) {
        if (msg === "unauthorized") {
          setToastMessage("You have entered the incorrect email or password!");
        } else {
          setToastMessage(msg);
        }
      } else {
        if (msg === "user already exists") {
          setToastMessage(
            "An account already exists with this email. Please sign in instead!"
          );
        } else {
          setToastMessage(msg);
        }
      }
      setShowToast(true);
    } finally {
      setLoading(false); // stop loader
    }
  };

  // close toast notification
  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <div className="w-full h-full bg-black lg:bg-[#171717] relative">
      {/* logo - only visible on mobile */}
      <img
        src={logo}
        alt="Falconfeeds.io"
        className="w-[280px] h-[40px] object-contain absolute top-16 left-5 lg:hidden"
      />

      {/* div for form + content */}
      <div className="absolute top-28 lg:top-26 w-[90%] lg:w-[70%] left-5 lg:left-1/2 lg:-translate-x-1/2">
        {/* heading */}
        <div className="font-publicSans ">
          <h3 className="text-white font-normal lg:font-semibold text-[22px] lg:text-[40px] leading-[60px] lg:leading-20">
            {isSignIn ? "Sign in" : "Sign up for free"}
          </h3>
          <p className="text-gray-500 font-normal text-[15px] lg:text-[16px] ">
            {isSignIn
              ? "View latest updates and developments in CTI"
              : "Get started right away, no credit card required!"}
          </p>
        </div>

        {/* form container */}
        <div className="w-full absolute top-24 lg:top-32">
          <form
            onSubmit={handleSubmit}
            className=" grid grid-cols-2 gap-4 lg:gap-6"
          >
            {/* signup only fields */}
            {!isSignIn && (
              <>
                <div>
                  <InputField
                    ref={firstNameRef}
                    id="firstName"
                    name="firstName"
                    label="Full Name"
                    type="text"
                    value={form.firstName}
                    onChange={handleChange}
                    error={errors.firstName}
                  />
                </div>
                <div>
                  <InputField
                    ref={lastNameRef}
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    type="text"
                    value={form.lastName}
                    onChange={handleChange}
                    error={errors.lastName}
                  />
                </div>
              </>
            )}

            {/* email */}
            <div className="col-span-2">
              <InputField
                ref={emailRef}
                id="email"
                name="email"
                label="Email"
                type="email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
              />
            </div>

            {/* password */}
            <div className="col-span-2">
              <InputField
                ref={passwordRef}
                id="password"
                name="password"
                label="Password"
                type="password"
                isSignIn={isSignIn}
                value={form.password}
                onChange={handleChange}
                error={errors.password}
              />
            </div>

            {/* terms / forgot password */}
            <div className="col-span-2 text-white font-light text-[14px] lg:text-[16px] flex gap-4">
              {isSignIn ? (
                <a href="#" className="text-green-600 hover:underline">
                  Forgot Password ?
                </a>
              ) : (
                <>
                  <input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    onChange={(e) => setTerms(e.target.checked)}
                  />
                  <p>
                    creating an account means you're okay with our{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                      terms of services
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                      privacy policy
                    </a>
                  </p>
                </>
              )}
            </div>

            {/* submit button */}
            <div className="responsive-margin col-span-2">
              <button
                type="submit"
                disabled={loading}
                className={`w-full h-9 lg:h-12 rounded-sm py-3 font-publicSans text-[14px] lg:text-[18px] font-semibold leading-[30px] text-white 
                ${
                  loading
                    ? "bg-green-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    {isSignIn ? "Signing in..." : "Creating..."}
                  </div>
                ) : isSignIn ? (
                  "Sign in"
                ) : (
                  "Create Account"
                )}
              </button>
            </div>
          </form>

          {/* divider line with "or" */}
          <div className="flex flex-col items-center">
            <div
              style={{ marginTop: "20px" }}
              className="flex items-center w-5/6"
            >
              <div className="flex-grow border-t border-gray-500"></div>
              <span className="px-3 text-gray-400 text-sm">or</span>
              <div className="flex-grow border-t border-gray-500"></div>
            </div>

            {/* Google login */}
            <div
              style={{ marginTop: "20px" }}
              className="w-[58%] h-9 lg:h-12 rounded-sm bg-blue-500 font-publicSans text-[14px] lg:text-[18px] font-normal text-white flex items-center justify-center"
            >
              <img
                style={{ marginLeft: "8px" }}
                src={googlelogo}
                alt="google logo"
                className="w-8 h-7 lg:w-12 lg:h-10 rounded-sm ml-2 mr-3"
              />
              <span className="flex-1 text-center">Continue with Google</span>
            </div>

            {/* switch between signin and signup */}
            <div className="responsive-margin text-white font-light text-[14px] lg:text-[16px] text-center">
              {isSignIn ? (
                <p>
                  Don’t have an account?{" "}
                  <button
                    onClick={() => {
                      setIsSignIn(false);
                      resetForm();
                    }}
                    className="text-green-600 hover:text-green-700 cursor-pointer"
                  >
                    Sign up
                  </button>
                </p>
              ) : (
                <p>
                  Already have an account?{" "}
                  <button
                    onClick={() => {
                      setIsSignIn(true);
                      resetForm();
                    }}
                    className="text-green-600 hover:text-green-700 cursor-pointer"
                  >
                    Sign in
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* toast notification */}
      {showToast && (
        <div className="fixed top-6 left-1/2 lg:left-3/4 transform -translate-x-1/2 lg:-translate-x-1/4 z-50 w-11/12 max-w-md">
          <div
            style={{ padding: "10px" }}
            className="font-publicSans text-white font-light text-[14px] lg:text-[16px] border-2 rounded-sm border-red-800 bg-[#1A0A0ACC] backdrop-blur-sm flex items-center justify-between"
          >
            <span>{toastMessage}</span>
            <button
              onClick={handleCloseToast}
              className="ml-4 text-white hover:text-gray-300 transition-colors duration-200 text-lg font-bold"
              aria-label="Close notification"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
