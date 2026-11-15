// import {
//   motion,
//   useScroll,
//   useTransform,
// } from "framer-motion";

// import { useRef } from "react";

// const experiences = [
//   {
//     role: "Full Stack Developer",
//     company: "The Hustler Collective",
//     period: "2025 - Present",
//     description:
//       "Worked on maintaining and enhancing MediaTek’s global website, developing high-impact landing and campaign pages. Contributed as a frontend developer with 2+ years of experience in building scalable interfaces, optimizing performance, and resolving real-time production issues in a fast-paced environment.",
//   },
//   {
//     role: "Web Developer",
//     company: "Web Plant Pvt Ltd",
//     period: "05/08/2024 - 30/12/2024",
//     description:
//       "Worked on scalable UI systems, responsive layouts, and performance optimization. Managed end-to-end frontend projects, delivering responsive and high-performance web applications on time using modern frontend technologies.",
//   },
//   {
//     role: "Web Developer Intern",
//     company: "Test Yantra",
//     period: "01/01/2024 - 30/07/2024",
//     description:
//       "Worked as a Web Developer, building responsive and visually engaging web applications using React.js, Tailwind CSS, and modern frontend technologies. Focused on creating smooth user experiences, optimizing performance, and developing clean, scalable interfaces for real-world projects across multiple devices and screen sizes.",
//   },
// ];

// export default function Experience() {
//   const ref = useRef(null);

//   // 🔥 SCROLL TIMELINE
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start center", "end end"],
//   });

//   // 🔥 LINE HEIGHT
//   const lineHeight = useTransform(
//     scrollYProgress,
//     [0, 1],
//     ["0%", "100%"]
//   );

//   return (
//     <section
//       id="experience"
//       ref={ref}
//       className="
//       relative
//       py-16 md:py-24
//       bg-black
//       overflow-hidden
//       text-white
//       "
//     >

//       {/* 🌌 BACKGROUND */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a14] to-black" />

//       {/* 🔥 GLOW */}
//       <motion.div
//         animate={{
//           opacity: [0.2, 0.5, 0.2],
//           scale: [1, 1.08, 1],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//         }}
//         className="
//         absolute
//         top-0
//         left-1/2
//         -translate-x-1/2

//         w-[350px] md:w-[650px]
//         h-[350px] md:h-[650px]

//         bg-purple-600/20
//         blur-[140px]
//         rounded-full
//         "
//       />

//       <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">

//         {/* 🔥 TITLE */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 40,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.6,
//           }}
//           viewport={{ once: false }}
//           className="text-center mb-14 md:mb-20"
//         >

//           <motion.p
//             initial={{
//               opacity: 0,
//               letterSpacing: "0px",
//             }}
//             whileInView={{
//               opacity: 1,
//               letterSpacing: "6px",
//             }}
//             transition={{
//               duration: 1,
//             }}
//             className="
//             uppercase
//             text-xs md:text-sm
//             text-purple-400
//             mb-5
//             "
//           >
//             Career Journey
//           </motion.p>

//           <h2
//             className="
//             text-4xl md:text-7xl
//             font-bold
//             leading-tight
//             "
//           >
//             My{" "}
//             <span
//               className="
//               text-transparent
//               bg-clip-text
//               bg-gradient-to-r
//               from-purple-400
//               to-pink-500
//               "
//             >
//               Experience
//             </span>
//           </h2>

//           <motion.p
//             initial={{
//               opacity: 0,
//               y: 10,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               delay: 0.1,
//             }}
//             className="
//             mt-6
//             max-w-2xl
//             mx-auto

//             text-gray-400
//             text-sm md:text-base
//             leading-relaxed
//             "
//           >
//             My path through frontend development,
//             modern UI engineering, and building
//             premium digital experiences.
//           </motion.p>
//         </motion.div>

//         {/* 🔥 TIMELINE */}
//         <div className="relative">

//           {/* TREE LINE */}
//           <div
//             className="
//             absolute
//             left-5 md:left-1/2
//             top-0

//             w-[1px]
//             h-full

//             bg-white/10

//             md:-translate-x-1/2
//             "
//           />

