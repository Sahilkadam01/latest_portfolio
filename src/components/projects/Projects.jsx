import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Portfolio Website",
    desc: "Modern animated portfolio using React and Framer Motion.",
    img: "/projects/p1.jpg",
  },
  {
    title: "E-commerce UI",
    desc: "Clean and responsive shopping interface.",
    img: "/projects/p2.jpg",
  },
  {
    title: "Dashboard App",
    desc: "Data visualization dashboard with charts.",
    img: "/projects/p3.jpg",
  },
  {
    title: "Landing Page",
    desc: "High-converting landing page design.",
    img: "/projects/p4.jpg",
  },
];

export default function Projects() {
  const ref = useRef(null);

  // 🔥 SCROLL
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 🔥 PARALLAX
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

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
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
        absolute
        top-0
        left-0
        w-[300px]
        md:w-[500px]
        h-[300px]
        md:h-[500px]
        bg-purple-600/20
        blur-[140px]
        rounded-full
        "
      />

      <motion.div
        style={{ y }}
        className="relative z-10 max-w-7xl mx-auto px-4 md:px-6"
      >

        {/* 🔥 TITLE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: false }}
          className="text-center mb-16 md:mb-24"
        >

          {/* SMALL TEXT */}
          <motion.p
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="
            text-purple-400
            uppercase
            tracking-[6px]
            text-sm
            mb-5
            "
          >
            Featured Work
          </motion.p>

          <h2 className="text-3xl md:text-6xl font-bold leading-tight">
            Selected <span className="text-purple-400">Projects</span>
          </h2>

          <p
            className="
            mt-6
            text-gray-400
            max-w-2xl
            mx-auto
            leading-relaxed
            text-sm md:text-base
            "
          >
            A showcase of immersive interfaces, responsive experiences,
            and high-performance frontend applications.
          </p>
        </motion.div>

        {/* 🔥 PROJECTS */}
        <div className="space-y-14 md:space-y-24">

          {projects.map((project, i) => {
            const reverse = i % 2 !== 0;

            return (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 120,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.1,
                }}
                viewport={{ once: false, amount: 0.2 }}
                className={`
                grid lg:grid-cols-2 gap-8 md:gap-14 items-center
                ${reverse ? "lg:grid-flow-dense" : ""}
                `}
              >

                {/* 🔥 IMAGE */}
                <motion.div
                  whileHover={{
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className={`
                  relative group overflow-hidden rounded-3xl
                  ${reverse ? "lg:col-start-2" : ""}
                  `}
                >

                  {/* IMAGE */}
                  <img
                    src={project.img}
                    alt={project.title}
                    className="
                    w-full
                    h-[280px]
                    sm:h-[400px]
                    md:h-[500px]
                    object-cover
                    transition duration-700
                    group-hover:scale-105
                    "
                  />

                  {/* OVERLAY */}
                  <div
                    className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black via-black/30 to-transparent
                    "
                  />

                  {/* LIGHT EFFECT */}
                  <motion.div
                    animate={{
                      x: ["-100%", "250%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
                    absolute inset-y-0
                    w-[20%]
                    bg-white/10
                    blur-2xl
                    rotate-12
                    "
                  />

                  {/* BORDER */}
                  <div
                    className="
                    absolute inset-0
                    rounded-3xl
                    border border-white/10
                    group-hover:border-purple-500/30
                    transition duration-500
                    "
                  />
                </motion.div>

                {/* 🔥 CONTENT */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: reverse ? -80 : 80,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  viewport={{ once: false }}
                  className={`
                  relative
                  ${reverse ? "lg:col-start-1" : ""}
                  `}
                >

                  {/* NUMBER */}
                  <h1
                    className="
                    absolute
                    -top-10
                    left-0
                    text-[80px]
                    md:text-[120px]
                    font-black
                    text-white/5
                    leading-none
                    "
                  >
                    0{i + 1}
                  </h1>

                  <div className="relative z-10">

                    <motion.h3
                      whileHover={{
                        x: 5,
                      }}
                      className="
                      text-3xl md:text-5xl
                      font-bold
                      text-white
                      "
                    >
                      <span className="text-purple-400">
                        {project.title}
                      </span>
                    </motion.h3>

                    <p
                      className="
                      mt-6
                      text-gray-400
                      leading-relaxed
                      text-sm md:text-lg
                      "
                    >
                      {project.desc}
                    </p>

                    {/* TECH */}
                    <div className="flex flex-wrap gap-3 mt-8">

                      {["React", "Tailwind", "Framer"].map(
                        (tech, index) => (
                          <motion.span
                            key={index}
                            whileHover={{
                              y: -3,
                            }}
                            className="
                            px-4 py-2
                            rounded-full
                            bg-white/5
                            border border-white/10
                            text-sm
                            "
                          >
                            {tech}
                          </motion.span>
                        )
                      )}
                    </div>

                    {/* BUTTONS */}
                    <div className="flex gap-4 mt-10">

                      <motion.button
                        whileHover={{
                          scale: 1.05,
                        }}
                        whileTap={{
                          scale: 0.95,
                        }}
                        className="
                        flex items-center gap-2
                        px-6 py-3
                        rounded-xl
                        bg-purple-600
                        shadow-[0_0_25px_rgba(168,85,247,0.35)]
                        "
                      >
                        Live Demo
                        <FiArrowUpRight />
                      </motion.button>

                      <motion.button
                        whileHover={{
                          scale: 1.05,
                        }}
                        whileTap={{
                          scale: 0.95,
                        }}
                        className="
                        flex items-center gap-2
                        px-6 py-3
                        rounded-xl
                        border border-white/15
                        bg-white/5
                        hover:bg-white
                        hover:text-black
                        transition
                        "
                      >
                        Code
                        <FiGithub />
                      </motion.button>
                    </div>

                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}



// old code

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// const projects = [
//   {
//     title: "Portfolio Website",
//     desc: "Modern animated portfolio using React and Framer Motion.",
//     img: "/projects/p1.jpg",
//   },
//   {
//     title: "E-commerce UI",
//     desc: "Clean and responsive shopping interface.",
//     img: "/projects/p2.jpg",
//   },
//   {
//     title: "Dashboard App",
//     desc: "Data visualization dashboard with charts.",
//     img: "/projects/p3.jpg",
//   },
//   {
//     title: "Landing Page",
//     desc: "High-converting landing page design.",
//     img: "/projects/p4.jpg",
//   },
// ];

// export default function Projects() {
//   const ref = useRef(null);

//   // 🔥 Scroll animation for entire section
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
//   const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

//   // 🔥 Card animation variants
//   const cardVariant = {
//     hiddenLeft: {
//       opacity: 0,
//       x: -100,
//       filter: "blur(10px)",
//     },
//     hiddenRight: {
//       opacity: 0,
//       x: 100,
//       filter: "blur(10px)",
//     },
//     show: {
//       opacity: 1,
//       x: 0,
//       filter: "blur(0px)",
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <section
//       ref={ref}
//       className="relative py-32 bg-black text-white overflow-hidden"
//     >
//       {/* 🌌 BACKGROUND */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b1a] to-black" />

//       {/* ✨ GLOW EFFECT */}
//       <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-purple-600/20 blur-[120px]" />

//       {/* CONTENT */}
//       <motion.div
//         style={{ y, opacity }}
//         className="max-w-7xl mx-auto px-6 relative z-10"
//       >
//         {/* TITLE */}
//         <h2 className="text-4xl font-bold mb-16">
//           My <span className="text-purple-400">Projects</span>
//         </h2>

//         {/* GRID */}
//         <div className="grid md:grid-cols-2 gap-10">
//           {projects.map((project, i) => {
//             const isLeft = i % 2 === 0;

//             return (
//               <motion.div
//                 key={i}
//                 variants={cardVariant}
//                 initial={isLeft ? "hiddenLeft" : "hiddenRight"}
//                 whileInView="show"
//                 viewport={{ once: false, margin: "-100px" }}
//                 transition={{ delay: i * 0.2 }}
//                 whileHover={{ y: -10 }}
//                 className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg"
//               >
//                 {/* IMAGE */}
//                 <div className="overflow-hidden">
//                   <img
//                     src={project.img}
//                     alt={project.title}
//                     className="w-full h-[300px] object-cover transition duration-500 group-hover:scale-110"
//                   />
//                 </div>

//                 {/* OVERLAY */}
//                 <div className="absolute inset-0 bg-black/70 translate-y-full group-hover:translate-y-0 transition duration-500 flex flex-col justify-end p-6">
//                   <h3 className="text-xl font-semibold text-purple-400">
//                     {project.title}
//                   </h3>

//                   <p className="text-gray-300 text-sm mt-2">
//                     {project.desc}
//                   </p>

//                   {/* BUTTONS */}
//                   <div className="mt-4 flex gap-4">
//                     <button className="px-4 py-2 bg-purple-600 rounded-lg text-sm hover:scale-105 transition">
//                       Live
//                     </button>

//                     <button className="px-4 py-2 border border-gray-400 rounded-lg text-sm hover:bg-white hover:text-black transition">
//                       Code
//                     </button>
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