import { motion } from "framer-motion";
import { useState } from "react";

const achievements = [
  {
    title: "React Developer Certification",
    issuer: "Coursera",
    date: "2024",
    image: "/certificates/react.jpg",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "2023",
    image: "/certificates/fullstack.jpg",
  },
  {
    title: "UI/UX Design Fundamentals",
    issuer: "Google",
    date: "2023",
    image: "/certificates/uiux.jpg",
  },
  {
    title: "JavaScript Mastery",
    issuer: "freeCodeCamp",
    date: "2024",
    image: "/certificates/js.jpg",
  },
];

export default function Achievements() {
  const [selected, setSelected] = useState(null);

  const cardVariant = {
    hiddenLeft: { opacity: 0, x: -80, filter: "blur(10px)" },
    hiddenRight: { opacity: 0, x: 80, filter: "blur(10px)" },
    show: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="achievements"
      className="relative py-32 bg-black text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b1f] to-black" />

      {/* Glow */}
      <div className="absolute left-10 top-20 w-[300px] h-[300px] bg-purple-600/20 blur-[120px]" />
      <div className="absolute right-10 bottom-20 w-[300px] h-[300px] bg-blue-600/20 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-purple-400">Achievements</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Certifications and milestones that showcase my learning journey.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {achievements.map((item, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                variants={cardVariant}
                initial={isLeft ? "hiddenLeft" : "hiddenRight"}
                whileInView="show"
                viewport={{ once: false }}
                transition={{ delay: i * 0.15 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 0 30px rgba(168,85,247,0.3)",
                }}
                onClick={() => setSelected(item)}
                className="cursor-pointer bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-lg"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {item.issuer}
                  </p>

                  <span className="text-purple-400 text-sm block mb-4">
                    {item.date}
                  </span>

                  {/* 🔥 BUTTON */}
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelected(item);
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(168,85,247,0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 font-medium"
                  >
                    See Certificate →
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 🔥 MODAL */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999]"
          onClick={() => setSelected(null)}
        >
          <motion.img
            src={selected.image}
            alt="certificate"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="max-w-[90%] max-h-[80%] rounded-xl shadow-lg"
          />
        </motion.div>
      )}
    </section>
  );
}