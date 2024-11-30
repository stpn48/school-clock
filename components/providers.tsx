"use client";

import { useConfigStore } from "@/hooks/zustand/use-config-store";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  const { config } = useConfigStore();

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className={`${config.font}`}>{children}</div>
    </ThemeProvider>
  );
}
