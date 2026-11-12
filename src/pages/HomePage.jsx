import HeroCarousel from '../components/HeroCarousel'
import HomepageAbout from '../components/HomepageAbout'
import ServicesEnhanced from '../components/ServicesEnhanced'
import Team from '../components/Team'
import Contact from '../components/Contact'
import MissionVision from '../components/MissionVision'

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <HomepageAbout />
      <ServicesEnhanced />
      <Team />
      <Contact />
      <MissionVision />
    </>
  )
}
