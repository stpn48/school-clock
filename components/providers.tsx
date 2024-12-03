"use client";

import { Themes } from "@/types/types";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  const themes: Themes = ["dark", "YK7-blue", "midnight-tokyo", "whipped-coral", "green-wean"];

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem themes={themes}>
      {children}
    </ThemeProvider>
  );
}
