import React from "react";
import Banner from "../../../Components/Banner/Banner";
import Logininput from "../Components/Logininput";
import LoadingNew from "../../../Components/GenralComponents/LoadingNew";
import Dashboard from "../../Dashboard/Pages/Dashboard";


const Login = () => {
  return (
    // <div className="flex flex-col lg:flex-row min-h-screen">
    //   <div className="w-3/5 hidden lg:flex items-center justify-center ">
    //     <Banner />
    //   </div>
    //   <div className="w-full lg:w-2/5 flex items-center justify-center">
    //     <Logininput />
    //   </div>
    // </div>
    // ---------------------------------------------------------
    // <div>
    //   <LoadingNew></LoadingNew>
    // </div>/
    // ---------------------------------------------------------------
    <div>
      <Dashboard></Dashboard>
    </div>
  );
};

export default Login;
