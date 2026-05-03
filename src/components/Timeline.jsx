import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const LEVELS = [
  {
    num: '01',
    title: 'Погружение',
    text: 'Ты уже не просто смотришь сайт — ты в нём. Каждый пиксель реагирует на движение курсора.',
    icon: '🌌',
    color: '#7c5cff',
    tags: ['3D-параллакс', 'Курсор-трекинг', 'WebGL'],
    img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=900',
  },
  {
    num: '02',
    title: 'Скорость',
    text: 'GPU-ускорение, 120 FPS и ноль задержек. Всё летает даже на старом ноуте.',
    icon: '⚡',
    color: '#00e0ff',
    tags: ['120 FPS', 'Lazy load', 'Edge CDN'],
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900',
  },
  {
    num: '03',
    title: 'Эмоции',
    text: 'Дизайн вызывает мурашки. Юзеры остаются в 4 раза дольше и возвращаются.',
    icon: '💫',
    color: '#ff3ea5',
    tags: ['Motion', 'AAA-Design', 'Glassmorphism'],
    img: 'https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=900',
  },
  {
    num: '04',
    title: 'Результат',
    text: 'Конверсия +340%. Бренд становится легендой. Ты — на передовой веба.',
    icon: '🏆',
    color: '#ffb84d',
    tags: ['+340% конверсии', 'Awwwards', 'Brand'],
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900',
  },
]

