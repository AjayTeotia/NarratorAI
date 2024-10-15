"use client";

import React from "react";
import StorySubject from "./components/StorySubject";
import AgeGroup from "./components/AgeGroup";
import StoryType from "./components/StoryType";
import StoryOption from "./components/StoryOption";
import { Button } from "@/components/ui/button";
import { GenerateStory } from "@/configs/AIModel";
import { db } from "@/configs/DB";
import { StoryData } from "@/configs/Schema";
import { v4 as uuidv4 } from "uuid";
import LoadingDialog from "@/app/components/LoadingDialog";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

const CreateStory = () => {
  const {user} = useUser();
  const [userInput, setUserInput] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const handleUserInput = (event) => {
    setUserInput((prev) => ({
      ...prev,
      [event.fieldName]: event.fieldValue,
    }));
  };

  const CREATE_STORY_PROMPT = process.env.NEXT_PUBLIC_CREATE_STORY_PROMPT;

  const GenerateStoryByAI = async () => {
    setLoading(true);
    try {
      const FINAL_PROMPT_TEXT = CREATE_STORY_PROMPT.replace(
        "{ageGroup}",
        userInput?.ageGroup
      )
        .replace("{storyType}", userInput?.StoryTypes)
        .replace("{subjectInput}", userInput?.storyTitle)
        .replace("{chapters}", userInput?.chapters)
        .replace("{duration}", userInput?.duration);

      const res = await GenerateStory.sendMessage(FINAL_PROMPT_TEXT);
      const storyOutput = res.response.text();

      const storyId = await SaveInDB(storyOutput);

      router.replace(`/dashboard/view/${storyId}`);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const SaveInDB = async (output) => {
    const uuid = uuidv4();
    try {
      await db.insert(StoryData).values({
        storyId: uuid,
        storyInput: userInput?.storyTitle,
        ageGroup: userInput?.ageGroup,
        storyType: userInput?.StoryTypes,
        chapters: userInput?.chapters,
        duration: userInput?.duration,
        storyOutput: JSON.parse(output),
        createdBy: user?.primaryEmailAddress?.emailAddress
      });

      return uuid;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-8 my-5 border-4 border-darkCyan rounded-2xl">
      <div className="flex flex-col items-center justify-center text-center my-5">
        <h1 className="bg-gradient-to-r from-darkCyan to-greenCyan bg-clip-text text-transparent font-bold prata-regular text-2xl md:text-4xl">
          Create Your Story
        </h1>
        <p className="my-2 text-xl sm:text-2xl">
          Unlock your creativity with AI: Craft stories like never before! Let
          our AI bring your imagination to life, one story at a time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 border-2 rounded-2xl border-darkCyan p-5 gap-10">
        <div className="w-full border border-darkCyan p-5 rounded-2xl">
          <StorySubject onUserInput={handleUserInput} />
        </div>

        <div className="w-full border border-darkCyan p-5 rounded-2xl">
          <AgeGroup onUserInput={handleUserInput} />
        </div>

        <div className="w-full border border-darkCyan p-5 rounded-2xl">
          <StoryType onUserInput={handleUserInput} />
        </div>

        <div className="w-full border border-darkCyan p-5 rounded-2xl">
          <StoryOption onUserInput={handleUserInput} />
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <Button
          className="bg-gradient-to-r from-darkCyan to-greenCyan font-bold"
          onClick={GenerateStoryByAI}
          disabled={loading}
        >
          Generate Story
        </Button>

        <LoadingDialog loading={loading} />
      </div>
    </div>
  );
};

export default CreateStory;
