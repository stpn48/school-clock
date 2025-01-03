"use client";

import { useLessonDetails } from "@/hooks/zustand/use-time-left";
import { TimetableCell } from "./timetable-cell";

type Props = {
  row: (string | null)[];
  isCurrDay?: boolean;
};

export function TimetableRow({ row, isCurrDay }: Props) {
  const { lessonDetails } = useLessonDetails();

  return (
    <div className="grid max-w-[900px] grid-cols-9 gap-0 border-b border-border bg-background first:rounded-t-sm last:rounded-b-sm last:border-b-0">
      {row.map((name, i) => (
        <TimetableCell
          key={i}
          name={name}
          isActive={isCurrDay && lessonDetails?.lessonNumber === i + 1}
        />
      ))}
    </div>
  );
}
