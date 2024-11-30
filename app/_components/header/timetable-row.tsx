import React from "react";
import { TimetableCell } from "./timetable-cell";

type Props = {
  row: (string | null)[];
};

export function TimetableRow({ row }: Props) {
  return (
    <div className="grid grid-cols-9 gap-0">
      {row.map((name, i) => (
        <TimetableCell key={i} name={name} />
      ))}
    </div>
  );
}
