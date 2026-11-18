import Container from "../Components/Container";
import {
  FaCode,
  FaReact,
  FaServer,
  FaDatabase,
  FaRocket,
  FaCloud,
} from "react-icons/fa";
// import FadeInView from "../Components/FadeInView";

const cardStyle =
  "group rounded-3xl border border-white/10 bg-[#101828] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,.15)]";

const Services = () => {
  return (
    // <FadeInView>
    <section id="services" className="py-12">
      <Container>
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Services
          </p>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            What I Can Build
          </h2>

          <p className="mt-8 leading-8 text-gray-400">
            I build fast, scalable and modern web applications with beautiful
            user interfaces and reliable backend architecture.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[240px]">

          {/* Full Stack */}
          <div
            className={`${cardStyle} lg:row-span-2 flex flex-col justify-between`}
          >
            <div>
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-4xl text-cyan-400">
                <FaCode />
              </div>

              <h3 className="text-3xl font-bold text-white">
                Full Stack Development
              </h3>

              <p className="mt-6 leading-8 text-gray-400">
                Building complete MERN stack applications from frontend to
                backend with authentication, dashboards, APIs and responsive UI.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "Node.js",
                "Express",
                "MongoDB",
                "Tailwind",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div className={cardStyle}>
            <FaReact className="mb-6 text-5xl text-cyan-400" />

            <h3 className="text-2xl font-bold text-white">
              Frontend
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              Modern responsive interfaces using React, Next.js and Tailwind
              CSS.
            </p>
          </div>

          {/* Backend */}
          <div className={cardStyle}>
            <FaServer className="mb-6 text-5xl text-cyan-400" />

            <h3 className="text-2xl font-bold text-white">
              Backend
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              REST APIs, authentication, business logic and scalable backend
              systems.
            </p>
          </div>

          {/* Database */}
          <div className={cardStyle}>
            <FaDatabase className="mb-6 text-5xl text-cyan-400" />

            <h3 className="text-2xl font-bold text-white">
              Database
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              MongoDB, PostgreSQL and Prisma with clean and scalable data
              models.
            </p>
          </div>

          {/* Performance */}
          <div className={cardStyle}>
            <FaRocket className="mb-6 text-5xl text-cyan-400" />

            <h3 className="text-2xl font-bold text-white">
              Performance
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              Optimizing speed, accessibility and user experience for modern
              applications.
            </p>
          </div>

          {/* Deployment */}
          <div className={`${cardStyle} lg:col-span-2`}>
            <FaCloud className="mb-6 text-5xl text-cyan-400" />

            <h3 className="text-2xl font-bold text-white">
              DevOps & Deployment
            </h3>

            <p className="mt-4 max-w-2xl leading-8 text-gray-400">
              Deploying applications using Vercel, Render and Firebase with
              production-ready environments, continuous deployment and smooth
              maintenance.
            </p>
          </div>

          {/* API */}
          <div className={cardStyle}>
            <FaServer className="mb-6 text-5xl text-cyan-400" />

            <h3 className="text-2xl font-bold text-white">
              API Integration
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              Integrating third-party APIs, authentication providers, cloud
              services and external platforms.
            </p>
          </div>
        </div>
      </Container>
    </section>
    // {/* </FadeInView> */}

  );
};

export default Services;


