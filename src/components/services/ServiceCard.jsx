import { motion } from 'framer-motion'
import { MdCheckCircle } from 'react-icons/md'

const ServiceCard = ({ service, index, isDetailed = false }) => {
  const Icon = service.icon

  if (isDetailed) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`grid lg:grid-cols-2 gap-12 items-center ${
          index % 2 === 1 ? 'lg:flex-row-reverse' : ''
        }`}
      >
        <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
          <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mb-6">
            <Icon className="text-white" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-dark-700 mb-4">{service.title}</h2>
          <p className="text-dark-400 mb-6">{service.fullDescription}</p>
          
          {/* Problem */}
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4 rounded-r-xl">
            <p className="text-red-700 font-medium">❓ {service.problem}</p>
          </div>
          
          {/* Solution */}
          <div className="bg-primary-50 border-l-4 border-primary-500 p-4 mb-6 rounded-r-xl">
            <p className="text-dark-700 font-medium">✅ {service.solution}</p>
          </div>

          {/* Benefits */}
          <h4 className="font-bold text-dark-700 mb-3">Bénéfices :</h4>
          <ul className="space-y-2 mb-6">
            {service.benefits.map((benefit, i) => (
              <li key={i} className="flex items-center space-x-3">
                <MdCheckCircle className="text-primary-500 flex-shrink-0" size={20} />
                <span className="text-dark-400">{benefit}</span>
              </li>
            ))}
          </ul>

          {/* Features */}
          <div className="flex flex-wrap gap-2">
            {service.features.map((feature, i) => (
              <span 
                key={i} 
                className="px-3 py-1 bg-light-300 text-dark-600 rounded-full text-sm"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
          <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-50 rounded-3xl flex items-center justify-center">
            <Icon className="text-primary-500/20" size={200} />
          </div>
        </div>
      </motion.div>
    )
  }

  // Card version
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-hover group"
    >
      <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary-500 transition-colors duration-300">
        <Icon 
          size={28} 
          className="text-primary-500 group-hover:text-white transition-colors duration-300" 
        />
      </div>
      <h3 className="text-xl font-bold text-dark-700 mb-3">
        {service.title}
      </h3>
      <p className="text-dark-400">
        {service.shortDescription}
      </p>
    </motion.div>
  )
}

export default ServiceCard