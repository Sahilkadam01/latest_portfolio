import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import TextType from "../typingEffect/TypingEffect";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ProfileSection() {
  return (
    <section
      className="
        relative min-h-screen
        flex items-center
        overflow-hidden
        bg-[#050505]
        text-white
        pt-28 pb-24
        md:pt-24 md:pb-28
      "
    >
      {/* Subtle background details */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute top-0 left-1/2
            -translate-x-1/2
            w-px h-full
            bg-white/[0.035]
          "
        />

        <div
          className="
            absolute bottom-20 left-0
            w-full h-px
            bg-white/[0.05]
          "
        />
      </div>

      {/* Main content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="
          relative z-10
          max-w-7xl w-full
          mx-auto px-5 sm:px-8 lg:px-10
          grid grid-cols-1 md:grid-cols-2
          gap-12 sm:gap-14 md:gap-10 lg:gap-16
          items-center
        "
      >
        {/* LEFT CONTENT */}
        <div className="order-2 md:order-1 text-center md:text-left">

          {/* Availability
          <motion.div
            variants={item}
            className="
              flex items-center
              justify-center md:justify-start
              gap-3 mb-8
            "
          >
            <span className="w-2 h-2 rounded-full bg-white" />

            <span
              className="
                text-xs uppercase
                tracking-[0.25em]
                text-gray-400
              "
            >
              Available for opportunities
            </span>
          </motion.div> */}

          {/* Main heading */}
          <motion.h1
            variants={item}
            className="
              text-5xl sm:text-6xl
              md:text-6xl lg:text-7xl
              xl:text-8xl
              font-semibold
              tracking-[-0.06em]
              leading-[0.95]
            "
          >
            Hello,
            <br />

            <span className="text-white">
              I'm Sahil.
            </span>
          </motion.h1>

          {/* Profession */}
          <motion.div
            variants={item}
            className="
              mt-8
              text-lg sm:text-xl
              md:text-xl lg:text-2xl
              text-gray-400
              font-light
              flex flex-wrap items-center
              justify-center md:justify-start
              gap-2
            "
          >
            <span>I'm a</span>

            <span className="text-white font-medium">
              <TextType
                text={[
                  "Full Stack Developer",
                  "Python Developer",
                  "Software Developer",
                ]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor
                cursorCharacter="_"
                deletingSpeed={45}
                variableSpeedEnabled={false}
                cursorBlinkDuration={0.5}
              />
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={item}
            className="
              mt-7
              max-w-xl
              mx-auto md:mx-0
              text-sm sm:text-base
              leading-7 sm:leading-8
              text-gray-400
            "
          >
            I build responsive web applications and digital
            experiences with a focus on clean code, practical
            solutions, and thoughtful user interfaces.
            I enjoy working across the stack, from frontend
            development to backend functionality.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="
              mt-9
              flex flex-col
              sm:flex-row
              gap-4
              justify-center md:justify-start
            "
          >
            <Link
              to="projects"
              smooth={true}
              duration={600}
              className="
                cursor-pointer
                inline-flex items-center
                justify-center
                px-7 py-3.5
                bg-white text-black
                text-sm font-medium
                rounded-full
                border border-white
                transition-all duration-300
                hover:bg-transparent
                hover:text-white
              "
            >
              Explore My Work
              <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={600}
              className="
                cursor-pointer
                inline-flex items-center
                justify-center
                px-7 py-3.5
                bg-transparent text-white
                text-sm font-medium
                rounded-full
                border border-white/20
                transition-all duration-300
                hover:border-white
                hover:bg-white/[0.05]
              "
            >
              Let's Talk
              <span className="ml-3">→</span>
            </Link>
          </motion.div>

          {/* Bottom information */}
          <motion.div
            variants={item}
            className="
              mt-14 sm:mt-16
              pt-6
              border-t border-white/10
              flex flex-wrap
              justify-center md:justify-start
              gap-x-8 sm:gap-x-10
              gap-y-5
              text-left
            "
          >
            <div>
              <p className="text-2xl font-semibold text-white">
                2.8+
              </p>

              <p
                className="
                  mt-1 text-[10px]
                  uppercase tracking-[0.18em]
                  text-gray-500
                "
              >
                Years Experience
              </p>
            </div>

            <div>
              <p className="text-xl sm:text-2xl font-semibold text-white">
                Full Stack
              </p>

              <p
                className="
                  mt-1 text-[10px]
                  uppercase tracking-[0.18em]
                  text-gray-500
                "
              >
                Development
              </p>
            </div>

            <div>
              <p className="text-xl sm:text-2xl font-semibold text-white">
                Web + Python
              </p>

              <p
                className="
                  mt-1 text-[10px]
                  uppercase tracking-[0.18em]
                  text-gray-500
                "
              >
                Technologies
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            order-1 md:order-2
            flex justify-center
            items-center
          "
        >
          <div
            className="
              relative
              w-[230px] h-[250px]
              sm:w-[290px] sm:h-[310px]
              md:w-[340px] md:h-[370px]
              lg:w-[390px] lg:h-[420px]
              xl:w-[420px] xl:h-[440px]
            "
          >
            {/* Image frame */}
            <div
              className="
                relative
                w-full h-full
                overflow-hidden
                border border-white/10
                bg-[#111]
              "
            >
              <motion.img
                src="/assets/Sahil_kumar_profile.png"
                alt="Sahil Kumar - Software Developer"
                initial={{ scale: 1.08, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                }}
                className="
                  relative z-10
                  w-full h-full
                  object-contain
                  grayscale-[15%]
                  hover:grayscale-0
                  transition-all duration-700
                "
              />
            </div>

            {/* Minimal frame details */}
            <div
              className="
                absolute -top-3 -left-3
                w-12 h-12
                border-t border-l
                border-white/40
              "
            />

            <div
              className="
                absolute -bottom-3 -left-3
                w-12 h-12
                border-b border-l
                border-white/40
              "
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Center scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.8,
        }}
        className="
          absolute
          bottom-5 sm:bottom-7
          left-1/2 -translate-x-1/2
          z-20
          flex flex-col
          items-center justify-center
          gap-2
        "
      >
        <Link
          to="about"
          smooth={true}
          duration={600}
          className="
            cursor-pointer
            flex flex-col
            items-center
            gap-2
          "
        >
          <span
            className="
              whitespace-nowrap
              text-[10px]
              uppercase tracking-[0.3em]
              text-gray-400
            "
          >
            Scroll to explore
          </span>

          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              w-7 h-10
              rounded-full
              border border-white/40
              flex justify-center
              pt-2
            "
          >
            <span
              className="
                w-1 h-2
                rounded-full
                bg-white
              "
            />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}






