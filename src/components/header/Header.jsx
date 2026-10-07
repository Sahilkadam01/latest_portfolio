import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", to: "profile" },
  { name: "About", to: "about" },
  { name: "Projects", to: "projects" },
  { name: "Skills", to: "skills" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Disable background scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close menu when clicking a link
  const handleMenuClick = () => {
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      {/* NAVBAR HEADER */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative z-[60]">
        {/* LOGO */}
        <h1 className="text-xl font-bold text-white">
          <span className="text-purple-500">SAHIL </span>KUMAR
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="text-purple-400"
              className="cursor-pointer text-gray-300 hover:text-purple-400 transition relative group"
            >
              {link.name}

              {/* UNDERLINE */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden text-2xl text-white">
          <button
            onClick={() => setOpen(!open)}
            className="relative z-[70] p-1"
            aria-label="Toggle menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* FULL SCREEN MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="
              fixed
              inset-0
              w-full
              h-screen
              bg-black
              md:hidden
              z-50
            "
          >
            {/* Purple background glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-[-150px] right-[-100px] w-[300px] h-[300px] bg-purple-600/20 blur-[100px] rounded-full" />

              <div className="absolute bottom-[-150px] left-[-100px] w-[300px] h-[300px] bg-purple-800/20 blur-[100px] rounded-full" />
            </div>

            {/* MOBILE LINKS */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.1,
              }}
              className="
                relative
                z-10
                h-full
                flex
                flex-col
                items-center
                justify-center
                gap-8
              "
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + i * 0.08,
                  }}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    onClick={handleMenuClick}
                    className="
                      cursor-pointer
                      text-2xl
                      sm:text-3xl
                      font-medium
                      text-gray-300
                      hover:text-purple-400
                      transition-colors
                    "
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}



