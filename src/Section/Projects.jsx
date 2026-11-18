import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Container from '../Components/Container';
import ProjectModal from '../Components/projects/ProjectModal';
import ProjectsData from '../Components/projects/ProjectsData'
import GlowBorder from '../Components/glowboder/Glowboder';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-12 bg-[#020617]">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Featured Projects
          </p>
          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Things I've Built
          </h2>
          <p className="mt-8 leading-8 text-gray-400">
            Explore a collection of projects that demonstrate my expertise in 
            building modern, responsive and scalable web applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {ProjectsData.map((project) => (
            <div key={project.id} className="group flex flex-col rounded-2xl border border-white/10 bg-[#0a101f] p-6 transition-all duration-300 hover:border-blue-500/30 hover:shadow-2xl">
              {/* Image */}
              <div className="mb-6 overflow-hidden rounded-xl h-64 bg-gray-800">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              
              {/* Info */}
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-3 flex-grow text-gray-400 leading-relaxed">{project.description}</p>
              
              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Buttons */}
              <div className="mt-8 flex items-center gap-4 border-t border-white/5 pt-6">
                <GlowBorder>
                  <button 
                  onClick={() => setSelectedProject(project)}
                  className="px-4 cursor-pointer py-2 text-sm font-semibold text-white  rounded-lg hover:text-cyan-400 transition-all"
                >
                  Details
                </button>
                </GlowBorder>

                <a href={project.links.github} className="text-sm font-medium text-white transition-colors hover:text-cyan-400 border-cyan-300">GitHub</a>

                <a href={project.links.code} className="text-sm font-medium text-white transition-colors hover:text-cyan-400">Code</a>

              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Modal Integration */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;