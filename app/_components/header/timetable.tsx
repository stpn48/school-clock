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

  return (
    <div className="grid grid-cols-1 grid-rows-5 gap-0">
      {timetable.map((row, i) => (
        <TimetableRow key={i} row={row} />
      ))}
    </div>
  );
}