//           {/* ACTIVE LINE */}
//           <motion.div
//             style={{ height: lineHeight }}
//             className="
//             absolute
//             left-5 md:left-1/2
//             top-0

//             w-[2px]

//             bg-gradient-to-b
//             from-purple-500
//             to-pink-500

//             md:-translate-x-1/2

//             shadow-[0_0_20px_rgba(168,85,247,0.8)]
//             "
//           />

//           {/* ITEMS */}
//           <div className="space-y-12 md:space-y-16">

//             {experiences.map((exp, i) => {
//               const isLeft = i % 2 === 0;

//               return (
//                 <div
//                   key={i}
//                   className={`
//                   relative
//                   flex items-center

//                   ${
//                     isLeft
//                       ? "md:justify-start"
//                       : "md:justify-end"
//                   }
//                   `}
//                 >

//                   {/* 🔥 CARD */}
//                   <motion.div
//                     initial={{
//                       opacity: 0,
//                       x: isLeft ? -120 : 120,
//                       y: 20,
//                       scale: 0.96,
//                       filter: "blur(10px)",
//                     }}

//                     whileInView={{
//                       opacity: 1,
//                       x: 0,
//                       y: 0,
//                       scale: 1,
//                       filter: "blur(0px)",
//                     }}

//                     transition={{
//                       duration: 0.6,
//                       ease: [0.25, 1, 0.5, 1],
//                     }}

//                     viewport={{
//                       once: false,
//                       amount: 0.15,
//                     }}

//                     whileHover={{
//                       y: -8,
//                     }}

//                     className="
//                     group
//                     relative

//                     ml-14 md:ml-0
//                     w-full md:w-[42%]

//                     p-5 md:p-7

//                     rounded-[28px]

//                     bg-white/[0.04]
//                     backdrop-blur-xl

//                     overflow-hidden

//                     transition-all duration-500
//                     "
//                   >

//                     {/* BORDER */}
//                     <div
//                       className="
//                       absolute inset-0

//                       rounded-[28px]

//                       border border-white/10

//                       group-hover:border-purple-500/20

//                       transition duration-500
//                       "
//                     />

//                     {/* LIGHT EFFECT */}
//                     <motion.div
//                       animate={{
//                         x: ["-100%", "180%"],
//                       }}
//                       transition={{
//                         duration: 6,
//                         repeat: Infinity,
//                         ease: "linear",
//                       }}
//                       className="
//                       absolute
//                       top-0
//                       left-0

//                       w-[35%]
//                       h-full

//                       bg-gradient-to-r
//                       from-transparent
//                       via-white/10
//                       to-transparent

//                       skew-x-[-20deg]
//                       blur-2xl
//                       "
//                     />

//                     {/* PERIOD */}
//                     <div
//                       className="
//                       relative z-10

//                       inline-flex

//                       px-4 py-2

//                       rounded-full

//                       bg-purple-500/10

//                       text-purple-300
//                       text-sm

//                       border border-purple-500/20
//                       "
//                     >
//                       {exp.period}
//                     </div>

//                     {/* ROLE */}
//                     <motion.h3
//                       initial={{
//                         opacity: 0,
//                         y: 12,
//                       }}

//                       whileInView={{
//                         opacity: 1,
//                         y: 0,
//                       }}

//                       transition={{
//                         delay: 0.05,
//                         duration: 0.4,
//                       }}

//                       className="
//                       relative z-10

//                       mt-5

//                       text-2xl md:text-3xl
//                       font-semibold
//                       "
//                     >
//                       {exp.role}
//                     </motion.h3>

//                     {/* COMPANY */}
//                     <p
//                       className="
//                       relative z-10

//                       mt-3

//                       text-purple-400
//                       text-sm md:text-base
//                       "
//                     >
//                       {exp.company}
//                     </p>

//                     {/* DESC */}
//                     <motion.p
//                       initial={{
//                         opacity: 0,
//                         y: 8,
//                       }}

//                       whileInView={{
//                         opacity: 1,
//                         y: 0,
//                       }}

//                       transition={{
//                         delay: 0.08,
//                         duration: 0.4,
//                       }}

