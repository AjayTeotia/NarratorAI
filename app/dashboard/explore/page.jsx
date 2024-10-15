"use client";

import { db } from "@/configs/DB";
import { StoryData } from "@/configs/Schema";
import { desc } from "drizzle-orm";
import React from "react";
import StoryCard from "../components/StoryCard";
import { Skeleton } from "@/components/ui/skeleton";

const Explore = () => {
  const [storyList, setStoryList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const ExploreCard = async () => {
    setLoading(true);
    const res = await db.select().from(StoryData).orderBy(desc(StoryData.id));

    // console.log(res);

    setStoryList(res);
    setLoading(false);
  };

  React.useEffect(() => {
    ExploreCard();
  }, []);

  return (
    <div className="my-8">
      {loading ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 my-5 w-full gap-5">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="flex flex-col">
              <Skeleton className="h-48 w-full mb-4" />
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-center flex-col text-center">
            <h2 className="bg-gradient-to-r from-darkCyan to-greenCyan bg-clip-text text-transparent font-bold prata-regular text-2xl md:text-4xl">
              Welcome to the explore page
            </h2>
            <p className="text-lg sm:text-xl">
              See all the stories created by the other users
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 my-5 w-full gap-5">
            {storyList?.map((story, index) => (
              <StoryCard key={index} story={story} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Explore;
