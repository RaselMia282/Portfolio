"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const orbit1 = [
  { icon: "simple-icons:react", name: "React", color: "text-sky-400" },
  { icon: "simple-icons:nextdotjs", name: "Next.js", color: "text-white" },
];
const orbit2 = [
  { icon: "simple-icons:tailwindcss", name: "Tailwind", color: "text-cyan-400" },
  { icon: "simple-icons:javascript", name: "JavaScript", color: "text-yellow-400" },
  { icon: "simple-icons:typescript", name: "TypeScript", color: "text-blue-400" },
  { icon: "simple-icons:html5", name: "HTML5", color: "text-orange-500" },
];
const orbit3 = [
  { icon: "simple-icons:nodedotjs", name: "Node.js", color: "text-green-500" },
  { icon: "simple-icons:express", name: "Express", color: "text-gray-300" },
  { icon: "simple-icons:prisma", name: "Prisma", color: "text-teal-300" },
  { icon: "simple-icons:mongodb", name: "MongoDB", color: "text-emerald-500" },
  { icon: "simple-icons:postgresql", name: "PostgreSQL", color: "text-indigo-400" },
];
const orbit4 = [
  { icon: "simple-icons:firebase", name: "Firebase", color: "text-amber-500" },
  { icon: "simple-icons:amazonaws", name: "AWS", color: "text-orange-400" },
  { icon: "lucide:brain", name: "RAG", color: "text-fuchsia-400" },
  { icon: "simple-icons:git", name: "Git", color: "text-red-500" },
  { icon: "simple-icons:docker", name: "Docker", color: "text-blue-500" },
];

const REFERENCE_SIZE = 700;

function useContainerScale() {
  const ref = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const observer = new ResizeObserver((entries) => {
      setScale(entries[0].contentRect.width / REFERENCE_SIZE);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, scale];
}

const Orbit = ({ items, radius, duration, scale, reverse = false, iconBase = 40 }) => {
  const scaledRadius = radius * scale;
  const iconSize = Math.max(28, iconBase * scale);
  const fontSize = Math.max(12, 20 * scale);

  return (
    <motion.div
      className="absolute"
      style={{ width: scaledRadius * 2, height: scaledRadius * 2 }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {items.map(({ icon, name, color }, index) => {
        const angle = (index / items.length) * 360;
        return (
          <div
            key={name}
            className="absolute top-1/2 left-1/2"
            style={{
              transform: `rotate(${angle}deg) translate(${scaledRadius}px) rotate(-${angle}deg)`,
            }}
          >
            <motion.div
              animate={{ rotate: reverse ? 360 : -360 }}
              transition={{ duration, repeat: Infinity, ease: "linear" }}
              className="group -translate-x-1/2 -translate-y-1/2 relative"
            >
              <div
                className="bg-[#0d1527] border border-white/10 rounded-full shadow-lg
                           flex items-center justify-center
                           group-hover:border-white/30 group-hover:scale-110
                           transition-all duration-200"
                style={{ width: iconSize, height: iconSize }}
              >
                <Icon icon={icon} className={color} style={{ fontSize }} />
              </div>
              <span
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-white/60
                           opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap
                           pointer-events-none hidden sm:block"
                style={{ fontSize: Math.max(9, 10 * scale) }}
              >
                {name}
              </span>
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
};

const SkillsOrbit = () => {
  const [containerRef, scale] = useContainerScale();

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[700px] aspect-square mx-auto
                 flex items-center justify-center bg-[#020617] overflow-hidden rounded-2xl"
    >
      <div
        className="absolute z-30 bg-[#0a101f] rounded-full flex items-center justify-center
                   border border-blue-500/30 text-white font-bold text-center leading-tight
                   shadow-[0_0_30px_rgba(59,130,246,0.15)]"
        style={{
          width: Math.max(56, 80 * scale),
          height: Math.max(56, 80 * scale),
          fontSize: Math.max(11, 14 * scale),
        }}
      >
        Full<br />Stack
      </div>

      <svg className="absolute w-full h-full opacity-20 pointer-events-none" viewBox="0 0 700 700">
        <circle cx="350" cy="350" r="80" stroke="white" strokeDasharray="4 4" fill="none" />
        <circle cx="350" cy="350" r="150" stroke="white" strokeDasharray="4 4" fill="none" />
        <circle cx="350" cy="350" r="220" stroke="white" strokeDasharray="4 4" fill="none" />
        <circle cx="350" cy="350" r="290" stroke="white" strokeDasharray="4 4" fill="none" />
      </svg>

      <Orbit items={orbit1} radius={80} duration={18} scale={scale} iconBase={48} />
      <Orbit items={orbit2} radius={150} duration={26} scale={scale} reverse />
      <Orbit items={orbit3} radius={220} duration={34} scale={scale} />
      <Orbit items={orbit4} radius={290} duration={42} scale={scale} reverse />
    </div>
  );
};

export default SkillsOrbit;