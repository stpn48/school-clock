import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function FontSelect() {
  return (
    <Select>
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
