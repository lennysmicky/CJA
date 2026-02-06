import { motion } from 'framer-motion'

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  delay = 0,
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`${hover ? 'card-hover' : 'card'} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card