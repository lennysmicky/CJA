import { motion } from 'framer-motion'
import { MdArrowForward, MdCheckCircle } from 'react-icons/md'
import Button from '../common/Button'

const AboutPreview = () => {
  const features = [
    'Approche personnalisée pour chaque projet',
    'Équipe d\'experts passionnés',
    'Résultats mesurables et transparents',
    'Accompagnement de A à Z'
  ]

  return (
    <section className="section">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-primary-500 rounded-2xl h-48 md:h-56"
                />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-light-300 rounded-2xl h-32 md:h-40"
                />
              </div>
              <div className="space-y-4 pt-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-light-300 rounded-2xl h-32 md:h-40"
                />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-dark-700 rounded-2xl h-48 md:h-56"
                />
              </div>
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: 'spring' }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-strong p-6 hidden md:block"
            >
              <p className="text-4xl font-bold text-primary-500">5+</p>
              <p className="text-dark-400 text-sm">Années d'expérience</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge-primary mb-4">Qui sommes-nous ?</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-700 mb-6">
              Votre partenaire en <span className="text-gradient">communication</span>
            </h2>
            <p className="text-dark-400 mb-6 text-lg leading-relaxed">
              CJA-Link est une agence de communication créative et stratégique. 
              Nous accompagnons les entreprises dans leur développement en créant 
              des solutions de communication sur mesure, innovantes et efficaces.
            </p>
            <p className="text-dark-400 mb-8">
              Notre mission : faire rayonner votre marque et vous aider à atteindre 
              vos objectifs business grâce à une communication percutante.
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <MdCheckCircle className="text-primary-500 flex-shrink-0" size={24} />
                  <span className="text-dark-600">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Button to="/about" icon={MdArrowForward}>
              En savoir plus
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview