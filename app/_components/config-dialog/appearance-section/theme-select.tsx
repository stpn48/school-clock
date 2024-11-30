import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ThemeSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Choose theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="sans">Dark</SelectItem>
        <SelectItem value="mono">Light</SelectItem>
      </SelectContent>
    </Select>
  );
}
