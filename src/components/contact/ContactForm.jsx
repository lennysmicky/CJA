import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { MdSend, MdCheckCircle } from 'react-icons/md'
import { FaSpinner } from 'react-icons/fa'

const ContactForm = () => {
  const formRef = useRef()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulation d'envoi - Remplacer par EmailJS
    // import emailjs from '@emailjs/browser'
    // emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', formRef.current, 'PUBLIC_KEY')
    
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 2000)
  }

  const subjects = [
    { value: '', label: 'Sélectionnez un sujet' },
    { value: 'devis', label: 'Demande de devis' },
    { value: 'info', label: 'Demande d\'information' },
    { value: 'partenariat', label: 'Partenariat' },
    { value: 'autre', label: 'Autre' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl shadow-strong p-8 md:p-10"
    >
      <h2 className="text-2xl font-bold text-dark-700 mb-6">
        Envoyez-nous un message
      </h2>
      
      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-center space-x-3"
        >
          <MdCheckCircle className="text-green-500 flex-shrink-0" size={24} />
          <p className="text-green-700">
            Votre message a été envoyé avec succès ! Nous vous répondrons bientôt.
          </p>
        </motion.div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="label">Nom complet *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input"
              placeholder="Votre nom"
            />
          </div>
          <div>
            <label className="label">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input"
              placeholder="votre@email.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="label">Téléphone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input"
              placeholder="+225 00 00 00 00"
            />
          </div>
          <div>
            <label className="label">Sujet *</label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="input"
            >
              {subjects.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="label">Message *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="input resize-none"
            placeholder="Décrivez votre projet ou posez votre question..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <FaSpinner className="animate-spin" size={20} />
              <span>Envoi en cours...</span>
            </>
          ) : (
            <>
              <MdSend size={20} />
              <span>Envoyer le message</span>
            </>
          )}
        </button>
      </form>
    </motion.div>
  )
}

export default ContactForm