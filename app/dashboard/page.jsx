"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Dashboard = () => {
  const { user } = useUser();
  return (
    <div className="my-5 p-5 flex flex-col justify-between sm:flex-row border-b-4 border-darkCyan">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-2xl md:text-3xl">
          Welcome back, {""}
          <span className="font-bold prata-regular bg-gradient-to-r from-darkCyan to-greenCyan bg-clip-text text-transparent">
            {user?.fullName}
          </span>
        </h1>

        <p className="text-lg md:text-xl my-2">
          Unlock your creativity with AI: Craft stories like never before!Let
          our AI bring your imagination to life, one story at a time.
        </p>
      </div>

      <div className="flex items-center justify-center">
        <Link href="/dashboard/createStory">
          <Button className="bg-gradient-to-r from-darkCyan to-greenCyan font-bold">
            <PlusIcon /> Create Story
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
