import { motion } from 'framer-motion'
import { MdOpenInNew } from 'react-icons/md'

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300"
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className="inline-block px-3 py-1 bg-primary-500 text-white text-sm rounded-full mb-3">
            {project.category}
          </span>
          <h3 className="text-xl font-bold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-gray-300 text-sm mb-3">
            {project.description}
          </p>
          <p className="text-primary-400 text-sm mb-4">
            {project.client} • {project.year}
          </p>
          <button className="flex items-center space-x-2 text-white hover:text-primary-400 transition-colors">
            <span>Voir le projet</span>
            <MdOpenInNew size={18} />
          </button>
        </div>
      </div>

      {/* Category Badge (visible by default) */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full group-hover:opacity-0 transition-opacity">
        <span className="text-dark-700 text-sm font-medium">
          {project.category}
        </span>
      </div>
    </motion.div>
  )
}

export default ProjectCard