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
        <h3>font</h3>
        <FontSelect />
      </div>

      <div className="flex items-center justify-between">
        <h3>theme</h3>
        <ThemeSelect />
      </div>

      <div className="flex items-center justify-between">
        <h3>clock animation</h3>
        <ClockAnimationSelect />
      </div>

      <div className="flex items-center justify-between">
        <h3>progress bar variant</h3>
        <ProgressbarVariantSelect />
      </div>

      <div className="mt-2 flex items-center justify-between">
        <h3>show lesson number </h3>
        <Switch
          checked={config.showLessonNumber}
          onClick={() => setConfig({ ...config, showLessonNumber: !config.showLessonNumber })}
        />
      </div>

      <div className="mt-2 flex items-center justify-between">
        <h3>show lesson end countdown </h3>
        <Switch
          checked={config.showLessonEndCountdown}
          onClick={() =>
            setConfig({ ...config, showLessonEndCountdown: !config.showLessonEndCountdown })
          }
        />
      </div>

      <div className="mt-2 flex items-center justify-between">
        <h3>show seconds</h3>
        <Switch
          checked={config.showSeconds}
          onClick={() => setConfig({ ...config, showSeconds: !config.showSeconds })}
        />
      </div>
    </div>
  );
}
