import { motion } from "framer-motion";
import TextType from "../typingEffect/TypingEffect";

import {
  FiCode,
  FiPenTool,
  FiZap,
} from "react-icons/fi";

// Skills data
const skills = [
  {
    number: "01",
    icon: FiCode,
    title: "Frontend Development",
    description:
      "Building responsive, interactive, and modern user interfaces using React, Tailwind CSS, and smooth animations.",
    technologies: "React.js · JavaScript · Tailwind CSS",
  },
  {
    number: "02",
    icon: FiPenTool,
    title: "UI / UX Design",
    description:
      "Designing clean, user-focused interfaces with modern layouts, strong visual hierarchy, and thoughtful interactions.",
    technologies: "Figma · Responsive Design · Wireframing",
  },
  {
    number: "03",
    icon: FiZap,
    title: "Performance Optimization",
    description:
      "Creating fast, optimized, and scalable experiences with clean architecture and efficient development practices.",
    technologies: "Optimization · SEO · Clean Code",
  },
];

// Statistics
const stats = [
  { value: "2.8+", label: "Years of Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "10+", label: "Clients" },
];

// Reusable scroll fade animation
const Reveal = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{
        once: true,
        amount: 0.05,
      }}
      transition={{
        duration: 0.9,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function WhoIam() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#050505]
        text-white
        py-[60px]
        md:py-[90px]
      "
    >
      <div
        className="
          relative
          max-w-7xl
          mx-auto
          px-[30px]
          sm:px-8
          lg:px-10
        "
      >

        {/* ================= INTRO SECTION ================= */}

        <div className="
          max-w-4xl
          mx-auto
          text-center
          mb-16
          md:mb-20
        ">

          <Reveal>
            <div className="
              inline-flex
              items-center
              justify-center
              gap-3
              mb-7
            ">
              <span className="w-8 h-px bg-white/30" />

              <span className="
                text-[10px]
                sm:text-xs
                uppercase
                tracking-[0.25em]
                text-gray-500
              ">
                Get to know me
              </span>

              <span className="w-8 h-px bg-white/30" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-semibold
              tracking-[-0.055em]
              leading-[1.1]
            ">
              More than code.
              <br />

              <span className="text-gray-500">
                Driven by creativity.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="
              mt-7
              text-base
              sm:text-lg
              text-gray-400
              font-light
            ">
              I'm a passionate{" "}
              <span className="text-white font-medium">
                <TextType
                  text={[
                    "Python Developer",
                    "Full Stack Developer",
                    "Programmer",
                  ]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor
                  cursorCharacter="_"
                  deletingSpeed={50}
                  variableSpeedEnabled={false}
                  cursorBlinkDuration={0.5}
                />
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="
              max-w-2xl
              mx-auto
              mt-5
              text-sm
              sm:text-base
              leading-7
              sm:leading-8
              text-gray-400
            ">
              I enjoy transforming ideas into meaningful digital
              experiences through modern technologies, thoughtful
              design, and clean, scalable code.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="
              flex
              items-center
              justify-center
              gap-3
              mt-10
            ">
              <span className="w-10 h-px bg-white/10" />

              <span className="
                text-[10px]
                tracking-[0.25em]
                text-gray-500
              ">
                ABOUT ME
              </span>

              <span className="w-10 h-px bg-white/10" />
            </div>
          </Reveal>

        </div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-14
          md:gap-16
          lg:gap-20
          items-center
        ">

          {/* PROFILE IMAGE */}

          <Reveal className="w-full">

            <div className="
              relative
              max-w-[340px]
              sm:max-w-[390px]
              lg:max-w-[420px]
              mx-auto
              lg:mx-0
            ">

              <div className="
                relative
                aspect-[4/5]
                overflow-hidden
                bg-[#111]
                border
                border-white/10
              ">
                <img
                  src="/assets/Sahil_kumar_profile.png"
                  alt="Sahil Kumar - Software Developer"
                  loading="lazy"
                  className="
                    w-full
                    h-full
                    object-contain
                    grayscale-[15%]
                    hover:grayscale-0
                    transition-all
                    duration-500
                  "
                />
              </div>

              {/* Image frame corners */}

              <div className="
                absolute
                -top-3
                -left-3
                w-12
                h-12
                border-t
                border-l
                border-white/40
                pointer-events-none
              " />

              <div className="
                absolute
                -bottom-3
                -right-3
                w-12
                h-12
                border-b
                border-r
                border-white/40
                pointer-events-none
              " />

              {/* Image caption */}

              <div className="
                flex
                justify-between
                items-center
                mt-5
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-gray-500
              ">
                <span>Software Developer</span>
                <span>India</span>
              </div>

            </div>

          </Reveal>

          {/* SKILLS AND EXPERTISE */}

          <div className="w-full">

            <Reveal>
              <div className="mb-8">

                <p className="
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-[0.25em]
                  text-gray-500
                  mb-3
                ">
                  What I do
                </p>

                <h3 className="
                  text-2xl
                  sm:text-3xl
                  font-medium
                  tracking-tight
                ">
                  Skills & Expertise
                </h3>

              </div>
            </Reveal>

            <div className="border-t border-white/10">

              {skills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <Reveal
                    key={skill.number}
                    delay={index * 0.1}
                  >

                    <div className="
                      group
                      py-6
                      sm:py-7
                      border-b
                      border-white/10
                    ">

                      <div className="
                        flex
                        gap-4
                        sm:gap-5
                        items-start
                      ">

                        {/* Number */}

                        <span className="
                          text-xs
                          text-gray-600
                          pt-1
                          tabular-nums
                        ">
                          {skill.number}
                        </span>

                        <div className="flex-1 min-w-0">

                          {/* Title and icon */}

                          <div className="
                            flex
                            justify-between
                            items-center
                            gap-3
                          ">

                            <h4 className="
                              text-base
                              sm:text-xl
                              font-medium
                              text-white
                              group-hover:text-gray-300
                              transition-colors
                              duration-300
                            ">
                              {skill.title}
                            </h4>

                            <Icon className="
                              text-gray-500
                              text-xl
                              shrink-0
                              group-hover:text-white
                              transition-colors
                              duration-300
                            " />

                          </div>

                          {/* Description */}

                          <p className="
                            mt-3
                            text-sm
                            leading-7
                            text-gray-400
                          ">
                            {skill.description}
                          </p>

                          {/* Technologies */}

                          <p className="
                            mt-4
                            text-[9px]
                            sm:text-[11px]
                            uppercase
                            tracking-[0.12em]
                            leading-6
                            text-gray-600
                          ">
                            {skill.technologies}
                          </p>

                        </div>
                      </div>
                    </div>

                  </Reveal>
                );
              })}

            </div>

          </div>

        </div>

        {/* ================= STATISTICS ================= */}

        <div className="
          mt-10
          md:mt-18
          pt-2
          md:pt-3         
          grid
          grid-cols-1
          sm:grid-cols-3
          gap-10
          sm:gap-6
        ">

          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.1}
            >

              <div className="text-center">

                <h3 className="
                  text-4xl
                  sm:text-5xl
                  font-semibold
                  tracking-[-0.05em]
                  text-white
                ">
                  {stat.value}
                </h3>

                <p className="
                  mt-3
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-[0.18em]
                  text-gray-500
                ">
                  {stat.label}
                </p>

              </div>

            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}
