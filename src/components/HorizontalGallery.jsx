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

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current
      const section = sectionRef.current
      if (!track || !section) return

      // Используем gsap.matchMedia — авто-cleanup при изменении размера
      const mm = gsap.matchMedia()

      // Десктоп — длинный pin со множеством карточек
      mm.add('(min-width: 900px)', () => {
        const getDistance = () => track.scrollWidth - window.innerWidth

        gsap.to(track, {
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
      })

      // Мобилки — тоже горизонтальный скролл, но с меньшей дистанцией и
      // без scrub-лага (он на тач-устройствах ощущается как тормоз)
      mm.add('(max-width: 899px)', () => {
        const getDistance = () => track.scrollWidth - window.innerWidth

        gsap.to(track, {
          x: () => -getDistance(),
          ease: 'none',
          force3D: true,
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${getDistance()}`,
            scrub: 0.3,            // меньший scrub = мгновенный отклик
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
            // pinType: 'fixed' — лучше для iOS Safari (избегает address bar глитчей)
            pinType: 'fixed',
            onUpdate: (self) => {
              if (progressRef.current) {
                progressRef.current.style.transform = `scaleX(${self.progress})`
              }
              const idx = Math.min(IMAGES.length - 1, Math.floor(self.progress * IMAGES.length))
              setCurrentIdx(idx)
            },
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative z-[2] overflow-hidden"
      style={{
        height: '100svh',           // small viewport height — учитывает address bar на iOS
        touchAction: 'pan-y',        // разрешаем только вертикальный pan, чтобы pin работал
      }}
    >
      {/* Заголовок */}
      <div className="absolute top-6 md:top-10 left-5 md:left-10 z-10 flex flex-col gap-2 md:gap-3 pointer-events-none max-w-[80%]">
        <span className="pill pointer-events-auto text-[10px] md:text-xs">// галерея</span>
        <h2 className="text-3xl md:text-6xl font-extrabold leading-tight">
          Скролли <span className="gradient-text">вниз</span> →
        </h2>
        <p className="hidden md:block text-[color:var(--muted)] max-w-md text-sm">
          Шесть миров. Бесконечное вдохновение. Крути колесо вниз — сцена едет вбок.
        </p>
      </div>

      {/* Прогресс-бар внизу */}
      <div className="absolute bottom-5 md:bottom-8 left-5 md:left-10 right-5 md:right-10 z-10 flex items-center gap-3 md:gap-4 pointer-events-none">
        <span className="text-xs md:text-sm text-white font-mono font-bold tabular-nums w-7 md:w-8">
          {String(currentIdx + 1).padStart(2, '0')}
        </span>
        <div className="flex-1 h-[3px] bg-white/10 rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="h-full w-full origin-left bg-gradient-to-r from-[color:var(--accent)] via-[color:var(--accent-2)] to-[color:var(--accent-3)]"
            style={{ transform: 'scaleX(0)', willChange: 'transform' }}
          />
        </div>
        <span className="text-xs md:text-sm text-[color:var(--muted)] font-mono w-7 md:w-8 text-right">
          {String(IMAGES.length).padStart(2, '0')}
        </span>
      </div>

      {/* Track */}
      <div
        ref={trackRef}
        className="flex gap-4 md:gap-8 items-center h-full pl-[12vw] md:pl-[50vw] pr-[12vw] md:pr-[10vw] will-change-transform"
        style={{ transform: 'translate3d(0,0,0)' }}
      >
        {IMAGES.map((img, i) => (
          <div
            key={i}
            className="relative shrink-0
                       w-[76vw] md:w-[50vw] lg:w-[40vw]
                       h-[58vh] md:h-[70vh]
                       rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 group"
          >
            <img
              src={img.url}
              alt={img.title}
              loading={i < 2 ? 'eager' : 'lazy'}
              decoding="async"
              fetchpriority={i < 2 ? 'high' : 'low'}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 [filter:saturate(1.2)_brightness(0.85)]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
            <div className="absolute bottom-5 md:bottom-8 left-5 md:left-8 right-5 md:right-8">
              <span className="text-[10px] md:text-xs tracking-[2px] md:tracking-[3px] uppercase text-[color:var(--accent-3)]">{img.tag}</span>
              <h3 className="text-2xl md:text-5xl font-bold mt-1 md:mt-2 leading-tight">{img.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HorizontalGallery
