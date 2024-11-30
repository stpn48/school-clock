import { useEffect, useState } from "react";

export function useUserActivity() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const resetInactivityTimer = () => {
      setIsActive(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsActive(false), 3000);
    };

    window.addEventListener("mousemove", resetInactivityTimer);
    window.addEventListener("keydown", resetInactivityTimer);

    resetInactivityTimer();

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("mousemove", resetInactivityTimer);
      window.removeEventListener("keydown", resetInactivityTimer);
    };
  }, []);

  return { isActive };
}
