"use client";

import { useConfigStore } from "@/hooks/zustand/use-config-store";
import { Config } from "@/types/types";
import { useEffect } from "react";

export function SyncConfigWithLocalStorage() {
  const { config, setConfig } = useConfigStore();

  useEffect(() => {
    const config = window.localStorage.getItem("config");

    // if there is no config set the default
    if (config === null) {
      window.localStorage.setItem(
        "config",
        JSON.stringify({
          font: "sans",
          clockAnimation: "default",
          progressBarVariant: "default",
          showProgressBar: true,
          showLessonNumber: true,
          showLessonEndCountdown: true,
          isFetched: false,
        }),
      );
    }

    // config found, parse it and set it
    if (config) {
      const configParsed = JSON.parse(config) as Config;
      configParsed.isFetched = true;
      setConfig(configParsed);
    }
  }, []);

  useEffect(() => {
    // config was updated, if its not the initial config that mean's it was retrieved from local storage already, save it
    if (config.isFetched) {
      console.log("Config", config);
      window.localStorage.setItem("config", JSON.stringify(config));
    }
  }, [config]);

  return null;
}
