import HeroSection from '../components/home/HeroSection'
import StatsSection from '../components/home/StatsSection'
import AboutPreview from '../components/home/AboutPreview'
import ServicesPreview from '../components/home/ServicesPreview'
import PortfolioPreview from '../components/home/PortfolioPreview'
import TestimonialsSection from '../components/home/TestimonialsSection'
import CTASection from '../components/home/CTASection'

const Home = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <ServicesPreview />
      <PortfolioPreview />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}

export default Home