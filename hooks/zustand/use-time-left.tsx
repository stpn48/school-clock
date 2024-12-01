import { create } from "zustand";

type Store = {
  timeLeftMs: number;
  setTimeLeftMs: (timeLeft: number | ((prev: number) => number)) => void;
};
export const useTimeLeft = create<Store>((set) => ({
  timeLeftMs: 0,
  setTimeLeftMs: (timeLeft) =>
    set((state) => ({
      timeLeftMs: typeof timeLeft === "function" ? timeLeft(state.timeLeftMs) : timeLeft,
    })),
}));
