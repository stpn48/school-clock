import { Target, Transition } from "motion/react";

export type LessonDetails = {
  type: "lesson" | "break";
  lessonNumber: number;
  lessonStartMs: number;
  lessonEndMs: number;
  timeLeftMs: number;
};

export type Config = {
  font: "font-geist-sans" | "font-geist-mono" | "font-spline-sans-mono" | "font-pt-serif";
  clockAnimation: "default" | "pop-in" | "land-in" | "flip-in"; //TODO: Rename
  progressBarVariant: "default" | "background" | "text";
  showProgressBar: boolean;
  showLessonNumber: boolean;
  showLessonEndCountdown: boolean;
  showSeconds: boolean;
  isFetched: boolean;
};

export type Themes = ["dark", "YK7-blue", "midnight-tokyo", "whipped-coral", "green-wean"];

export type AnimationType = {
  initial: Target;
  animate: Target;
  transition: Transition;
};
