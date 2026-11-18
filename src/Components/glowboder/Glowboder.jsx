import { motion } from "framer-motion";

const GlowBorder = ({
  children,
  className = "",
  rounded = "rounded-2xl",
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.25 }}
      className={`group relative overflow-hidden p-[1.5px] ${rounded} ${className}`}
    >
      {/* Animated Border */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div
          className="absolute inset-[-150%]"
          style={{
            background: `
              conic-gradient(
                from 0deg,

                transparent 0deg,
                transparent 18%,

                #22d3ee 26%,

                #3b82f6 38%,

                #6366f1 48%,

                #8b5cf6 58%,

                #d946ef 68%,

                #22d3ee 78%,

                transparent 88%,
                transparent 100%
              )
            `,
          }}
        />
      </motion.div>

      {/* Outer Glow */}
      <motion.div
        className="absolute inset-0 rounded-full blur-2xl opacity-20"
        whileHover={{
          opacity: 0.8,
          scale: 1.15,
        }}
        transition={{
          duration: 0.4,
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,.30) 0%, rgba(59,130,246,.25) 25%, rgba(99,102,241,.20) 45%, rgba(139,92,246,.18) 60%, rgba(217,70,239,.12) 80%, transparent 100%)",
        }}
      />

      {/* Shine */}
      <motion.div
        initial={{
          x: "-120%",
          opacity: 0,
        }}
        whileHover={{
          x: "220%",
          opacity: 1,
        }}
        transition={{
          duration: 1.1,
        }}
        className="absolute inset-y-0 w-20 rotate-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />

      {/* Content */}
      <div
        className={`relative z-10 h-full w-full ${rounded} bg-[#0B1120] transition-colors duration-300 group-hover:bg-[#111827]`}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default GlowBorder;