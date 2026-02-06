import { motion } from 'framer-motion'

const ProjectFilter = ({ categories, activeCategory, onFilterChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-wrap justify-center gap-3 mb-12"
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
            activeCategory === category
              ? 'bg-primary-500 text-white shadow-primary'
              : 'bg-light-300 text-dark-600 hover:bg-primary-100 hover:text-primary-600'
          }`}
        >
          {category}
        </button>
      ))}
    </motion.div>
  )
}

export default ProjectFilter