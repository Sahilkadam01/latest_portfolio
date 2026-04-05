import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function WhoIAm() {
  const sectionRef = useRef(null);
  const textRefs = useRef([]);
  const imageRef = useRef(null);

  const paragraphs = [
    "I am a passionate Software Developer with 2 years of experience building modern web applications.",
    "I specialize in crafting responsive, high-performance interfaces with a focus on clean design.",
    "As a Python Developer, I build scalable backend systems and automation workflows.",
    "I continuously evolve, learning new technologies to deliver impactful digital solutions."
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // ✅ Smooth paragraph reveal
      textRefs.current.forEach((el, i) => {
        if (!el) return;

        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 60,
            filter: "blur(6px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // ✅ Image floating animation
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          y: -40,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-32 bg-black text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-black" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <div className="flex justify-center">
          <div
            ref={imageRef}
            className="relative w-72 h-72 rounded-full overflow-hidden border border-green-400/20 shadow-[0_0_60px_rgba(34,197,94,0.2)]"
          >
            <img
              src="./src/assets/profile-image.jpg"
              alt="developer"
              className="w-full h-full object-cover"
            />
            
          </div>
        </div>

        {/* CONTENT */}
        <div>
          {/* ✅ FIXED HEADING (VISIBLE + PREMIUM) */}
          <h2 className="text-5xl md:text-6xl font-bold mb-10 
            bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 
            bg-[length:200%_200%] 
            bg-clip-text text-transparent 
            animate-gradient">
            Who I Am
          </h2>

          {/* PARAGRAPHS */}
          <div className="space-y-8">
            {paragraphs.map((text, i) => (
              <p
                key={i}
                ref={(el) => (textRefs.current[i] = el)}
                className="text-lg md:text-xl text-gray-300 leading-relaxed"
              >
                {text}
              </p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}