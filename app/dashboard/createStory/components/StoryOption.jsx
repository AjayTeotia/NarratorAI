"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowUp10Icon, TimerIcon } from "lucide-react";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const StoryOption = ({ onUserInput }) => {
  const [selectStoryOptions, setSelectStoryOptions] = React.useState({
    chapters: "",
    duration: "",
  });

  const handleStoryOptions = (fieldName, fieldValue) => {
    setSelectStoryOptions((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
    onUserInput({
      fieldName,
      fieldValue,
    });
  };

  return (
    <div className="flex flex-col my-2 justify-center items-center">
      <Label className="text-lg sm:text-xl prata-regular bg-gradient-to-r from-darkCyan to-greenCyan bg-clip-text text-transparent font-bold my-2">
        4. Select Option
      </Label>

      <div className="flex flex-col w-full">
        <div>
          <div className="flex items-center gap-2">
            <ArrowUp10Icon className="w-5 h-5" />
            <Label>No. of Chapters</Label>
          </div>

          <Input
            className="w-full my-2"
            type="number"
            placeholder="No. of Chapters"
            min={5}
            onChange={(e) => handleStoryOptions("chapters", e.target.value)}
            value={selectStoryOptions.chapters}
          />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <TimerIcon className="w-5 h-5" />
            <Label>Story Duration</Label>
          </div>

          <Select
            onValueChange={(value) => handleStoryOptions("duration", value)}
            value={selectStoryOptions.duration}
          >
            <SelectTrigger>
              <SelectValue placeholder="Story Duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1 hour">1 hour</SelectItem>
              <SelectItem value="2 hour">2 hour</SelectItem>
              <SelectItem value="More than 3 hours">More than 3 hours</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default StoryOption;
