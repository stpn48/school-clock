import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ProgressbarVariantSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Choose variant" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="text">In Text</SelectItem>
        <SelectItem value="background">Background</SelectItem>
        <SelectItem value="bottom">On Bottom</SelectItem>
      </SelectContent>
    </Select>
  );
}
