export type LessonDetails = {
  type: "lesson" | "break";
  lessonNumber: number;
  lessonStartMs: number;
  lessonEndMs: number;
  timeLeftMs: number;
};

export type Config = {
  font: "sans" | "mono";
  clockAnimation: "default" | "reverse" | "random"; //TODO: Rename
  progressBarVariant: "default" | "reverse" | "random"; //TODO: Rename
  showProgressBar: boolean;
  showLessonNumber: boolean;
  showLessonEndCountdown: boolean;
  isFetched: boolean;
};
