import React from 'react'

const Hero = ({ scrollY }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-10 pt-36 pb-20 [perspective:1200px]"
    >
      {/* Video background */}
      <div
        className="absolute inset-0 z-[1] will-change-transform"
        style={{
          transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0005})`,
        }}
      >
        <video
          className="w-full h-full object-cover [filter:saturate(1.2)_contrast(1.1)_brightness(0.7)]"
          src="/video/Video 2.mp4"
          autoPlay loop muted playsInline
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(5,3,13,0.9)_90%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,3,13,0.5)] to-[rgba(5,3,13,0.85)]" />
      </div>

      {/* Content */}
      <div
        className="relative z-[2] max-w-5xl text-center flex flex-col items-center gap-7 will-change-transform"
        style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
      >
        <span className="pill reveal">⚡ Новая эра 3D веба</span>

        <h1 className="reveal flex flex-col font-black leading-[0.95] tracking-tight text-[clamp(54px,9vw,140px)]">
          <span className="glitch" data-text="БУДУЩЕЕ">БУДУЩЕЕ</span>
          <span className="gradient-text">УЖЕ ЗДЕСЬ</span>
        </h1>

        <p className="reveal max-w-2xl text-[color:var(--muted)] text-lg leading-relaxed">
          Погрузись в захватывающий мир 3D-анимаций и иммерсивного дизайна.
          Создаём впечатления, от которых невозможно оторваться.
        </p>

        <div className="reveal flex flex-wrap justify-center gap-4">
          <button className="btn-primary big">Исследовать ▶</button>
          <button className="btn-ghost big">Смотреть демо</button>
        </div>

        <div className="reveal flex flex-wrap justify-center gap-12 mt-4">
          {[
            ['250K+', 'Пользователей'],
            ['98%', 'WOW-эффект'],
            ['60 FPS', 'Плавность'],
          ].map(([num, label]) => (
            <div key={label} className="flex flex-col items-center">
              <b className="text-3xl bg-gradient-to-br from-[color:var(--accent-3)] to-[color:var(--accent)] bg-clip-text text-transparent">
                {num}
              </b>
              <span className="text-xs text-[color:var(--muted)] uppercase tracking-widest">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint absolute bottom-8 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2">
        <span className="w-6 h-10 border-2 border-white/40 rounded-xl relative" />
        <p className="text-[11px] text-[color:var(--muted)] tracking-[2px] uppercase">Скроль вниз</p>
      </div>
    </section>
  )
}

export default Hero
