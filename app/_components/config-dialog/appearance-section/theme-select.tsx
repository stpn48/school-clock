"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSelect() {
  const { theme, setTheme } = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Select value={theme} onValueChange={setTheme}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Choose theme" />
      </SelectTrigger>
      <SelectContent className="max-h-[200px] overflow-auto">
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="YK7-blue">YK7-blue</SelectItem>
        <SelectItem value="midnight-tokyo">Midnight Tokyo</SelectItem>
        <SelectItem value="whipped-coral">Whipped Coral</SelectItem>
        <SelectItem value="green-wean">Green Wean</SelectItem>
      </SelectContent>
    </Select>
  );
}
