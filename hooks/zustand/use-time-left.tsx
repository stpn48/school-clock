import { create } from "zustand";

type Store = {
  timeLeftMs: number | null;
  setTimeLeftMs: (timeLeft: number | ((prev: number | null) => number | null)) => void;
};
export const useTimeLeft = create<Store>((set) => ({
  timeLeftMs: null,
  setTimeLeftMs: (timeLeft) =>
    set((state) => ({
      timeLeftMs: typeof timeLeft === "function" ? timeLeft(state.timeLeftMs) : timeLeft,
    })),
}));
