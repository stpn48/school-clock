export type LessonDetails = {
  type: "lesson" | "break";
  lessonNumber: number;
  lessonStartMs: number;
  lessonEndMs: number;
  timeLeftMs: number;
};

export type Config = {
  font: "font-geist-sans" | "font-geist-mono" | "font-helvetica-neue-lt-std";
  clockAnimation: "default" | "reverse" | "random"; //TODO: Rename
  progressBarVariant: "default" | "background" | "text"; //TODO: Rename
  showProgressBar: boolean;
  showLessonNumber: boolean;
  showLessonEndCountdown: boolean;
  showSeconds: boolean;
  isFetched: boolean;
};
