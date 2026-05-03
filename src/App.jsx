import React from 'react'
import './App.css'
import { useScroll, useMouse, useRevealOnView } from './hooks/useInteractions'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import CTA from './components/CTA'
import Footer from './components/Footer'
import CursorFX from './components/CursorFX'

const App = () => {
  const scrollY = useScroll()
  const mouse = useMouse()
  useRevealOnView()

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Background mouse={mouse} />
      <Navbar />
      <Hero scrollY={scrollY} />
      <Features />
      <Showcase />
      <CTA />
      <Footer />
      <CursorFX />
    </div>
  )
}

export default App
