import { motion } from 'framer-motion'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { COMPANY_INFO } from '../../utils/constants'

const ContactInfo = () => {
  const contactItems = [
    {
      icon: MdEmail,
      title: 'Email',
      value: COMPANY_INFO.email,
      link: `mailto:${COMPANY_INFO.email}`
    },
    {
      icon: MdPhone,
      title: 'Téléphone',
      value: COMPANY_INFO.phone,
      link: `tel:${COMPANY_INFO.phone}`
    },
    {
      icon: MdLocationOn,
      title: 'Adresse',
      value: COMPANY_INFO.address,
      link: '#'
    }
  ]

  const socialLinks = [
    { icon: FaFacebookF, href: COMPANY_INFO.social.facebook, label: 'Facebook' },
    { icon: FaInstagram, href: COMPANY_INFO.social.instagram, label: 'Instagram' },
    { icon: FaLinkedinIn, href: COMPANY_INFO.social.linkedin, label: 'LinkedIn' },
    { icon: FaTwitter, href: COMPANY_INFO.social.twitter, label: 'Twitter' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold text-dark-700 mb-6">Nos coordonnées</h2>
      
      <div className="space-y-6 mb-10">
        {contactItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="flex items-start space-x-4 group"
          >
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-300">
              <item.icon 
                className="text-primary-500 group-hover:text-white transition-colors duration-300" 
                size={22} 
              />
            </div>
            <div>
              <p className="text-sm text-dark-400">{item.title}</p>
              <p className="text-dark-700 font-medium group-hover:text-primary-500 transition-colors">
                {item.value}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Social Media */}
      <div>
        <h3 className="font-semibold text-dark-700 mb-4">Suivez-nous</h3>
        <div className="flex space-x-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-11 h-11 rounded-xl bg-light-300 flex items-center justify-center text-dark-400 hover:bg-primary-500 hover:text-white transition-all duration-300"
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ContactInfo