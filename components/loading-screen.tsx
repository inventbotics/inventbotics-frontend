"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Stays for 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 4.5 }} // Slower fade-out
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <div className="relative w-48 h-48">
        <motion.img
          src="https://raw.githubusercontent.com/karthikrajask/inventbotics/main/globe_png_invert_transparent.png"
          alt="Loading Globe"
          className="w-full h-full object-cover rounded-full" 
          style={{
            clipPath: "circle(50%)", 
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1.2, 1],
            opacity: 1,
            rotate: [0, 360],
          }}
          transition={{
            duration: 3.5, // Slower rotation & scaling (3.5s)
            ease: "easeInOut",
            times: [0, 0.6, 1],
          }}
        />

        {/* Pulsating Ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ border: "4px solid #004AAD" }} // Theme color
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1.3, 1],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 3.5, // Slower pulsation (3.5s)
            ease: "easeInOut",
            times: [0, 0.6, 1],
            repeat: Infinity,
          }}
        />
      </div>
    </motion.div>
  );
}
