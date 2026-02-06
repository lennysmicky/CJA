import { Link } from 'react-router-dom'
import { 
  MdEmail, 
  MdPhone, 
  MdLocationOn,
  MdArrowForward 
} from 'react-icons/md'
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTwitter 
} from 'react-icons/fa'
import { COMPANY_INFO, NAV_LINKS } from '../../utils/constants'
import { services } from '../../data/services'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaFacebookF, href: COMPANY_INFO.social.facebook, label: 'Facebook' },
    { icon: FaInstagram, href: COMPANY_INFO.social.instagram, label: 'Instagram' },
    { icon: FaLinkedinIn, href: COMPANY_INFO.social.linkedin, label: 'LinkedIn' },
    { icon: FaTwitter, href: COMPANY_INFO.social.twitter, label: 'Twitter' }
  ]

  return (
    <footer className="bg-dark-700 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <img 
                src="/logo.png" 
                alt="CJA-Link" 
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl">Cja-Link</span>
                <span className="text-xs text-primary-400">Communication</span>
              </div>
            </Link>
            <p className="text-dark-300 mb-6 leading-relaxed">
              {COMPANY_INFO.slogan} Votre partenaire en communication pour une croissance durable et une visibilité maximale.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-dark-600 flex items-center justify-center text-dark-300 hover:bg-primary-500 hover:text-white transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-dark-300 hover:text-primary-400 transition-colors flex items-center group"
                  >
                    <MdArrowForward className="mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" size={16} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link 
                    to="/services"
                    className="text-dark-300 hover:text-primary-400 transition-colors flex items-center group"
                  >
                    <MdArrowForward className="mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" size={16} />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start space-x-3 text-dark-300 hover:text-primary-400 transition-colors group"
                >
                  <MdEmail className="mt-1 text-primary-500" size={20} />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-start space-x-3 text-dark-300 hover:text-primary-400 transition-colors group"
                >
                  <MdPhone className="mt-1 text-primary-500" size={20} />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-3 text-dark-300">
                  <MdLocationOn className="mt-1 text-primary-500 flex-shrink-0" size={20} />
                  <span>{COMPANY_INFO.address}</span>
                </div>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="font-medium mb-3">Newsletter</h5>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 rounded-l-xl bg-dark-600 border border-dark-500 text-white placeholder:text-dark-400 focus:outline-none focus:border-primary-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary-500 rounded-r-xl hover:bg-primary-600 transition-colors"
                >
                  <MdArrowForward size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-600">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-dark-400 text-sm text-center md:text-left">
              © {currentYear} {COMPANY_INFO.name}. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6 text-sm text-dark-400">
              <a href="#" className="hover:text-primary-400 transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer