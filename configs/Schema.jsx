import {
  json,
  numeric,
  pgTable,
  serial,
  text,
  varchar,
} from "drizzle-orm/pg-core";

export const StoryData = pgTable("story_data", {
  id: serial("id").primaryKey(),
  storyId: varchar("story_id").notNull(),
  storyInput: text("story_input").notNull(),
  ageGroup: varchar("age_group").notNull(),
  storyType: varchar("story_type").notNull(),
  chapters: numeric("chapters").notNull(),
  duration: varchar("duration").notNull(),
  storyOutput: json("story_output").notNull(),
  createdBy: varchar("created_by").notNull(),
});
