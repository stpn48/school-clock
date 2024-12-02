import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useConfigStore } from "@/hooks/zustand/use-config-store";
import { useCallback } from "react";

export function ClockAnimationSelect() {
  const { config, setConfig } = useConfigStore();

  const onValueChange = useCallback((value: typeof config.clockAnimation) => {
    setConfig((prev) => ({ ...prev, clockAnimation: value }));
  }, []);

  return (
    <Select onValueChange={onValueChange} value={config.clockAnimation}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Choose animation" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="default">Default</SelectItem>
        <SelectItem value="pop-in">Pop In</SelectItem>
        <SelectItem value="land-in">Land In</SelectItem>
        <SelectItem value="flip-in">Flip In</SelectItem>
      </SelectContent>
    </Select>
  );
}
