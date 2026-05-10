import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-scroll";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(10px)",
  },

  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",

    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function ProfileSection() {
  return (
    <section
      className="
      relative
      min-h-screen

      flex items-center
      justify-center

      bg-black
      text-white
      overflow-hidden

      pt-28 pb-16
      md:py-0
      "
    >

      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0b0b1a] to-black" />

      {/* 🔥 BIG GLOW */}
      <div
        className="
        absolute
        right-0
        top-1/2
        -translate-y-1/2

        w-[300px] md:w-[650px]
        h-[300px] md:h-[650px]

        bg-purple-600/20
        blur-[120px]
        rounded-full
        "
      />

      {/* ✨ PARTICLES */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[radial-gradient(circle,_#ffffff22_1px,_transparent_1px)] [background-size:40px_40px]" />
      </div>

      {/* CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="
        relative z-10

        max-w-7xl
        w-full

        grid
        md:grid-cols-2

        gap-16 md:gap-10

        items-center

        px-4 md:px-6
        "
      >

        {/* LEFT SIDE */}
        <div className="order-2 md:order-1 text-center md:text-left">

          {/* BADGE */}
          <motion.div
            variants={item}
            className="
            mb-6

            inline-flex

            px-4 py-2

            rounded-full

            border border-purple-500/20

            bg-white/5
            backdrop-blur-md

            text-xs md:text-sm
            text-gray-300
            "
          >
            ● AVAILABLE FOR FREELANCE
          </motion.div>

          {/* TITLE */}
          <motion.h1
            variants={item}
            className="
            text-4xl
            sm:text-5xl
            md:text-7xl

            font-bold
            leading-tight
            "
          >
            Hi, I’m <br />

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
              SAHIL KUMAR
            </span>
          </motion.h1>

          {/* SUBTITLE */}
          <motion.h2
            variants={item}
            className="
            text-xl
            md:text-2xl

            mt-5

            text-gray-300
            "
          >
            A Creative{" "}

            <span className="text-purple-400">
              Frontend Developer
            </span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            variants={item}
            className="
            mt-6

            text-gray-400

            max-w-lg
            mx-auto md:mx-0

            text-sm md:text-base
            leading-relaxed
            "
          >
            I build modern, responsive and immersive
            web experiences with premium animations,
            interactive UI and smooth user journeys.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={item}
            className="
            mt-8

            flex flex-col sm:flex-row

            gap-4

            justify-center md:justify-start
            "
          >

            {/* BUTTON 1 */}
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="
              cursor-pointer

              px-6 py-3

              rounded-xl

              bg-gradient-to-r
              from-purple-600
              to-pink-500

              hover:scale-105

              hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]

              transition duration-300
              "
            >
              View Projects →
            </Link>

            {/* BUTTON 2 */}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="
              cursor-pointer

              px-6 py-3

              rounded-xl

              border border-white/10

              bg-white/[0.03]
              backdrop-blur-md

              hover:border-purple-500/40
              hover:bg-purple-500/10

              transition duration-300
              "
            >
              Contact Me →
            </Link>
          </motion.div>

          {/* SCROLL INDICATOR */}
          <motion.div
            variants={item}
            className="
            hidden md:flex

            mt-16

            flex-col
            items-start

            text-gray-500
            text-sm
            "
          >
            <p className="mb-2">SCROLL DOWN</p>

            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <div
                className="
                w-5 h-10

                border border-gray-500
                rounded-full

                flex justify-center
                "
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                  }}
                  className="
                  w-1 h-2

                  bg-purple-400
                  rounded-full

                  mt-2
                  "
                />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}

          animate={{
            opacity: 1,
            scale: 1,
          }}

          transition={{
            duration: 1,
          }}

          className="
          relative

          flex justify-center

          order-1 md:order-2
          "
        >

          {/* 🔥 ROTATING RING */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
            absolute

            w-[280px] md:w-[430px]
            h-[280px] md:h-[430px]

            rounded-full

            border border-purple-500/20
            "
          />

          {/* 🔥 SECOND RING */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
            absolute

            w-[240px] md:w-[380px]
            h-[240px] md:h-[380px]

            rounded-full

            border border-pink-500/10
            "
          />

          {/* ✨ GLOW BEHIND IMAGE */}
          <div
            className="
            absolute

            w-[250px] md:w-[420px]
            h-[250px] md:h-[420px]

            rounded-full

            bg-gradient-to-r
            from-purple-500/30
            to-pink-500/20

            blur-[90px]
            "
          />

          {/* 🔥 FLOATING GLASS BG */}
          <div
            className="
            absolute

            w-[240px] md:w-[370px]
            h-[300px] md:h-[460px]

            rounded-[40px]

            bg-white/[0.04]
            backdrop-blur-2xl

            border border-white/10

            shadow-[0_0_40px_rgba(168,85,247,0.2)]
            "
          />

          {/* 👨 IMAGE */}
          <motion.img
            src="/assets/Sahil_kumar_profile.png"
            alt="profile"

            animate={{
              y: [0, -20, 0],
            }}

            transition={{
              duration: 4,
              repeat: Infinity,
            }}

            className="
            relative z-10

            w-[240px]
            sm:w-[280px]
            md:w-[380px]

            object-contain
            "
          />

          {/* ✨ SMALL FLOATING BALL */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}

            transition={{
              duration: 5,
              repeat: Infinity,
            }}

            className="
            absolute

            top-10
            right-4 md:right-10

            w-10 h-10

            rounded-full

            bg-purple-500/30

            blur-md
            "
          />

          {/* ✨ SECOND FLOATING BALL */}
          <motion.div
            animate={{
              y: [0, 20, 0],
              x: [0, -10, 0],
            }}

            transition={{
              duration: 6,
              repeat: Infinity,
            }}

            className="
            absolute

            bottom-16
            left-4 md:left-10

            w-14 h-14

            rounded-full

            bg-pink-500/20

            blur-lg
            "
          />
        </motion.div>
      </motion.div>
    </section>
  );
}