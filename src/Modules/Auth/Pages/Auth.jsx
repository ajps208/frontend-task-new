import React from "react";
import Banner from "../../../Components/Banner/Banner";
import AuthForm from "../Components/AuthForm";

const Auth = () => {
  return (

    <div style={{background:"black"}} className=" flex flex-col lg:flex-row min-h-screen">
      {/* Left side - Banner (only visible on large screens) */}
      <div className="w-3/5 hidden lg:flex items-center justify-center">
        <Banner />
      </div>

      {/* Right side - Authentication form */}
      <div className="w-full lg:w-2/5 flex items-center justify-center">
        <AuthForm />
      </div>
    </div>
  );
};

export default Auth;
