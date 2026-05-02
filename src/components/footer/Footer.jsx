import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const navLinks = [
  { name: "Home", id: "profile" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

export default function Footer() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-black text-white pt-20 pb-10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-[#0a0a1a] to-black" />

      {/* Glow */}
      <div className="absolute left-1/2 top-0 w-[300px] h-[300px] bg-purple-600/20 blur-[120px] -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-purple-500">SAHIL </span>KUMAR
            </h2>

            <p className="text-gray-400">
              Crafting modern, high-performance web experiences with clean
              design and smooth interactions.
            </p>
          </motion.div>

          {/* NAV LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-400 hover:text-purple-400 transition text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* SOCIAL */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Connect</h3>

            <div className="flex gap-6">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="text-gray-400 hover:text-purple-400 text-xl transition"
              >
                <FaGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="text-gray-400 hover:text-purple-400 text-xl transition"
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="text-gray-400 hover:text-purple-400 text-xl transition"
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Sahil kumar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}