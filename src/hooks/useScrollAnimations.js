import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimations() {
  useEffect(() => {
    // На мобилках / reduced-motion — без анимаций
    const isReduced = matchMedia('(prefers-reduced-motion: reduce)').matches
    const isSmall = window.innerWidth < 700
    if (isReduced || isSmall) return

    // Все scroll-анимации выпилены — карточки видны нативно через CSS .reveal класс
    // и IntersectionObserver в useRevealOnView. Никакого риска "застрявших в opacity 0".
  }, [])
}
