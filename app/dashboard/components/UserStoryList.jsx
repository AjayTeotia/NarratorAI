"use client";

import { db } from "@/configs/DB";
import { StoryData } from "@/configs/Schema";
import { useUser } from "@clerk/nextjs";
import { desc, eq } from "drizzle-orm";
import React from "react";
import StoryCard from "./StoryCard";
import { Skeleton } from "@/components/ui/skeleton"; 
const UserStoryList = () => {
  const { user } = useUser();
  const [storyList, setStoryList] = React.useState([]);
  const [loading, setLoading] = React.useState(false); 

  const GetUserStoryList = async () => {
    setLoading(true); 
    const res = await db
      .select()
      .from(StoryData)
      .where(eq(StoryData?.createdBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(StoryData.id));
    
    setStoryList(res);
    setLoading(false); 
    console.log(res);
  };

  React.useEffect(() => {
    if (user) {
      GetUserStoryList();
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center my-8">
      <h1 className="prata-regular text-2xl sm:text-3xl bg-gradient-to-r from-darkCyan to-greenCyan bg-clip-text text-transparent text-center">
        My All AI Stories
      </h1>

      {loading ? ( 
        <div className="grid grid-cols-1 lg:grid-cols-3 my-5 w-full gap-5">
         
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex flex-col">
              <Skeleton className="h-48 w-full mb-4" /> 
              <Skeleton className="h-6 w-full mb-2" /> 
              <Skeleton className="h-4 w-full" /> 
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 my-5 w-full gap-5">
          {storyList?.map((story, index) => (
            <StoryCard key={index} story={story} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserStoryList;
