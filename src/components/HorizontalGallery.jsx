import React from 'react'

const IMAGES = [
  { url: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800', title: 'Neural Dreams', tag: '01 / AI Art' },
  { url: 'https://images.unsplash.com/photo-1614854262318-831574f15f1f?w=800', title: 'Liquid Chrome', tag: '02 / 3D' },
  { url: 'https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=800', title: 'Neon Tokyo', tag: '03 / Motion' },
  { url: 'https://images.unsplash.com/photo-1633354931133-27ac5f9b6cb9?w=800', title: 'Crystal Worlds', tag: '04 / Render' },
  { url: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800', title: 'Gradient Flow', tag: '05 / Art' },
  { url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800', title: 'Matrix', tag: '06 / Code' },
]

/** Лёгкая сетка-галерея (без pin/scrub — для перформанса) */
const HorizontalGallery = () => {
  return (
    <section className="relative z-[2] px-6 md:px-10 py-20">
      <div className="reveal mx-auto mb-10 max-w-3xl text-center flex flex-col items-center gap-3">
        <span className="pill">// галерея</span>
        <h2 className="font-extrabold leading-[1.05] text-[clamp(36px,5vw,64px)]">
          Шесть <span className="gradient-text">миров</span>
        </h2>
        <p className="text-[color:var(--muted)]">Каждый — отдельная вселенная вдохновения</p>
      </div>

      <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
        {IMAGES.map((img, i) => (
          <div
            key={i}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 group"
            loading="lazy"
          >
            <img
              src={img.url}
              alt={img.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 [filter:saturate(1.2)_brightness(0.85)]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[10px] tracking-[2px] uppercase text-[color:var(--accent-3)]">{img.tag}</span>
              <h3 className="text-xl md:text-2xl font-bold mt-1">{img.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HorizontalGallery
