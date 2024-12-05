"use client";

import { Switch } from "@/components/ui/switch";
import { useConfigStore } from "@/hooks/zustand/use-config-store";
import { ClockAnimationSelect } from "./clock-animation-select";
import { FontSelect } from "./font-select";
import { ProgressbarVariantSelect } from "./progress-bar-variant-select";
import { ThemeSelect } from "./theme-select";

export function AppearanceSection() {
  const { config, setConfig } = useConfigStore();

  return (
    <div className="flex flex-col gap-5 text-sm">
      <h2>Appearance</h2>

      <div className="flex items-center justify-between">
        <h3>Theme</h3>
        <ThemeSelect />
      </div>

      <div className="flex items-center justify-between">
        <h3>Clock Font</h3>
        <FontSelect />
      </div>

      <div className="flex items-center justify-between">
        <h3>Clock Animation</h3>
        <ClockAnimationSelect />
      </div>

      <div className="flex items-center justify-between">
        <h3>Progress Bar Variant</h3>
        <ProgressbarVariantSelect />
      </div>

      <div className="mt-2 flex items-center justify-between">
        <h3>Show Lesson Number </h3>
        <Switch
          checked={config.showLessonNumber}
          onClick={() => setConfig({ ...config, showLessonNumber: !config.showLessonNumber })}
        />
      </div>

      <div className="flex items-center justify-between">
        <h3>Show Lesson Countdown </h3>
        <Switch
          checked={config.showLessonEndCountdown}
          onClick={() =>
            setConfig({ ...config, showLessonEndCountdown: !config.showLessonEndCountdown })
          }
        />
      </div>

      <div className="flex items-center justify-between">
        <h3>Show Seconds</h3>
        <Switch
          checked={config.showSeconds}
          onClick={() => setConfig({ ...config, showSeconds: !config.showSeconds })}
        />
      </div>

      <div className="flex items-center justify-between">
        <h3>Show Day Progress</h3>
        <Switch
          checked={config.showDayProgress}
          onClick={() => setConfig({ ...config, showDayProgress: !config.showDayProgress })}
        />
      </div>
    </div>
  );
}
