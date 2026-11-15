// import { motion, AnimatePresence, } from "framer-motion";

// import {
//   useState,
//   useEffect,
// } from "react";

// import {
//   FiArrowUpRight,
//   FiGithub,
//   FiChevronLeft,
//   FiChevronRight,
// } from "react-icons/fi";




// import hotel from "/assets/projects/Hotel-site.jpeg";
// import landing from "/assets/projects/Landing-page.png";
// import vayom from "/assets/projects/Vayom.gif";
// import bloggingSite from "/assets/projects/Blogging-site.png";
// import devils from "/assets/projects/devils-eye.jpg";
// import data from "/assets/projects/data-center.jpeg";
// import job from "/assets/projects/job-hunter.webp";






// const projects = [

// {
//     title: "Devils Eye",

//     desc:
//       "A real-time web-based motion detection system using Flask and OpenCV that detects movement through a camera and triggers instant security alerts.",

//     img: devils,

//     tech: [
//       "Python","Flask", "gunicorn", "numpy", "python-dotenv", "opencv-python-headless"
//     ],


//     liveUrl: "https://devilseye.vercel.app/",


//     githubUrl: "https://github.com/Sahilkadam01/Alarm-Security-System/tree/master",
//   },


//   {
//     title: "AI Job Hunter Automation",

//     desc:
//       "An AI-powered job finder that matches online opportunities with your resume and profile using AI APIs. It automatically searches and applies to relevant jobs every 6 hours.",

//     img: job,

//     tech: [
//       "Python", "Pypdf", "Fastapi", "Uvicorn", "Open Ai",
//     ],


//     liveUrl: "https://job-searchs-automation.vercel.app/",


//     githubUrl: "https://github.com/Sahilkadam01/Job-Search-Automation/tree/master",
//   },

// {
//     title: "Scrub Scroll Landing Page",

//     desc:
//       "A dynamic landing page where scrolling directly controls smooth, interactive animations for an immersive experience.",

//     img: data,

//     tech: [
//       "Html",
//       "Css",
//       "Js",
//       "Scrub ffmpeg"
//     ],


//     liveUrl: "https://data-center-animation-page.vercel.app/",


//     githubUrl: "https://github.com/Sahilkadam01/Data-Center-Animation-Page/tree/master",
//   },

//   {
//     title: "Hotel Website",

//     desc:
//       "Modern animated portfolio using React and Framer Motion with immersive UI interactions and cinematic effects.",

//     img: hotel,

//     tech: [
//       "React",
//       "Framer Motion",
//       "Tailwind",
//     ],


//     liveUrl: "https://hotel-groups.vercel.app/",


//     githubUrl: "https://github.com/Sahilkadam01/Hotel-Website/tree/master",
//   },

//   {
//     title: "Animated One Swipe Page",

//     desc:
//       "A modern landing page designed to reveal the complete experience with a single smooth swipe. Each section transitions seamlessly with engaging animations, creating an immersive and interactive browsing experience.",

//     img: landing,

//     tech: [
//       "Html",
//       "Css",
//       "Javascript",
//     ],

//     // ADD YOUR LIVE WEBSITE LINK HERE
//     liveUrl: "https://landing-page-abm.vercel.app",

//     // ADD YOUR GITHUB REPOSITORY LINK HERE
//     githubUrl: "https://github.com/Sahilkadam01/Landing-Page/tree/main",
//   },

//   {
//     title: "Vayom.ai", 

//     desc:
//       "Interactive dashboard with advanced data visualization and responsive modern design system.",

//     img: vayom,

//     tech: [
//       "Html", "Css", "Gsap", "Javascript",
//     ],

//     // ADD YOUR LIVE WEBSITE LINK HERE
//     liveUrl: "https://vayom.vercel.app",

//     // ADD YOUR GITHUB REPOSITORY LINK HERE
//     githubUrl: "https://github.com/Sahilkadam01/Vayom/tree/master",
//   },

//   {
//     title: "Blogging Website",

//     desc:
//       "A Blog Website which mainly focused on premium visuals and engaging user experience.",

