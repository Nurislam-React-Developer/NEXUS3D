import React from 'react'
import './App.css'
import { useMouse, useRevealOnView } from './hooks/useInteractions'
import { useLenis } from './hooks/useLenis'
import { useScrollAnimations } from './hooks/useScrollAnimations'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Stats from './components/Stats'
import Features from './components/Features'
import HorizontalGallery from './components/HorizontalGallery'
import Showcase from './components/Showcase'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import CursorFX from './components/CursorFX'
import FloatingContact from './components/FloatingContact'
import About from './components/About'
import Timeline from './components/Timeline'

const App = () => {
  const mouse = useMouse()
  useLenis()
  useRevealOnView()
  useScrollAnimations()

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Background mouse={mouse} />
      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <Features />
      <Timeline />
      <Marquee reverse />
      <HorizontalGallery />
      <Showcase />
      <Testimonials />
      <About />
      <CTA />
      <Footer />
      <CursorFX />
      <FloatingContact />
    </div>
  )
}

export default App
