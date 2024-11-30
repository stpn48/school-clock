"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useConfigStore } from "@/hooks/zustand/use-config-store";
import { useCallback } from "react";

export function FontSelect() {
  const { config, setConfig } = useConfigStore();

  const handleChange = useCallback((value: "sans" | "mono") => {
    setConfig({ ...config, font: value });
  }, []);

  return (
    <Select value={config.font} onValueChange={handleChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Choose font" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="sans">Sans</SelectItem>
        <SelectItem value="mono">Mono</SelectItem>
      </SelectContent>
    </Select>
  );
}
