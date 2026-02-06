import { motion } from 'framer-motion'
import { MdArrowForward } from 'react-icons/md'
import SectionTitle from '../components/common/SectionTitle'
import Button from '../components/common/Button'
import ServiceCard from '../components/services/ServiceCard'
import { services } from '../data/services'

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="section hero-gradient pt-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="badge-primary mb-4">Nos Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-700 mb-6">
              Des solutions <span className="text-gradient">complètes</span> pour votre communication
            </h1>
            <p className="text-lg text-dark-400">
              De la stratégie à l'exécution, nous vous accompagnons dans tous les aspects 
              de votre communication pour maximiser votre impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section-light">
        <div className="container-custom">
          <SectionTitle
            badge="En détail"
            title="Nos services en profondeur"
            subtitle="Découvrez comment nous pouvons résoudre vos problématiques"
          />

          <div className="space-y-24">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                index={index} 
                isDetailed 
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Besoin d'un service sur mesure ?
            </h2>
            <p className="text-dark-300 mb-8 text-lg">
              Chaque projet est unique. Contactez-nous pour discuter de vos besoins spécifiques.
            </p>
            <Button to="/contact" icon={MdArrowForward}>
              Demander un devis personnalisé
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Services