//     img: bloggingSite,

//     tech: [
//       "Frontend",
//       "Animations",
//       "Design",
//       "React",
//       "Tailwind",
//       "Node.js",
//     ],

//     // ADD YOUR LIVE WEBSITE LINK HERE
//     liveUrl: "https://laspiran.vercel.app/",

//     // ADD YOUR GITHUB REPOSITORY LINK HERE
//     githubUrl: "https://github.com/Sahilkadam01/Blogging-App/tree/main",
//   },
// ];


// // ======================================================
// // COMPONENT
// // ======================================================

// export default function Projects() {

//   const [current, setCurrent] = useState(0);


//   // ====================================================
//   // AUTOPLAY
//   // ====================================================

//   useEffect(() => {

//     const interval = setInterval(() => {

//       setCurrent((prev) =>
//         prev === projects.length - 1
//           ? 0
//           : prev + 1
//       );

//     }, 5000);

//     return () => clearInterval(interval);

//   }, []);


//   // ====================================================
//   // NEXT SLIDE
//   // ====================================================

//   const nextSlide = () => {

//     setCurrent((prev) =>
//       prev === projects.length - 1
//         ? 0
//         : prev + 1
//     );

//   };


//   // ====================================================
//   // PREVIOUS SLIDE
//   // ====================================================

//   const prevSlide = () => {

//     setCurrent((prev) =>
//       prev === 0
//         ? projects.length - 1
//         : prev - 1
//     );

//   };


//   return (

//     <section
//       id="projects"
//       className="
//       relative
//       py-20 md:py-20
//       bg-black
//       overflow-hidden
//       text-white
//       "
//     >

//       {/* =================================================
//           BACKGROUND
//       ================================================= */}

//       <div
//         className="
//         absolute inset-0
//         bg-gradient-to-b
//         from-black
//         via-[#0b0b14]
//         to-black
//         "
//       />


//       {/* =================================================
//           GLOW
//       ================================================= */}

//       <motion.div

//         animate={{
//           x: [0, 60, 0],
//           y: [0, -60, 0],
//         }}

//         transition={{
//           duration: 10,
//           repeat: Infinity,
//         }}

//         className="
//         absolute
//         top-0
//         left-1/2
//         -translate-x-1/2

//         w-[280px] md:w-[650px]
//         h-[280px] md:h-[650px]

//         bg-purple-600/20
//         blur-[140px]
//         rounded-full
//         "
//       />


//       {/* =================================================
//           MAIN CONTENT
//       ================================================= */}

//       <div
//         className="
//         relative
//         z-10
//         max-w-7xl
//         mx-auto
//         px-4 sm:px-6
//         "
//       >


//         {/* =================================================
//             TITLE
//         ================================================= */}

//         <motion.div

//           initial={{
//             opacity: 0,
//             y: 40,
//           }}

//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}

//           transition={{
//             duration: 0.7,
//           }}

//           className="
//           text-center
//           mb-14 md:mb-20
//           "
//         >

//           <motion.p

//             animate={{
//               opacity: [0.5, 1, 0.5],
//             }}

//             transition={{
//               duration: 3,
//               repeat: Infinity,
//             }}

//             className="
//             uppercase
//             tracking-[6px]

//             text-purple-400
//             text-xs md:text-sm

//             mb-5
//             "
//           >
//             Featured Work
//           </motion.p>


//           <h2
//             className="
//             text-4xl sm:text-5xl md:text-7xl
//             font-bold
//             leading-tight
//             "
//           >

//             Selected{" "}

//             <span
//               className="
//               text-transparent
//               bg-clip-text
//               bg-gradient-to-r
//               from-purple-400
//               via-pink-500
//               to-purple-300
//               "
//             >
//               Projects
//             </span>

//           </h2>


//           <p
//             className="
//             mt-5
//             max-w-2xl
//             mx-auto
//             text-gray-400
//             text-sm md:text-base
//             leading-relaxed
//             px-2
//             "
//           >
//             Premium frontend experiences crafted
//             with modern UI, smooth interactions,
//             and immersive animations.
//           </p>

