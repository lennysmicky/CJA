import { motion } from 'framer-motion'
import { MdVisibility, MdFlag, MdLightbulb, MdFavorite, MdGroups, MdWorkspacePremium, MdArrowForward } from 'react-icons/md'
import { FaLinkedinIn, FaTwitter, FaInstagram, FaWhatsapp, FaFacebook, FaGithub } from 'react-icons/fa'
import SectionTitle from '../components/common/SectionTitle'
import Button from '../components/common/Button'
import Card from '../components/common/Card'
import { team } from '../data/team'
import { VALUES, PROCESS_STEPS } from '../utils/constants'

const About = () => {
  const valueIcons = [MdLightbulb, MdWorkspacePremium, MdFavorite, MdGroups]

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
            <span className="badge-primary mb-4">À propos de nous</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-700 mb-6">
              L'agence qui fait parler <span className="text-gradient">les marques</span>
            </h1>
            <p className="text-lg text-dark-400">
              CJA-Link est née d'une passion commune pour la communication et le désir 
              d'accompagner les entreprises dans leur croissance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="text-center md:text-left">
              <div className="w-14 h-14 bg-primary-500 rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
                <MdVisibility className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-dark-700 mb-4">Notre Vision</h3>
              <p className="text-dark-400">
                Devenir l'agence de référence en Afrique francophone, reconnue pour son 
                excellence créative et sa capacité à transformer les marques.
              </p>
            </Card>

            <Card className="text-center md:text-left">
              <div className="w-14 h-14 bg-dark-700 rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
                <MdFlag className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-dark-700 mb-4">Notre Mission</h3>
              <p className="text-dark-400">
                Accompagner chaque entreprise dans sa stratégie de communication pour 
                maximiser son impact et atteindre ses objectifs de croissance.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-light">
        <div className="container-custom">
          <SectionTitle
            badge="Nos Valeurs"
            title="Ce qui nous guide"
            subtitle="Des principes forts qui orientent chacune de nos actions"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, index) => {
              const Icon = valueIcons[index]
              return (
                <Card key={index} delay={index * 0.1} className="text-center">
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary-500" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-dark-700 mb-3">{value.title}</h3>
                  <p className="text-dark-400 text-sm">{value.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container-custom">
          <SectionTitle
            badge="Notre Approche"
            title="Comment nous travaillons"
            subtitle="Une méthodologie éprouvée pour des résultats garantis"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-7xl font-bold text-primary-100 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-dark-700 mb-3">{item.title}</h3>
                <p className="text-dark-400">{item.description}</p>
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 right-0 w-1/2 h-0.5 bg-primary-100" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team - AVEC RÉSEAUX SOCIAUX */}
      {/* <section className="section-light">
        <div className="container-custom">
          <SectionTitle
            badge="Notre Équipe"
            title="Les experts derrière CJA-Link"
            subtitle="Une équipe passionnée et expérimentée à votre service"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={member.id} delay={index * 0.1} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-dark-700">{member.name}</h3>
                <p className="text-primary-500 font-medium mb-3">{member.role}</p>
                <p className="text-dark-400 text-sm mb-4">{member.bio}</p>
                
                 Liens sociaux 
                <div className="flex justify-center gap-3">
                  {member.social?.linkedin && (
                    <a 
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-light-300 rounded-lg flex items-center justify-center text-dark-400 hover:bg-primary-500 hover:text-white transition-all"
                    >
                      <FaLinkedinIn size={16} />
                    </a>
                  )}
                  {member.social?.twitter && (
                    <a 
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-light-300 rounded-lg flex items-center justify-center text-dark-400 hover:bg-primary-500 hover:text-white transition-all"
                    >
                      <FaTwitter size={16} />
                    </a>
                  )}
                  {member.social?.instagram && (
                    <a 
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-light-300 rounded-lg flex items-center justify-center text-dark-400 hover:bg-primary-500 hover:text-white transition-all"
                    >
                      <FaInstagram size={16} />
                    </a>
                  )}
                  {member.social?.facebook && (
                    <a 
                      href={member.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-light-300 rounded-lg flex items-center justify-center text-dark-400 hover:bg-primary-500 hover:text-white transition-all"
                    >
                      <FaFacebook size={16} />
                    </a>
                  )}
                  {member.social?.github && (
                    <a
                     href={member.social.github}
                     target="_blank"
                     rel="nooper noreferrer"
                     className="w-9 h-9 bg-light-300 rounded-lg flex items-center justify-center text-dark-400 hover:bg-primary-500 hover:text-white transition-all"
                     >
                      <FaGithub size={16} />
                    </a>
                  )}
                  {member.social?.whatsapp && (
                    <a 
                      href={member.social.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-light-300 rounded-lg flex items-center justify-center text-dark-400 hover:bg-primary-500 hover:text-white transition-all"
                    >
                      <FaWhatsapp size={16} />
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

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
              Prêt à collaborer avec nous ?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Discutons de votre projet et voyons comment nous pouvons vous aider.
            </p>
            <Button to="/contact" variant="white" icon={MdArrowForward}>
              Contactez-nous
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default About