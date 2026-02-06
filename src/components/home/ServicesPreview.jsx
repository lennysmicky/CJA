import { motion } from 'framer-motion'
import { MdArrowForward } from 'react-icons/md'
import { services } from '../../data/services'
import SectionTitle from '../common/SectionTitle'
import Button from '../common/Button'
import Card from '../common/Card'

const ServicesPreview = () => {
  return (
    <section className="section-light">
      <div className="container-custom">
        <SectionTitle
          badge="Nos Services"
          title="Ce que nous faisons"
          subtitle="Des solutions complètes pour répondre à tous vos besoins en communication"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card key={service.id} delay={index * 0.1} className="group">
              <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary-500 transition-colors duration-300">
                <service.icon 
                  size={28} 
                  className="text-primary-500 group-hover:text-white transition-colors duration-300" 
                />
              </div>
              <h3 className="text-xl font-bold text-dark-700 mb-3">
                {service.title}
              </h3>
              <p className="text-dark-400 mb-4">
                {service.shortDescription}
              </p>
              <a 
                href="/services" 
                className="inline-flex items-center text-primary-500 font-medium group-hover:gap-2 transition-all"
              >
                En savoir plus
                <MdArrowForward className="ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </Card>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button to="/services" variant="secondary" icon={MdArrowForward}>
            Voir tous nos services
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreview