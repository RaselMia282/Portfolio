import { motion } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#0a101f] border border-white/10 p-8 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-3xl font-bold text-white">{project.title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">&times;</button>
        </div>

        {/* Image */}
        <img src={project.image} className="w-full h-64 object-cover rounded-2xl mb-6 shadow-lg" alt={project.title} />

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-blue-400 font-semibold mb-2">Project Overview</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
          </div>
          
          <div>
            <h4 className="text-blue-400 font-semibold mb-2">Key Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs text-gray-300">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Features List (নতুন অংশ) */}
        <div className="mt-8">
          <h4 className="text-blue-400 font-semibold mb-3">Core Features</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-400">
            <li>✅ Secure JWT Authentication</li>
            <li>✅ Real-time Database Updates</li>
            <li>✅ Responsive Design</li>
            <li>✅ Admin Dashboard Access</li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;