"use client";

import { Maximize } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export function MaximizeBtn() {
  const [fullscreenActive, setFullscreenActive] = useState(!!document.fullscreenElement);

  const handleClick = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => console.error("Error disabling fullscreen"));
    } else {
      document.documentElement
        .requestFullscreen()
        .catch(() => console.error("Error enabling fullscreen"));
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setFullscreenActive(!!document.fullscreenElement);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "f") {
        handleClick();
      }
    };

    // Listen for changes in fullscreen state
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    window.addEventListener("keypress", handleKeyDown);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      window.removeEventListener("keypress", handleKeyDown);
    };
  }, []);

  return (
    <Maximize
      onClick={handleClick}
      className={`size-4 cursor-pointer text-foreground`}
      aria-label={fullscreenActive ? "Exit fullscreen" : "Enter fullscreen"}
    />
  );
}
