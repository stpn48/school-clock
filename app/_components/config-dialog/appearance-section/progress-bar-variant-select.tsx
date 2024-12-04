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

export function ProgressbarVariantSelect() {
  const { config, setConfig } = useConfigStore();

  const handleValueChange = useCallback((value: typeof config.progressBarVariant) => {
    if (value === "text") {
      setConfig((prev) => ({ ...prev, font: "font-geist-mono" }));
    }

    setConfig((prev) => ({ ...prev, progressBarVariant: value }));
  }, []);

  return (
    <Select value={config.progressBarVariant} onValueChange={handleValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Choose variant" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="default">Default</SelectItem>
        <SelectItem value="background">Background</SelectItem>
        <SelectItem value="text">In Text</SelectItem>
        <SelectItem value="off">Off</SelectItem>
      </SelectContent>
    </Select>
  );
}