//         </motion.div>


//         {/* =================================================
//             SLIDER
//         ================================================= */}

//         <div
//           className="
//           relative
//           rounded-[30px]
//           border border-white/10
//           bg-white/[0.04]
//           backdrop-blur-xl
//           overflow-hidden
//           "
//         >

//           <AnimatePresence mode="wait">

//             <motion.div

//               key={current}

//               initial={{
//                 opacity: 0,
//                 scale: 1.03,
//               }}

//               animate={{
//                 opacity: 1,
//                 scale: 1,
//               }}

//               exit={{
//                 opacity: 0,
//                 scale: 0.97,
//               }}

//               transition={{
//                 duration: 0.7,
//               }}

//               className="
//               grid
//               lg:grid-cols-2
//               "
//             >


//               {/* =================================================
//                   IMAGE
//               ================================================= */}

//               <div
//                 className="
//                 relative
                
//                 h-[220px]
//                 sm:h-[250px]
//                 md:h-[300px]
//                 lg:h-[540px]

//                 overflow-hidden
//                 "
//               >

//                 <motion.img

//                   src={projects[current].img}

//                   alt={projects[current].title}

//                   initial={{
//                     scale: 1.1,
//                   }}

//                   animate={{
//                     scale: 1,
//                   }}

//                   transition={{
//                     duration: 1,
//                   }}

//                   className="
//                   w-full
//                   h-full
//                   object-cover
//                   "
//                 />


//                 {/* OVERLAY */}

//                 <div
//                   className="
//                   absolute inset-0

//                   bg-gradient-to-t
//                   from-black
//                   via-black/20
//                   to-transparent
//                   "
//                 />


//                 {/* NUMBER */}

//                 <h1
//                   className="
//                   absolute
//                   bottom-4 md:bottom-6
//                   left-4 md:left-6

//                   text-5xl md:text-8xl
//                   font-black

//                   text-white/10
//                   "
//                 >
//                   0{current + 1}
//                 </h1>


//                 {/* LIGHT EFFECT */}

//                 <motion.div

//                   animate={{
//                     x: ["-100%", "250%"],
//                   }}

//                   transition={{
//                     duration: 5,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}

//                   className="
//                   absolute
//                   inset-y-0
//                   w-[20%]
//                   bg-white/10
//                   blur-2xl
//                   rotate-12
//                   "
//                 />

//               </div>


//               {/* =================================================
//                   CONTENT
//               ================================================= */}

//               <div
//                 className="
//                 flex
//                 flex-col
//                 justify-center
//                 p-[15px_15px_33px_15px]
//                 md:p-5
//                 sm:p-8
//                 md:p-12
//                 lg:p-14
//                 "
//               >

//                 <motion.p

//                   initial={{
//                     opacity: 0,
//                     y: 20,
//                   }}

//                   animate={{
//                     opacity: 1,
//                     y: 0,
//                   }}

//                   transition={{
//                     delay: 0.1,
//                   }}

//                   className="
//                   uppercase
//                   tracking-[4px]

//                   text-purple-400
//                   text-xs md:text-sm
//                   "
//                 >
//                   Case Study
//                 </motion.p>


//                 <motion.h3

//                   initial={{
//                     opacity: 0,
//                     y: 30,
//                   }}

//                   animate={{
//                     opacity: 1,
//                     y: 0,
//                   }}

//                   transition={{
//                     delay: 0.15,
//                   }}

//                   className="
//                   mt-4

//                   text-2xl
//                   sm:text-3xl
//                   md:text-4xl

//                   font-bold
//                   leading-tight
//                   "
//                 >
//                   {projects[current].title}
//                 </motion.h3>


//                 <motion.p

//                   initial={{
//                     opacity: 0,
//                     y: 30,
//                   }}

//                   animate={{
//                     opacity: 1,
//                     y: 0,
//                   }}

//                   transition={{
//                     delay: 0.2,
//                   }}

