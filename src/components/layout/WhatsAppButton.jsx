import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { COMPANY_INFO } from '../../utils/constants'

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=Bonjour, je souhaite avoir plus d'informations sur vos services.`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Nous contacter sur WhatsApp"
    >
      <FaWhatsapp size={28} />
      
      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25"></span>
    </motion.a>
  )
}

export default WhatsAppButton