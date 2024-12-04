import { LessonDetails } from "@/types/types";
import { create } from "zustand";

type Store = {
  timeLeftMs: number | null;
  setTimeLeftMs: (timeLeft: number | ((prev: number | null) => number | null)) => void;

  dayEndTimeMs: number | null;
  setDayEndTimeMs: (dayEndTimeMs: number | null) => void;

  lessonDetails: LessonDetails | null | undefined;
  setLessonDetails: (lessonDetails: LessonDetails | null | undefined) => void;
};
export const useLessonDetails = create<Store>((set) => ({
  timeLeftMs: null,
  setTimeLeftMs: (timeLeft) =>
    set((state) => ({
      timeLeftMs: typeof timeLeft === "function" ? timeLeft(state.timeLeftMs) : timeLeft,
    })),

  dayEndTimeMs: null,
  setDayEndTimeMs: (dayEndTimeMs) => set({ dayEndTimeMs }),

  lessonDetails: undefined,
  setLessonDetails: (lessonDetails) => set({ lessonDetails }),
}));
