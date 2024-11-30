"use client";

import { Maximize } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export function MaximizeBtn() {
  const [fullscreenActive, setFullscreenActive] = useState(false);

  const handleClick = useCallback(() => {
    setFullscreenActive((prev) => !prev);
  }, []);

  useEffect(() => {
    if (fullscreenActive) {
      document.body.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, [fullscreenActive]);

  return <Maximize onClick={handleClick} className="size-4 cursor-pointer text-foreground" />;
}