const Timeline = () => {
  const sectionRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Линия растёт пока скроллим через секцию
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'bottom 60%',
            scrub: 0.5,
          },
        }
      )

      // Активация узлов по очереди
      gsap.utils.toArray('.tl-node').forEach((node) => {
        gsap.to(node, {
          scale: 1.3,
          boxShadow: `0 0 30px ${node.dataset.color}`,
          backgroundColor: node.dataset.color,
          scrollTrigger: {
            trigger: node,
            start: 'top 55%',
            end: 'top 45%',
            scrub: true,
          },
        })
      })

      // Карточки появляются
      gsap.utils.toArray('.tl-card').forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          x: card.dataset.side === 'left' ? -80 : 80,
          y: 40,
          duration: 0.9,
          ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="timeline" className="relative z-[2] px-6 md:px-10 py-24">
      {/* HEADER — нестандартный split-layout с большой 3D картинкой */}
      <div className="relative mx-auto max-w-7xl mb-20 grid md:grid-cols-[1.1fr_1fr] gap-10 items-center [perspective:1400px]">
        {/* Левая часть — текст с вау-дизайном */}
        <div className="relative z-[2] flex flex-col gap-6">
          {/* Анимированный бейдж-счётчик */}
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-xl border border-white/15 backdrop-blur-xl bg-white/5 flex items-center justify-center overflow-hidden">
              <span
                className="absolute inset-0 opacity-60"
                style={{ background: 'conic-gradient(from 0deg, #7c5cff, #00e0ff, #ff3ea5, #ffb84d, #7c5cff)', animation: 'spinSlow 4s linear infinite' }}
              />
              <span className="relative text-lg font-black">4</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] tracking-[3px] uppercase text-[color:var(--accent-3)]">Roadmap · NEXUS3D</span>
              <span className="text-xs text-[color:var(--muted)]">levels of immersion</span>
            </div>
          </div>

          {/* Огромный нестандартный заголовок */}
          <h2 className="font-black leading-[0.9] tracking-tight text-[clamp(48px,7vw,120px)]">
            <span className="block">ПУТЬ К</span>
            <span className="relative inline-block">
              <span className="gradient-text">ПОГРУЖЕНИЮ</span>
              <svg className="absolute left-0 -bottom-2 w-full" height="14" viewBox="0 0 300 14" preserveAspectRatio="none">
                <path d="M2 8 Q 75 2 150 7 T 298 6" stroke="url(#underg)" strokeWidth="3" fill="none" strokeLinecap="round" />
                <defs>
                  <linearGradient id="underg" x1="0" x2="1">
                    <stop offset="0" stopColor="#7c5cff" />
                    <stop offset="0.5" stopColor="#ff3ea5" />
                    <stop offset="1" stopColor="#00e0ff" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>

          <p className="text-[color:var(--muted)] text-lg max-w-lg leading-relaxed">
            Скролли вниз — <b className="text-white">линия растёт</b> вместе с тобой,
            а <b className="text-white">узлы загораются</b> один за другим.
            От первого взгляда до <span className="gradient-text font-bold">легендарного результата</span>.
          </p>

          {/* Индикаторы-breadcrumbs */}
          <div className="flex flex-wrap gap-2 mt-2">
            {['🌌 Погружение', '⚡ Скорость', '💫 Эмоции', '🏆 Результат'].map((t, i) => (
              <span
                key={t}
                className="text-xs font-semibold px-3 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm hover:scale-105 transition"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Правая часть — 3D-стек картинок (коллаж) */}
        <div className="relative h-[400px] md:h-[520px] [perspective:1600px]">
          {/* Декоративный фон */}
          <div
            className="absolute inset-10 rounded-full blur-[60px] opacity-70"
            style={{ background: 'radial-gradient(circle, #7c5cff 0%, #ff3ea5 50%, transparent 70%)' }}
          />

          {/* Картинка 1 — задняя */}
          <div
            className="absolute top-8 right-14 w-[55%] h-[60%] rounded-2xl overflow-hidden border border-white/15 [box-shadow:0_30px_60px_-15px_rgba(0,224,255,0.5)]"
            style={{ transform: 'rotate(-8deg) translateZ(-60px)' }}
          >
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800"
              alt=""
              className="w-full h-full object-cover [filter:saturate(1.3)_brightness(0.85)]"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,224,255,0.35)] to-transparent mix-blend-overlay" />
            <div className="absolute top-2 left-2 text-[10px] font-black tracking-[2px] px-2 py-1 rounded bg-black/50 backdrop-blur">02 SPEED</div>
          </div>

          {/* Картинка 2 — средняя */}
          <div
            className="absolute top-20 right-0 w-[50%] h-[55%] rounded-2xl overflow-hidden border border-white/15 [box-shadow:0_30px_60px_-15px_rgba(255,62,165,0.5)]"
            style={{ transform: 'rotate(6deg)' }}
          >
            <img
              src="https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=800"
              alt=""
              className="w-full h-full object-cover [filter:saturate(1.3)_brightness(0.85)]"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,62,165,0.35)] to-transparent mix-blend-overlay" />
            <div className="absolute top-2 left-2 text-[10px] font-black tracking-[2px] px-2 py-1 rounded bg-black/50 backdrop-blur">03 EMOTIONS</div>
          </div>

          {/* Картинка 3 — передняя (основная) */}
          <div
            className="absolute bottom-0 left-2 w-[62%] h-[70%] rounded-2xl overflow-hidden border-2 border-white/20 [box-shadow:0_40px_80px_-20px_rgba(124,92,255,0.7)] group"
            style={{ transform: 'rotate(-3deg)' }}
          >
            <img
              src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=900"
              alt="Погружение"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 [filter:saturate(1.3)_brightness(0.9)]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(124,92,255,0.5)] via-transparent to-transparent mix-blend-overlay" />

            {/* Play-style бейдж в углу */}
            <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/15 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="tracking-[2px] font-bold">LIVE · 01</span>
            </div>

            {/* Overlay — заголовок */}
            <div className="absolute bottom-4 left-4 right-4">
              <b className="text-4xl font-black block text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.8)]">
                Погружение
              </b>
              <p className="text-xs text-white/80 mt-1">3D · Motion · WebGL · Particles</p>
            </div>

            {/* Play circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border-2 border-white/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <span className="text-white text-xl ml-1">▶</span>
            </div>
          </div>

          {/* Флоатинг бейдж со статой */}
          <div
            className="absolute -bottom-4 -right-4 bg-[color:var(--accent-2)] text-white font-black px-4 py-3 rounded-2xl shadow-2xl rotate-6"
            style={{ boxShadow: '0 20px 40px -10px rgba(255,62,165,0.6)' }}
          >
            <div className="text-2xl leading-none">+340%</div>
            <div className="text-[10px] uppercase tracking-widest mt-0.5 opacity-90">конверсия</div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative mx-auto max-w-5xl">
        {/* Vertical track (background) */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] bg-white/10" />

        {/* Vertical line (progress - растёт при скролле) */}
        <div
          ref={lineRef}
          className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[3px] origin-top"
          style={{
            background: 'linear-gradient(to bottom, #7c5cff, #00e0ff, #ff3ea5, #ffb84d)',
            boxShadow: '0 0 20px rgba(124,92,255,0.6)',
          }}
        />

        {/* Levels */}
        <div className="relative flex flex-col gap-24 md:gap-32">
          {LEVELS.map((lvl, i) => {
            const side = i % 2 === 0 ? 'left' : 'right'
            return (
              <div key={lvl.num} className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-8">
                {/* LEFT */}
                <div className={side === 'left' ? 'tl-card' : ''} data-side="left">
                  {side === 'left' && <LevelCard level={lvl} side="left" />}
                </div>

                {/* NODE (центр) */}
                <div className="relative flex flex-col items-center">
                  <div
                    className="tl-node relative w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#0a0618] border-2 transition-all"
                    data-color={lvl.color}
                    style={{ borderColor: lvl.color }}
                  >
                    <span
                      className="absolute inset-0 rounded-full animate-ping opacity-60"
                      style={{ background: lvl.color }}
                    />
                  </div>
                  {/* Небольшой лейбл уровня под нодом на mobile */}
                  <span className="md:hidden mt-2 text-[10px] tracking-widest uppercase text-[color:var(--muted)]">
                    LVL {lvl.num}
                  </span>
                </div>

                {/* RIGHT */}
                <div className={side === 'right' ? 'tl-card' : ''} data-side="right">
                  {side === 'right' && <LevelCard level={lvl} side="right" />}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const LevelCard = ({ level, side }) => {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden border border-white/10 backdrop-blur-xl group transition-all
                  hover:border-[var(--glow)]/60 hover:-translate-y-1
                  ${side === 'left' ? 'md:mr-4 md:text-right' : 'md:ml-4'}`}
      style={{
        background: `linear-gradient(135deg, ${level.color}18, rgba(255,255,255,0.02))`,
        '--glow': level.color,
      }}
    >
      {/* Картинка */}
      <div className="relative h-36 md:h-44 overflow-hidden">
        <img
          src={level.img}
          alt={level.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 [filter:saturate(1.3)_brightness(0.85)]"
        />
        <div
          className="absolute inset-0 mix-blend-overlay"
          style={{ background: `linear-gradient(135deg, ${level.color}80, transparent 60%)` }}
        />
        {/* Icon badge */}
        <div
          className={`absolute top-3 ${side === 'left' ? 'md:right-3 left-3 md:left-auto' : 'left-3'} w-11 h-11 rounded-full flex items-center justify-center text-2xl backdrop-blur-xl border`}
          style={{
            background: `${level.color}30`,
            borderColor: `${level.color}80`,
            boxShadow: `0 0 20px ${level.color}80`,
          }}
        >
          {level.icon}
        </div>
        {/* Level number */}
        <div className={`absolute bottom-3 ${side === 'left' ? 'md:left-3 left-3' : 'right-3'} text-4xl font-black leading-none`}
          style={{ color: level.color, textShadow: `0 0 20px ${level.color}` }}
        >
          {level.num}
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-xl md:text-2xl font-extrabold">{level.title}</h3>
        <p className="text-sm text-[color:var(--muted)] leading-relaxed">{level.text}</p>
        <div className={`flex flex-wrap gap-1.5 ${side === 'left' ? 'md:justify-end' : ''}`}>
          {level.tags.map((t) => (
            <span
              key={t}
              className="text-[10px] font-semibold px-2 py-1 rounded-full border"
              style={{
                color: level.color,
                borderColor: `${level.color}50`,
                background: `${level.color}12`,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Timeline
