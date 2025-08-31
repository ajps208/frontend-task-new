import React from "react";
import Banner from "../../../Components/Banner/Banner";
import Logininput from "../Components/Logininput";

const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-3/5 hidden lg:flex items-center justify-center ">
        <Banner />
      </div>
      <div className="w-full lg:w-2/5 flex items-center justify-center">
        <Logininput />
      </div>
    </div>
  );
};

export default Login;
