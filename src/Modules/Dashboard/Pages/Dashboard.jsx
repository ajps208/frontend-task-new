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
      <div className="w-full h-[5.625rem] lg:h-[9.625rem] flex items-center justify-center">
        <div className="h-5/6 w-[90%] flex items-center justify-between">
          {/* Left - Logo & Breadcrumb */}
          <div className="w-[25%] h-full flex items-center justify-between">
            <img
              className="object-contain w-[2.84rem] h-[2.84rem] lg:w-[4.28rem] lg:h-[4.28rem]"
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
            <div className="w-[8.4375rem] lg:w-[11.5625rem] h-[1.75rem] bg-[#544415] rounded-sm text-[#FCD34D] text-[0.5625rem] lg:text-[0.6875rem] flex items-center justify-center gap-1">
              <i className="fa-regular fa-gem"></i>
              UPGRADE TO PREMIUM
            </div>

            {/* Help Center */}
            <div className="w-[9.625rem] h-[1.75rem] text-white hidden lg:flex lg:items-center lg:justify-end gap-1">
              <img src={help} alt="help" />
              HELP CENTER
            </div>

            {/* Feedback */}
            <div className="w-[9.625rem] h-[1.75rem] text-white hidden lg:flex lg:items-center lg:justify-end gap-1">
              <img src={feedback} alt="feedback" />
              FEEDBACK
            </div>

            {/* Avatar */}
            <div className="relative">
              <div
                onClick={() => setOpenMenu(!openMenu)}
                className="cursor-pointer relative inline-flex items-center justify-center w-[1.875rem] h-[1.875rem] lg:w-[2.5rem] lg:h-[2.5rem] overflow-hidden bg-green-600 rounded-full"
              >
                <span className="font-medium text-gray-600 dark:text-gray-600 capitalize">
                  {useremail?.slice(0, 1)}
                </span>
              </div>

              {/* Dropdown Menu */}
              {openMenu && (
                <div className="absolute top-13 right-0 mt-2 w-24 bg-white shadow-lg rounded-md py-2 z-50">
                  <button
                    onClick={handleLogout}
                    className="w-full text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
        <div className="responsive-margin1 w-full h-[5rem] lg:h-full lg:w-[15%] scroll-hidden">
          <div
            className="w-full lg:h-[80%] flex lg:flex-col items-center 
                  justify-start lg:justify-evenly overflow-x-auto lg:overflow-x-visible scrollbar-thin scrollbar-thumb-black scrollbar-track-black"
          >
            {/* Render all sidebar items */}
            {baseItems?.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelected(item.id)}
                className={`flex-shrink-0 w-[7.755rem] h-[2rem] lg:h-[6.75rem] text-[0.525rem] lg:text-[0.7625rem] rounded-md flex flex-row lg:flex-col items-center justify-center gap-4 cursor-pointer transition
                ${
                  selected === item.id
                    ? "text-white bg-violet-500 lg:bg-gray-900 shadow-lg font-semibold"
                    : "text-white/60"
                }
                 hover:text-white hover:border-2 hover:border-white/40 hover:shadow-md`}
              >
                <img
                  className="w-4 h-4 lg:w-8 lg:h-8"
                  src={item.icon}
                  alt={item.label}
                />
                {item.label}
              </div>
            ))}
          </div>

          {/* Breadcrumb for mobile */}
          <div
            style={{ margin: "1.2rem" }}
            className="lg:hidden text-[0.625rem]"
          >
            <i className="fa-regular fa-circle text-violet-500"></i>{" "}
            <span className="text-gray-500">DASHBOARD / </span>{" "}
            <span className="text-white">OVERVIEW</span>
          </div>
        </div>

        {/* Main Content Block */}
        <div
          style={{ padding: "10px" }}
          className="w-full flex-1 lg:w-[85%] p-4 lg:p-8 overflow-auto min-w-0"
        >
          <div className="font-['Public Sans'] text-[#262626]">
            {/* Greeting */}
            <p className="font-bold text-[24px] leading-[30px] sm:text-[34px] sm:leading-[40px] lg:text-[48px] lg:leading-[64px] break-words">
              Hi {useremail},
            </p>
            <p className="font-normal text-[12px] leading-[20px] lg:text-[16px] lg:leading-[24px]">
              Here's your summary for the day
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
