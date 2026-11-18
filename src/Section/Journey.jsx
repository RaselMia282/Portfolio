import Container from "../Components/Container";
import { motion } from "framer-motion";
import { Code2, Palette } from "lucide-react";

const journeyData = [
  {
    icon: Code2,
    title: "Frontend Development",
    role: "HTML • CSS • JavaScript • React",
    period: "2024",
    description:
      "Started my web development journey by learning modern frontend technologies and building responsive user interfaces.",

    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind",
    ],

    achievements: [
      "Responsive UI",
      "Reusable Components",
      "Modern Layouts",
    ],

    status: "Completed",

    current: false,
  },

  {
    icon: Code2,
    title: "Backend Development",
    role: "Node.js • Express • MongoDB",
    period: "2025",
    description:
      "Expanded into backend development by building REST APIs, authentication systems and database-driven applications.",

    stack: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],

    achievements: [
      "REST APIs",
      "Authentication",
      "CRUD Operations",
    ],

    status: "Completed",

    current: false,
  },

  {
    icon: Palette,
    title: "Full Stack Projects",
    role: "MERN Stack",
    period: "2025 - Present",
    description:
      "Building complete MERN stack applications with modern UI, dashboards, authentication and scalable architecture.",

    stack: [
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
    ],

    achievements: [
      "Real Projects",
      "Clean Code",
      "Performance",
    ],

    status: "Current",

    current: true,
  },

  {
    icon: Code2,
    title: "Future Goals",
    role: "Continuous Learning",
    period: "Next Step",
    description:
      "Currently focusing on advanced backend development, cloud deployment and system design while preparing for global remote opportunities.",

    stack: [
      "AWS",
      "Docker",
      "System Design",
      "CI/CD",
    ],

    achievements: [
      "Open Source",
      "Remote Career",
      "AI Integration",
    ],

    status: "Coming Soon",

    current: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Journey = () => {
  return (
    <section id="journey" className="py-12 bg-[#020617] text-white">
      <Container>
        
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Career Path
          </p>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-5 text-4xl font-bold md:text-5xl"
          >
            My Professional Journey
          </motion.h2>
        </div>

        <div className="relative">
          
          <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 to-transparent" />

          <div className="space-y-12">
            {journeyData.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Node (ডট) */}
                  <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 z-10">
                    <div
                      className={`h-8 w-8 rounded-full flex items-center justify-center border-4 border-[#020617] ${
                        item.current ? "bg-blue-500 animate-pulse" : "bg-blue-600"
                      }`}
                    >
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                  </div>

                 
                  <div className="w-full pl-14 md:pl-0 md:w-[calc(50%-3rem)]">
                    <div className="group bg-[#0a101f] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        {item.current && (
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                            Present
                          </span>
                        )}
                      </div>
                      <p className="text-blue-400 text-sm font-medium">
                        {item.role} • {item.period}
                      </p>
                      <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-6">
                        {item.stack.map((tech) => (
                          <span key={tech} className="text-[11px] px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Journey;
