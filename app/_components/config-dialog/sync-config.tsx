"use client";

import { useConfigStore } from "@/hooks/zustand/use-config-store";
import { useEffect } from "react";

export function SyncConfigWithLocalStorage() {
  const { config, setConfig } = useConfigStore();

  useEffect(() => {
    const config = window.localStorage.getItem("config");

    if (config) {
      const configParsed = JSON.parse(config);
      configParsed.isFetched = true;
      setConfig(configParsed);
    }
  }, []);

  useEffect(() => {
    if (config.isFetched) {
      console.log("Config", config);
      window.localStorage.setItem("config", JSON.stringify(config));
    }
  }, [config]);

  return null;
}
