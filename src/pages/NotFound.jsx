import { motion } from 'framer-motion'
import { MdHome, MdArrowBack } from 'react-icons/md'
import Button from '../components/common/Button'

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-light-300 px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-8xl md:text-9xl font-bold text-primary-500 mb-4">
            404
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-dark-700 mb-4">
            Page non trouvée
          </h2>
          <p className="text-dark-400 mb-8 max-w-md mx-auto">
            Oups ! La page que vous recherchez semble avoir disparu. 
            Elle a peut-être été déplacée ou n'existe plus.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/" icon={MdHome} iconPosition="left">
              Retour à l'accueil
            </Button>
            <Button 
              onClick={() => window.history.back()}
              variant="secondary" 
              icon={MdArrowBack} 
              iconPosition="left"
            >
              Page précédente
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default NotFound