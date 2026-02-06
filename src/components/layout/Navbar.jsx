import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { MdMenu, MdClose, MdArrowForward } from 'react-icons/md'
import { NAV_LINKS } from '../../utils/constants'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-soft py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo avec contour qui suit la forme */}
            <Link to="/" className="flex items-center space-x-2 group">
              <img 
                src="/logo.png" 
                alt="CJA-Link" 
                className="h-11 w-auto object-contain group-hover:scale-105 transition-transform"
                style={{ filter: 'drop-shadow(0 0 1px #111827)' }}
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl text-dark-700">Cja-Link</span>
                <span className="text-[10px] text-primary-500 -mt-1 hidden sm:block">
                  Communication
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'text-primary-500 bg-primary-50'
                      : 'text-dark-600 hover:text-primary-500 hover:bg-primary-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/contact" className="btn-primary">
                <span>Demander un devis</span>
                <MdArrowForward size={20} />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-light-300 text-dark-700 hover:bg-primary-500 hover:text-white transition-colors"
            >
              {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-dark-900/50 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 lg:hidden shadow-strong"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-light-400">
                  <Link to="/" className="flex items-center space-x-2">
                    <img 
                      src="/logo.png" 
                      alt="CJA-Link" 
                      className="h-10 w-auto object-contain"
                      style={{ filter: 'drop-shadow(0 0 1px #111827)' }}
                    />
                    <span className="font-bold text-xl text-dark-700">Cja-Link</span>
                  </Link>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-light-300 text-dark-700"
                  >
                    <MdClose size={24} />
                  </button>
                </div>

                {/* Links */}
                <div className="flex-1 overflow-y-auto py-6 px-6">
                  <nav className="space-y-2">
                    {NAV_LINKS.map((link, index) => (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={link.path}
                          className={`flex items-center justify-between p-4 rounded-xl font-medium transition-all ${
                            location.pathname === link.path
                              ? 'bg-primary-500 text-white'
                              : 'text-dark-600 hover:bg-light-300'
                          }`}
                        >
                          <span>{link.name}</span>
                          <MdArrowForward size={20} />
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-light-400">
                  <Link
                    to="/contact"
                    className="btn-primary w-full justify-center"
                  >
                    <span>Demander un devis</span>
                    <MdArrowForward size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar