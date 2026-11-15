
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const gradientText = {
  backgroundImage:
    "linear-gradient(90deg, #5ee7df 0%, #35b9e9 48%, #6485ff 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  display: "inline-block",
};

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
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <section
      ref={ref}
      className="relative pt-[90px] pb-[90px] max-[767px]:pt-[60px] max-[767px]:pb-0 bg-black text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080f11] to-black" />

      {/* Subtle Glow */}
      <div className="absolute left-1/2 top-0 w-[400px] h-[400px] bg-teal-500/10 blur-[120px] -translate-x-1/2" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 max-[767px]:px-[30px]"
      >
        {/* Title */}
        <div className="text-center mb-8 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-300">
            Contact Me
          </h2>

          <p className="text-gray-400 mt-4">
            Let’s build something amazing together.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-gray-200">
              Get in Touch
            </h3>

            <p className="text-gray-400">
              Feel free to reach out for collaborations or just a friendly hello 👋
            </p>

            {/* CONTACT INFO */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-xl" style={gradientText} />
                <span className="text-gray-300">
                  sahilkadam2701@email.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl" style={gradientText} />
                <span className="text-gray-300">
                  +91 9899936516
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl" style={gradientText} />
                <span className="text-gray-300">India</span>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-6 pt-4">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/Sahilkadam01"
                target="_blank"
                rel="noreferrer"
                className="text-2xl"
              >
                <FaGithub style={gradientText} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/sahil-kumar-913909252?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                className="text-2xl"
              >
                <FaLinkedin style={gradientText} />
              </motion.a>
            </div>

            {/* OPTIONAL VISUAL */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="mt-10 w-40 h-40 bg-teal-400/10 rounded-full blur-2xl"
            />
          </motion.div>

          {/* RIGHT SIDE - FORM */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            onSubmit={(e) => e.preventDefault()}
            className="space-y-8 bg-white/[0.04] backdrop-blur-lg border border-white/10 p-8 rounded-2xl"
          >
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder=" "
                className="peer w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 outline-none focus:border-[#35b9e9] transition"
              />

              <label
                className="absolute left-4 top-3 text-gray-400 text-sm transition-all
                peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#5ee7df]
                peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs"
              >
                Your Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder=" "
                className="peer w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 outline-none focus:border-[#35b9e9] transition"
              />

              <label
                className="absolute left-4 top-3 text-gray-400 text-sm transition-all
                peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#5ee7df]
                peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs"
              >
                Your Email
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                rows="5"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder=" "
                className="peer w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 outline-none focus:border-[#35b9e9] transition resize-none"
              />

              <label
                className="absolute left-4 top-3 text-gray-400 text-sm transition-all
                peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#5ee7df]
                peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs"
              >
                Your Message
              </label>
            </div>

            {/* Button */}
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 18px rgba(94,231,223,0.15)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded-lg bg-[#102b30] hover:bg-[#183e45] font-semibold transition-colors"
            >
              <span style={gradientText}>Send Message →</span>
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}