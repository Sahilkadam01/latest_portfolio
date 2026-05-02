import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
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

              {/* UNDERLINE ANIMATION */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden text-2xl text-white">
          <button onClick={() => setOpen(!open)}>
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10"
        >
          <div className="flex flex-col items-center py-6 gap-6">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setOpen(false)}
                className="text-gray-300 text-lg hover:text-purple-400 transition"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}



// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { FiMenu, FiX } from "react-icons/fi";

// const navLinks = [
//   { name: "Home", id: "hero" },
//   { name: "About", id: "about" },
//   { name: "Projects", id: "projects" },
//   { name: "Skills", id: "skills" },
//   { name: "Contact", id: "contact" },
// ];

// export default function Navbar() {
//   const [active, setActive] = useState("hero");
//   const [open, setOpen] = useState(false);
//   const [hidden, setHidden] = useState(false);
//   const [lastScroll, setLastScroll] = useState(0);

//   // 🔥 Smooth scroll
//   const scrollToSection = (id) => {
//     document.getElementById(id)?.scrollIntoView({
//       behavior: "smooth",
//     });
//     setOpen(false);
//   };

//   // 🔥 Active section detection + hide/show navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScroll = window.scrollY;

//       // Hide on scroll down
//       if (currentScroll > lastScroll && currentScroll > 80) {
//         setHidden(true);
//       } else {
//         setHidden(false);
//       }
//       setLastScroll(currentScroll);

//       // Detect active section
//       navLinks.forEach((link) => {
//         const section = document.getElementById(link.id);
//         if (section) {
//           const rect = section.getBoundingClientRect();
//           if (rect.top <= 150 && rect.bottom >= 150) {
//             setActive(link.id);
//           }
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScroll]);

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: hidden ? -100 : 0 }}
//       transition={{ duration: 0.4 }}
//       className="fixed w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10"
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
//         {/* LOGO */}
//         <h1 className="text-xl font-bold text-white">
//           <span className="text-purple-500">Your</span>Name
//         </h1>

//         {/* DESKTOP MENU */}
//         <div className="hidden md:flex gap-10 relative">
//           {navLinks.map((link) => (
//             <button
//               key={link.id}
//               onClick={() => scrollToSection(link.id)}
//               className={`relative text-sm transition ${
//                 active === link.id
//                   ? "text-purple-400"
//                   : "text-gray-300 hover:text-white"
//               }`}
//             >
//               {link.name}

//               {/* 🔥 ACTIVE UNDERLINE */}
//               {active === link.id && (
//                 <motion.span
//                   layoutId="underline"
//                   className="absolute left-0 -bottom-1 w-full h-[2px] bg-purple-400 rounded"
//                 />
//               )}
//             </button>
//           ))}
//         </div>

//         {/* MOBILE BUTTON */}
//         <div className="md:hidden text-white text-2xl">
//           <button onClick={() => setOpen(!open)}>
//             {open ? <FiX /> : <FiMenu />}
//           </button>
//         </div>
//       </div>

//       {/* 🔥 MOBILE MENU */}
//       {open && (
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10"
//         >
//           <div className="flex flex-col items-center py-6 gap-6">
//             {navLinks.map((link) => (
//               <button
//                 key={link.id}
//                 onClick={() => scrollToSection(link.id)}
//                 className={`text-lg transition ${
//                   active === link.id
//                     ? "text-purple-400"
//                     : "text-gray-300"
//                 }`}
//               >
//                 {link.name}
//               </button>
//             ))}
//           </div>
//         </motion.div>
//       )}
//     </motion.nav>
//   );
// }