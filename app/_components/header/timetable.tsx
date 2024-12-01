"use client";

import { TimetableRow } from "./timetable-row";

type Props = {
  timetable: (string | null)[][];
  currWeekIsEven: boolean | null;
  isEven: boolean | null;
};

export function Timetable({ timetable, currWeekIsEven, isEven }: Props) {
  const currDay = new Date().getDay();
  // const currDay = 1;

  const isCurrWeek = currWeekIsEven === isEven;

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="grid max-w-[900px] flex-grow grid-rows-5 rounded-sm border border-border">
        {timetable.map((row, i) => (
          <TimetableRow key={i} row={row} isCurrDay={isCurrWeek && currDay === i + 1} />
        ))}
      </div>
    </div>
  );
}
