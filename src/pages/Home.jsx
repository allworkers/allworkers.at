import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Why from '../components/Why'
import Process from '../components/Process'
import Work from '../components/Work'
import Sectors from '../components/Sectors'
import About from '../components/About'
import CTA from '../components/CTA'
import { scrollToId } from '../components/Nav'

export default function Home() {
  const location = useLocation()
  useEffect(() => {
    const target = location.state?.scrollTo
    if (target) {
      // wait for layout, then scroll
      const id = setTimeout(() => scrollToId(target), 80)
      return () => clearTimeout(id)
    }
  }, [location.state])

  return (
    <main>
      <Hero />
      <Services />
      <Why />
      <Process />
      <Work />
      <Sectors />
      <About />
      <CTA />
    </main>
  )
}
