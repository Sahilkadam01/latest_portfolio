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
  className="text-4xl md:text-5xl font-bold"
>
  <span
    className="text-transparent bg-clip-text"
    style={{
      color: "#1dafd3",
      backgroundImage:
        "linear-gradient(to right, #1dafd3 4%, #26e34c 72%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    SAHIL KUMAR
  </span>
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
            style={{
              backgroundImage:
                "linear-gradient(to right, #1dafd3 4%, #26e34c 72%)",
            }}
            className="h-full"
          />
        </div>

      </div>
    </motion.div>
  );
}