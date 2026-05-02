import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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

  // 🔥 Scroll animation for entire section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

  // 🔥 Card animation variants
  const cardVariant = {
    hiddenLeft: {
      opacity: 0,
      x: -100,
      filter: "blur(10px)",
    },
    hiddenRight: {
      opacity: 0,
      x: 100,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative py-32 bg-black text-white overflow-hidden"
    >
      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b1a] to-black" />

      {/* ✨ GLOW EFFECT */}
      <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-purple-600/20 blur-[120px]" />

      {/* CONTENT */}
      <motion.div
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        {/* TITLE */}
        <h2 className="text-4xl font-bold mb-16">
          My <span className="text-purple-400">Projects</span>
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                variants={cardVariant}
                initial={isLeft ? "hiddenLeft" : "hiddenRight"}
                whileInView="show"
                viewport={{ once: false, margin: "-100px" }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg"
              >
                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-[300px] object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/70 translate-y-full group-hover:translate-y-0 transition duration-500 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold text-purple-400">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm mt-2">
                    {project.desc}
                  </p>

                  {/* BUTTONS */}
                  <div className="mt-4 flex gap-4">
                    <button className="px-4 py-2 bg-purple-600 rounded-lg text-sm hover:scale-105 transition">
                      Live
                    </button>

                    <button className="px-4 py-2 border border-gray-400 rounded-lg text-sm hover:bg-white hover:text-black transition">
                      Code
                    </button>
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