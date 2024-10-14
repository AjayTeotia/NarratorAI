"use client";

import { db } from "@/configs/DB";
import { StoryData } from "@/configs/Schema";
import { eq } from "drizzle-orm";
import React from "react";
import StoryBasicInfo from "../components/StoryBasicInfo";
import StoryChapter from "./StoryChapter";

const View = ({ params }) => {
  console.log("params", params);
  const [story, setStory] = React.useState([]);

  const GetStory = async () => {
    const res = await db
      .select()
      .from(StoryData)
      .where(eq(StoryData?.storyId, params?.storyId));

    console.log(res);

    setStory(res[0]);
  };

  React.useEffect(() => {
    params && GetStory();
  }, [params]);

  return (
    <div>
      <StoryBasicInfo story={story} />

      <StoryChapter story={story} />
    </div>
  );
};

export default View;
