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
    title: "Frontend Development",
    tech: ["React", "JavaScript", "Tailwind", "Framer Motion"],
    level: 95,
  },
  {
    title: "UI / UX Design",
    tech: ["Figma", "Responsive Design", "Wireframing"],
    level: 88,
  },
  {
    title: "Backend Basics",
    tech: ["Node.js", "Express", "MongoDB"],
    level: 75,
  },
  {
    title: "Performance Optimization",
    tech: ["Lazy Loading", "Code Splitting", "SEO"],
    level: 85,
  },
];

// 🔥 ICON MAPPING
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

  // Section scroll effects
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);

  const cardVariant = {
    hiddenLeft: {
      opacity: 0,
      x: -120,
      filter: "blur(12px)",
    },
    hiddenRight: {
      opacity: 0,
      x: 120,
      filter: "blur(12px)",
    },
    show: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative py-32 bg-black text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#090912] to-black" />

      {/* Glow blobs */}
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute top-20 left-20 w-[300px] h-[300px] bg-purple-600/20 blur-[120px] rounded-full"
      />

      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute bottom-20 right-20 w-[350px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full"
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6"
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-purple-400">Skills</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to build modern, high-performance
            digital experiences.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {skills.map((skill, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                variants={cardVariant}
                initial={isLeft ? "hiddenLeft" : "hiddenRight"}
                whileInView="show"
                viewport={{ once: false, margin: "-100px" }}
                transition={{ delay: i * 0.2 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0px 0px 35px rgba(168,85,247,0.25)",
                }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
              >
                {/* Title */}
                <h3 className="text-2xl font-semibold text-purple-400 mb-4">
                  {skill.title}
                </h3>

                {/* 🔥 Tech tags with icons */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {skill.tech.map((tech, index) => {
                    const Icon = techIcons[tech];

                    return (
                      <motion.span
                        key={index}
                        whileHover={{
                          scale: 1.08,
                          y: -2,
                          boxShadow:
                            "0 0 15px rgba(168,85,247,0.35)",
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm"
                      >
                        {Icon && (
                          <span className="text-purple-400 text-base">
                            <Icon />
                          </span>
                        )}
                        {tech}
                      </motion.span>
                    );
                  })}
                </div>

                {/* Progress bar */}
                <div>
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Expertise</span>
                    <span>{skill.level}%</span>
                  </div>

                  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5 }}
                      viewport={{ once: false }}
                      className="h-full bg-gradient-to-r from-purple-500 to-purple-300 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}



/*old code */

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// const skills = [
//   {
//     title: "Frontend Development",
//     tech: ["React", "JavaScript", "Tailwind", "Framer Motion"],
//     level: 95,
//   },
//   {
//     title: "UI / UX Design",
//     tech: ["Figma", "Responsive Design", "Wireframing"],
//     level: 88,
//   },
//   {
//     title: "Backend Basics",
//     tech: ["Node.js", "Express", "MongoDB"],
//     level: 75,
//   },
//   {
//     title: "Performance Optimization",
//     tech: ["Lazy Loading", "Code Splitting", "SEO"],
//     level: 85,
//   },
// ];

// export default function Skills() {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   // Section scroll effects
//   const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
//   const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);

//   const cardVariant = {
//     hiddenLeft: {
//       opacity: 0,
//       x: -120,
//       filter: "blur(12px)",
//     },
//     hiddenRight: {
//       opacity: 0,
//       x: 120,
//       filter: "blur(12px)",
//     },
//     show: {
//       opacity: 1,
//       x: 0,
//       filter: "blur(0px)",
//       transition: {
//         duration: 0.9,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <section
//       ref={ref}
//       className="relative py-32 bg-black text-white overflow-hidden"
//     >
//       {/* Background */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-[#090912] to-black" />

//       {/* Glow blobs */}
//       <motion.div
//         animate={{ y: [0, 40, 0] }}
//         transition={{ repeat: Infinity, duration: 8 }}
//         className="absolute top-20 left-20 w-[300px] h-[300px] bg-purple-600/20 blur-[120px] rounded-full"
//       />

//       <motion.div
//         animate={{ y: [0, -40, 0] }}
//         transition={{ repeat: Infinity, duration: 10 }}
//         className="absolute bottom-20 right-20 w-[350px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full"
//       />

//       <motion.div
//         style={{ y, opacity }}
//         className="relative z-10 max-w-7xl mx-auto px-6"
//       >
//         {/* Title */}
//         <motion.div
//           initial={{ opacity: 0, y: 80 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: false }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold">
//             My <span className="text-purple-400">Skills</span>
//           </h2>

//           <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
//             Technologies and tools I use to build modern, high-performance
//             digital experiences.
//           </p>
//         </motion.div>

//         {/* Skills Grid */}
//         <div className="grid md:grid-cols-2 gap-10">
//           {skills.map((skill, i) => {
//             const isLeft = i % 2 === 0;

//             return (
//               <motion.div
//                 key={i}
//                 variants={cardVariant}
//                 initial={isLeft ? "hiddenLeft" : "hiddenRight"}
//                 whileInView="show"
//                 viewport={{ once: false, margin: "-100px" }}
//                 transition={{ delay: i * 0.2 }}
//                 whileHover={{
//                   y: -10,
//                   boxShadow: "0px 0px 35px rgba(168,85,247,0.25)",
//                 }}
//                 className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
//               >
//                 {/* Title */}
//                 <h3 className="text-2xl font-semibold text-purple-400 mb-4">
//                   {skill.title}
//                 </h3>

//                 {/* Tech tags */}
//                 <div className="flex flex-wrap gap-3 mb-6">
//                   {skill.tech.map((tech, index) => (
//                     <motion.span
//                       key={index}
//                       whileHover={{ scale: 1.08 }}
//                       className="px-4 py-2 bg-white/10 rounded-full text-sm"
//                     >
//                       {tech}
//                     </motion.span>
//                   ))}
//                 </div>

//                 {/* Progress bar */}
//                 <div>
//                   <div className="flex justify-between text-sm text-gray-400 mb-2">
//                     <span>Expertise</span>
//                     <span>{skill.level}%</span>
//                   </div>

//                   <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
//                     <motion.div
//                       initial={{ width: 0 }}
//                       whileInView={{ width: `${skill.level}%` }}
//                       transition={{ duration: 1.5 }}
//                       viewport={{ once: false }}
//                       className="h-full bg-gradient-to-r from-purple-500 to-purple-300 rounded-full"
//                     />
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </motion.div>
//     </section>
//   );
// }