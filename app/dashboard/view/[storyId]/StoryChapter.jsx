import React from "react";
import HTMLFlipBook from "react-pageflip";

const StoryChapter = ({ story }) => {
  const chapters = story?.storyOutput?.chapters || [];

  return (
    <div className="flex justify-center items-center border-2 border-darkCyan p-5 rounded-3xl">
      <div className="sm:border-4 p-5 border-darkCyan rounded-3xl shadow-lg">
        <HTMLFlipBook width={300} height={500}>
          <div className="flex items-center justify-center h-full text-2xl font-bold text-darkCyan sm:text-4xl text-center prata-regular">
            {story?.storyOutput?.title || "Untitled Story"}
          </div>

          {chapters.map((item, index) => (
            <div
              className="flex flex-col justify-center items-center"
              key={index}
            >
              <h3 className="text-center font-bold text-darkCyan text-xl md:text-2xl my-3">
                {item.chapter_title}
              </h3>
              <p className="text-center font-semibold text-lg sm:text-xl">
                {item?.description}
              </p>
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
};

export default StoryChapter;