//                       className="
//                       relative z-10

//                       mt-5

//                       text-gray-300
//                       text-sm md:text-base
//                       leading-relaxed
//                       "
//                     >
//                       {exp.description}
//                     </motion.p>

//                     {/* CORNER GLOW */}
//                     <div
//                       className="
//                       absolute
//                       -bottom-10
//                       -right-10

//                       w-32
//                       h-32

//                       bg-purple-500/10
//                       blur-3xl
//                       rounded-full
//                       "
//                     />
//                   </motion.div>

//                   {/* 🔥 DOT */}
//                   <motion.div
//                     whileInView={{
//                       scale: [0.8, 1.3, 1],
//                     }}

//                     transition={{
//                       duration: 0.5,
//                     }}

//                     className="
//                     absolute
//                     left-5 md:left-1/2

//                     md:-translate-x-1/2
//                     "
//                   >

//                     {/* OUTER GLOW */}
//                     <div
//                       className="
//                       absolute

//                       w-10
//                       h-10

//                       rounded-full

//                       bg-purple-500/30

//                       blur-xl
//                       "
//                     />

//                     {/* INNER DOT */}
//                     <div
//                       className="
//                       relative

//                       w-5
//                       h-5

//                       rounded-full

//                       bg-gradient-to-r
//                       from-purple-500
//                       to-pink-500

//                       border-4 border-black

//                       shadow-[0_0_20px_rgba(168,85,247,0.9)]
//                       "
//                     />
//                   </motion.div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// // old code

// // import {
// //   motion,
// //   useScroll,
// //   useTransform,
// //   useInView,
// // } from "framer-motion";
// // import { useRef } from "react";

// // const experiences = [
// //   {
// //     role: "Frontend Developer",
// //     company: "Freelance",
// //     period: "2024 - Present",
// //     description:
// //       "Building modern, responsive web applications using React, Tailwind CSS and smooth animations.",
// //   },
// //   {
// //     role: "Web Developer Intern",
// //     company: "XYZ Company",
// //     period: "2023 - 2024",
// //     description:
// //       "Worked on real-world projects, improved UI performance, and implemented responsive layouts.",
// //   },
// //   {
// //     role: "Self Learning Journey",
// //     company: "Personal Growth",
// //     period: "2022 - 2023",
// //     description:
// //       "Focused on mastering JavaScript, React, and UI/UX principles through consistent practice.",
// //   },
// // ];

// // export default function Experience() {
// //   const ref = useRef(null);

// //   const { scrollYProgress } = useScroll({
// //     target: ref,
// //     offset: ["start end", "end start"],
// //   });

// //   const lineHeight = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);

// //   return (
// //     <section
// //       id="experience"
// //       ref={ref}
// //       className="relative py-24 md:py-32 bg-black text-white overflow-hidden"
// //     >
// //       {/* Background */}
// //       <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b1f] to-black" />

// //       {/* Glow */}
// //       <div className="absolute left-1/2 top-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-purple-600/20 blur-[120px] -translate-x-1/2" />

// //       <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">

// //         {/* TITLE */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
// //           whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
// //           transition={{ duration: 1 }}
// //           className="text-center mb-16 md:mb-24"
// //         >
// //           <h2 className="text-3xl md:text-5xl font-bold">
// //             My <span className="text-purple-400">Experience</span>
// //           </h2>

// //           <p className="text-gray-400 mt-4 text-sm md:text-base">
// //             A journey of learning, building, and improving every day.
// //           </p>
// //         </motion.div>

// //         {/* TIMELINE */}
// //         <div className="relative">

// //           {/* Line (center on desktop, left on mobile) */}
// //           <div className="absolute left-4 md:left-1/2 top-0 w-[2px] h-full bg-white/10 md:-translate-x-1/2" />

// //           {/* Animated Line */}
// //           <motion.div
// //             style={{ height: lineHeight }}
// //             className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-purple-500 md:-translate-x-1/2 origin-top"
// //           />

// //           {/* ITEMS */}
// //           <div className="space-y-16 md:space-y-24">
// //             {experiences.map((exp, i) => {
// //               const isLeft = i % 2 === 0;

