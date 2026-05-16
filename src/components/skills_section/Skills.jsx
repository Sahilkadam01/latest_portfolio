import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// ICONS
import { FaReact, FaJs, FaNodeJs } from "react-icons/fa";

import {
  SiTailwindcss,
  SiFramer,
  SiMongodb,
  SiExpress,
  SiFigma,
} from "react-icons/si";

const skills = [


  {
    title: "Operating System",
    tech: ["Linux", "Ubntu", "Fedora", "Kali-Linux", "Windows", "OS"],
    level: 100,
  },
  {
    title: "Frontend Development",
    tech: ["Reactjs", "JavaScript", "Tailwind Css", "Framer Motion", "Html", "Css"],
    level: 95,
  },
  {
    title: "UI / UX Design",
    tech: ["Figma", "Responsive Design", "Wireframing"],
    level: 88,
  },
  {
    title: "Backend Basics",
    tech: ["Node.js", "Express", "MongoDB", "DBMS", "Next.js", "PHP"],
    level: 75,
  },
{
    title: "Programming Languages",
    tech: ["C", "Cpp/C++", "Python", "Java", ".Net"],
    level: 85,
  },

  {
    title: "Performance Optimization",
    tech: ["Lazy Loading", "Code Splitting", "SEO", "Core-Web-Vitals", "Preload", "Prefetch"],
    level: 100,
  },
];

// 🔥 ICONS
const techIcons = {
  React: FaReact,
  JavaScript: FaJs,
  Tailwind: SiTailwindcss,
  "Framer Motion": SiFramer,
  "Node.js": FaNodeJs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  Figma: SiFigma,
};

export default function Skills() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 🔥 PARALLAX
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-32 bg-black text-white overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#090912] to-black" />

      {/* GLOW */}
      <motion.div
        animate={{
          y: [0, 40, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="absolute top-20 left-20 w-[250px] md:w-[350px]
        h-[250px] md:h-[350px]
        bg-purple-600/20 blur-[120px] rounded-full"
      />

      <motion.div
        animate={{
          y: [0, -40, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
        className="absolute bottom-20 right-20 w-[250px] md:w-[400px]
        h-[250px] md:h-[400px]
        bg-blue-500/10 blur-[120px] rounded-full"
      />

      <motion.div
        style={{ y }}
        className="relative z-10 max-w-7xl mx-auto px-4 md:px-6"
      >

        {/* 🔥 TITLE */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            My <span className="text-purple-400">Skills</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Technologies and tools I use to craft immersive,
            high-performance digital experiences.
          </p>
        </motion.div>

        {/* 🔥 GRID */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-10">

          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                scale: 0.8,
                rotateX: 40,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotateX: 0,
              }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
              }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative overflow-hidden
              rounded-3xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              p-6 md:p-8"
            >

              {/* 🔥 SHINE EFFECT */}
              <div
                className="
                absolute inset-0
                opacity-0 group-hover:opacity-100
                transition duration-700
                bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)]
                translate-x-[-100%]
                group-hover:translate-x-[100%]
                "
              />

              {/* 🔥 BORDER GLOW */}
              <div className="absolute inset-0 rounded-3xl border border-purple-500/0 group-hover:border-purple-500/20 transition duration-500" />

              {/* CONTENT */}
              <div className="relative z-10">

                {/* TITLE */}
                <h3 className="text-2xl font-semibold text-purple-400 mb-6">
                  {skill.title}
                </h3>

                {/* TECH */}
                <div className="flex flex-wrap gap-3 mb-8">

                  {skill.tech.map((tech, index) => {
                    const Icon = techIcons[tech];

                    return (
                      <motion.div
                        key={index}
                        whileHover={{
                          y: -4,
                          scale: 1.06,
                        }}
                        className="
                        flex items-center gap-2
                        px-4 py-2
                        rounded-full
                        bg-white/5
                        border border-white/10
                        hover:border-purple-500/30
                        transition
                        "
                      >

                        {/* ICON */}
                        {Icon && (
                          <motion.span
                            animate={{
                              rotate:
                                tech === "React"
                                  ? [0, 360]
                                  : 0,
                            }}
                            transition={{
                              duration: 8,
                              repeat:
                                tech === "React"
                                  ? Infinity
                                  : 0,
                              ease: "linear",
                            }}
                            className="text-purple-400 text-base"
                          >
                            <Icon />
                          </motion.span>
                        )}

                        <span className="text-sm text-gray-300">
                          {tech}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>

                {/* PROGRESS */}
                <div>
                  <div className="flex justify-between text-sm text-gray-400 mb-3">
                    <span>Expertise</span>
                    <span>{skill.level}%</span>
                  </div>

                  <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${skill.level}%`,
                      }}
                      transition={{
                        duration: 1.5,
                        delay: 0.2,
                      }}
                      viewport={{ once: false }}
                      className="
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-purple-500
                      via-purple-400
                      to-purple-300
                      relative
                      overflow-hidden
                      "
                    >

                      {/* GLOW INSIDE BAR */}
                      <div className="absolute inset-0 bg-white/20 blur-sm" />

                    </motion.div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}