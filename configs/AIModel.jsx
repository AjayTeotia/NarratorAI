const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const GenerateStory = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          text:
            " create kids' story in full description for undefined Years kids, undefined, story of undefined, give me undefined chapter for the undefined , and  With detailed description and creative title make a long description for each chapter make a title for the story, all in JSON field format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text:
            '```json\n{\n  "title": "The Adventures of Fuzzy the Firefly",\n  "age_range": "3-6 years old",\n  "chapters": [\n    {\n      "chapter_title": "Fuzzy\'s First Flight",\n      "description": "Fuzzy is a little firefly who\'s always dreamed of flying. He watches the other fireflies flitting through the night sky, their tiny lights twinkling like stars. Finally, the day comes when Fuzzy is ready to try flying for the first time. With a big gulp of air and a nervous flutter, he takes his first clumsy leap. At first, he stumbles and wobbles, but with practice and encouragement from his friends, Fuzzy learns to fly higher and higher, his little light shining brightly in the dark."\n    },\n    {\n      "chapter_title": "The Lost Ladybug",\n      "description": "One evening, while Fuzzy is soaring through the night, he sees a tiny ladybug struggling to climb a tall blade of grass. The ladybug is lost and scared, crying out for help. Fuzzy, being a kind and helpful firefly, decides to help her. He uses his bright light to guide the ladybug back to her home, where she is greeted with hugs and kisses from her family. Fuzzy feels proud of himself for being brave and helping someone in need."\n    },\n    {\n      "chapter_title": "The Mystery of the Missing Flowers",\n      "description": "The next day, Fuzzy wakes up to a strange sight. All the beautiful flowers in the meadow have disappeared! The other fireflies are worried, as the flowers are their favorite place to gather and dance. Fuzzy, determined to solve the mystery, sets off on an investigation. He follows clues, talks to the other insects, and eventually discovers that a mischievous group of squirrels have been playing hide-and-seek with the flowers. With a little bit of persuasion, the squirrels agree to return the flowers to their rightful place, and the meadow is once again filled with vibrant colors and sweet scents."\n    },\n    {\n      "chapter_title": "Fuzzy\'s Big Dream",\n      "description": "Fuzzy is growing up, and he starts dreaming of a big adventure. He wants to see the world beyond the meadow, to explore new places and meet new friends. His friends encourage him to follow his dreams and tell him stories of faraway lands and magical creatures. Fuzzy gathers his courage and packs his tiny backpack with a few essentials: a warm glow-stick, a tiny map, and a big, brave heart. He sets off on his adventure, ready to face whatever challenges come his way."\n    }\n  ]\n}\n``` \n',
        },
      ],
    },
  ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
