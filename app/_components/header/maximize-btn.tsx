"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Maximize } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export function MaximizeBtn() {
  const [fullscreenActive, setFullscreenActive] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setFullscreenActive(document.fullscreenElement !== null);
    setIsMounted(true);
  }, []);

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
      if (document) {
        setFullscreenActive(document.fullscreenElement !== null);
      }
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
  }, [handleClick]);

  if (!isMounted) {
    return null;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Maximize
            onClick={handleClick}
            className={`size-4 cursor-pointer text-foreground`}
            aria-label={fullscreenActive ? "Exit fullscreen" : "Enter fullscreen"}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>Maximize / Minimize</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