//                   className="
//                   mt-5 md:mt-6
//                   text-gray-400
//                   leading-relaxed
//                   text-sm md:text-lg
//                   "
//                 >
//                   {projects[current].desc}
//                 </motion.p>


//                 {/* =================================================
//                     TECH
//                 ================================================= */}

//                 <motion.div

//                   initial={{
//                     opacity: 0,
//                     y: 20,
//                   }}

//                   animate={{
//                     opacity: 1,
//                     y: 0,
//                   }}

//                   transition={{
//                     delay: 0.25,
//                   }}

//                   className="
//                   flex
//                   flex-wrap
//                   gap-3
//                   mt-6 md:mt-8
//                   "
//                 >

//                   {projects[current].tech.map(
//                     (tech, index) => (

//                       <motion.span

//                         key={index}

//                         whileHover={{
//                           y: -3,
//                         }}

//                         className="
//                         px-4
//                         py-2
//                         rounded-full
//                         bg-white/5
//                         border border-white/10
//                         text-xs md:text-sm
//                         "
//                       >
//                         {tech}
//                       </motion.span>

//                     )
//                   )}

//                 </motion.div>


//                 {/* =================================================
//                     BUTTONS
//                 ================================================= */}

//                 <motion.div

//                   initial={{
//                     opacity: 0,
//                     y: 20,
//                   }}

//                   animate={{
//                     opacity: 1,
//                     y: 0,
//                   }}

//                   transition={{
//                     delay: 0.3,
//                   }}

//                   className="
//                   flex
//                   flex-wrap
//                   gap-4
//                   mt-8 md:mt-10
//                   "
//                 >

//                   {/* ================================
//                       LIVE DEMO
//                   ================================= */}

//                   <motion.a

//                     href={projects[current].liveUrl}

//                     target="_blank"

//                     rel="noopener noreferrer"

//                     whileHover={{
//                       scale: 1.05,
//                     }}

//                     whileTap={{
//                       scale: 0.95,
//                     }}

//                     className="
//                     flex
//                     items-center
//                     gap-2

//                     px-5 md:px-6
//                     py-3

//                     rounded-xl

//                     text-sm md:text-base

//                     bg-gradient-to-r
//                     from-purple-600
//                     to-pink-500

//                     shadow-[0_0_25px_rgba(168,85,247,0.35)]
//                     "
//                   >

//                     Live Demo

//                     <FiArrowUpRight />

//                   </motion.a>


//                   {/* ================================
//                       GITHUB / CODE
//                   ================================= */}

//                   <motion.a

//                     href={projects[current].githubUrl}

//                     target="_blank"

//                     rel="noopener noreferrer"

//                     whileHover={{
//                       scale: 1.05,
//                     }}

//                     whileTap={{
//                       scale: 0.95,
//                     }}

//                     className="
//                     flex
//                     items-center
//                     gap-2

//                     px-5 md:px-6
//                     py-3

//                     rounded-xl

//                     text-sm md:text-base

//                     border border-white/15

//                     bg-white/5

//                     hover:bg-white
//                     hover:text-black

//                     transition
//                     "
//                   >

//                     Code

//                     <FiGithub />

//                   </motion.a>

//                 </motion.div>

//               </div>

//             </motion.div>

//           </AnimatePresence>


//           {/* =================================================
//               NAVIGATION
//           ================================================= */}

//           <div
//             className="max-w-3xl
//     invisible md:visible
//             absolute
//             bottom-4 md:bottom-6
//             right-4 md:right-6
//             flex
//             gap-3
//             z-20
//             "
//           >

//             <motion.button

//               whileHover={{
//                 scale: 1.1,
//               }}

//               whileTap={{
//                 scale: 0.9,
//               }}

//               onClick={prevSlide}

//               className="
//               w-10 md:w-12
//               h-10 md:h-12

//               rounded-full

//               border border-white/10

//               bg-white/5
//               backdrop-blur-xl

//               flex
//               items-center
//               justify-center
//               "
//             >

//               <FiChevronLeft />

//             </motion.button>


//             <motion.button

