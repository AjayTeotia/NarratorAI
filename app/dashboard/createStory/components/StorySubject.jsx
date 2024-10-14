import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const StorySubject = ({ onUserInput }) => {
  return (
    <div className="flex flex-col my-2 justify-center items-center">
      <Label className="text-lg sm:text-xl prata-regular bg-gradient-to-r from-darkCyan to-greenCyan bg-clip-text text-transparent font-bold my-2">
        1. Input the title of your story
      </Label>

      <Textarea
        className="w-full my-2"
        required
        placeholder="Story Title"
        rows={8}
        onChange={(e) => {
          onUserInput({
            fieldName: "storyTitle",
            fieldValue: e.target.value,
          });
        }}
      />
    </div>
  );
};

export default StorySubject;
