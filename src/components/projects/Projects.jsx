import { motion, AnimatePresence, } from "framer-motion";

import {
  useState,
  useEffect,
} from "react";

import {
  FiArrowUpRight,
  FiGithub,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";




import hotel from "/assets/projects/Hotel-site.jpeg";
import landing from "/assets/projects/Landing-page.png";
import vayom from "/assets/projects/Vayom.gif";
import bloggingSite from "/assets/projects/Blogging-site.png";
import devils from "/assets/projects/devils-eye.jpg";
import data from "/assets/projects/data-center.jpeg";
import job from "/assets/projects/job-hunter.webp";






const projects = [

{
    title: "Devils Eye",

    desc:
      "A real-time web-based motion detection system using Flask and OpenCV that detects movement through a camera and triggers instant security alerts.",

    img: devils,

    tech: [
      "Python","Flask", "gunicorn", "numpy", "python-dotenv", "opencv-python-headless"
    ],


    liveUrl: "https://devilseye.vercel.app/",


    githubUrl: "https://github.com/Sahilkadam01/Alarm-Security-System/tree/master",
  },


  {
    title: "AI Job Hunter Automation",

    desc:
      "An AI-powered job finder that matches online opportunities with your resume and profile using AI APIs. It automatically searches and applies to relevant jobs every 6 hours.",

    img: job,

    tech: [
      "Python", "Pypdf", "Fastapi", "Uvicorn", "Open Ai",
    ],


    liveUrl: "https://job-hunter-automation.vercel.app/",


    githubUrl: "https://github.com/Sahilkadam01/Job-Search-Automation/tree/master",
  },

{
    title: "Scrub Scroll Landing Page",

    desc:
      "A dynamic landing page where scrolling directly controls smooth, interactive animations for an immersive experience.",

    img: data,

    tech: [
      "Html",
      "Css",
      "Js",
      "Scrub ffmpeg"
    ],


    liveUrl: "https://data-center-animation-page.vercel.app/",


    githubUrl: "https://github.com/Sahilkadam01/Data-Center-Animation-Page/tree/master",
  },

  {
    title: "Hotel Website",

    desc:
      "Modern animated portfolio using React and Framer Motion with immersive UI interactions and cinematic effects.",

    img: hotel,

    tech: [
      "React",
      "Framer Motion",
      "Tailwind",
    ],


    liveUrl: "https://hotel-groups.vercel.app/",


    githubUrl: "https://github.com/Sahilkadam01/Hotel-Website/tree/master",
  },

  {
    title: "Animated One Swipe Page",

    desc:
      "A modern landing page designed to reveal the complete experience with a single smooth swipe. Each section transitions seamlessly with engaging animations, creating an immersive and interactive browsing experience.",

    img: landing,

    tech: [
      "Html",
      "Css",
      "Javascript",
    ],

    // ADD YOUR LIVE WEBSITE LINK HERE
    liveUrl: "https://landing-page-abm.vercel.app",

    // ADD YOUR GITHUB REPOSITORY LINK HERE
    githubUrl: "https://github.com/Sahilkadam01/Landing-Page/tree/main",
  },

  {
    title: "Vayom.ai", 

    desc:
      "Interactive dashboard with advanced data visualization and responsive modern design system.",

    img: vayom,

    tech: [
      "Html", "Css", "Gsap", "Javascript",
    ],

    // ADD YOUR LIVE WEBSITE LINK HERE
    liveUrl: "https://vayom.vercel.app",

    // ADD YOUR GITHUB REPOSITORY LINK HERE
    githubUrl: "https://github.com/Sahilkadam01/Vayom/tree/master",
  },

  {
    title: "Blogging Website",

    desc:
      "A Blog Website which mainly focused on premium visuals and engaging user experience.",

    img: bloggingSite,

    tech: [
      "Frontend",
      "Animations",
      "Design",
      "React",
      "Tailwind",
      "Node.js",
    ],

    // ADD YOUR LIVE WEBSITE LINK HERE
    liveUrl: "https://laspiran.vercel.app/",

    // ADD YOUR GITHUB REPOSITORY LINK HERE
    githubUrl: "https://github.com/Sahilkadam01/Blogging-App/tree/main",
  },
];


// ======================================================
// COMPONENT
// ======================================================

export default function Projects() {

  const [current, setCurrent] = useState(0);


  // ====================================================
  // AUTOPLAY
  // ====================================================

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) =>
        prev === projects.length - 1
          ? 0
          : prev + 1
      );

    }, 5000);

    return () => clearInterval(interval);

  }, []);


  // ====================================================
  // NEXT SLIDE
  // ====================================================

  const nextSlide = () => {

    setCurrent((prev) =>
      prev === projects.length - 1
        ? 0
        : prev + 1
    );

  };


  // ====================================================
  // PREVIOUS SLIDE
  // ====================================================

  const prevSlide = () => {

    setCurrent((prev) =>
      prev === 0
        ? projects.length - 1
        : prev - 1
    );

  };


  return (

    <section
      id="projects"
      className="
      relative
      py-20 md:py-20
      bg-black
      overflow-hidden
      text-white
      "
    >

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div
        className="
        absolute inset-0
        bg-gradient-to-b
        from-black
        via-[#0b0b14]
        to-black
        "
      />


      {/* =================================================
          GLOW
      ================================================= */}

      <motion.div

        animate={{
          x: [0, 60, 0],
          y: [0, -60, 0],
        }}

        transition={{
          duration: 10,
          repeat: Infinity,
        }}

        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2

        w-[280px] md:w-[650px]
        h-[280px] md:h-[650px]

        bg-purple-600/20
        blur-[140px]
        rounded-full
        "
      />


      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-4 sm:px-6
        "
      >


        {/* =================================================
            TITLE
        ================================================= */}

        <motion.div

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}

          className="
          text-center
          mb-14 md:mb-20
          "
        >

          <motion.p

            animate={{
              opacity: [0.5, 1, 0.5],
            }}

            transition={{
              duration: 3,
              repeat: Infinity,
            }}

            className="
            uppercase
            tracking-[6px]

            text-purple-400
            text-xs md:text-sm

            mb-5
            "
          >
            Featured Work
          </motion.p>


          <h2
            className="
            text-4xl sm:text-5xl md:text-7xl
            font-bold
            leading-tight
            "
          >

            Selected{" "}

            <span
              className="
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-purple-400
              via-pink-500
              to-purple-300
              "
            >
              Projects
            </span>

          </h2>


          <p
            className="
            mt-5
            max-w-2xl
            mx-auto
            text-gray-400
            text-sm md:text-base
            leading-relaxed
            px-2
            "
          >
            Premium frontend experiences crafted
            with modern UI, smooth interactions,
            and immersive animations.
          </p>

        </motion.div>


        {/* =================================================
            SLIDER
        ================================================= */}

        <div
          className="
          relative
          rounded-[30px]
          border border-white/10
          bg-white/[0.04]
          backdrop-blur-xl
          overflow-hidden
          "
        >

          <AnimatePresence mode="wait">

            <motion.div

              key={current}

              initial={{
                opacity: 0,
                scale: 1.03,
              }}

              animate={{
                opacity: 1,
                scale: 1,
              }}

              exit={{
                opacity: 0,
                scale: 0.97,
              }}

              transition={{
                duration: 0.7,
              }}

              className="
              grid
              lg:grid-cols-2
              "
            >


              {/* =================================================
                  IMAGE
              ================================================= */}

              <div
                className="
                relative
                
                h-[220px]
                sm:h-[250px]
                md:h-[300px]
                lg:h-[540px]

                overflow-hidden
                "
              >

                <motion.img

                  src={projects[current].img}

                  alt={projects[current].title}

                  initial={{
                    scale: 1.1,
                  }}

                  animate={{
                    scale: 1,
                  }}

                  transition={{
                    duration: 1,
                  }}

                  className="
                  w-full
                  h-full
                  object-cover
                  "
                />


                {/* OVERLAY */}

                <div
                  className="
                  absolute inset-0

                  bg-gradient-to-t
                  from-black
                  via-black/20
                  to-transparent
                  "
                />


                {/* NUMBER */}

                <h1
                  className="
                  absolute
                  bottom-4 md:bottom-6
                  left-4 md:left-6

                  text-5xl md:text-8xl
                  font-black

                  text-white/10
                  "
                >
                  0{current + 1}
                </h1>


                {/* LIGHT EFFECT */}

                <motion.div

                  animate={{
                    x: ["-100%", "250%"],
                  }}

                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}

                  className="
                  absolute
                  inset-y-0
                  w-[20%]
                  bg-white/10
                  blur-2xl
                  rotate-12
                  "
                />

              </div>


              {/* =================================================
                  CONTENT
              ================================================= */}

              <div
                className="
                flex
                flex-col
                justify-center
                p-[15px_15px_33px_15px]
                md:p-5
                sm:p-8
                md:p-12
                lg:p-14
                "
              >

                <motion.p

                  initial={{
                    opacity: 0,
                    y: 20,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    delay: 0.1,
                  }}

                  className="
                  uppercase
                  tracking-[4px]

                  text-purple-400
                  text-xs md:text-sm
                  "
                >
                  Case Study
                </motion.p>


                <motion.h3

                  initial={{
                    opacity: 0,
                    y: 30,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    delay: 0.15,
                  }}

                  className="
                  mt-4

                  text-2xl
                  sm:text-3xl
                  md:text-4xl

                  font-bold
                  leading-tight
                  "
                >
                  {projects[current].title}
                </motion.h3>


                <motion.p

                  initial={{
                    opacity: 0,
                    y: 30,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    delay: 0.2,
                  }}

                  className="
                  mt-5 md:mt-6
                  text-gray-400
                  leading-relaxed
                  text-sm md:text-lg
                  "
                >
                  {projects[current].desc}
                </motion.p>


                {/* =================================================
                    TECH
                ================================================= */}

                <motion.div

                  initial={{
                    opacity: 0,
                    y: 20,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    delay: 0.25,
                  }}

                  className="
                  flex
                  flex-wrap
                  gap-3
                  mt-6 md:mt-8
                  "
                >

                  {projects[current].tech.map(
                    (tech, index) => (

                      <motion.span

                        key={index}

                        whileHover={{
                          y: -3,
                        }}

                        className="
                        px-4
                        py-2
                        rounded-full
                        bg-white/5
                        border border-white/10
                        text-xs md:text-sm
                        "
                      >
                        {tech}
                      </motion.span>

                    )
                  )}

                </motion.div>


                {/* =================================================
                    BUTTONS
                ================================================= */}

                <motion.div

                  initial={{
                    opacity: 0,
                    y: 20,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    delay: 0.3,
                  }}

                  className="
                  flex
                  flex-wrap
                  gap-4
                  mt-8 md:mt-10
                  "
                >

                  {/* ================================
                      LIVE DEMO
                  ================================= */}

                  <motion.a

                    href={projects[current].liveUrl}

                    target="_blank"

                    rel="noopener noreferrer"

                    whileHover={{
                      scale: 1.05,
                    }}

                    whileTap={{
                      scale: 0.95,
                    }}

                    className="
                    flex
                    items-center
                    gap-2

                    px-5 md:px-6
                    py-3

                    rounded-xl

                    text-sm md:text-base

                    bg-gradient-to-r
                    from-purple-600
                    to-pink-500

                    shadow-[0_0_25px_rgba(168,85,247,0.35)]
                    "
                  >

                    Live Demo

                    <FiArrowUpRight />

                  </motion.a>


                  {/* ================================
                      GITHUB / CODE
                  ================================= */}

                  <motion.a

                    href={projects[current].githubUrl}

                    target="_blank"

                    rel="noopener noreferrer"

                    whileHover={{
                      scale: 1.05,
                    }}

                    whileTap={{
                      scale: 0.95,
                    }}

                    className="
                    flex
                    items-center
                    gap-2

                    px-5 md:px-6
                    py-3

                    rounded-xl

                    text-sm md:text-base

                    border border-white/15

                    bg-white/5

                    hover:bg-white
                    hover:text-black

                    transition
                    "
                  >

                    Code

                    <FiGithub />

                  </motion.a>

                </motion.div>

              </div>

            </motion.div>

          </AnimatePresence>


          {/* =================================================
              NAVIGATION
          ================================================= */}

          <div
            className="max-w-3xl
    invisible md:visible
            absolute
            bottom-4 md:bottom-6
            right-4 md:right-6
            flex
            gap-3
            z-20
            "
          >

            <motion.button

              whileHover={{
                scale: 1.1,
              }}

              whileTap={{
                scale: 0.9,
              }}

              onClick={prevSlide}

              className="
              w-10 md:w-12
              h-10 md:h-12

              rounded-full

              border border-white/10

              bg-white/5
              backdrop-blur-xl

              flex
              items-center
              justify-center
              "
            >

              <FiChevronLeft />

            </motion.button>


            <motion.button

              whileHover={{
                scale: 1.1,
              }}

              whileTap={{
                scale: 0.9,
              }}

              onClick={nextSlide}

              className="
              w-10 md:w-12
              h-10 md:h-12

              rounded-full

              bg-purple-600

              flex
              items-center
              justify-center

              shadow-[0_0_20px_rgba(168,85,247,0.5)]
              "
            >

              <FiChevronRight />

            </motion.button>

          </div>


          {/* =================================================
              DOTS
          ================================================= */}

          <div
            className="max-w-3xl md:bottom-5
            absolute
            bottom-2
            md:left-[58%]
            left-1/2
            -translate-x-1/2

            flex
            gap-2

            z-20
            "
          >

            {projects.map((_, index) => (

              <button

                key={index}

                onClick={() => setCurrent(index)}

                className={`
                  transition-all
                  duration-300

                  ${current === index
                    ? "w-8 bg-purple-500"
                    : "w-2 bg-white/30"
                  }

                  h-2
                  rounded-full
                `}
              />

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}