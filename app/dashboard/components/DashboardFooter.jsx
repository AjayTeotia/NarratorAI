"use client";

import {
  GithubIcon,
  InstagramIcon,
  LayoutDashboardIcon,
  LinkedinIcon,
  TelescopeIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardFooter = () => {
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

    /*{
      label: "Contact Us",
      href: "/dashboard/contact",
      icon: <UserIcon />,
    },*/
  ];

  const socialMediaLinks = [
    {
      name: "Instagram",
      link: "https://www.instagram.com/its_ajaay_/?igsh=MzRlODBiNWFlZA%3D%3D",
      icon: <InstagramIcon />,
    },

    {
      name: "Github",
      link: "https://github.com/AjayTeotia",
      icon: <GithubIcon />,
    },

    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/ajay-teotia-20a1a32a7/",
      icon: <LinkedinIcon />,
    },
  ];
  const path = usePathname();

  return (
    <div className="my-5 border-2 border-darkCyan rounded-2xl p-5">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 gap-y-4">
        <div className="flex flex-col text-center items-center justify-center border border-darkCyan p-3 rounded-xl">
          <h1 className="text-2xl sm:text-3xl font-bold prata-regular bg-gradient-to-r from-darkCyan to-greenCyan bg-clip-text text-transparent">
            NarratorAI
          </h1>

          <p className="my-2 text-sm sm:text-lg">
            Craft magical stories for kids within minutes and share with your
            friends to show your creativity.
          </p>
        </div>

        <div className="flex flex-col text-center items-center justify-center border border-darkCyan p-3 rounded-xl">
          <h1 className="bg-gradient-to-r from-darkCyan to-greenCyan bg-clip-text text-transparent text-2xl sm:text-3xl font-bold">
            Quicks Links
          </h1>

          <div className="flex flex-col gap-2 my-5">
            {navItem.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`text-sm sm:text-lg flex items-center justify-center gap-3 hover:bg-gradient-to-r from-darkCyan to-greenCyan hover:font-bold hover:scale-110 transition-all ease-in-out p-2 rounded-full ${
                  path === item.href
                    ? "bg-gradient-to-r from-darkCyan to-greenCyan font-bold"
                    : ""
                }`}
              >
                {item.icon}

                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col text-center items-center justify-center border border-darkCyan p-3 rounded-xl">
          <h1 className="bg-gradient-to-r from-darkCyan to-greenCyan bg-clip-text text-transparent text-2xl sm:text-3xl font-bold">
            Social Media
          </h1>

          <div className="flex flex-col gap-2 my-5">
            {socialMediaLinks.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                target="_blank"
                className={`text-sm sm:text-lg flex items-center justify-center gap-3 hover:bg-gradient-to-r from-darkCyan to-greenCyan hover:font-bold hover:scale-110 transition-all ease-in-out p-2 rounded-full `}
              >
                {item.icon}

                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardFooter;
