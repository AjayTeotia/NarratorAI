"use client";

import React from "react";
import StorySubject from "./components/StorySubject";

const CreateStory = () => {
  const [userInput, setUserInput] = React.useState("");

  const handleUserInput = (event) => {
    setUserInput((prev) => ({
      ...prev,
      [event.fieldName]: event.fieldValue,
    }));

    console.log("userInput", userInput);
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
        <div className="border border-darkCyan p-5 rounded-2xl">
          <StorySubject onUserInput={handleUserInput} />
        </div>

        <div className="border border-darkCyan p-5 rounded-2xl"></div>

        <div className="border border-darkCyan p-5 rounded-2xl"></div>

        <div className="border border-darkCyan p-5 rounded-2xl"></div>
      </div>
    </div>
  );
};

export default CreateStory;
