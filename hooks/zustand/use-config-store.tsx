import { Config } from "@/types/types";
import { create } from "zustand";

type Store = {
  config: Config;
  setConfig: (config: Config | ((prev: Config) => Config)) => void;
};
export const useConfigStore = create<Store>((set) => ({
  config: {
    font: "font-geist-sans",
    clockAnimation: "default",
    progressBarVariant: "default",
    showProgressBar: true,
    showLessonNumber: true,
    showLessonEndCountdown: true,
    isFetched: false,
    showSeconds: true,
  },
  setConfig: (config) =>
    set((state) => ({ config: typeof config === "function" ? config(state.config) : config })),
}));
