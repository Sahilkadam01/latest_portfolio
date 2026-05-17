import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TextType from "../typingEffect/TypingEffect"
import {
  FiCode,
  FiPenTool,
  FiZap,
} from "react-icons/fi";

export default function WhoIam() {
  const ref = useRef(null);

  // 🎯 SCROLL TRACK
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 🔥 IMAGE PARALLAX
  const yImage = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-32 bg-black text-white overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b1a] to-black" />

      {/* TOP GLOW */}
      <div className="absolute left-1/2 top-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/20 blur-[120px] rounded-full -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">

        {/* 🔥 TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            About <span className="text-purple-400">Me</span>
          </h2>

          <p className="mt-6 text-gray-300 leading-relaxed text-sm md:text-lg">
            I am a passionate <TextType 
  text={["Python Developer","Full Stack Developer", "Programmer"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor
  cursorCharacter="_"
  texts={["Python Developer","Full Stack Developer", "Programmer"]}
  deletingSpeed={50}
  variableSpeedEnabled={false}
  variableSpeedMin={60}
  variableSpeedMax={120}
  cursorBlinkDuration={0.5}
/> focused on building modern,
            responsive, and visually engaging web applications. I love creating
            smooth user experiences with clean, scalable, and efficient code.
          </p>
        </motion.div>

        {/* 🔥 MAIN GRID */}
        <div className="mt-16 md:mt-24 grid lg:grid-cols-2 gap-14 md:gap-20 items-center">

          {/* 🔥 PREMIUM IMAGE SECTION */}
          <motion.div
            style={{
              y: yImage,
              scale: scaleImage,
            }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="relative flex justify-center items-center"
          >

            {/* 🔥 OUTER GLOW */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-[320px] md:w-[450px]
              h-[320px] md:h-[450px]
              rounded-full bg-purple-500/20 blur-[100px]"
            />

            {/* 🔥 ROTATING GRADIENT RING */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[280px] sm:w-[340px] md:w-[420px]
              h-[280px] sm:h-[340px] md:h-[420px]
              rounded-full border border-purple-500/20"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(168,85,247,0.8), transparent, rgba(168,85,247,0.8))",
              }}
            />

            {/* 🔥 SECOND RING */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[250px] sm:w-[310px] md:w-[390px]
              h-[250px] sm:h-[310px] md:h-[390px]
              rounded-full border border-purple-400/10"
            />

            {/* 🔥 FLOATING IMAGE */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >

              {/* LIGHT BEHIND IMAGE */}
              <div className="absolute inset-0 bg-purple-500/10 blur-3xl scale-110 rounded-full" />

              <img
                src="/assets/Sahil_kumar_profile.png"
                alt="Sahil Kumar"
                className="
                relative
                w-[240px]
                sm:w-[300px]
                md:w-[380px]
                object-cover
                drop-shadow-[0_0_45px_rgba(168,85,247,0.35)]
                hover:scale-[1.03]
                transition duration-500
                "
              />
            </motion.div>

            {/* 🔥 PARTICLES */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute top-10 right-10 w-3 h-3 bg-purple-400 rounded-full blur-sm"
            />

            <motion.div
              animate={{
                y: [0, 20, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute bottom-16 left-8 w-2 h-2 bg-purple-300 rounded-full blur-sm"
            />

            
          </motion.div>

          

          {/* 🔥 CARDS */}
          <div className="space-y-6">

            {/* CARD 1 */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-2xl
              bg-white/5 border border-white/10
              backdrop-blur-xl p-6 md:p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative z-10 flex gap-5 items-start">
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 text-2xl border border-purple-500/20">
                  <FiCode />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-400">
                    Frontend Development
                  </h3>

                  <p className="text-gray-300 mt-3 leading-relaxed text-sm md:text-base">
                    Building responsive, interactive, and modern user interfaces
                    using React, Tailwind CSS, and smooth animations.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: false }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-2xl
              bg-white/5 border border-white/10
              backdrop-blur-xl p-6 md:p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative z-10 flex gap-5 items-start">
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 text-2xl border border-purple-500/20">
                  <FiPenTool />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-400">
                    UI / UX Design
                  </h3>

                  <p className="text-gray-300 mt-3 leading-relaxed text-sm md:text-base">
                    Designing clean, user-focused interfaces with modern layouts,
                    strong visual hierarchy, and premium interactions.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-2xl
              bg-white/5 border border-white/10
              backdrop-blur-xl p-6 md:p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative z-10 flex gap-5 items-start">
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 text-2xl border border-purple-500/20">
                  <FiZap />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-400">
                    Performance Optimization
                  </h3>

                  <p className="text-gray-300 mt-3 leading-relaxed text-sm md:text-base">
                    Creating fast, optimized, and scalable experiences with clean
                    architecture and smooth performance.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* 🔥 STATS */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="mt-16 md:mt-24 grid grid-cols-3 gap-4 md:gap-8"
        >
          {[
            { value: "2+", label: "Years" },
            { value: "20+", label: "Projects" },
            { value: "10+", label: "Clients" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -5,
                scale: 1.03,
              }}
              className="relative overflow-hidden rounded-2xl
              bg-white/5 border border-white/10
              backdrop-blur-lg p-5 md:p-8 text-center"
            >
              <div className="absolute inset-0 bg-purple-500/5 opacity-0 hover:opacity-100 transition duration-500" />

              <h3 className="relative z-10 text-2xl md:text-4xl font-bold text-purple-400">
                {item.value}
              </h3>

              <p className="relative z-10 text-gray-300 mt-2 text-sm md:text-base">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

{/* <div className="mt-8 flex justify-center">
  <a
    href="/assets/Sahil_Kumar_CV.pdf"
    download
    className="relative inline-flex items-center justify-center px-6 py-3
    rounded-xl bg-purple-500 text-white font-medium
    border border-purple-400/30
    hover:bg-purple-600 hover:scale-105
    transition duration-300 shadow-lg shadow-purple-500/20"
  >
    Download CV
  </a>
</div> */}