// //               const itemRef = useRef(null);
// //               const isInView = useInView(itemRef, {
// //                 margin: "-50% 0px -50% 0px",
// //               });

// //               return (
// //                 <div
// //                   ref={itemRef}
// //                   key={i}
// //                   className={`relative flex items-start md:items-center w-full
// //                     ${isLeft ? "md:justify-start" : "md:justify-end"}`}
// //                 >
// //                   {/* CONTENT */}
// //                   <motion.div
// //                     initial={{
// //                       opacity: 0,
// //                       x: isLeft ? -100 : 100,
// //                       filter: "blur(10px)",
// //                     }}
// //                     whileInView={{
// //                       opacity: 1,
// //                       x: 0,
// //                       filter: "blur(0px)",
// //                     }}
// //                     transition={{ duration: 0.8 }}
// //                     className="ml-12 md:ml-0 w-full md:w-[45%]"
// //                   >
// //                     <h3 className="text-lg md:text-xl font-semibold text-purple-400">
// //                       {exp.role}
// //                     </h3>

// //                     <p className="text-gray-400 text-xs md:text-sm">
// //                       {exp.company} • {exp.period}
// //                     </p>

// //                     <p className="mt-2 md:mt-3 text-gray-300 text-sm md:text-base leading-relaxed">
// //                       {exp.description}
// //                     </p>
// //                   </motion.div>

// //                   {/* DOT */}
// //                   <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2">
// //                     <motion.div
// //                       animate={{
// //                         scale: isInView ? 1.4 : 0.8,
// //                         opacity: isInView ? 1 : 0.4,
// //                         boxShadow: isInView
// //                           ? "0 0 25px rgba(168,85,247,0.9)"
// //                           : "0 0 5px rgba(168,85,247,0.3)",
// //                       }}
// //                       transition={{ duration: 0.4 }}
// //                       className="w-4 h-4 md:w-5 md:h-5 bg-purple-500 rounded-full"
// //                     />
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


import { motion } from "framer-motion";

const experiences = [
  {
    number: "01",
    role: "Full Stack Developer",
    company: "The Hustler Collective",
    period: "2025 - Present",
    description:
      "Worked on maintaining and enhancing MediaTek's global website, developing high-impact landing and campaign pages. Contributed to frontend development, performance optimization, and resolving real-time production issues in a fast-paced environment.",
    type: "Professional Experience",
  },
  {
    number: "02",
    role: "Web Developer",
    company: "Web Plant Pvt Ltd",
    period: "05/08/2024 - 30/12/2024",
    description:
      "Managed frontend projects from development to delivery, building responsive layouts and scalable UI systems. Focused on performance optimization and delivering high-quality web applications on time using modern frontend technologies.",
    type: "Professional Experience",
  },
  {
    number: "03",
    role: "Web Developer Intern",
    company: "Test Yantra",
    period: "01/01/2024 - 30/07/2024",
    description:
      "Developed responsive and visually engaging web applications using React.js, Tailwind CSS, and modern frontend technologies. Focused on creating smooth user experiences, improving performance, and building clean interfaces across different devices.",
    type: "Internship",
  },
];

