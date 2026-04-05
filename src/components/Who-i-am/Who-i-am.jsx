import { useEffect, useState } from "react";

export default function WhoIAm() {
  const [activeIndex, setActiveIndex] = useState(0);
  const paragraphs = [
    `I am a passionate Software Developer with 2 years of experience building modern web applications. I focus on writing clean, maintainable, and scalable code that creates user-friendly experiences.`,
    `My expertise lies in developing responsive frontend applications using modern frameworks, optimizing performance, and crafting seamless user interfaces.`,
    `As a Python Developer, I work on backend systems, automation scripts, and efficient solutions that enhance workflows and system reliability.`,
    `I constantly learn and adapt to new technologies, aiming to deliver elegant and impactful digital solutions that solve complex problems.`
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("who-section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Determine scroll progress inside the section
      const progress = Math.min(Math.max((windowHeight - rect.top) / rect.height, 0), 1);

      // Set active paragraph
      const index = Math.min(paragraphs.length - 1, Math.floor(progress * paragraphs.length));
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="who-section" className="relative w-full h-[300vh] bg-gradient-to-br from-black via-gray-900 to-green-900"
    >
      <div className="page-center">
      {/* Sticky content */}
      <div className="sticky top-0 h-screen flex items-center justify-center px-6">

        <div className="relative max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

          {/* Floating Image */}
          <div className="relative w-full h-80 md:h-[400px] flex items-center justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border border-green-400/30 shadow-xl transition-transform duration-700 transform hover:scale-105 hover:rotate-1">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                alt="developer"
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-full"></div>
            </div>
          </div>

          {/* Paragraphs */}
          <div className="relative text-left">
            <h2 className="text-5xl md:text-6xl font-bold text-green-400 mb-8 tracking-wide">
              Who I Am
            </h2>

            <div className="relative h-64 md:h-72">
              {paragraphs.map((para, i) => (
                <p
                  key={i}
                  className={`absolute text-lg md:text-xl text-green-200/80 leading-relaxed transition-all duration-700 ease-out
                    ${i === activeIndex ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}
                  `}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Scroll Dots */}
            <div className="flex gap-3 mt-8">
              {paragraphs.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300
                    ${i === activeIndex ? "bg-green-400 scale-125" : "bg-white/20"}
                  `}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
      </div>
    </section>
  );
}