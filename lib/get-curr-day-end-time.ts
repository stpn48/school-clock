import { getTimestamp } from "./get-timestamp";

const TIMETABLE_DURATION_MS = 55 * 60 * 1000;

export function getCurrDayEndTime(
  weekNumber: number,
  timetableEven: (string | null)[][],
  timetableOdd: (string | null)[][],
  currDay: number,
  setDayEndTimeMs: (dayEndTimeMs: number | null) => void,
) {
  const displayedTimetableIsEven = weekNumber % 2 === 0;

  const curDayTimetable = displayedTimetableIsEven
    ? timetableEven[currDay - 1]
    : timetableOdd[currDay - 1];

  // subtract first 4 lessons of the day because from then on every lesson ends every 55 mins and min day ends after 4th lesson
  const currDayTimetableLengthAfterFourthLesson =
    curDayTimetable.filter((lesson) => lesson !== null).length - 4;

  const minDayEndMs = getTimestamp(11, 25); // 11:25 am
  const dayEndsMs = minDayEndMs + currDayTimetableLengthAfterFourthLesson * TIMETABLE_DURATION_MS;

  setDayEndTimeMs(dayEndsMs);
}
