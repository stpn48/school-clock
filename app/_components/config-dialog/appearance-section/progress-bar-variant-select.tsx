"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useConfigStore } from "@/hooks/zustand/use-config-store";

export function ProgressbarVariantSelect() {
  const { config, setConfig } = useConfigStore();

  return (
    <Select
      value={config.progressBarVariant}
      onValueChange={(value: typeof config.progressBarVariant) =>
        setConfig({ ...config, progressBarVariant: value })
      }
    >
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
