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

    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        y: 80,
        opacity: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: 'power2.out',
        immediateRender: false,
        scrollTrigger: {
          trigger: '#features',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })

      gsap.utils.toArray('.show-card').forEach((card) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          immediateRender: false,
          scrollTrigger: { trigger: card, start: 'top 90%', toggleActions: 'play none none none' },
        })
      })

      gsap.from('.showcase-cube', {
        scale: 0.7,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        immediateRender: false,
        scrollTrigger: { trigger: '.showcase-cube', start: 'top 80%', toggleActions: 'play none none none' },
      })

      gsap.utils.toArray('.section-head h2, .cta-inner h2').forEach((h) => {
        gsap.from(h, {
          y: 50,
          opacity: 0,
          duration: 0.7,
          ease: 'power2.out',
          immediateRender: false,
          scrollTrigger: { trigger: h, start: 'top 88%', toggleActions: 'play none none none' },
        })
      })
    })

    return () => ctx.revert()
  }, [])
}
