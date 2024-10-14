import React from "react";
import DashboardHeader from "./components/DashboardHeader";
import DashboardFooter from "./components/DashboardFooter";

const DashboardLayout = ({ children }) => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] outfit-regular">
      <DashboardHeader />

      {children}

      <DashboardFooter />
    </div>
  );
};

export default DashboardLayout;
