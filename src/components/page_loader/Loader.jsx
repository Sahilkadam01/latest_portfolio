import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[999] bg-black flex items-center justify-center"
    >
      <div className="text-center">

        {/* NAME / LOGO */}
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          <span className="text-purple-500">SAHIL</span> KUMAR
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 mt-3"
        >
          Building modern experiences...
        </motion.p>

        {/* PROGRESS BAR */}
        <div className="w-48 h-1 bg-white/10 mt-8 mx-auto rounded-full overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-purple-500 to-purple-300"
          />
        </div>

      </div>
    </motion.div>
  );
}