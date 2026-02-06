import { motion } from 'framer-motion'

const SectionTitle = ({ 
  badge, 
  title, 
  subtitle, 
  align = 'center',
  light = false 
}) => {
  const alignClasses = {
    center: 'text-center mx-auto',
    left: 'text-left',
    right: 'text-right ml-auto'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl mb-12 md:mb-16 ${alignClasses[align]}`}
    >
      {badge && (
        <span className={`badge ${light ? 'bg-white/20 text-white' : 'badge-primary'} mb-4`}>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${light ? 'text-white' : 'text-dark-700'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${light ? 'text-white/80' : 'text-dark-400'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export default SectionTitle