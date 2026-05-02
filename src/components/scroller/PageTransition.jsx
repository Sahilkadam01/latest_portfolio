import { motion } from "framer-motion";

export default function PageTransition() {
  return (
    <>
      {/* TOP LAYER */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="fixed inset-0 bg-black z-[9998]"
      />

      {/* SECOND LAYER (DELAYED) */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
        className="fixed inset-0 bg-purple-600 z-[9997]"
      />
    </>
  );
}