import { motion } from "framer-motion";
import {React} from "react";


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function ProfileSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">

      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0b0b1a] to-black" />

      {/* PURPLE RADIAL GLOW */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full" />

      {/* SMALL PARTICLES */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[radial-gradient(circle,_#ffffff22_1px,_transparent_1px)] [background-size:40px_40px]" />
      </div>

      {/* MAIN CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center px-6"
      >

        {/* LEFT SIDE */}
        <div>

          {/* BADGE */}
          <motion.div
            variants={item}
            className="mb-6 inline-block px-4 py-1 border border-purple-500/30 rounded-full text-sm text-gray-300"
          >
            ● AVAILABLE FOR FREELANCE
          </motion.div>

          {/* TITLE */}
          <motion.h1
            variants={item}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Hi, I’m <br />
            <span className="bg-gradient-to-r from-white to-purple-500 bg-clip-text text-transparent">
              SAHIL KUMAR
            </span>
          </motion.h1>

          {/* SUBTITLE */}
          <motion.h2
            variants={item}
            className="text-2xl mt-4 text-gray-300"
          >
            A Creative{" "}
            <span className="text-purple-400">Frontend Developer</span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            variants={item}
            className="mt-6 text-gray-400 max-w-lg"
          >
            I build modern, responsive and interactive web experiences.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={item}
            className="mt-8 flex gap-4"
          >
            <button to="#projects" className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition duration-300">
              View Projects →
            </button>

            <button to="#contact" className="px-6 py-3 rounded-lg border border-gray-600 hover:border-purple-500 hover:bg-purple-500/10 transition duration-300">
              Contact Me →
            </button>
          </motion.div>

          {/* SCROLL INDICATOR */}
          <motion.div
            variants={item}
            className="mt-16 text-gray-500 text-sm"
          >
            <p className="mb-2">SCROLL DOWN</p>
            <div className="w-5 h-10 border border-gray-500 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-2 bg-purple-400 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >

          {/* GLOW RING */}
          <div className="absolute w-[400px] h-[400px] border border-purple-500/30 rounded-full blur-sm" />

          {/* FLOATING IMAGE */}
          <motion.img
            src="src\assets\Sahil_kumar.png"
            alt="profile"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative w-[350px] z-10"
          />

          {/* LIGHT SWEEP EFFECT */}
          <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />

        </motion.div>

      </motion.div>
    </section>
  );
}

// import { motion } from "framer-motion";

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3
//     }
//   }
// };

// const item = {
//   hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
//   show: {
//     opacity: 1,
//     y: 0,
//     filter: "blur(0px)",
//     transition: { duration: 0.8, ease: "easeOut" }
//   }
// };

// export default function ProfileSection() {
//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-6">
      
//       <motion.div
//         variants={container}
//         initial="hidden"
//         animate="show"
//         className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center"
//       >
        
//         {/* LEFT CONTENT */}
//         <div>
//           <motion.h1
//             variants={item}
//             className="text-5xl md:text-6xl font-bold leading-tight"
//           >
//             Hi, I'm <span className="text-purple-500">SAHIL KUMAR</span>
//           </motion.h1>

//           <motion.h2
//             variants={item}
//             className="text-2xl mt-4 text-gray-300"
//           >
//             A Creative Frontend Developer
//           </motion.h2>

//           <motion.p
//             variants={item}
//             className="mt-6 text-gray-400 max-w-lg"
//           >
//             I build modern, responsive and interactive web experiences.
//           </motion.p>

//           {/* BUTTONS */}
//           <motion.div
//             variants={item}
//             className="mt-8 flex gap-4"
//           >
//             <button className="px-6 py-3 bg-purple-600 rounded-lg hover:scale-105 hover:shadow-lg transition">
//               View Projects
//             </button>

//             <button className="px-6 py-3 border border-gray-600 rounded-lg hover:bg-white hover:text-black transition">
//               Contact Me
//             </button>
//           </motion.div>
//         </div>

//         {/* RIGHT SIDE IMAGE */}
//         <motion.div
//           animate={{ y: [0, -20, 0] }}
//           transition={{ duration: 4, repeat: Infinity }}
//           className="flex justify-center"
//         >
//           <img
//             src="./src/assets/Sahil Kumar.png"
//             alt="profile"
//             className="w-80 rounded-2xl shadow-2xl"
//           />
//         </motion.div>

//       </motion.div>
//     </section>
//   );
// }

