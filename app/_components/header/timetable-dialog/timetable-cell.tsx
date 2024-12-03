import { cn } from "@/lib/utils";

type Props = {
  name: string | null;
  isActive?: boolean;
};

export function TimetableCell({ name, isActive }: Props) {
  return (
    <div
      className={cn(
        "z-10 flex aspect-square max-h-[100px] max-w-[100px] flex-shrink items-center justify-center border-r border-border p-2 text-xs last:border-r-0 md:text-base",
        isActive && "rounded-md border border-primary last:border-r",
        name === "MA" && "text-[#B71C1C]",
        name === "EK" && "text-amber-600",
        name === "WEB" && "text-green-500",
        name === "TV" && "text-green-500",
        name === "ZIT" && "text-lime-700",
        name === "AJ" && "text-yellow-500",
        name === "PRG" && "text-yellow-600",
        name === "ROB" && "text-amber-800",
        (name === "ČJM" || name === "ON" || name === "ČJL") && "text-green-900",
        (name === "POS" || name === "OPS") && "text-lime-700",
        name === "PGR" && "text-green-600",
      )}
    >
      {name}
    </div>
  );
}
