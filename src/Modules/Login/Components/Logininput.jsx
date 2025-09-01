import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import googlelogo from "../../../assets/google-logo.webp";
import InputField from "../../../Components/InuputField/InputField";
import "../../../App.css";

const Logininput = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [showToast, setShowToast] = useState(true);

  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <div className="w-full h-full bg-black lg:bg-[#171717] relative">
      {/* company logo */}
      <img
        src={logo}
        alt="Falconfeeds.io"
        className="w-[280px] h-[40px] object-contain absolute top-16 left-5 lg:hidden"
      />
      {/* signup form */}
      <div className=" absolute top-28 lg:top-26 w-[90%] lg:w-[70%] left-5 lg:left-1/2 lg:-translate-x-1/2">
        {/* signup text */}
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
        {/* form */}
        <div className="w-full absolute top-24 lg:top-32">
          <form className=" grid grid-cols-2 gap-4 lg:gap-6">
            {!isSignIn && (
              <>
                <div>
                  <InputField
                    id="fname"
                    label="Full Name"
                    type="text"
                    // value={form.name}
                    // onChange={handleChange}
                    // error={errors.name}
                  />
                </div>
                <div>
                  <InputField
                    id="lname"
                    label="Last Name"
                    type="text"
                    // value={form.name}
                    // onChange={handleChange}
                    // error={errors.name}
                  />
                </div>
              </>
            )}
            <div className="col-span-2">
              <InputField
                id="email"
                label="Email"
                type="email"
                // value={form.email}
                // onChange={handleChange}
                // error={errors.email}
              />
            </div>
            <div className="col-span-2">
              <InputField
                id="password"
                label="Password"
                type="password"
                isSignIn={isSignIn}
                // value={form.password}
                // onChange={handleChange}
                // error={errors.password}
              />
            </div>
            <div className="col-span-2 text-white font-light text-[14px] lg:text-[16px] flex gap-4">
              {isSignIn ? (
                <a href="#" className="text-green-600 hover:underline">
                  Forgot Password ?
                </a>
              ) : (
                <>
                  <input type="checkbox" name="remember" id="" />
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

            <div className="responsive-margin col-span-2">
              <button className="w-full h-9 lg:h-12 rounded-sm bg-green-600 py-3 font-publicSans  text-[14px] lg:text-[18px] font-semibold leading-[30px] text-white">
                {isSignIn ? "Sign in" : "Create Account"}
              </button>
            </div>
          </form>
          <div className="flex flex-col items-center">
            {/* or */}
            <div
              style={{ marginTop: "20px" }}
              className="flex items-center w-5/6"
            >
              <div className="flex-grow border-t border-gray-500"></div>
              <span className="px-3 text-gray-400 text-sm">or</span>
              <div className="flex-grow border-t border-gray-500"></div>
            </div>
            {/* google login */}
            <div
              style={{ marginTop: "20px" }}
              className="relative w-5/6 h-9 lg:h-12 rounded-sm bg-blue-500 font-publicSans text-[14px] lg:text-[18px] font-normal text-white flex items-center justify-center"
            >
              {/* Image on the left */}
              <img
                src={googlelogo}
                alt="google logo"
                className="absolute left-1 rounded-sm w-8 h-7  lg:w-12 lg:h-10 "
              />
              <span>Continue with Google</span>
            </div>
            <div className="responsive-margin text-white font-light text-[14px] lg:text-[16px] text-center">
              {isSignIn ? (
                <p>
                  Dont have an account ?{" "}
                  <span className="text-green-600">Sign up</span>
                </p>
              ) : (
                <p>
                  Already have an account ?{" "}
                  <span className="text-green-600">Sign in</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* /tost message */}
      {showToast && (
        <div className="fixed top-6 left-1/2 lg:left-[1650px]  transform -translate-x-1/2 z-50 w-11/12 max-w-md">
          <div
            style={{ padding: "10px" }}
            className="font-publicSans text-white font-light text-[14px] lg:text-[16px] border-2 rounded-sm border-red-800 bg-[#1A0A0ACC] backdrop-blur-sm flex items-center justify-between"
          >
            <span>Toast notification message</span>
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

export default Logininput;
