import { Clock } from "./_components/clock";
import { LessonEndTimer } from "./_components/lesson-end-timer";
import { LessonProgressBar } from "./_components/lesson-progress-bar";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4 bg-background">
      <Clock />
      <LessonEndTimer />
      <LessonProgressBar />
    </div>
  );
}
