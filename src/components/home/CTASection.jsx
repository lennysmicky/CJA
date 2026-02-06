import { motion } from 'framer-motion'
import { MdArrowForward, MdPhone } from 'react-icons/md'
import Button from '../common/Button'
import { COMPANY_INFO } from '../../utils/constants'

const CTASection = () => {
  return (
    <section className="section-primary relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Prêt à faire passer votre marque au niveau supérieur ?
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Contactez-nous dès aujourd'hui pour discuter de votre projet 
            et obtenir un devis gratuit.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              to="/contact" 
              variant="white" 
              size="lg"
              icon={MdArrowForward}
            >
              Demander un devis gratuit
            </Button>
            <Button 
              href={`tel:${COMPANY_INFO.phone}`}
              variant="secondary" 
              size="lg"
              icon={MdPhone}
              iconPosition="left"
              className="border-white text-white hover:bg-white hover:text-primary-500"
            >
              Nous appeler
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection