import React, { useEffect, useState } from "react";
import logoonly from "../../../assets/logoonly.png";
import help from "../../../assets/help_center.png";
import feedback from "../../../assets/history_edu.png";
import dashboard_logo from "../../../assets/dashboard _logo.png";
import campigns from "../../../assets/emoji_flags.png";
import allfeed from "../../../assets/library_books.png";
import incidents from "../../../assets/nearby_error.png";
import contacts from "../../../assets/contacts.png";
import "../../../App.css";
import LoadingNew from "../../../Components/GenralComponents/LoadingNew";

const Dashboard = () => {
  // state for sidebar selection
  const [selected, setSelected] = useState("overview");

  // loading state to show spinner initially
  const [loading, setLoading] = useState(true);

  // state for avatar dropdown menu
  const [openMenu, setOpenMenu] = useState(false);

  // user email fetched from localStorage
  const [useremail, setUseremail] = useState(null);

  // get email from localStorage on mount
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setUseremail(JSON.parse(storedEmail));
    }
  }, []);

  // set loading for 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    window.location.reload();
  };

  // main sidebar items
  const baseItems = [
    { id: "overview", label: "OVERVIEW", icon: dashboard_logo },
    { id: "allfeed", label: "ALL FEED", icon: allfeed },
    { id: "profiles", label: "PROFILES", icon: contacts },
    { id: "incidents", label: "INCIDENTS", icon: incidents },
    { id: "campaigns", label: "CAMPAIGNS", icon: campigns },
  ];

  // show loader on initial load
  if (loading) {
    return <LoadingNew />;
  }

  return (
    <div className="w-full h-screen bg-black flex flex-col">
      {/* Top Header Section */}
      <div className="w-full h-[4.5rem] lg:h-[7.7rem] flex items-center justify-center">
        <div className="h-5/6 w-[90%] flex items-center justify-between">
          {/* Left - Logo & Breadcrumb */}
          <div className="w-[25%] h-full flex items-center justify-between">
            <img
              className="object-contain w-[2.272rem] h-[2.272rem] lg:w-[3.424rem] lg:h-[3.424rem]"
              src={logoonly}
              alt="logo"
            />
            {/* Breadcrumb - only on large screens */}
            <div className="hidden lg:block">
              <i className="fa-regular fa-circle text-violet-500"></i>{" "}
              <span className="text-gray-500">DASHBOARD / </span>{" "}
              <span className="text-white">OVERVIEW</span>
            </div>
          </div>

          {/* Right - Buttons & Avatar */}
          <div className="w-[55%] lg:w-[51%] h-full flex items-center justify-evenly">
            {/* Upgrade Button */}
            <div className="w-[6.75rem] lg:w-[9.25rem] h-[1.4rem] bg-[#544415] rounded-sm text-[#FCD34D] text-[0.45rem] lg:text-[0.55rem] flex items-center justify-center gap-1">
              <i className="fa-regular fa-gem"></i>
              UPGRADE TO PREMIUM
            </div>

            {/* Help Center */}
            <div className=" w-[8rem] h-[1.4rem] text-[0.45rem] lg:text-[0.85rem] text-white hidden lg:flex lg:items-center lg:justify-evenly gap-1">
              <img src={help} alt="help" />
              HELP CENTER
            </div>

            {/* Feedback */}
            <div className="w-[8rem] h-[1.4rem] text-[0.45rem] lg:text-[0.85rem] text-white hidden lg:flex lg:items-center lg:justify-evenly gap-1">
              <img src={feedback} alt="feedback" />
              FEEDBACK
            </div>

            {/* Avatar */}
            <div className="relative">
              <div
                onClick={() => setOpenMenu(!openMenu)}
                className="cursor-pointer relative inline-flex items-center justify-center w-[1.5rem] h-[1.5rem] lg:w-[2rem] lg:h-[2rem] overflow-hidden bg-green-600 rounded-full"
              >
                <span className="font-medium text-gray-600 dark:text-gray-600 capitalize">
                  {useremail?.slice(0, 1)}
                </span>
              </div>

              {/* Dropdown Menu */}
              {openMenu && (
                <div className="absolute top-10 right-0 mt-1 w-20 bg-white shadow-lg rounded-md py-1 z-50">
                  <button
                    onClick={handleLogout}
                    className="w-full text-center px-3 py-1 text-xs text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Sidebar + Main Content */}
      <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
        {/* Sidebar Block */}
        <div className="responsive-margin1 w-full h-[4rem] lg:h-full lg:w-[15%] scroll-hidden">
          <div
            className="w-full lg:h-[80%] flex lg:flex-col items-center 
                  justify-start lg:justify-evenly overflow-x-auto lg:overflow-x-visible scrollbar-thin scrollbar-thumb-black scrollbar-track-black"
          >
            {/* Render all sidebar items */}
            {baseItems?.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelected(item.id)}
                className={`flex-shrink-0 w-[7.9rem] lg:w-[6.204rem] h-[1.8rem] lg:h-[5.4rem] text-[0.56rem] lg:text-[0.61rem] rounded-sm lg:rounded-md flex flex-row lg:flex-col items-center justify-center gap-3 cursor-pointer transition
                ${
                  selected === item.id
                    ? "text-white bg-violet-500 lg:bg-gray-900 shadow-lg font-semibold"
                    : "text-white/60"
                }
                 hover:text-white hover:border-2 hover:border-white/40 hover:shadow-md`}
              >
                <img
                  className="w-3 h-3 lg:w-6 lg:h-6"
                  src={item.icon}
                  alt={item.label}
                />
                {item.label}
              </div>
            ))}
          </div>

          {/* Breadcrumb for mobile */}
          <div
            style={{ margin: "0.96rem" }}
            className="lg:hidden text-[0.6rem]"
          >
            <i className="fa-regular fa-circle text-violet-500"></i>{" "}
            <span className="text-gray-500">DASHBOARD / </span>{" "}
            <span className="text-white">OVERVIEW</span>
          </div>
        </div>

        {/* Main Content Block */}
        <div
          style={{ padding: "20px" }}
          className="w-full flex-1 lg:w-[85%] p-3 lg:p-6 overflow-auto min-w-0"
        >
          <div className="font-['Public Sans'] text-[#262626]">
            {/* Greeting */}
            <p className="font-bold text-[19px] leading-[24px] sm:text-[27px] sm:leading-[32px] lg:text-[38px] lg:leading-[51px] break-words">
              Hi {useremail},
            </p>
            <p className="font-normal text-[10px] leading-[16px] lg:text-[13px] lg:leading-[19px]">
              Here's your summary for the day
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;