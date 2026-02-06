import { useState } from 'react'
import { motion } from 'framer-motion'
import { MdArrowForward } from 'react-icons/md'
import SectionTitle from '../components/common/SectionTitle'
import Button from '../components/common/Button'
import ProjectCard from '../components/portfolio/ProjectCard'
import ProjectFilter from '../components/portfolio/ProjectFilter'
import { projects, categories } from '../data/projects'

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Tous')

  const filteredProjects = activeCategory === 'Tous'
    ? projects
    : projects.filter(project => project.category === activeCategory)

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
            <span className="badge-primary mb-4">Nos Réalisations</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-700 mb-6">
              Des projets qui font <span className="text-gradient">la différence</span>
            </h1>
            <p className="text-lg text-dark-400">
              Découvrez une sélection de nos meilleurs projets et voyez comment nous 
              transformons les idées en succès.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <div className="container-custom">
          <ProjectFilter 
            categories={categories}
            activeCategory={activeCategory}
            onFilterChange={setActiveCategory}
          />

          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section-light">
        <div className="container-custom">
          <SectionTitle
            badge="Ils nous font confiance"
            title="Nos clients"
            subtitle="Des entreprises de tous secteurs nous font confiance"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 flex items-center justify-center h-24 shadow-soft hover:shadow-medium transition-shadow"
              >
                <div className="text-xl font-bold text-dark-200">Logo</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Votre projet pourrait être le prochain
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Discutons de votre projet et voyons comment nous pouvons vous aider.
            </p>
            <Button to="/contact" variant="white" icon={MdArrowForward}>
              Démarrer un projet
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Portfolio