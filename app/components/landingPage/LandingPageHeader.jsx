import React from "react";
import Logo from "../Logo";
import ThemeSwitcher from "../ThemeSwitcher";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";

const LandingPageHeader = () => {
  const { user } = useUser();

  return (
    <div className="flex items-center justify-between p-5 border-b-2 border-darkCyan rounded-full">
      <Logo />

      <div className=""></div>

      <div className="flex gap-2">
        {user ? (
          <Link href={"/dashboard"} className="prata-regular">
            <Button className="bg-gradient-to-r from-darkCyan to-greenCyan font-bold hidden sm:block">
              Dashboard
            </Button>
          </Link>
        ) : (
          <Link href={"/sign-up"} className="prata-regular ">
            <Button className="bg-gradient-to-r from-darkCyan to-greenCyan font-bold hidden sm:block">
              Get Started
            </Button>
          </Link>
        )}

        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default LandingPageHeader;
