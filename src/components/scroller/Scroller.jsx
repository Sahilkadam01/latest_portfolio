import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  // Smooth the animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* 🔥 MAIN BAR */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] z-[9999] origin-left 
        bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300"
      />

      {/* 🔥 GLOW EFFECT */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[6px] z-[9998] origin-left 
        bg-purple-500 blur-md opacity-50"
      />
    </>
  );
}