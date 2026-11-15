
import { motion } from "framer-motion";
import { useState } from "react";

const achievements = [
  {
    title: "Python Developer Certification",
    issuer: "IBM",
    date: "2024",
    image: "/assets/certificates/Python_Certificate01.jpg",
  },
  {
    title: "Php & My Sql Development",
    issuer: "Eduonix",
    date: "2023",
    image: "/assets/certificates/Php_My_Sql_Certificate.jpeg",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Eduonix",
    date: "2022",
    image: "/assets/certificates/Web_Development_Certificate.jpg",
  },
  {
    title: "Ethical Hacking",
    issuer: "Great Learning",
    date: "2022",
    image: "/assets/certificates/Ethical_Hacking.jpg",
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
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080f11] to-black" />

      {/* Subtle Background Accents */}
      <div className="absolute left-10 top-20 w-[300px] h-[300px] bg-teal-500/10 blur-[120px]" />
      <div className="absolute right-10 bottom-20 w-[300px] h-[300px] bg-slate-500/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #5ee7df 0%, #35b9e9 48%, #6485ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              My Achievements
            </span>
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
                  boxShadow: "0 0 25px rgba(52,249,226,0.12)",
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

                  <span className=" text-sm block mb-4" style={{
                      color: "#35b9e9",
                      backgroundClip: "padding-box",
                    }}>
                    {item.date}
                  </span>

                  {/* Certificate Button */}
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelected(item);
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 5px 18px rgba(94,231,223,0.15)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 text-sm rounded-lg bg-[#353b3c] hover:bg-[#2c3232] font-semibold transition-colors"
                    style={{
                      color: "#35b9e9",
                      backgroundClip: "padding-box",
                    }}
                  >
                    <span
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, #5ee7df 0%, #35b9e9 48%, #6485ff 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      See Certificate →
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
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
