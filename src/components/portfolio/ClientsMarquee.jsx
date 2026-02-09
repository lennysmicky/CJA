import { motion } from 'framer-motion'
import { clients } from '../../data/clients'

const ClientsMarquee = () => {
  // Multiplie beaucoup pour remplir l'écran (x8 car tu as seulement 2 logos)
  const repeatedClients = [
    ...clients, 
    ...clients, 
    ...clients, 
    ...clients,
    ...clients, 
    ...clients, 
    ...clients, 
    ...clients
  ]

  return (
    <div className="w-full overflow-hidden py-12">
      <motion.div
        className="flex gap-4 items-center"
        animate={{
          x: [0, -((100 + 16) * clients.length * 4)],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        }}
        style={{ width: 'max-content' }}
      >
        {repeatedClients.map((client, index) => (
          <div
            key={`${client.id}-${index}`}
            className="flex-shrink-0 flex flex-col items-center justify-center gap-2 hover:-translate-y-2 transition-all duration-300"
            style={{ width: '100px' }}
          >
            {/* Logo avec bordure courbée */}
            <div className="w-20 h-20 rounded-xl border-2 border-gray-200 p-2 flex items-center justify-center overflow-hidden hover:border-primary-500 transition-colors duration-300">
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            
            {/* Nom de l'entreprise */}
            <p className="text-dark-600 font-medium text-center text-xs">
              {client.name}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default ClientsMarquee