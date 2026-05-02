import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

// ICONS
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section
      ref={ref}
      className="relative py-32 bg-black text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a1a] to-black" />

      {/* Glow */}
      <div className="absolute left-1/2 top-0 w-[400px] h-[400px] bg-purple-600/20 blur-[120px] -translate-x-1/2" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6"
      >
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            Contact <span className="text-purple-400">Me</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Let’s build something amazing together.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* 🔥 LEFT SIDE (INFO + ICONS) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold">
              Get in Touch
            </h3>

            <p className="text-gray-400">
              Feel free to reach out for collaborations or just a friendly hello 👋
            </p>

            {/* CONTACT INFO */}
            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-purple-400 text-xl" />
                <span className="text-gray-300">your@email.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-purple-400 text-xl" />
                <span className="text-gray-300">+91 00000 00000</span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-purple-400 text-xl" />
                <span className="text-gray-300">India</span>
              </div>

            </div>

            {/* SOCIALS */}
            <div className="flex gap-6 pt-4">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="text-2xl text-gray-400 hover:text-purple-400 transition"
              >
                <FaGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="text-2xl text-gray-400 hover:text-purple-400 transition"
              >
                <FaLinkedin />
              </motion.a>
            </div>

            {/* OPTIONAL VISUAL */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="mt-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"
            />
          </motion.div>

          {/* 🔥 RIGHT SIDE (FORM - SAME AS BEFORE) */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8 bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl"
          >
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                name="name"
                required
                className="peer w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 outline-none focus:border-purple-500 transition"
              />
              <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all 
                peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-400
                peer-valid:-top-2 peer-valid:text-xs">
                Your Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                required
                className="peer w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 outline-none focus:border-purple-500 transition"
              />
              <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all 
                peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-400
                peer-valid:-top-2 peer-valid:text-xs">
                Your Email
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                rows="5"
                name="message"
                required
                className="peer w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 outline-none focus:border-purple-500 transition"
              />
              <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all 
                peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-400
                peer-valid:-top-2 peer-valid:text-xs">
                Your Message
              </label>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(168,85,247,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 font-semibold"
            >
              Send Message →
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}