//               whileHover={{
//                 scale: 1.1,
//               }}

//               whileTap={{
//                 scale: 0.9,
//               }}

//               onClick={nextSlide}

//               className="
//               w-10 md:w-12
//               h-10 md:h-12

//               rounded-full

//               bg-purple-600

//               flex
//               items-center
//               justify-center

//               shadow-[0_0_20px_rgba(168,85,247,0.5)]
//               "
//             >

//               <FiChevronRight />

//             </motion.button>

//           </div>


//           {/* =================================================
//               DOTS
//           ================================================= */}

//           <div
//             className="max-w-3xl md:bottom-5
//             absolute
//             bottom-2
//             md:left-[58%]
//             left-1/2
//             -translate-x-1/2

//             flex
//             gap-2

//             z-20
//             "
//           >

//             {projects.map((_, index) => (

//               <button

//                 key={index}

//                 onClick={() => setCurrent(index)}

//                 className={`
//                   transition-all
//                   duration-300

//                   ${current === index
//                     ? "w-8 bg-purple-500"
//                     : "w-2 bg-white/30"
//                   }

//                   h-2
//                   rounded-full
//                 `}
//               />

//             ))}

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }



// new designed for projects


import React, { useEffect, useRef, useState } from "react";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
  FiCode,
  FiMove,
} from "react-icons/fi";

// =====================================================
// PROJECT DATA
// =====================================================

const projects = [
  {
    id: "01",
    title: "Devil's Eye",
    subtitle: "Intelligent Security System",
    category: "AI / COMPUTER VISION",
    description:
      "An intelligent security monitoring system powered by Python, Flask, and OpenCV. It detects motion through a camera feed and triggers alerts for suspicious activity.",
    image: "/assets/projects/devils-eye.jpg",
    tech: ["Python", "Flask", "OpenCV", "Computer Vision"],
    live: "https://devilseye.vercel.app/",
    github: "https://github.com/Sahilkadam01/Alarm-Security-System",
  },
  {
    id: "02",
    title: "AI Job Hunter",
    subtitle: "Smarter Job Discovery",
    category: "AI / FULL STACK",
    description:
      "An AI-powered job hunting platform that analyzes resumes, discovers relevant opportunities, and helps candidates find jobs matching their skills.",
    image: "/assets/projects/job-hunter.webp",
    tech: ["React", "Python", "FastAPI", "Gemini AI"],
    live: "https://job-searchs-automation.vercel.app/",
    github: "https://github.com/Sahilkadam01/Job-Search-Automation",
  },
  {
    id: "03",
    title: "Data Center",
    subtitle: "Scroll Driven Experience",
    category: "CREATIVE DEVELOPMENT",
    description:
      "A cinematic landing page featuring custom scroll-based animations, immersive transitions, and a modern data-center-inspired visual experience.",
    image: "/assets/projects/data-center.jpeg",
    tech: ["HTML", "CSS", "JavaScript", "Custom Scroll"],
    live: "https://data-center-animation-page.vercel.app/",
    github: "https://github.com/Sahilkadam01/Data-Center-Animation-Page",
  },
  {
    id: "04",
    title: "Hotel Groups",
    subtitle: "Luxury Hospitality Website",
    category: "WEB DEVELOPMENT",
    description:
      "A modern hotel website designed to showcase hospitality, elegant spaces, and a smooth browsing experience through responsive layouts and animations.",
    image: "/assets/projects/Hotel-site.jpeg",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    live: "https://hotel-groups.vercel.app/",
    github: "https://github.com/Sahilkadam01/Hotel-Website",
  },
  {
    id: "05",
    title: "Animated Landing",
    subtitle: "Modern Digital Interface",
    category: "FRONTEND DEVELOPMENT",
    description:
      "A creative landing page focused on visual storytelling, smooth interactions, and a clean modern interface.",
    image: "/assets/projects/Landing-page.png",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://landing-page-abm.vercel.app",
    github: "https://github.com/Sahilkadam01/Landing-Page",
  },
  {
    id: "06",
    title: "Vayom.ai",
    subtitle: "Interactive Web Experience",
    category: "CREATIVE DEVELOPMENT",
    description:
      "A visually engaging website built with custom layouts and GSAP-powered animations to create an interactive digital experience.",
    image: "/assets/projects/Vayom.gif",
    tech: ["HTML", "CSS", "JavaScript", "GSAP"],
    live: "https://vayom.vercel.app",
    github: "https://github.com/Sahilkadam01/Vayom",
  },
  {
    id: "07",
    title: "Blogging Website",
    subtitle: "Content Management Platform",
    category: "FULL STACK DEVELOPMENT",
    description:
      "A blogging platform built to deliver a clean reading experience with a responsive frontend and backend functionality.",
    image: "/assets/projects/Blogging-site.png",
    tech: ["React", "Tailwind CSS", "Node.js"],
    live: "https://laspiran.vercel.app/",
    github: "https://github.com/Sahilkadam01/Blogging-App",
  },
];