// Reusable fade reveal
const Reveal = ({
  children,
  className = "",
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{
        once: true,
        amount: 0.05,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        bg-[#050505]
        text-white
        py-[60px]
        md:py-[90px]
      "
    >
      <div className="
        max-w-7xl
        mx-auto
        px-[30px]
        sm:px-8
        lg:px-10
      ">

        {/* SECTION HEADER */}

        <div className="
          text-center
          max-w-3xl
          mx-auto
          mb-16
          md:mb-20
        ">

          <Reveal>
            <div className="
              flex
              items-center
              justify-center
              gap-3
              mb-7
            ">
              <span className="w-8 h-px bg-white/30" />

              <p className="
                text-[10px]
                sm:text-xs
                uppercase
                tracking-[0.25em]
                text-gray-500
              ">
                Career Journey
              </p>

              <span className="w-8 h-px bg-white/30" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-semibold
              tracking-[-0.055em]
              leading-tight
            ">
              My{" "}
              <span className="text-gray-500">
                Experience.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="
              mt-6
              max-w-2xl
              mx-auto
              text-sm
              sm:text-base
              leading-7
              sm:leading-8
              text-gray-400
            ">
              A look at my professional journey, the teams
              I've worked with, and the experiences that
              have shaped my development career.
            </p>
          </Reveal>

        </div>

        {/* EXPERIENCE TIMELINE */}

        <div className="
          relative
          max-w-6xl
          mx-auto
        ">

          {/* TIMELINE LINE */}

          <div className="
            absolute
            left-[7px]
            md:left-1/2
            top-2
            bottom-2
            w-px
            bg-white/15
            md:-translate-x-1/2
          " />

          {/* EXPERIENCE ITEMS */}

          <div className="space-y-14 md:space-y-20">

            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={exp.number}
                  className={`
                    relative
                    grid
                    grid-cols-[15px_minmax(0,1fr)]
                    md:grid-cols-2
                    gap-5
                    md:gap-12
                    items-start
                  `}
                >

                  {/* TIMELINE MARKER */}

                  <div className="
                    relative
                    flex
                    justify-center
                    pt-2
                    md:absolute
                    md:left-1/2
                    md:-translate-x-1/2
                    md:top-2
                    md:z-10
                  ">
                    <div className="
                      w-[15px]
                      h-[15px]
                      rounded-full
                      bg-[#050505]
                      border
                      border-white/50
                      ring-[4px]
                      ring-[#050505]
                    " />
                  </div>

                  {/* LEFT SIDE */}

                  <div
                    className={`
                      min-w-0
                      md:col-span-1
                      ${
                        isLeft
                          ? "md:col-start-1 md:pr-6 md:text-right"
                          : "md:col-start-2 md:pl-6 md:invisible md:pointer-events-none"
                      }
                    `}
                  >
                    {isLeft && (
                      <Reveal>
                        <ExperienceContent exp={exp} />
                      </Reveal>
                    )}
                  </div>

                  {/* RIGHT SIDE */}

                  <div
                    className={`
                      min-w-0
                      md:col-span-1
                      ${
                        !isLeft
                          ? "md:col-start-2 md:pl-6"
                          : "md:col-start-2 md:invisible md:pointer-events-none"
                      }
                    `}
                  >
                    {!isLeft && (
                      <Reveal>
                        <ExperienceContent exp={exp} />
                      </Reveal>
                    )}
                  </div>

                </div>
              );
            })}

          </div>
        </div>

        {/* BOTTOM DIVIDER */}

        <div className="
          mt-20
          md:mt-24
          border-t
          border-white/[0.08]
        " />

      </div>
    </section>
  );
}

// EXPERIENCE CONTENT

function ExperienceContent({ exp }) {
  return (
    <div className="group">

      {/* NUMBER AND TYPE */}

      <div className="
        flex
        flex-wrap
        items-center
        gap-3
        md:justify-end
      ">
        <span className="
          text-[10px]
          uppercase
          tracking-[0.18em]
          text-gray-600
        ">
          {exp.type}
        </span>

        <span className="
          hidden
          md:block
          w-1
          h-1
          rounded-full
          bg-gray-600
        " />

        <span className="
          text-xs
          text-gray-600
          tabular-nums
        ">
          {exp.number}
        </span>
      </div>

      {/* ROLE */}

      <h3 className="
        mt-4
        text-xl
        sm:text-2xl
        md:text-3xl
        font-medium
        tracking-tight
        text-white
        transition-colors
        duration-300
        group-hover:text-gray-300
      ">
        {exp.role}
      </h3>

      {/* COMPANY */}

      <p className="
        mt-2
        text-sm
        sm:text-base
        text-gray-300
      ">
        {exp.company}
      </p>

      {/* PERIOD */}

      <p className="
        mt-2
        text-xs
        tracking-wide
        text-gray-600
      ">
        {exp.period}
      </p>

      {/* DESCRIPTION */}

      <p className="
        mt-5
        text-sm
        leading-7
        text-gray-400
        md:leading-8
      ">
        {exp.description}
      </p>

    </div>
  );
}
