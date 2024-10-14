"use client";

import { Label } from "@/components/ui/label";
import Image from "next/image";
import React from "react";

const AgeGroup = ({ onUserInput }) => {
  const [selectAgeGroup, setSelectAgeGroup] = React.useState("");

  const ageGroup = [
    {
      label: "0-2 years",
      imageUrl: "/02year.jpg",
    },

    {
      label: "3-5 years",
      imageUrl: "/35year.jpg",
    },

    {
      label: "6-8 years",
      imageUrl: "/68year.jpg",
    },
  ];

  const handleAgeGroup = (item) => {
    setSelectAgeGroup(item.label);
    onUserInput({
      fieldName: "ageGroup",
      fieldValue: item?.label,
    });
  };

  return (
    <div className="flex flex-col my-2 justify-center items-center">
      <Label className="text-lg sm:text-xl prata-regular bg-gradient-to-r from-darkCyan to-greenCyan bg-clip-text text-transparent font-bold my-4">
        2. Age Group
      </Label>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {ageGroup.map((item, index) => (
          <div
            key={index}
            className={`relative grayscale cursor-pointer hover:grayscale-0 transition-all duration-300 ease-in-out hover:scale-105 ${
              selectAgeGroup === item.label
                ? "grayscale-0 border-2 border-darkCyan rounded-3xl scale-110"
                : "grayscale"
            }`}
            onClick={() => {
              handleAgeGroup(item);
            }}
          >
            <h2 className="absolute bottom-5 w-full text-center bg-gradient-to-r from-darkCyan to-greenCyan p-1 rounded-lg">
              {item.label}
            </h2>

            <Image
              width={300}
              height={500}
              className="object-cover h-[260px] rounded-2xl"
              src={item.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgeGroup;
