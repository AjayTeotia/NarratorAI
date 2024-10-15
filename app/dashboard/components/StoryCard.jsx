import { BookIcon, CakeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const StoryCard = ({ story }) => {
  return (
    <div className="max-w-sm mx-auto">
      <Link href={`/dashboard/view/${story?.storyId}`}>
        <div className="border border-darkCyan rounded-3xl p-6 flex flex-col items-center justify-center text-center transition-transform hover:scale-105">
          <h2 className="prata-regular text-lg md:text-xl bg-gradient-to-r from-darkCyan to-greenCyan bg-clip-text text-transparent font-bold mb-4">
            {story?.storyOutput?.title}
          </h2>

          <div className="flex items-center justify-center gap-8 my-4 font-bold text-darkCyan">
            <p className="flex items-center gap-2 bg-greenCyan p-3 rounded-full shadow-lg">
              <CakeIcon className="w-6 h-6 stroke-darkCyan" />
              <span className="text-sm">{story?.ageGroup}</span>
            </p>

            <p className="flex items-center gap-2 bg-greenCyan p-3 rounded-full shadow-lg">
              <BookIcon className="w-6 h-6 stroke-darkCyan" />
              <span className="text-sm">{story?.storyType}</span>
            </p>
          </div>

          <p className="p-2 border border-darkCyan rounded-full shadow-lg text-darkCyan">
            {story?.createdBy}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default StoryCard;
