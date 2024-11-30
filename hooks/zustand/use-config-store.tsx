import { Config } from "@/types/types";
import { create } from "zustand";

type Store = {
  config: Config;
  setConfig: (config: Config) => void;
};
export const useConfigStore = create<Store>((set) => ({
  config: {
    font: "sans",
    clockAnimation: "default",
    progressBarVariant: "default",
    showProgressBar: true,
    showLessonNumber: true,
    showLessonEndCountdown: true,
    isFetched: false,
  },
  setConfig: (config) => set({ config }),
}));
