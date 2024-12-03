import { getCurrDayEndTime } from "@/lib/get-curr-day-end-time";
import { getISOWeek } from "date-fns";
import { useCallback, useEffect, useState } from "react";
import { useTimeLeft } from "./zustand/use-time-left";

// 55 minutes in ms

const timetableEven = [
  ["OPS", "OPS", "OPS", "OPS", "WEB", "WEB", null, "WEB", "WEB"],
  ["AJ", "AJ", "PGR", "POS", "ROB", null, null, null, null],
  ["PGR", "PGR", "AJ", "AJ", null, null, null, null, null],
  ["AJ", "AJ", "ROB", "ROB", "ROB", null, "PRG", "PRG", "PRG"],
  ["POS", "MA", "ČJL", "ZIT", null, "TV", "TV", null, null],
];

const timetableOdd = [
  ["ZIT", "MA", "TV", "TV", "WEB", "WEB", null, "WEB", "WEB"],
  ["", "EK", "ČJM", "MA", "POS", "PGR", "EK", null, null],
  ["ZIT", "ZIT", "MA", "ON", "ČJM", "MA", null, null, null],
  ["EK", "EK", "OPS", "ČJM", "POS", null, "PRG", "PRG", "PRG"],
  ["ROB", "ČJL", "ROB", "OPS", "ČJL", "MA", "ON", null, null],
];

export function useTimetable() {
  const [displayedTimetableIsEven, setIsEven] = useState<boolean | null>(null);
  const [currWeekIsEven, setCurrWeekIsEven] = useState<boolean | null>(null);

  const { setDayEndTimeMs } = useTimeLeft();

  const switchTimetable = useCallback(() => {
    setIsEven((prevIsEven) => !prevIsEven);
  }, []);

  useEffect(() => {
    const todayDate = new Date();
    const weekNumber = getISOWeek(todayDate);
    const currDay = new Date().getDay();

    // its weekend get the next week
    if (currDay === 0 || currDay === 6) {
      const nextWeekNumber = weekNumber + 1;
      const displayedTimetableIsEven = nextWeekNumber % 2 === 0;
      setIsEven(displayedTimetableIsEven);
      setCurrWeekIsEven(displayedTimetableIsEven);
      return;
    }

    // its not weekend get curr day end time
    getCurrDayEndTime(weekNumber, timetableEven, timetableOdd, currDay, setDayEndTimeMs);
    setIsEven(displayedTimetableIsEven);
    setCurrWeekIsEven(displayedTimetableIsEven);
  }, []);

  return {
    timetable: displayedTimetableIsEven ? timetableEven : timetableOdd,
    switchTimetable,
    displayedTimetableIsEven,
    currWeekIsEven,
  };
}
