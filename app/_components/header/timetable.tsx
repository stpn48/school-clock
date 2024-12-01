import { TimetableRow } from "./timetable-row";

const TimetableEven = [
  ["ZIT", "MA", "TV", "TV", "WEB", "WEB", null, "WEB", "WEB"],
  ["ZIT", "MA", "TV", "TV", "WEB", "WEB", null, "WEB", "WEB"],
  ["ZIT", "MA", "TV", "TV", "WEB", "WEB", null, "WEB", "WEB"],
  ["ZIT", "MA", "TV", "TV", "WEB", "WEB", null, "WEB", "WEB"],
  ["ZIT", "MA", "TV", "TV", "WEB", "WEB", null, "WEB", "WEB"],
];

const TimetableOdd = [
  ["ZIT", "MA", "TV", "TV", "WEB", "WEB", null, "WEB", "WEB"],
  ["ZIT", "MA", "TV", "TV", "WEB", "WEB", null, "WEB", "WEB"],
  ["ZIT", "MA", "TV", "TV", "WEB", "WEB", null, "WEB", "WEB"],
  ["ZIT", "MA", "TV", "TV", "WEB", "WEB", null, "WEB", "WEB"],
  ["ZIT", "MA", "TV", "TV", "WEB", "WEB", null, "WEB", "WEB"],
];

export function Timetable() {
  const todayDate = new Date().getDate();
  const timetable = todayDate % 2 === 0 ? TimetableEven : TimetableOdd;
  const currDay = new Date().getDay();
  console.log(currDay);

  return (
    <div className="flex h-full w-full justify-center">
      <div className="grid max-w-[900px] flex-grow grid-rows-5 rounded-sm border border-border">
        {timetable.map((row, i) => (
          <TimetableRow key={i} row={row} isCurrDay={currDay === i + 1} />
        ))}
      </div>
    </div>
  );
}
