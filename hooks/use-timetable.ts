import { getISOWeek } from "date-fns";
import { useCallback, useEffect, useState } from "react";

const timetableEven = [
  ["OPS", "OPS", "OPS", "OPS", "WEB", "WEB", null, "WEB", "WEB"],
  ["AJ", "AJ", "PGR", "POS", "ROB", null, null, null, null],
  ["PGR", "PGR", "AJ", "AJ", null, null, null, null, null],
  ["AJ", "AJ", "ROB", "ROB", "ROB", null, "PRG", "PRG", "PRG"],
  ["POS", "MA", "ČJL", "ZIT", null, "TV", "TV", null, null],
];

const timetableOdd = [
  ["ZIT ", "MA", "TV", "TV", "WEB", "WEB", null, "WEB", "WEB"],
  [null, "EK", "ČJM", "MA", "POS", "PGR", "EK", null, null],
  ["ZIT", "ZIT", "MA", "ON", "ČJM", "MA", null, null, null],
  ["EK", "EK", "OPS", "ČJM", "POS", null, "PRG", "PRG", "PRG"],
  ["ROB", "ČJL", "ROB", "OPS", "ČJL", "MA", "ON", null, null],
];

export function useTimetable() {
  const [isEven, setIsEven] = useState<boolean | null>(null);
  const [currWeekIsEven, setCurrWeekIsEven] = useState<boolean | null>(null);

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
      const isEven = nextWeekNumber % 2 === 0;
      setIsEven(isEven);
      setCurrWeekIsEven(isEven);
      return;
    }

    // its not weekend get the curr week
    const isEven = weekNumber % 2 === 0;
    setIsEven(isEven);
    setCurrWeekIsEven(isEven);
  }, []);

  return {
    timetable: isEven ? timetableEven : timetableOdd,
    switchTimetable,
    isEven,
    currWeekIsEven,
  };
}
