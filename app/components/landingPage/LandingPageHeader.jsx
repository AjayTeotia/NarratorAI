import React from "react";
import Logo from "../Logo";
import ThemeSwitcher from "../ThemeSwitcher";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const LandingPageHeader = () => {
  return (
    <div className="flex items-center justify-between p-5 border-b-2 border-darkCyan rounded-full">
      <Logo />

      <div className=""></div>

      <div className="flex gap-2">
        <Link href={"/"} className="prata-regular ">
          <Button className="bg-gradient-to-r from-darkCyan to-greenCyan font-bold">
            Get Started
          </Button>
        </Link>

        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default LandingPageHeader;
