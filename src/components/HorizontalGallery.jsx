import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const IMAGES = [
  { url: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=900&q=75&auto=format', title: 'Neural Dreams', tag: '01 / AI Art' },
  { url: 'https://images.unsplash.com/photo-1614854262318-831574f15f1f?w=900&q=75&auto=format', title: 'Liquid Chrome', tag: '02 / 3D' },
  { url: 'https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=900&q=75&auto=format', title: 'Neon Tokyo', tag: '03 / Motion' },
  { url: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?w=900&q=75&auto=format', title: 'Crystal Worlds', tag: '04 / Render' },
  { url: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=900&q=75&auto=format', title: 'Gradient Flow', tag: '05 / Art' },
  { url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&q=75&auto=format', title: 'Matrix', tag: '06 / Code' },
]

const HorizontalGallery = () => {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const progressRef = useRef(null)
  const [currentIdx, setCurrentIdx] = useState(0)
  // Реактивное состояние мобильного режима — обновляется на resize
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(max-width: 899px), (pointer: coarse)').matches
      : false
  )

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 899px), (pointer: coarse)')
    const handler = (e) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const ctx = gsap.context(() => {
      const track = trackRef.current
      const section = sectionRef.current
      if (!track || !section) return

      // ScrollTrigger.matchMedia — автоматически активирует/деактивирует
      // pin-анимацию когда меняется размер окна. Без него pin "залипает"
      // если юзер ресайзит окно или открывает DevTools mobile mode.
      const mm = gsap.matchMedia()

      mm.add('(min-width: 900px) and (hover: hover)', () => {
        const getDistance = () => track.scrollWidth - window.innerWidth

        const tween = gsap.to(track, {
          x: () => -getDistance(),
          ease: 'none',
          force3D: true,
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${getDistance()}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
            onUpdate: (self) => {
              if (progressRef.current) {
                progressRef.current.style.transform = `scaleX(${self.progress})`
              }
              const idx = Math.min(IMAGES.length - 1, Math.floor(self.progress * IMAGES.length))
              setCurrentIdx(idx)
            },
          },
        })

        return () => tween.kill()
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [isMobile])

  // ===== MOBILE — обычная сетка без pin =====
  if (isMobile) {
    return (
      <section className="relative z-[2] px-5 py-14">
        <div className="text-center mb-7">
          <span className="pill">// галерея</span>
          <h2 className="text-3xl font-extrabold mt-3">
            Шесть <span className="gradient-text">миров</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {IMAGES.map((img, i) => (
            <div key={i} className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10">
              <img
                src={img.url}
                alt={img.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover [filter:saturate(1.2)_brightness(0.85)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <span className="text-[9px] tracking-widest uppercase text-[color:var(--accent-3)]">{img.tag}</span>
                <h3 className="text-base font-bold leading-tight mt-0.5">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  // ===== DESKTOP — горизонтальный pin-скролл =====
  return (
    <section ref={sectionRef} className="relative z-[2] h-screen overflow-hidden">
      <div className="absolute top-10 left-10 z-10 flex flex-col gap-3 pointer-events-none">
        <span className="pill pointer-events-auto">// галерея</span>
        <h2 className="text-4xl md:text-6xl font-extrabold max-w-xl leading-tight">
          Скролли <span className="gradient-text">вниз</span> →
        </h2>
        <p className="text-[color:var(--muted)] max-w-md text-sm">
          Шесть миров. Бесконечное вдохновение. Крути колесо вниз — сцена едет вбок.
        </p>
      </div>

      <div className="absolute bottom-8 left-10 right-10 z-10 flex items-center gap-4 pointer-events-none">
        <span className="text-sm text-white font-mono font-bold tabular-nums w-8">
          {String(currentIdx + 1).padStart(2, '0')}
        </span>
        <div className="flex-1 h-[3px] bg-white/10 rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="h-full w-full origin-left bg-gradient-to-r from-[color:var(--accent)] via-[color:var(--accent-2)] to-[color:var(--accent-3)]"
            style={{ transform: 'scaleX(0)', willChange: 'transform' }}
          />
        </div>
        <span className="text-sm text-[color:var(--muted)] font-mono w-8 text-right">
          {String(IMAGES.length).padStart(2, '0')}
        </span>
      </div>

      <div
        ref={trackRef}
        className="flex gap-8 items-center h-full pl-[50vw] pr-[10vw] will-change-transform"
        style={{ transform: 'translate3d(0,0,0)' }}
      >
        {IMAGES.map((img, i) => (
          <div
            key={i}
            className="relative shrink-0 w-[70vw] md:w-[50vw] lg:w-[40vw] h-[70vh] rounded-3xl overflow-hidden border border-white/10 group"
          >
            <img
              src={img.url}
              alt={img.title}
              loading={i < 2 ? 'eager' : 'lazy'}
              decoding="async"
              fetchpriority={i < 2 ? 'high' : 'low'}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 [filter:saturate(1.2)_brightness(0.85)]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <span className="text-xs tracking-[3px] uppercase text-[color:var(--accent-3)]">{img.tag}</span>
              <h3 className="text-3xl md:text-5xl font-bold mt-2">{img.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HorizontalGallery
