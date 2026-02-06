import { motion } from 'framer-motion'
import { MdArrowForward, MdPlayCircle, MdCampaign } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Button from '../common/Button'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      
      {/* Floating Shapes */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-20 h-20 bg-primary-500/20 rounded-2xl rotate-12 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-1/5 w-16 h-16 bg-primary-500/10 rounded-full hidden lg:block"
      />

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge avec icône React */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="badge-primary mb-6 inline-flex items-center gap-2"
            >
              <MdCampaign size={20} />
              Agence de Communication Créative
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-dark-700 leading-tight mb-6"
            >
              Faites parler
              <span className="text-gradient block">votre marque !</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-dark-400 mb-8 max-w-lg"
            >
              CJA-Link vous accompagne dans votre stratégie de communication pour une croissance durable et une visibilité maximale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button to="/contact" icon={MdArrowForward}>
                Demander un devis
              </Button>
              <Button to="/portfolio" variant="secondary" icon={MdPlayCircle} iconPosition="left">
                Voir nos projets
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 pt-8 border-t border-light-400"
            >
              <p className="text-sm text-dark-400 mb-4">Ils nous font confiance</p>
              <div className="flex items-center gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-20 bg-dark-200/30 rounded-lg"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 bg-white rounded-3xl shadow-strong p-8"
              >
                {/* Stats Preview */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-light-300 rounded-2xl p-5 text-center">
                    <p className="text-3xl font-bold text-primary-500">98%</p>
                    <p className="text-sm text-dark-400">Satisfaction</p>
                  </div>
                  <div className="bg-light-300 rounded-2xl p-5 text-center">
                    <p className="text-3xl font-bold text-primary-500">50+</p>
                    <p className="text-sm text-dark-400">Projets</p>
                  </div>
                </div>

                {/* Progress */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-dark-600">Branding</span>
                      <span className="text-sm text-primary-500">95%</span>
                    </div>
                    <div className="h-2 bg-light-300 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '95%' }}
                        transition={{ duration: 1, delay: 1 }}
                        className="h-full bg-primary-500 rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-dark-600">Marketing Digital</span>
                      <span className="text-sm text-primary-500">88%</span>
                    </div>
                    <div className="h-2 bg-light-300 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '88%' }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="h-full bg-primary-500 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Cards */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-500 rounded-3xl rotate-12 opacity-80" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-dark-700 rounded-2xl -rotate-12" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-dark-400 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection