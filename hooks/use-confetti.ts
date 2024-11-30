import { useEffect, useState } from "react";

export function useConfetti() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (showConfetti) {
      const timeout = setTimeout(() => {
        setShowConfetti(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [showConfetti]);

  return { showConfetti, setShowConfetti };
}
