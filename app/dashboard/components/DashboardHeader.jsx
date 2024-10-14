"use client";

import Logo from "@/app/components/Logo";
import ThemeSwitcher from "@/app/components/ThemeSwitcher";
import { UserButton } from "@clerk/nextjs";
import { LayoutDashboardIcon, TelescopeIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardHeader = () => {
  const path = usePathname();

  const navItem = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboardIcon />,
    },

    {
      label: "Explore",
      href: "/dashboard/explore",
      icon: <TelescopeIcon />,
    },

    {
      label: "Contact Us",
      href: "/dashboard/contact",
      icon: <UserIcon />,
    },
  ];
  return (
    <div className="p-5 rounded-full border-b-2 border-darkCyan flex items-center justify-between">
      <Logo />

      <div className="flex items-center justify-center gap-5">
        {navItem.map((item, index) => (
          <Link key={index} href={item.href}>
            <div
              className={`p-3 rounded-full flex items-center justify-center gap-1 hover:bg-gradient-to-r from-darkCyan to-greenCyan hover:font-bold hover:scale-110 transition-all ease-in-out ${
                path === item.href
                  ? "bg-gradient-to-r from-darkCyan to-greenCyan font-bold"
                  : ""
              } `}
            >
              {item.icon}

              {item.label}
            </div>
          </Link>
        ))}
      </div>

      <div className="hidden sm:flex gap-2 items-center ">
        <UserButton />

        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default DashboardHeader;
