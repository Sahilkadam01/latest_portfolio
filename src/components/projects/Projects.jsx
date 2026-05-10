import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  useState,
  useEffect,
} from "react";

import {
  FiArrowUpRight,
  FiGithub,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const projects = [
  {
    title: "Portfolio Website",
    desc: "Modern animated portfolio using React and Framer Motion with immersive UI interactions and cinematic effects.",
    img: "/projects/p1.jpg",
    tech: ["React", "Framer Motion", "Tailwind"],
  },

  {
    title: "E-commerce UI",
    desc: "Clean and responsive shopping experience with premium modern layouts and smooth animations.",
    img: "/projects/p2.jpg",
    tech: ["React", "Redux", "Tailwind"],
  },

  {
    title: "Dashboard App",
    desc: "Interactive dashboard with advanced data visualization and responsive modern design system.",
    img: "/projects/p3.jpg",
    tech: ["React", "Charts", "UI/UX"],
  },

  {
    title: "Landing Page",
    desc: "High-converting landing page focused on premium visuals and engaging user experience.",
    img: "/projects/p4.jpg",
    tech: ["Frontend", "Animations", "Design"],
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);

  // 🔥 AUTOPLAY
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === projects.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="projects"
      className="
      relative
      py-20 md:py-28
      bg-black
      overflow-hidden
      text-white
      "
    >

      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b14] to-black" />

      {/* 🔥 GLOW */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2

        w-[280px] md:w-[650px]
        h-[280px] md:h-[650px]

        bg-purple-600/20
        blur-[140px]
        rounded-full
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

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
            duration: 0.7,
          }}
          className="text-center mb-14 md:mb-20"
        >

          <motion.p
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="
            uppercase
            tracking-[6px]

            text-purple-400
            text-xs md:text-sm

            mb-5
            "
          >
            Featured Work
          </motion.p>

          <h2
            className="
            text-4xl sm:text-5xl md:text-7xl
            font-bold
            leading-tight
            "
          >
            Selected{" "}

            <span
              className="
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-purple-400
              via-pink-500
              to-purple-300
              "
            >
              Projects
            </span>
          </h2>

          <p
            className="
            mt-5

            max-w-2xl
            mx-auto

            text-gray-400
            text-sm md:text-base

            leading-relaxed
            px-2
            "
          >
            Premium frontend experiences crafted
            with modern UI, smooth interactions,
            and immersive animations.
          </p>
        </motion.div>

        {/* 🔥 SLIDER */}
        <div
          className="
          relative

          rounded-[30px]

          border border-white/10

          bg-white/[0.04]
          backdrop-blur-xl

          overflow-hidden
          "
        >

          <AnimatePresence mode="wait">

            <motion.div
              key={current}
              initial={{
                opacity: 0,
                scale: 1.03,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.97,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
              grid
              lg:grid-cols-2
              "
            >

              {/* 🔥 IMAGE */}
              <div
                className="
                relative

                h-[260px]
                sm:h-[350px]
                md:h-[450px]
                lg:h-[650px]

                overflow-hidden
                "
              >

                <motion.img
                  src={projects[current].img}
                  alt={projects[current].title}
                  initial={{
                    scale: 1.1,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  className="
                  w-full
                  h-full
                  object-cover
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                  absolute inset-0

                  bg-gradient-to-t
                  from-black
                  via-black/20
                  to-transparent
                  "
                />

                {/* NUMBER */}
                <h1
                  className="
                  absolute
                  bottom-4 md:bottom-6
                  left-4 md:left-6

                  text-5xl md:text-8xl
                  font-black

                  text-white/10
                  "
                >
                  0{current + 1}
                </h1>

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
              </div>

              {/* 🔥 CONTENT */}
              <div
                className="
                flex flex-col
                justify-center

                p-5 sm:p-8 md:p-12 lg:p-14
                "
              >

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.1,
                  }}
                  className="
                  uppercase
                  tracking-[4px]

                  text-purple-400
                  text-xs md:text-sm
                  "
                >
                  Case Study
                </motion.p>

                <motion.h3
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.15,
                  }}
                  className="
                  mt-4

                  text-3xl sm:text-4xl md:text-6xl
                  font-bold

                  leading-tight
                  "
                >
                  {projects[current].title}
                </motion.h3>

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.2,
                  }}
                  className="
                  mt-5 md:mt-6

                  text-gray-400

                  leading-relaxed

                  text-sm md:text-lg
                  "
                >
                  {projects[current].desc}
                </motion.p>

                {/* TECH */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.25,
                  }}
                  className="
                  flex flex-wrap
                  gap-3

                  mt-6 md:mt-8
                  "
                >

                  {projects[current].tech.map((tech, index) => (
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

                      text-xs md:text-sm
                      "
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {/* BUTTONS */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.3,
                  }}
                  className="
                  flex flex-wrap
                  gap-4

                  mt-8 md:mt-10
                  "
                >

                  <motion.button
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                    flex items-center gap-2

                    px-5 md:px-6
                    py-3

                    rounded-xl

                    text-sm md:text-base

                    bg-gradient-to-r
                    from-purple-600
                    to-pink-500

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

                    px-5 md:px-6
                    py-3

                    rounded-xl

                    text-sm md:text-base

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
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* 🔥 NAVIGATION */}
          <div
            className="
            absolute

            bottom-4 md:bottom-6
            right-4 md:right-6

            flex gap-3
            z-20
            "
          >

            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
              onClick={prevSlide}
              className="
              w-10 md:w-12
              h-10 md:h-12

              rounded-full

              border border-white/10

              bg-white/5
              backdrop-blur-xl

              flex items-center
              justify-center
              "
            >
              <FiChevronLeft />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
              onClick={nextSlide}
              className="
              w-10 md:w-12
              h-10 md:h-12

              rounded-full

              bg-purple-600

              flex items-center
              justify-center

              shadow-[0_0_20px_rgba(168,85,247,0.5)]
              "
            >
              <FiChevronRight />
            </motion.button>
          </div>

          {/* 🔥 DOTS */}
          <div
            className="
            absolute
            bottom-5
            left-1/2
            -translate-x-1/2

            flex gap-2
            z-20
            "
          >

            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`
                  transition-all duration-300

                  ${
                    current === index
                      ? "w-8 bg-purple-500"
                      : "w-2 bg-white/30"
                  }

                  h-2 rounded-full
                `}
              />
            ))}
          </div>
        </div>
      </div>
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