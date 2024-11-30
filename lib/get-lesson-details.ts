import { LessonDetails } from "@/types/types";
import { getTimestamp } from "./get-timestamp";

const LESSON_DURATION_MS = 45 * 60 * 1000; // 45 minutes

// lesson start times
const lessons = [
  { hour: 7, minute: 50, lessonNumber: 1 },
  { hour: 8, minute: 40, lessonNumber: 2 },
  { hour: 9, minute: 45, lessonNumber: 3 },
  { hour: 10, minute: 40, lessonNumber: 4 },
  { hour: 11, minute: 35, lessonNumber: 5 },
  { hour: 12, minute: 30, lessonNumber: 6 },
  { hour: 13, minute: 25, lessonNumber: 7 },
  { hour: 14, minute: 20, lessonNumber: 8 },
  { hour: 15, minute: 15, lessonNumber: 9 },
];

// null if not in school time
export function getLessonDetails(): LessonDetails | null | undefined {
  const nowMs = new Date().getTime();
  // const nowMs = getTimestamp(9, 46); // TODO: Remove this currently simulating time

  // beyond school time
  const lastLessonEndMs = getTimestamp(16, 0);
  if (nowMs > lastLessonEndMs) {
    return null;
  }

  // loop over lesson start times
  for (let i = 0; i < lessons.length; i++) {
    const lessonStartMs = getTimestamp(lessons[i].hour, lessons[i].minute);
    const lessonEndMs = lessonStartMs + LESSON_DURATION_MS;

    // Check if the current time is during a lesson
    if (nowMs > lessonStartMs && nowMs < lessonEndMs) {
      const timeLeftMs = lessonEndMs - nowMs;
      const timeLeftRounded = Math.ceil(timeLeftMs / 1000) * 1000;

      return {
        type: "lesson",
        lessonNumber: lessons[i].lessonNumber,
        lessonStartMs,
        lessonEndMs,
        timeLeftMs: timeLeftRounded,
      };
    }

    // Check if the current time is during a break
    if (i < lessons.length - 1) {
      const breakStartMs = lessonEndMs;

      const nextLessonStartMs = getTimestamp(lessons[i + 1].hour, lessons[i + 1].minute);
      const breakEndMs = nextLessonStartMs;

      if (nowMs > breakStartMs && nowMs < breakEndMs) {
        const timeLeftMs = breakEndMs - nowMs;
        const timeLeftRounded = Math.ceil(timeLeftMs / 1000) * 1000;

        return {
          type: "break",
          lessonNumber: i + 1,
          lessonEndMs: breakStartMs,
          lessonStartMs: breakEndMs,
          timeLeftMs: timeLeftRounded,
        };
      }
    }
  }

  // If we don't find a match
  console.error("Lesson details not found");
  return undefined;
}
