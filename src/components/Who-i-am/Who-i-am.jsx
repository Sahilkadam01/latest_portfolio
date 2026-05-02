import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
// import profile from "../assets/profile.png";

export default function WhoIam() {
  const ref = useRef(null);

  // 🎯 TRACK SCROLL POSITION OF THIS SECTION
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 🎬 SCROLL ANIMATIONS
  const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 0]);

  const yImage = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);

  const yCards = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      ref={ref}
      className="relative py-32 bg-black text-white overflow-hidden"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b1a] to-black" />

      {/* GLOW */}
      <div className="absolute left-1/2 top-0 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* IMAGE WITH PARALLAX */}
        <motion.div
          style={{ y: yImage, scale: scaleImage }}
          className="flex justify-center"
        >
          <img
            src="./src/assets/Sahil Kumar.png"
            alt="about"
            className="w-[320px] rounded-2xl shadow-2xl"
          />
        </motion.div>

        {/* TEXT CONTENT */}
        <motion.div style={{ y: yText, opacity }}>

          <h2 className="text-4xl font-bold">
            About <span className="text-purple-400">Me</span>
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed">
            I am a passionate frontend developer focused on building modern,
            responsive, and visually engaging web applications. I love creating
            smooth user experiences with clean and efficient code.
          </p>

          {/* CARDS */}
          <motion.div
            style={{ y: yCards }}
            className="mt-10 grid gap-6"
          >

            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition">
              <h3 className="text-xl font-semibold text-purple-400">
                Frontend Development
              </h3>
              <p className="text-gray-400 mt-2">
                Building responsive and interactive UI using React.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition">
              <h3 className="text-xl font-semibold text-purple-400">
                UI/UX Design
              </h3>
              <p className="text-gray-400 mt-2">
                Designing clean and user-focused interfaces.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition">
              <h3 className="text-xl font-semibold text-purple-400">
                Performance Optimization
              </h3>
              <p className="text-gray-400 mt-2">
                Creating fast and optimized experiences.
              </p>
            </div>

          </motion.div>

          {/* STATS */}
          <motion.div
            style={{ y: yCards }}
            className="mt-12 grid grid-cols-3 gap-6 text-center"
          >
            <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-400">2+</h3>
              <p className="text-gray-400 text-sm">Years</p>
            </div>

            <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-400">20+</h3>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>

            <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-400">10+</h3>
              <p className="text-gray-400 text-sm">Clients</p>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
/* new cdoe above */



/*old code */


// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";


// export default function WhoIAm() {
//   const sectionRef = useRef(null);
//   const textRefs = useRef([]);
//   const imageRef = useRef(null);

//   const paragraphs = [
//     "I am a passionate Software Developer with 2 years of experience building modern web applications.",
//     "I specialize in crafting responsive, high-performance interfaces with a focus on clean design.",
//     "As a Python Developer, I build scalable backend systems and automation workflows.",
//     "I continuously evolve, learning new technologies to deliver impactful digital solutions."
//   ];

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const ctx = gsap.context(() => {
//       // ✅ Smooth paragraph reveal
//       textRefs.current.forEach((el, i) => {
//         if (!el) return;

//         gsap.fromTo(
//           el,
//           {
//             opacity: 0,
//             y: 60,
//             filter: "blur(6px)",
//           },
//           {
//             opacity: 1,
//             y: 0,
//             filter: "blur(0px)",
//             duration: 1,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: el,
//               start: "top 80%",
//               toggleActions: "play none none reverse",
//             },
//           }
//         );
//       });

//       // ✅ Image floating animation
//       if (imageRef.current) {
//         gsap.to(imageRef.current, {
//           y: -40,
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true,
//           },
//         });
//       }
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full py-32 bg-black text-white"
//     >
//       {/* Background Glow */}
//       <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-black" />

//       <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

//         {/* IMAGE */}
//         <div className="flex justify-center">
//           <div
//             ref={imageRef}
//             className="relative w-72 h-72 rounded-full overflow-hidden border border-green-400/20 shadow-[0_0_60px_rgba(34,197,94,0.2)]"
//           >
//             <img
//               src="./src/assets/profile-image.jpg"
//               alt="developer"
//               className="w-full h-full object-cover"
//             />
            
//           </div>
//         </div>

//         {/* CONTENT */}
//         <div>
//           {/* ✅ FIXED HEADING (VISIBLE + PREMIUM) */}
//           <h2 className="text-5xl md:text-6xl font-bold mb-10 
//             bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 
//             bg-[length:200%_200%] 
//             bg-clip-text text-transparent 
//             animate-gradient">
//             Who I Am
//           </h2>

//           {/* PARAGRAPHS */}
//           <div className="space-y-8">
//             {paragraphs.map((text, i) => (
//               <p
//                 key={i}
//                 ref={(el) => (textRefs.current[i] = el)}
//                 className="text-lg md:text-xl text-gray-300 leading-relaxed"
//               >
//                 {text}
//               </p>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }