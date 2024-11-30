"use client";

import { useConfigStore } from "@/hooks/zustand/use-config-store";
import { ThemeProvider } from "next-themes";
import React, { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  const { config } = useConfigStore();

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className={`${config.font === "sans" ? "font-geist-sans" : "font-geist-mono"}`}>
        {children}
      </div>
    </ThemeProvider>
  );
}
