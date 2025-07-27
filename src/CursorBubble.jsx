import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CursorBubble() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);

      // Reset hide timer on every move
      if (timeoutId) clearTimeout(timeoutId);
      const newTimeout = setTimeout(() => {
        setVisible(false);
      }, 5000); // 5 seconds delay to hide
      setTimeoutId(newTimeout);
    };

    window.addEventListener("mousemove", moveHandler);
    return () => {
      window.removeEventListener("mousemove", moveHandler);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]">
      <AnimatePresence>
        {visible && (
          <motion.div
            className="w-3 h-3 rounded-full bg-blue-400 shadow-2xl backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              x: position.x - 32,
              y: position.y - 32,
              opacity: 1,
              scale: 1,
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
