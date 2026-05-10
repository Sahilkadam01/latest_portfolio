import {
  motion,
  useScroll,
  useTransform,
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

  // 🔥 SECTION SCROLL
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  // 🔥 TIMELINE HEIGHT
  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <section
      id="experience"
      ref={ref}
      className="
      relative
      py-20 md:py-32
      bg-black
      text-white
      overflow-hidden
      "
    >

      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b1f] to-black" />

      {/* 🔥 GLOW */}
      <motion.div
        animate={{
          y: [0, 40, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
        absolute
        left-1/2
        top-0
        w-[300px] md:w-[500px]
        h-[300px] md:h-[500px]
        bg-purple-600/20
        blur-[120px]
        -translate-x-1/2
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">

        {/* 🔥 TITLE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
            filter: "blur(8px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: false }}
          className="text-center mb-16 md:mb-24"
        >

          {/* TOP LINE */}
          <motion.div
            animate={{
              width: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="
            h-[2px]
            max-w-xs
            mx-auto
            mb-6
            bg-gradient-to-r
            from-transparent
            via-purple-500
            to-transparent
            "
          />

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            My <span className="text-purple-400">Experience</span>
          </h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.15,
              duration: 0.6,
            }}
            className="
            text-gray-400
            mt-5
            text-sm md:text-base
            max-w-2xl
            mx-auto
            leading-relaxed
            "
          >
            A journey of learning, building, and improving
            modern digital experiences every day.
          </motion.p>
        </motion.div>

        {/* 🔥 TIMELINE */}
        <div className="relative">

          {/* LINE */}
          <div
            className="
            absolute
            left-5 md:left-1/2
            top-0
            w-[2px]
            h-full
            bg-white/10
            md:-translate-x-1/2
            "
          />

          {/* 🔥 ACTIVE LINE */}
          <motion.div
            style={{ height: lineHeight }}
            className="
            absolute
            left-5 md:left-1/2
            top-0
            w-[2px]
            bg-gradient-to-b
            from-purple-400
            to-purple-600
            md:-translate-x-1/2
            origin-top
            shadow-[0_0_20px_rgba(168,85,247,0.8)]
            "
          />

          {/* ITEMS */}
          <div className="space-y-16 md:space-y-24">

            {experiences.map((exp, i) => {
              const itemRef = useRef(null);

              // 🔥 ITEM SCROLL
              const { scrollYProgress: itemProgress } =
                useScroll({
                  target: itemRef,
                  offset: [
                    "start center",
                    "center center",
                  ],
                });

              // 🔥 DOT ANIMATION
              const dotScale = useTransform(
                itemProgress,
                [0, 1],
                [0.8, 1.5]
              );

              const dotOpacity = useTransform(
                itemProgress,
                [0, 1],
                [0.4, 1]
              );

              const glowOpacity = useTransform(
                itemProgress,
                [0, 1],
                [0.2, 1]
              );

              const isLeft = i % 2 === 0;

              return (
                <div
                  key={i}
                  ref={itemRef}
                  className={`
                  relative
                  flex items-start md:items-center
                  w-full
                  ${isLeft
                      ? "md:justify-start"
                      : "md:justify-end"}
                  `}
                >

                  {/* 🔥 CARD */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 40,
                      x: isLeft ? -40 : 40,
                      scale: 0.96,
                    }}

                    whileInView={{
                      opacity: 1,
                      y: 0,
                      x: 0,
                      scale: 1,
                    }}

                    transition={{
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}

                    viewport={{
                      once: false,
                      amount: 0.15,
                    }}

                    whileHover={{
                      y: -4,
                      scale: 1.01,
                    }}

                    className="
                    relative
                    ml-14 md:ml-0
                    w-full md:w-[44%]

                    rounded-3xl
                    border border-white/10
                    bg-white/5
                    backdrop-blur-xl

                    p-5 md:p-8

                    hover:border-purple-500/20
                    transition duration-500
                    overflow-hidden
                    "
                  >

                    {/* 🔥 SHINE EFFECT */}
                    <div
                      className="
                      absolute inset-0
                      opacity-0 group-hover:opacity-100
                      transition duration-700
                      bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.06),transparent)]
                      "
                    />

                    {/* ROLE */}
                    <h3
                      className="
                      relative z-10
                      text-lg md:text-2xl
                      font-semibold
                      text-purple-400
                      "
                    >
                      {exp.role}
                    </h3>

                    {/* COMPANY */}
                    <p
                      className="
                      relative z-10
                      text-gray-400
                      text-xs md:text-sm
                      mt-2
                      "
                    >
                      {exp.company} • {exp.period}
                    </p>

                    {/* DESC */}
                    <motion.p
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.15,
                        duration: 0.5,
                      }}
                      className="
                      relative z-10
                      mt-4
                      text-gray-300
                      text-sm md:text-base
                      leading-relaxed
                      "
                    >
                      {exp.description}
                    </motion.p>
                  </motion.div>

                  {/* 🔥 DOT */}
                  <div
                    className="
                    absolute
                    left-5 md:left-1/2
                    md:-translate-x-1/2
                    "
                  >

                    {/* GLOW */}
                    <motion.div
                      style={{
                        opacity: glowOpacity,
                      }}
                      className="
                      absolute
                      inset-0
                      w-5 h-5
                      md:w-6 md:h-6
                      bg-purple-500
                      rounded-full
                      blur-xl
                      -translate-x-1/4
                      -translate-y-1/4
                      "
                    />

                    {/* DOT */}
                    <motion.div
                      style={{
                        scale: dotScale,
                        opacity: dotOpacity,
                      }}
                      className="
                      relative
                      w-4 h-4
                      md:w-5 md:h-5
                      rounded-full
                      bg-purple-500
                      border-4 border-black
                      shadow-[0_0_25px_rgba(168,85,247,0.8)]
                      "
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



// old code

// import {
//   motion,
//   useScroll,
//   useTransform,
//   useInView,
// } from "framer-motion";
// import { useRef } from "react";

// const experiences = [
//   {
//     role: "Frontend Developer",
//     company: "Freelance",
//     period: "2024 - Present",
//     description:
//       "Building modern, responsive web applications using React, Tailwind CSS and smooth animations.",
//   },
//   {
//     role: "Web Developer Intern",
//     company: "XYZ Company",
//     period: "2023 - 2024",
//     description:
//       "Worked on real-world projects, improved UI performance, and implemented responsive layouts.",
//   },
//   {
//     role: "Self Learning Journey",
//     company: "Personal Growth",
//     period: "2022 - 2023",
//     description:
//       "Focused on mastering JavaScript, React, and UI/UX principles through consistent practice.",
//   },
// ];

// export default function Experience() {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const lineHeight = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);

//   return (
//     <section
//       id="experience"
//       ref={ref}
//       className="relative py-24 md:py-32 bg-black text-white overflow-hidden"
//     >
//       {/* Background */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b1f] to-black" />

//       {/* Glow */}
//       <div className="absolute left-1/2 top-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-purple-600/20 blur-[120px] -translate-x-1/2" />

//       <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">

//         {/* TITLE */}
//         <motion.div
//           initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
//           whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//           transition={{ duration: 1 }}
//           className="text-center mb-16 md:mb-24"
//         >
//           <h2 className="text-3xl md:text-5xl font-bold">
//             My <span className="text-purple-400">Experience</span>
//           </h2>

//           <p className="text-gray-400 mt-4 text-sm md:text-base">
//             A journey of learning, building, and improving every day.
//           </p>
//         </motion.div>

//         {/* TIMELINE */}
//         <div className="relative">

//           {/* Line (center on desktop, left on mobile) */}
//           <div className="absolute left-4 md:left-1/2 top-0 w-[2px] h-full bg-white/10 md:-translate-x-1/2" />

//           {/* Animated Line */}
//           <motion.div
//             style={{ height: lineHeight }}
//             className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-purple-500 md:-translate-x-1/2 origin-top"
//           />

//           {/* ITEMS */}
//           <div className="space-y-16 md:space-y-24">
//             {experiences.map((exp, i) => {
//               const isLeft = i % 2 === 0;

//               const itemRef = useRef(null);
//               const isInView = useInView(itemRef, {
//                 margin: "-50% 0px -50% 0px",
//               });

//               return (
//                 <div
//                   ref={itemRef}
//                   key={i}
//                   className={`relative flex items-start md:items-center w-full
//                     ${isLeft ? "md:justify-start" : "md:justify-end"}`}
//                 >
//                   {/* CONTENT */}
//                   <motion.div
//                     initial={{
//                       opacity: 0,
//                       x: isLeft ? -100 : 100,
//                       filter: "blur(10px)",
//                     }}
//                     whileInView={{
//                       opacity: 1,
//                       x: 0,
//                       filter: "blur(0px)",
//                     }}
//                     transition={{ duration: 0.8 }}
//                     className="ml-12 md:ml-0 w-full md:w-[45%]"
//                   >
//                     <h3 className="text-lg md:text-xl font-semibold text-purple-400">
//                       {exp.role}
//                     </h3>

//                     <p className="text-gray-400 text-xs md:text-sm">
//                       {exp.company} • {exp.period}
//                     </p>

//                     <p className="mt-2 md:mt-3 text-gray-300 text-sm md:text-base leading-relaxed">
//                       {exp.description}
//                     </p>
//                   </motion.div>

//                   {/* DOT */}
//                   <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2">
//                     <motion.div
//                       animate={{
//                         scale: isInView ? 1.4 : 0.8,
//                         opacity: isInView ? 1 : 0.4,
//                         boxShadow: isInView
//                           ? "0 0 25px rgba(168,85,247,0.9)"
//                           : "0 0 5px rgba(168,85,247,0.3)",
//                       }}
//                       transition={{ duration: 0.4 }}
//                       className="w-4 h-4 md:w-5 md:h-5 bg-purple-500 rounded-full"
//                     />
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }