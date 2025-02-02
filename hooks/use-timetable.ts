import { getCurrDayEndTime } from "@/lib/get-curr-day-end-time";
import { getISOWeek } from "date-fns";
import { useCallback, useEffect, useState } from "react";
import { useLessonDetails } from "./zustand/use-time-left";

// 55 minutes in ms

const timetableEven = [
  ["OPS", "OPS", "OPS", "OPS", "WEB", "WEB", "", "WEB", "WEB"],
  ["AJ", "AJ", "PGR", "POS", "ROB", null, null, null, null],
  ["PGR", "PGR", "AJ", "AJ", null, null, null, null, null],
  ["AJ", "AJ", "ROB", "ROB", "ROB", "", "PRG", "PRG", "PRG"],
  ["POS", "MA", "ČJL", "ZIT", "", "TV", "TV", null, null],
];

const timetableOdd = [
  ["ZIT", "MA", "TV", "TV", "WEB", "WEB", "", "WEB", "WEB"],
  ["", "EK", "ČJM", "MA", "POS", "PGR", "EK", null, null],
  ["ZIT", "ZIT", "MA", "ON", "ČJM", "MA", null, null, null],
  ["EK", "EK", "OPS", "ČJM", "POS", "", "PRG", "PRG", "PRG"],
  ["ROB", "ČJL", "ROB", "OPS", "ČJL", "MA", "ON", null, null],
];

export function useTimetable() {
  const [displayedTimetableIsEven, setIsEven] = useState<boolean | null>(null);
  const [currWeekIsEven, setCurrWeekIsEven] = useState<boolean | null>(null);

  const { setDayEndTimeMs } = useLessonDetails();

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
      const displayedTimetableEven = nextWeekNumber % 2 === 0;
      setIsEven(displayedTimetableEven);
      setCurrWeekIsEven(displayedTimetableEven);
      return;
    }

    // its not weekend get curr day end time
    const displayedTimetableEven = weekNumber % 2 === 0;
    getCurrDayEndTime(weekNumber, timetableEven, timetableOdd, currDay, setDayEndTimeMs);
    setIsEven(displayedTimetableEven);
    setCurrWeekIsEven(displayedTimetableEven);
  }, []);

  return {
    timetable: displayedTimetableIsEven ? timetableEven : timetableOdd,
    switchTimetable,
    displayedTimetableIsEven,
    currWeekIsEven,
  };
}
