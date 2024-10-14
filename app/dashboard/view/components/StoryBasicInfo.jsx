import { ArrowUp10Icon, CakeIcon, TimerIcon } from "lucide-react";
import React from "react";

const StoryBasicInfo = ({ story }) => {
  return (
    <div className="my-10 border-2 border-darkCyan p-5 rounded-3xl flex items-center justify-center flex-col">
      <h1 className="bg-gradient-to-r from-darkCyan to-greenCyan bg-clip-text text-transparent font-bold prata-regular text-2xl md:text-4xl text-center my-5">
        {story?.storyInput}
      </h1>

      <div className="my-5 border border-darkCyan rounded-3xl w-full p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <div className="flex items-center gap-3">
            <CakeIcon className="w-8 h-8 stroke-darkCyan" />
            <div className="">
              <h3 className="">Age Group</h3>
              <p className="">{story?.ageGroup}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ArrowUp10Icon className="w-8 h-8 stroke-darkCyan" />
            <div className="">
              <h3 className="">No. of Chapters</h3>
              <p className="">{story?.chapters}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <TimerIcon className="w-8 h-8 stroke-darkCyan" />
            <div className="">
              <h3 className="">Duration</h3>
              <p className="">{story?.duration}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryBasicInfo;
