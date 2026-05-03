import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const IMAGES = [
  { url: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=900&q=75&auto=format', title: 'Neural Dreams', tag: '01 / AI Art' },
  { url: 'https://images.unsplash.com/photo-1614854262318-831574f15f1f?w=900&q=75&auto=format', title: 'Liquid Chrome', tag: '02 / 3D' },
  { url: 'https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=900&q=75&auto=format', title: 'Neon Tokyo', tag: '03 / Motion' },
  { url: 'https://images.unsplash.com/photo-1633354931133-27ac5f9b6cb9?w=900&q=75&auto=format', title: 'Crystal Worlds', tag: '04 / Render' },
  { url: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=900&q=75&auto=format', title: 'Gradient Flow', tag: '05 / Art' },
  { url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&q=75&auto=format', title: 'Matrix', tag: '06 / Code' },
]

const HorizontalGallery = () => {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 900

  useEffect(() => {
    if (isMobile) return

    const ctx = gsap.context(() => {
      const track = trackRef.current
      const section = sectionRef.current
      if (!track || !section) return

      const getDistance = () => track.scrollWidth - window.innerWidth

      // Используем force3D + translate3d для GPU acceleration
      gsap.to(track, {
        x: () => -getDistance(),
        ease: 'none',
        force3D: true,
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getDistance()}`,
          scrub: 1,           // лёгкий лаг = плавность + меньше работы на каждый кадр
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: true, // оптимизация при быстром скролле
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [isMobile])

  // Mobile fallback — обычная сетка без pin (тач-устройства не любят pin)
  if (isMobile) {
    return (
      <section className="relative z-[2] px-6 py-16">
        <div className="text-center mb-8">
          <span className="pill">// галерея</span>
          <h2 className="text-4xl font-extrabold mt-3">
            Шесть <span className="gradient-text">миров</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {IMAGES.map((img, i) => (
            <div key={i} className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10">
              <img src={img.url} alt={img.title} loading="lazy" decoding="async" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <span className="text-[9px] tracking-widest uppercase text-[color:var(--accent-3)]">{img.tag}</span>
                <h3 className="text-base font-bold">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section ref={sectionRef} className="relative z-[2] h-screen overflow-hidden">
      {/* Заголовок поверх (sticky-стиль) */}
      <div className="absolute top-10 left-10 z-10 flex flex-col gap-3 pointer-events-none">
        <span className="pill pointer-events-auto">// галерея</span>
        <h2 className="text-4xl md:text-6xl font-extrabold max-w-xl leading-tight">
          Скролли <span className="gradient-text">вниз</span> →
        </h2>
        <p className="text-[color:var(--muted)] max-w-md text-sm">
          Шесть миров. Бесконечное вдохновение. Крути колесо вниз — сцена едет вбок.
        </p>
      </div>

      {/* Прогресс-бар внизу */}
      <div className="absolute bottom-8 left-10 right-10 z-10 flex items-center gap-3 pointer-events-none">
        <span className="text-xs text-[color:var(--muted)] font-mono">01</span>
        <div className="flex-1 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div className="h-full w-1/6 bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-2)]" id="hg-progress" />
        </div>
        <span className="text-xs text-[color:var(--muted)] font-mono">06</span>
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
