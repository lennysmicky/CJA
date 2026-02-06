import { motion } from 'framer-motion'
import { MdLocationOn } from 'react-icons/md'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'

const Contact = () => {
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
            <span className="badge-primary mb-4">Contact</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-700 mb-6">
              Parlons de <span className="text-gradient">votre projet</span>
            </h1>
            <p className="text-lg text-dark-400">
              Vous avez un projet ? Une question ? N'hésitez pas à nous contacter. 
              Notre équipe vous répondra dans les plus brefs délais.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-light-300">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <MdLocationOn className="mx-auto text-primary-500 mb-4" size={48} />
            <p className="text-dark-400">
              Intégrez ici Google Maps ou une carte interactive
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact