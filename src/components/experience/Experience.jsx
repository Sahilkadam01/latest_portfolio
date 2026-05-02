import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Freelance",
    period: "2024 - Present",
    description:
      "Building modern, responsive web applications using React, Tailwind CSS and smooth animations.",
  },
  {
    role: "Web Developer Intern",
    company: "XYZ Company",
    period: "2023 - 2024",
    description:
      "Worked on real-world projects, improved UI performance, and implemented responsive layouts.",
  },
  {
    role: "Self Learning Journey",
    company: "Personal Growth",
    period: "2022 - 2023",
    description:
      "Focused on mastering JavaScript, React, and UI/UX principles through consistent practice.",
  },
];

export default function Experience() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-24 md:py-32 bg-black text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b1f] to-black" />

      {/* Glow */}
      <div className="absolute left-1/2 top-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-purple-600/20 blur-[120px] -translate-x-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            My <span className="text-purple-400">Experience</span>
          </h2>

          <p className="text-gray-400 mt-4 text-sm md:text-base">
            A journey of learning, building, and improving every day.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">

          {/* Line (center on desktop, left on mobile) */}
          <div className="absolute left-4 md:left-1/2 top-0 w-[2px] h-full bg-white/10 md:-translate-x-1/2" />

          {/* Animated Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-purple-500 md:-translate-x-1/2 origin-top"
          />

          {/* ITEMS */}
          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;

              const itemRef = useRef(null);
              const isInView = useInView(itemRef, {
                margin: "-50% 0px -50% 0px",
              });

              return (
                <div
                  ref={itemRef}
                  key={i}
                  className={`relative flex items-start md:items-center w-full
                    ${isLeft ? "md:justify-start" : "md:justify-end"}`}
                >
                  {/* CONTENT */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isLeft ? -100 : 100,
                      filter: "blur(10px)",
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      filter: "blur(0px)",
                    }}
                    transition={{ duration: 0.8 }}
                    className="ml-12 md:ml-0 w-full md:w-[45%]"
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-purple-400">
                      {exp.role}
                    </h3>

                    <p className="text-gray-400 text-xs md:text-sm">
                      {exp.company} • {exp.period}
                    </p>

                    <p className="mt-2 md:mt-3 text-gray-300 text-sm md:text-base leading-relaxed">
                      {exp.description}
                    </p>
                  </motion.div>

                  {/* DOT */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2">
                    <motion.div
                      animate={{
                        scale: isInView ? 1.4 : 0.8,
                        opacity: isInView ? 1 : 0.4,
                        boxShadow: isInView
                          ? "0 0 25px rgba(168,85,247,0.9)"
                          : "0 0 5px rgba(168,85,247,0.3)",
                      }}
                      transition={{ duration: 0.4 }}
                      className="w-4 h-4 md:w-5 md:h-5 bg-purple-500 rounded-full"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}