
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "The Hustler Collective",
    date: "2025 — Present",
    description:
      "Worked on developing and maintaining the MediaTek global website, creating product landing pages and campaign pages. Focused on responsive interfaces, website performance, and resolving production issues.",
    type: "Full-time",
  },
  {
    role: "Web Developer",
    company: "The Web Plant Pvt. Ltd.",
    date: "05/08/2024 — 30/12/2024",
    description:
      "Worked on individual web development projects from planning to delivery. Built responsive interfaces, improved frontend functionality, and ensured projects were completed within deadlines.",
    type: "Professional Experience",
  },
  {
    role: "Web Developer Intern",
    company: "Test Yantra",
    date: "01/01/2024 — 30/07/2024",
    description:
      "Developed responsive web interfaces using React.js and Tailwind CSS. Gained practical experience in component-based development, frontend workflows, and building user-friendly applications.",
    type: "Internship",
  },
];

const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#080808] text-white py-[60px] md:py-[90px]"
    >
      <div className="max-w-7xl mx-auto px-[30px] sm:px-8 lg:px-10">

        {/* Section Heading */}
        <Reveal className="text-center mb-16 md:mb-24">
          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[#858585] mb-4">
            Career Journey
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Experience<span className="text-[#777]">.</span>
          </h2>

          <p className="text-[#929292] text-sm md:text-base mt-5 max-w-xl mx-auto leading-relaxed">
            A journey of learning, building, and growing through real-world
            development experience.
          </p>
        </Reveal>

        {/* Experience Timeline */}
        <div className="relative max-w-5xl mx-auto">

          {/* Timeline Line */}
          <div className="absolute left-[7px] md:left-1/2 top-2 bottom-2 w-px bg-[#333] md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-20">
            {experiences.map((item, index) => (
              <Reveal
                key={index}
                delay={index * 0.12}
                className="relative"
              >
                <div className="grid grid-cols-[30px_1fr] md:grid-cols-2 gap-5 md:gap-12">

                  {/* Timeline Marker */}
                  <div className="absolute left-0 md:left-1/2 top-1 md:-translate-x-1/2 z-10">
                    <div className="w-[15px] h-[15px] rounded-full bg-white border-[4px] border-[#080808] ring-1 ring-[#777]" />
                  </div>

                  {/* Left Side */}
                  <div
                    className={`hidden md:flex ${
                      index % 2 === 0
                        ? "justify-end text-right"
                        : "invisible pointer-events-none"
                    }`}
                  >
                    {index % 2 === 0 && (
                      <div className="max-w-md pt-1">
                        <p className="text-sm font-semibold tracking-wide text-[#c5c5c5]">
                          {item.company}
                        </p>
                        <p className="text-xs text-[#777] mt-2">
                          {item.type}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Experience Content */}
                  <div
                    className={`col-start-2 ${
                      index % 2 === 1
                        ? "md:col-start-1 md:text-right"
                        : "md:col-start-2"
                    }`}
                  >
                    <div className="max-w-lg">

                      {/* Date Highlight */}
                      <div
                        className={`mb-5 ${
                          index % 2 === 1 ? "md:flex md:justify-end" : ""
                        }`}
                      >
                        <span className="inline-flex items-center bg-[#e5e5e5] text-[#111] px-4 py-2 rounded-md text-xs sm:text-sm font-bold tracking-wide">
                          {item.date}
                        </span>
                      </div>

                      {/* Job Title */}
                      <h3 className="text-2xl sm:text-3xl md:text-[32px] font-bold tracking-tight text-white leading-tight">
                        {item.role}
                      </h3>

                      {/* Company - Mobile */}
                      <p className="md:hidden text-sm font-semibold text-[#aaa] mt-2">
                        {item.company}
                      </p>

                      {/* Description */}
                      <p className="text-sm sm:text-base leading-7 text-[#999] mt-5">
                        {item.description}
                      </p>

                      {/* Employment Type */}
                      <div
                        className={`mt-6 ${
                          index % 2 === 1 ? "md:flex md:justify-end" : ""
                        }`}
                      >
                        <span className="inline-block text-[11px] uppercase tracking-[0.16em] font-semibold text-[#858585] border-b border-[#444] pb-2">
                          {item.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <Reveal delay={0.3} className="mt-20 text-center">
          <p className="text-xs sm:text-sm text-[#777] tracking-wide">
            Always learning. Always building.
          </p>
        </Reveal>

      </div>
    </section>
  );
}
