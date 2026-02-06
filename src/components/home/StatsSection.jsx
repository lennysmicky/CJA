import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { STATS } from '../../utils/constants'

const AnimatedNumber = ({ value, inView }) => {
  const [displayValue, setDisplayValue] = useState(0)
  const numericValue = parseInt(value.replace(/\D/g, ''))
  const suffix = value.replace(/[0-9]/g, '')

  useEffect(() => {
    if (inView) {
      let start = 0
      const duration = 2000
      const increment = numericValue / (duration / 16)
      
      const timer = setInterval(() => {
        start += increment
        if (start >= numericValue) {
          setDisplayValue(numericValue)
          clearInterval(timer)
        } else {
          setDisplayValue(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [inView, numericValue])

  return <span>{displayValue}{suffix}</span>
}

const StatsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="bg-dark-700 py-16 md:py-20">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-500 mb-2">
                <AnimatedNumber value={stat.number} inView={isInView} />
              </p>
              <p className="text-dark-300 text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection