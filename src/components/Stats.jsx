import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ITEMS = [
  { num: 250, suffix: 'K+', label: 'Активных пользователей' },
  { num: 98, suffix: '%', label: 'WOW-эффект' },
  { num: 120, suffix: ' FPS', label: 'Частота кадров' },
  { num: 47, suffix: '+', label: 'Наград за дизайн' },
]

const Stats = () => {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.stat-num').forEach((el) => {
        const target = +el.dataset.num
        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            ease: 'power2.out',
            snap: { innerText: 1 },
            scrollTrigger: { trigger: el, start: 'top 80%' },
          }
        )
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative z-[2] py-16 px-6 md:px-10">
      <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8">
        {ITEMS.map((it, i) => (
          <div
            key={i}
            className="relative text-center p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl
                       hover:border-[color:var(--accent-2)]/50 transition-all duration-500 group overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                 style={{ background: 'radial-gradient(circle at center, rgba(124,92,255,0.15), transparent 70%)' }} />
            <div className="relative flex items-baseline justify-center gap-1">
              <span className="stat-num text-5xl md:text-7xl font-black gradient-text" data-num={it.num}>0</span>
              <span className="text-3xl md:text-4xl font-black text-[color:var(--accent-2)]">{it.suffix}</span>
            </div>
            <p className="relative text-sm md:text-base text-[color:var(--muted)] uppercase tracking-widest mt-3">{it.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
