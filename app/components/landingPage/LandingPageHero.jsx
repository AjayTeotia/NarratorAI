import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LandingPageHero = () => {
    const { user } = useUser();
  return (
    <div className="flex items-center justify-center my-10 border-2 border-darkCyan rounded-2xl p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 gap-y-10">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl sm:text-4xl font-semibold">
            Welcome to{" "}
            <span className="font-bold prata-regular bg-gradient-to-r from-darkCyan to-greenCyan bg-clip-text text-transparent">
              NarratorAI
            </span>
          </h1>

          <p className="my-4 text-xl sm:text-2xl">
            Craft magical stories for kids within minutes and share with your
            friends to show your creativity.
          </p>

          {user ? (
            <Link href={"/dashboard"} className="prata-regular">
              <Button className="bg-gradient-to-r from-darkCyan to-greenCyan font-bold hidden sm:block">
                Dashboard
              </Button>
            </Link>
          ) : (
            <Link href={"/sign-up"} className="prata-regular ">
              <Button className="bg-gradient-to-r from-darkCyan to-greenCyan font-bold">
                Get Started
              </Button>
            </Link>
          )}
        </div>

        <div className="flex items-center justify-center">
          <Image
            src={"/landingPageHeroImg.jpg"}
            width={400}
            height={200}
            className="rounded-xl border-2 border-darkCyan hover:scale-105 duration-300 ease-in-out transition-all"
            alt="landing page hero image"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPageHero;
