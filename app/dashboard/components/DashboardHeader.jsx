"use client";

import Logo from "@/app/components/Logo";
import ThemeSwitcher from "@/app/components/ThemeSwitcher";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { UserButton } from "@clerk/nextjs";
import {
  LayoutDashboardIcon,
  MenuIcon,
  TelescopeIcon,
  UserIcon,
  XIcon,
} from "lucide-react";
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

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [loading]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="p-5 rounded-full border-b-2 border-darkCyan flex items-center justify-between">
      <Logo />

      <div className="hidden md:flex items-center justify-center gap-5">
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

      <div className="hidden md:flex gap-2 items-center ">
        {loading ? (
          <Skeleton className="w-8 h-8 rounded-full" />
        ) : (
          <UserButton />
        )}

        <ThemeSwitcher />
      </div>

      <div className="flex items-center md:hidden">
        <Button onClick={toggleMenu} size="icon" variant="ghost">
          {isMenuOpen ? <XIcon /> : <MenuIcon />}{" "}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white bg-opacity-65 backdrop-blur-xl rounded-lg drop-shadow-lg md:hidden">
          {navItem.map((item, index) => (
            <Link key={index} href={item.href}>
              <div key={index} onClick={toggleMenu}>
                <Link href={item.href}>
                  <div
                    className={`flex justify-center items-center gap-1 p-4 border-b-2 border-darkCyan m-2 hover:bg-gradient-to-r from-darkCyan to-greenCyan hover:font-bold transition-all ${
                      path === item.href
                        ? "bg-gradient-to-r from-darkCyan to-brightCyan rounded-xl"
                        : ""
                    }`}
                  >
                    {item.icon}
                    <p>{item.label}</p>
                  </div>
                </Link>
              </div>
            </Link>
          ))}

          <div
            className="flex flex-col border-b-2 border-darkCyan mb-2 items-center gap-2 p-2 justify-center
          "
          >
            {loading ? (
              <Skeleton className="w-7 h-7 rounded-full" />
            ) : (
              <UserButton />
            )}

            <ThemeSwitcher />
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardHeader;
