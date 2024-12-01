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

  const handleChange = useCallback((value: typeof config.font) => {
    setConfig((prev) => ({ ...prev, font: value }));
  }, []);

  return (
    <Select value={config.font} onValueChange={handleChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Choose font" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="font-geist-sans">Geist Sans</SelectItem>
        <SelectItem value="font-geist-mono">Geist Mono</SelectItem>
        <SelectItem value="font-spline-sans-mono">Spline Sans Mono</SelectItem>
      </SelectContent>
    </Select>
  );
}
