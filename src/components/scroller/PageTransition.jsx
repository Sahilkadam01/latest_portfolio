import { motion } from "framer-motion";

export default function PageTransition() {
  return (
    <>
      {/* TOP DARK OVERLAY */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="fixed inset-0 bg-black/95 z-[9998]"
      />

      {/* SOFT CYAN OVERLAY */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
        className="fixed inset-0 bg-[#1ed7eb]/50 z-[9997]"
      />
    </>
  );
}