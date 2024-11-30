import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ClockAnimationSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Choose animation" />
      </SelectTrigger>
      <SelectContent>
        {/* TODO: Name them */}
        <SelectItem value="animation 1">1</SelectItem>
        <SelectItem value="animation 2">2</SelectItem>
        <SelectItem value="animation 3">3</SelectItem>
      </SelectContent>
    </Select>
  );
}
