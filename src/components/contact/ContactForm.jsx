import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { MdSend, MdCheckCircle } from 'react-icons/md'
import { FaSpinner } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const formRef = useRef()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      await emailjs.sendForm(
        'service_2rdfoue',
        'template_96lyfmc',
        formRef.current,
        'pUPkTYTfTbpc7-Fob'
      )

      setIsSubmitted(true)
      setFormData({
        from_name: '',
        from_email: '',
        phone: '',
        subject: '',
        message: ''
      })

      setTimeout(() => setIsSubmitted(false), 5000)

    } catch (err) {
      console.error('Erreur EmailJS:', err)
      setError('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const subjects = [
    { value: '', label: 'Sélectionnez un sujet' },
    { value: 'Demande de devis', label: 'Demande de devis' },
    { value: 'Demande d\'information', label: 'Demande d\'information' },
    { value: 'Partenariat', label: 'Partenariat' },
    { value: 'Autre', label: 'Autre' }
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

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6"
        >
          <p className="text-red-700">{error}</p>
        </motion.div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="label">Nom complet *</label>
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
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
              name="from_email"
              value={formData.from_email}
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