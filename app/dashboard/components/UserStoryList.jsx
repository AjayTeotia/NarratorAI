"use client";

import { db } from "@/configs/DB";
import { StoryData } from "@/configs/Schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React from "react";
import StoryCard from "./StoryCard";

const UserStoryList = () => {
  const { user } = useUser();
  const [storyList, setStoryList] = React.useState([]);

  const GetUSserStoryList = async () => {
    const res = await db
      .select()
      .from(StoryData)
      .where(eq(StoryData?.createdBy, user?.primaryEmailAddress?.emailAddress));
    setStoryList(res);

    console.log(res);
  };

  React.useEffect(() => {
    user && GetUSserStoryList();
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center my-8 p-5 border-2 border-darkCyan rounded-3xl">
      <h1 className="prata-regular text-2xl sm:text-3xl bg-gradient-to-r from-darkCyan to-greenCyan bg-clip-text text-transparent text-center">
        My All AI Stories
      </h1>

      <div className="grid grid-cols-2 my-5 w-full md:grid-cols-3 gap-5">
        {storyList?.map((story, index) => (
            <StoryCard  key={index} story={story}/>
        ))}
      </div>
    </div>
  );
};

export default UserStoryList;
