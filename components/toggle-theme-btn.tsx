"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ToggleThemeBtn() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <button className="absolute bottom-4 right-4" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      ToggleThemeBtn
    </button>
  );
}
