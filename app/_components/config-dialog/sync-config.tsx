"use client";

import { useConfigStore } from "@/hooks/zustand/use-config-store";
import { Config } from "@/types/types";
import { useEffect } from "react";

export function SyncConfigWithLocalStorage() {
  const { config, setConfig } = useConfigStore();

  useEffect(() => {
    const configFromStorage = window.localStorage.getItem("config");

    // if there is no config set the default
    if (configFromStorage === null) {
      window.localStorage.setItem("config", JSON.stringify(config));
    }

    // config found, parse it and set it
    if (configFromStorage) {
      const configParsed = JSON.parse(configFromStorage) as Config;
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
