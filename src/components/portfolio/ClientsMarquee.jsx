import { motion } from 'framer-motion'
import { clients } from '../../data/clients'

const ClientsMarquee = () => {
  // Multiplie les logos pour remplir l'écran (on fait x4 pour être sûr)
  const repeatedClients = [...clients, ...clients, ...clients, ...clients]

  return (
    <div className="w-full overflow-hidden bg-gray-50 py-12">
      <div className="relative flex">
        <motion.div
          className="flex gap-8 items-center"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 15,
              ease: 'linear',
            },
          }}
        >
          {repeatedClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex-shrink-0 bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300"
              style={{ width: '180px', height: '100px' }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default ClientsMarquee