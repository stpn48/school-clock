export type LessonDetails = {
  type: "lesson" | "break";
  lessonNumber: number;
  lessonStartMs: number;
  lessonEndMs: number;
  timeLeftMs: number;
};

export type Config = {
  font: "font-geist-sans" | "font-geist-mono" | "font-spline-sans-mono";
  clockAnimation: "default" | "reverse" | "random"; //TODO: Rename
  progressBarVariant: "default" | "background" | "text";
  showProgressBar: boolean;
  showLessonNumber: boolean;
  showLessonEndCountdown: boolean;
  showSeconds: boolean;
  isFetched: boolean;
};
