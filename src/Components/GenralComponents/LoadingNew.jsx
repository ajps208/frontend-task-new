import React from "react";

const LoadingNew = () => {
  return (
    <div className="w-full h-screen bg-black text-white flex flex-col relative">
      <p className="text-[#A3A3A3] font-mono text-base tracking-wide text-center pt-8">
        Logging you into
      </p>
      <div className="flex-1 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-white font-bold text-[30px]  lg:text-9xl tracking-[0.2em] text-center leading-none">
          FALCON FEEDS
        </h1>
        <p className="text-[#A3A3A3] font-mono text-sm lg:text-xl tracking-wide">
          Cyber Threat Intelligence Platform
        </p>
      </div>
    </div>
  );
};

export default LoadingNew;