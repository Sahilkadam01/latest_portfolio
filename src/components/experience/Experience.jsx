import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { useRef } from "react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "The Hustler Collective",
    period: "2025 - Present",
    description:
      "Worked on maintaining and enhancing MediaTek’s global website, developing high-impact landing and campaign pages. Contributed as a frontend developer with 2+ years of experience in building scalable interfaces, optimizing performance, and resolving real-time production issues in a fast-paced environment.",
  },
  {
    role: "Web Developer",
    company: "Web Plant Pvt Ltd",
    period: "05/08/2024 - 30/12/2024",
    description:
      "Worked on scalable UI systems, responsive layouts, and performance optimization. Managed end-to-end frontend projects, delivering responsive and high-performance web applications on time using modern frontend technologies.",
  },
  {
    role: "Web Developer Intern",
    company: "Test Yantra",
    period: "01/01/2024 - 30/07/2024",
    description:
      "Worked as a Web Developer, building responsive and visually engaging web applications using React.js, Tailwind CSS, and modern frontend technologies. Focused on creating smooth user experiences, optimizing performance, and developing clean, scalable interfaces for real-world projects across multiple devices and screen sizes.",
  },
];

export default function Experience() {
  const ref = useRef(null);

  // 🔥 SCROLL TIMELINE
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  // 🔥 LINE HEIGHT
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
      py-16 md:py-24
      bg-black
      overflow-hidden
      text-white
      "
    >

      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a14] to-black" />

      {/* 🔥 GLOW */}
      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2

        w-[350px] md:w-[650px]
        h-[350px] md:h-[650px]

        bg-purple-600/20
        blur-[140px]
        rounded-full
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">

        {/* 🔥 TITLE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{ once: false }}
          className="text-center mb-14 md:mb-20"
        >

          <motion.p
            initial={{
              opacity: 0,
              letterSpacing: "0px",
            }}
            whileInView={{
              opacity: 1,
              letterSpacing: "6px",
            }}
            transition={{
              duration: 1,
            }}
            className="
            uppercase
            text-xs md:text-sm
            text-purple-400
            mb-5
            "
          >
            Career Journey
          </motion.p>

          <h2
            className="
            text-4xl md:text-7xl
            font-bold
            leading-tight
            "
          >
            My{" "}
            <span
              className="
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-purple-400
              to-pink-500
              "
            >
              Experience
            </span>
          </h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
            }}
            className="
            mt-6
            max-w-2xl
            mx-auto

            text-gray-400
            text-sm md:text-base
            leading-relaxed
            "
          >
            My path through frontend development,
            modern UI engineering, and building
            premium digital experiences.
          </motion.p>
        </motion.div>

        {/* 🔥 TIMELINE */}
        <div className="relative">

          {/* TREE LINE */}
          <div
            className="
            absolute
            left-5 md:left-1/2
            top-0

            w-[1px]
            h-full

            bg-white/10

            md:-translate-x-1/2
            "
          />

          {/* ACTIVE LINE */}
          <motion.div
            style={{ height: lineHeight }}
            className="
            absolute
            left-5 md:left-1/2
            top-0

            w-[2px]

            bg-gradient-to-b
            from-purple-500
            to-pink-500

            md:-translate-x-1/2

            shadow-[0_0_20px_rgba(168,85,247,0.8)]
            "
          />

          {/* ITEMS */}
          <div className="space-y-12 md:space-y-16">

            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={i}
                  className={`
                  relative
                  flex items-center

                  ${
                    isLeft
                      ? "md:justify-start"
                      : "md:justify-end"
                  }
                  `}
                >

                  {/* 🔥 CARD */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isLeft ? -120 : 120,
                      y: 20,
                      scale: 0.96,
                      filter: "blur(10px)",
                    }}

                    whileInView={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                      scale: 1,
                      filter: "blur(0px)",
                    }}

                    transition={{
                      duration: 0.6,
                      ease: [0.25, 1, 0.5, 1],
                    }}

                    viewport={{
                      once: false,
                      amount: 0.15,
                    }}

                    whileHover={{
                      y: -8,
                    }}

                    className="
                    group
                    relative

                    ml-14 md:ml-0
                    w-full md:w-[42%]

                    p-5 md:p-7

                    rounded-[28px]

                    bg-white/[0.04]
                    backdrop-blur-xl

                    overflow-hidden

                    transition-all duration-500
                    "
                  >

                    {/* BORDER */}
                    <div
                      className="
                      absolute inset-0

                      rounded-[28px]

                      border border-white/10

                      group-hover:border-purple-500/20

                      transition duration-500
                      "
                    />

                    {/* LIGHT EFFECT */}
                    <motion.div
                      animate={{
                        x: ["-100%", "180%"],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="
                      absolute
                      top-0
                      left-0

                      w-[35%]
                      h-full

                      bg-gradient-to-r
                      from-transparent
                      via-white/10
                      to-transparent

                      skew-x-[-20deg]
                      blur-2xl
                      "
                    />

                    {/* PERIOD */}
                    <div
                      className="
                      relative z-10

                      inline-flex

                      px-4 py-2

                      rounded-full

                      bg-purple-500/10

                      text-purple-300
                      text-sm

                      border border-purple-500/20
                      "
                    >
                      {exp.period}
                    </div>

                    {/* ROLE */}
                    <motion.h3
                      initial={{
                        opacity: 0,
                        y: 12,
                      }}

                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}

                      transition={{
                        delay: 0.05,
                        duration: 0.4,
                      }}

                      className="
                      relative z-10

                      mt-5

                      text-2xl md:text-3xl
                      font-semibold
                      "
                    >
                      {exp.role}
                    </motion.h3>

                    {/* COMPANY */}
                    <p
                      className="
                      relative z-10

                      mt-3

                      text-purple-400
                      text-sm md:text-base
                      "
                    >
                      {exp.company}
                    </p>

                    {/* DESC */}
                    <motion.p
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}

                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}

                      transition={{
                        delay: 0.08,
                        duration: 0.4,
                      }}

                      className="
                      relative z-10

                      mt-5

                      text-gray-300
                      text-sm md:text-base
                      leading-relaxed
                      "
                    >
                      {exp.description}
                    </motion.p>

                    {/* CORNER GLOW */}
                    <div
                      className="
                      absolute
                      -bottom-10
                      -right-10

                      w-32
                      h-32

                      bg-purple-500/10
                      blur-3xl
                      rounded-full
                      "
                    />
                  </motion.div>

                  {/* 🔥 DOT */}
                  <motion.div
                    whileInView={{
                      scale: [0.8, 1.3, 1],
                    }}

                    transition={{
                      duration: 0.5,
                    }}

                    className="
                    absolute
                    left-5 md:left-1/2

                    md:-translate-x-1/2
                    "
                  >

                    {/* OUTER GLOW */}
                    <div
                      className="
                      absolute

                      w-10
                      h-10

                      rounded-full

                      bg-purple-500/30

                      blur-xl
                      "
                    />

                    {/* INNER DOT */}
                    <div
                      className="
                      relative

                      w-5
                      h-5

                      rounded-full

                      bg-gradient-to-r
                      from-purple-500
                      to-pink-500

                      border-4 border-black

                      shadow-[0_0_20px_rgba(168,85,247,0.9)]
                      "
                    />
                  </motion.div>
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