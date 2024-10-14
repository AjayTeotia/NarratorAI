import React from "react";
import DashboardHeader from "./components/DashboardHeader";

const DashboardLayout = ({ children }) => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] outfit-regular">
      <DashboardHeader />
      {children}
    </div>
  );
};

export default DashboardLayout;
