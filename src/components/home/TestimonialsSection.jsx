import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MdChevronLeft, MdChevronRight, MdStar } from 'react-icons/md'
import { FaQuoteLeft } from 'react-icons/fa'
import { testimonials } from '../../data/testimonials'
import SectionTitle from '../common/SectionTitle'

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-light">
      <div className="container-custom">
        <SectionTitle
          badge="Témoignages"
          title="Ce que disent nos clients"
          subtitle="La satisfaction de nos clients est notre plus belle récompense"
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-medium p-8 md:p-12"
              >
                {/* Quote Icon */}
                <FaQuoteLeft className="text-primary-200 text-4xl md:text-5xl mb-6" />

                {/* Content */}
                <p className="text-lg md:text-xl text-dark-600 leading-relaxed mb-8">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <MdStar key={i} className="text-yellow-400" size={24} />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-dark-700">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-dark-400 text-sm">
                      {testimonials[currentIndex].role} - {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center text-dark-600 hover:bg-primary-500 hover:text-white transition-all"
              >
                <MdChevronLeft size={24} />
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'bg-primary-500 w-8' 
                        : 'bg-dark-200 hover:bg-primary-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center text-dark-600 hover:bg-primary-500 hover:text-white transition-all"
              >
                <MdChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection