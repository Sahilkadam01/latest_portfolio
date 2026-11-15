
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
      {/* MAIN BAR */}
      <motion.div
        style={{
          scaleX,
          backgroundImage:
            "linear-gradient(90deg, #5ee7df 0%, #35b9e9 48%, #6485ff 100%)",
        }}
        className="fixed top-0 left-0 right-0 h-[3px] z-[9999] origin-left"
      />

      {/* GLOW EFFECT */}
      <motion.div
        style={{
          scaleX,
          backgroundImage:
            "linear-gradient(90deg, #5ee7df 0%, #35b9e9 48%, #6485ff 100%)",
        }}
        className="fixed top-0 left-0 right-0 h-[6px] z-[9998] origin-left blur-md opacity-50"
      />
    </>
  );
}