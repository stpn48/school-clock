"use client";

import { getLessonDetails } from "@/lib/get-lesson-details";
import { LessonDetails } from "@/types/types";
import React, { useEffect, useState } from "react";
import { TimetableCell } from "./timetable-cell";

type Props = {
  row: (string | null)[];
  isCurrDay?: boolean;
};

export function TimetableRow({ row, isCurrDay }: Props) {
  const [lessonDetails, setLessonDetails] = useState<LessonDetails | undefined | null>(undefined);

  useEffect(() => {
    const lessonDetails = getLessonDetails();
    setLessonDetails(lessonDetails);
  }, []);

  return (
    <div className="grid grid-cols-9 gap-0">
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
