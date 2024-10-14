import { Label } from "@/components/ui/label";
import Image from "next/image";
import React from "react";

const StoryType = ({ onUserInput }) => {
  const [selectStoryTypes, setSelectStoryTypes] = React.useState("");

  const StoryTypes = [
    {
      label: "Story Book",
      imageUrl: "/story.png",
    },

    {
      label: "Bed Story",
      imageUrl: "/bedStory.jpg",
    },

    {
      label: "Educational Story",
      imageUrl: "/education.png",
    },
  ];

  const handleStoryTypes = (item) => {
    setSelectStoryTypes(item.label);
    onUserInput({
      fieldName: "StoryTypes",
      fieldValue: item?.label,
    });
  };

  return (
    <div className="flex flex-col my-2 justify-center items-center">
      <Label className="text-lg sm:text-xl prata-regular bg-gradient-to-r from-darkCyan to-greenCyan bg-clip-text text-transparent font-bold my-4">
        3. Story Type
      </Label>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {StoryTypes.map((item, index) => (
          <div
            key={index}
            className={`relative grayscale cursor-pointer hover:grayscale-0 transition-all duration-300 ease-in-out hover:scale-105 ${
              selectStoryTypes === item.label
                ? "grayscale-0 border-2 border-darkCyan rounded-3xl scale-110"
                : "grayscale"
            }`}
            onClick={() => {
              handleStoryTypes(item);
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

export default StoryType;
