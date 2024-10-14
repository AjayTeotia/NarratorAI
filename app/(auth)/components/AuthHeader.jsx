import Logo from "@/app/components/Logo";
import ThemeSwitcher from "@/app/components/ThemeSwitcher";
import React from "react";

const AuthHeader = () => {
  return (
    <div className="flex items-center justify-between p-5 border-b-2 rounded-full border-darkCyan">
      <Logo />

      <div className="">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default AuthHeader;
