import React from "react";

const Dashboard = () => {
  return (
    <div className="w-full h-screen bg-black">
      {/* Top section */}
      <div className="bg-yellow-900 w-full h-[60px]">fffffff</div>

      {/* Bottom section */}
      <div className="flex flex-col lg:flex-row h-[calc(100%-60px)]">
        {/* Green block */}
        <div className="bg-green-700 w-full h-[80px] lg:h-auto lg:w-1/5 lg:flex-none">
          ggg
        </div>

        {/* Amber block */}
        <div className="bg-amber-900 w-full flex-1 lg:w-4/5">
          ggggg
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