// =====================================================
// ANIMATION VARIANTS
// =====================================================

const reveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// =====================================================
// MONOCHROME PARTICLE BACKGROUND
// =====================================================

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    let animationFrame;
    let particles = [];
    let width = 0;
    let height = 0;

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 35 : 65;
    const connectionDistance = isMobile ? 85 : 125;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;

        this.vx = (Math.random() - 0.5) * 0.22;
        this.vy = (Math.random() - 0.5) * 0.22;

        this.radius = Math.random() * 1.3 + 0.35;
        this.alpha = Math.random() * 0.4 + 0.12;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) {
          this.vx *= -1;
        }

        if (this.y < 0 || this.y > height) {
          this.vy *= -1;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(255,255,255,${this.alpha})`;
        ctx.fill();
      }
    }

    const createParticles = () => {
      particles = Array.from(
        { length: particleCount },
        () => new Particle()
      );
    };

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity =
              (1 - distance / connectionDistance) * 0.13;

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);

            ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      drawConnections();

      animationFrame = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
      createParticles();
    });

    resizeObserver.observe(canvas);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
};

// =====================================================
// 3D PROJECT CARD
// =====================================================

const ProjectCard = ({
  project,
  featured = false,
  onClick,
}) => {
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 150,
    damping: 25,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 150,
    damping: 25,
  });

  const rotateX = useTransform(
    smoothY,
    [-0.5, 0.5],
    [5, -5]
  );

  const rotateY = useTransform(
    smoothX,
    [-0.5, 0.5],
    [-6, 6]
  );

  const handleMouseMove = (event) => {
    if (!cardRef.current || !featured) return;

    const rect = cardRef.current.getBoundingClientRect();

    mouseX.set(
      (event.clientX - rect.left) / rect.width - 0.5
    );

    mouseY.set(
      (event.clientY - rect.top) / rect.height - 0.5
    );
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.button
      ref={cardRef}
      type="button"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: featured ? rotateX : 0,
        rotateY: featured ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: featured ? 1.008 : 1.02 }}
      whileTap={{ scale: 0.99 }}
      className={`group relative block w-full overflow-hidden rounded-sm border border-white/[0.13] bg-[#101010] text-left transition-colors duration-500 hover:border-white/40 ${
        featured
          ? "aspect-[1.3/1] min-h-[320px] sm:aspect-[1.5/1] lg:min-h-[500px]"
          : "aspect-[1.7/1] min-h-[165px] sm:min-h-[190px]"
      }`}
    >
      <motion.img
        src={project.image}
        alt={project.title}
        draggable="false"
        className="absolute inset-0 h-full w-full object-cover"
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.045 }}
        transition={{ duration: 0.9 }}
      />

      {/* Neutral image treatment */}
      <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/5" />

      {/* Top details */}
      <div className="absolute left-5 right-5 top-5 flex items-center justify-between sm:left-7 sm:right-7 sm:top-7">
        <span className="border border-white/30 bg-black/30 px-3 py-2 text-[9px] uppercase tracking-[0.2em] text-white/85 backdrop-blur-md">
          {project.category}
        </span>

        <span className="text-xs tracking-[0.2em] text-white/70">
          {project.id}
        </span>
      </div>

      {/* Bottom details */}
      <div
        className={`absolute bottom-0 left-0 right-0 ${
          featured ? "p-6 sm:p-9" : "p-5 sm:p-6"
        }`}
        style={{ transform: "translateZ(25px)" }}
      >
        <h3
          className={`font-medium tracking-[-0.055em] text-white ${
            featured
              ? "text-4xl sm:text-5xl lg:text-7xl"
              : "text-2xl sm:text-3xl"
          }`}
        >
          {project.title}
        </h3>

        <div className="mt-3 flex items-center justify-between gap-3">
          <p className="text-xs text-white/65 sm:text-sm">
            {project.subtitle}
          </p>

          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/40 bg-black/30 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-black">
            <FiArrowUpRight />
          </span>
        </div>
      </div>
    </motion.button>
  );
};

// =====================================================
// MAIN PROJECTS COMPONENT
// =====================================================

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = projects[activeIndex];

  const sideProjects = [
    projects[(activeIndex + 1) % projects.length],
    projects[(activeIndex + 2) % projects.length],
    projects[(activeIndex + 3) % projects.length],
  ];

  const changeProject = (index) => {
    setActiveIndex(
      (index + projects.length) % projects.length
    );
  };

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-8 lg:px-16 lg:py-32"
    >
      {/* Animated particle background */}
      <ParticleBackground />

      {/* Subtle black overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[#050505]/35" />

      {/* Subtle top and bottom separators */}
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-white/10" />

      <div className="relative z-10 mx-auto max-w-[1450px]">

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-14 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end"
        >
          <div>
            <motion.div
              variants={reveal}
              className="mb-6 flex items-center gap-4"
            >
              <span className="h-px w-10 bg-white/80" />

              <span className="text-[10px] uppercase tracking-[0.4em] text-white/50">
                Selected Works / 2026
              </span>
            </motion.div>

            <motion.h2
              variants={reveal}
              className="text-5xl font-medium leading-[0.94] tracking-[-0.075em] sm:text-7xl lg:text-[105px]"
            >
              Selected
              <br />
              <span className="text-white/35">Projects.</span>
            </motion.h2>
          </div>

          <motion.div
            variants={reveal}
            className="max-w-sm md:pb-2"
          >
            <p className="text-sm leading-7 text-white/45 sm:text-base">
              A collection of digital experiences, creative
              experiments, and applications built through
              technology, design, and imagination.
            </p>

            <div className="mt-6 flex items-center gap-3 text-[10px] tracking-[0.2em] text-white/40">
              <FiCode className="text-white/80" />
              <span>07 PROJECTS / PERSONAL COLLECTION</span>
            </div>
          </motion.div>
        </motion.div>

        {/* ================================================= */}
        {/* PROJECT GALLERY */}
        {/* ================================================= */}

        <div
          className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1.65fr_0.8fr]"
          style={{ perspective: "1500px" }}
        >
          {/* FEATURED PROJECT */}
          <div className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{
                  opacity: 0,
                  y: 25,
                  rotateY: -7,
                  scale: 0.98,
                  filter: "blur(5px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateY: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  y: -15,
                  rotateY: 5,
                  scale: 0.98,
                  filter: "blur(4px)",
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ProjectCard
                  project={activeProject}
                  featured
                  onClick={() => {}}
                />
              </motion.div>
            </AnimatePresence>

            {/* PROJECT INFORMATION */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id + "-info"}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="mt-7"
              >
                <div className="flex flex-col justify-between gap-7 xl:flex-row xl:items-start">
                  <div className="max-w-2xl">
                    <span className="text-[10px] uppercase tracking-[0.35em] text-white/35">
                      About the project
                    </span>

                    <p className="mt-4 text-sm leading-7 text-white/55 sm:text-base">
                      {activeProject.description}
                    </p>

                    {/* TECHNOLOGY */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {activeProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="border border-white/15 px-3 py-2 text-[10px] text-white/55 transition-colors duration-300 hover:border-white/50 hover:text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* PROJECT LINKS */}
                  <div className="flex shrink-0 flex-wrap gap-3">
                    <a
                      href={activeProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 bg-white px-6 py-3.5 text-xs font-semibold text-black transition-colors duration-300 hover:bg-white/80"
                    >
                      Live Demo
                      <FiExternalLink className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>

                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 border border-white/25 px-6 py-3.5 text-xs font-medium text-white transition-colors duration-300 hover:bg-white hover:text-black"
                    >
                      <FiGithub />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ================================================= */}
          {/* SIDE PROJECTS */}
          {/* ================================================= */}

          <div className="flex min-w-0 flex-col gap-5">
            <div className="flex items-center justify-between pb-1">
              <span className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                More Projects
              </span>

              <span className="text-[10px] tracking-widest text-white/30">
                03 / 07
              </span>
            </div>

            {sideProjects.map((project, index) => {
              const originalIndex = projects.findIndex(
                (item) => item.id === project.id
              );

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.12,
                  }}
                >
                  <ProjectCard
                    project={project}
                    onClick={() => changeProject(originalIndex)}
                  />
                </motion.div>
              );
            })}

            {/* NAVIGATION */}
            <div className="mt-1 flex items-center justify-between border-t border-white/10 pt-5">
              <span className="text-xs text-white/40">
                Browse collection
              </span>

              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous project"
                  onClick={() => changeProject(activeIndex - 1)}
                  className="flex h-10 w-10 items-center justify-center border border-white/20 text-white/70 transition-all duration-300 hover:bg-white hover:text-black"
                >
                  <FiChevronLeft />
                </button>

                <button
                  type="button"
                  aria-label="Next project"
                  onClick={() => changeProject(activeIndex + 1)}
                  className="flex h-10 w-10 items-center justify-center border border-white/20 text-white/70 transition-all duration-300 hover:bg-white hover:text-black"
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* PROJECT INDEX */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="mt-20 border-t border-white/10 pt-9 sm:mt-28"
        >
          <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
            <div>
              <span className="text-[10px] uppercase tracking-[0.35em] text-white/35">
                Complete Archive
              </span>

              <h3 className="mt-3 text-3xl font-medium tracking-[-0.06em] sm:text-4xl">
                The collection<span className="text-white/35">.</span>
              </h3>
            </div>

            <span className="text-xs tracking-widest text-white/35">
              {String(activeIndex + 1).padStart(2, "0")} / 07
            </span>
          </div>

          <div className="grid grid-cols-2 gap-x-5 sm:grid-cols-4 lg:grid-cols-7">
            {projects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                onClick={() => changeProject(index)}
                className="group border-t border-white/15 py-5 text-left transition-colors duration-300 hover:border-white"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span
                    className={`text-xs transition-colors ${
                      activeIndex === index
                        ? "text-white"
                        : "text-white/30 group-hover:text-white"
                    }`}
                  >
                    {project.id}
                  </span>

                  <FiArrowUpRight
                    className={`transition-all duration-300 ${
                      activeIndex === index
                        ? "text-white"
                        : "text-white/20 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                    }`}
                  />
                </div>

                <span
                  className={`block text-sm font-medium transition-colors ${
                    activeIndex === index
                      ? "text-white"
                      : "text-white/40 group-hover:text-white"
                  }`}
                >
                  {project.title}
                </span>

                <span className="mt-2 block text-[9px] uppercase tracking-wider text-white/25">
                  {project.category}
                </span>

                <motion.div
                  initial={false}
                  animate={{
                    scaleX: activeIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.35 }}
                  className="mt-5 h-px origin-left bg-white"
                />
              </button>
            ))}
          </div>
        </motion.div>

        {/* ================================================= */}
        {/* FOOTER */}
        {/* ================================================= */}

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3 text-white/35">
            <FiCode className="text-white/70" />

            <span className="text-xs">
              Designed with curiosity. Built with code.
            </span>
          </div>

          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/30">
            <FiMove />
            End of collection
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
