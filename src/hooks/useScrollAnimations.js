import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/** Global scroll-triggered animations applied once on mount */
export function useScrollAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero video: scale + rotate + fade out on scroll
      gsap.to('.hero-video-wrap', {
        scale: 1.4,
        rotate: 6,
        opacity: 0.3,
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Hero title: split letters drift
      gsap.to('.hero-title', {
        y: -150,
        letterSpacing: '0.1em',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })

      // Feature cards: stagger pop-in 3D
      gsap.from('.feature-card', {
        y: 120,
        opacity: 0,
        rotateX: -30,
        stagger: 0.12,
        duration: 1.2,
        ease: 'power3.out',
        immediateRender: false,
        scrollTrigger: {
          trigger: '#features',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })

      // Showcase cards parallax
      gsap.utils.toArray('.show-card').forEach((card, i) => {
        gsap.from(card, {
          y: 200,
          opacity: 0,
          rotate: i % 2 === 0 ? -8 : 8,
          duration: 1.5,
          ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: { trigger: card, start: 'top 90%', toggleActions: 'play none none none' },
        })
      })

      // Cube scale on enter
      gsap.from('.showcase-cube', {
        scale: 0,
        rotate: -180,
        duration: 2,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: { trigger: '.showcase-cube', start: 'top 75%' },
      })

      // Section heads: reveal with split
      gsap.utils.toArray('.section-head h2, .cta-inner h2').forEach((h) => {
        gsap.from(h, {
          y: 80,
          opacity: 0,
          skewY: 5,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: h, start: 'top 85%' },
        })
      })

      // Parallax on floating orbs with different speeds
      gsap.utils.toArray('.bg-orb').forEach((orb, i) => {
        gsap.to(orb, {
          y: (i + 1) * -200,
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        })
      })
    })

    return () => ctx.revert()
  }, [])
}
