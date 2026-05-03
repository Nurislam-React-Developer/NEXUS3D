import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const IMAGES = [
  { url: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=1200', title: 'Neural Dreams', tag: '01 / AI Art' },
  { url: 'https://images.unsplash.com/photo-1614854262318-831574f15f1f?w=1200', title: 'Liquid Chrome', tag: '02 / 3D' },
  { url: 'https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=1200', title: 'Neon Tokyo', tag: '03 / Motion' },
  { url: 'https://images.unsplash.com/photo-1633354931133-27ac5f9b6cb9?w=1200', title: 'Crystal Worlds', tag: '04 / Render' },
  { url: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200', title: 'Gradient Flow', tag: '05 / Art' },
  { url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200', title: 'Matrix', tag: '06 / Code' },
]

const HorizontalGallery = () => {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current
      const section = sectionRef.current
      if (!track || !section) return

      const scrollDistance = track.scrollWidth - window.innerWidth

      gsap.to(track, {
        x: -scrollDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative z-[2] h-screen overflow-hidden">
      <div className="absolute top-10 left-10 z-10 flex flex-col gap-3">
        <span className="pill">// галерея</span>
        <h2 className="text-4xl md:text-6xl font-extrabold max-w-xl leading-tight">
          Скролли <span className="gradient-text">вправо</span>
        </h2>
        <p className="text-[color:var(--muted)] max-w-md">
          Шесть миров. Бесконечное вдохновение. Крути колесо вниз — сцена поедет вбок.
        </p>
      </div>

      <div
        ref={trackRef}
        className="flex gap-8 items-center h-full pl-[50vw] pr-[10vw] will-change-transform"
      >
        {IMAGES.map((img, i) => (
          <div
            key={i}
            className="relative shrink-0 w-[70vw] md:w-[50vw] lg:w-[40vw] h-[70vh] rounded-3xl overflow-hidden border border-white/10 group"
          >
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 [filter:saturate(1.2)_brightness(0.85)]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <span className="text-xs tracking-[3px] uppercase text-[color:var(--accent-3)]">{img.tag}</span>
              <h3 className="text-3xl md:text-5xl font-bold mt-2">{img.title}</h3>
            </div>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at center, rgba(124,92,255,0.3), transparent 60%)',
              }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default HorizontalGallery
