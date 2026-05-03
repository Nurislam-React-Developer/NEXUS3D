import React from 'react'
import { handleTilt, resetTilt } from '../hooks/useInteractions'

const REVIEWS = [
  {
    name: 'Alex Ivanov',
    role: 'Lead Designer',
    company: 'Figma',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    text: 'Это просто снос крыши. Никогда не видел такого плавного 3D в браузере. Команда в шоке.',
  },
  {
    name: 'Maria K.',
    role: 'CMO',
    company: 'Revolut',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200',
    text: 'Конверсия выросла на 340% после запуска. Клиенты не верят что это веб, а не нативное приложение.',
  },
  {
    name: 'Dmitry P.',
    role: 'CTO',
    company: 'Vercel',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200',
    text: 'Перформанс на уровне игровых движков. Как они это сделали на чистом вебе — загадка.',
  },
]

const Testimonials = () => {
  return (
    <section className="relative z-[2] px-6 md:px-10 py-20">
      <div className="reveal mx-auto mb-10 max-w-3xl flex flex-col items-center gap-4 text-center">
        <span className="pill">// отзывы</span>
        <h2 className="font-extrabold leading-[1.05] tracking-tight text-[clamp(36px,5vw,64px)]">
          Что говорят <span className="gradient-text">те, кто видел</span>
        </h2>
      </div>

      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 [perspective:1200px]">
        {REVIEWS.map((r, i) => (
          <div
            key={i}
            className="reveal relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.01]
                       backdrop-blur-xl [transform-style:preserve-3d] transition-transform duration-300 cursor-pointer
                       hover:border-[color:var(--accent)]/40"
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
          >
            <div className="text-6xl leading-none text-[color:var(--accent-2)] opacity-40 mb-2" style={{ transform: 'translateZ(20px)' }}>&ldquo;</div>
            <p className="text-base md:text-lg leading-relaxed text-white/90" style={{ transform: 'translateZ(15px)' }}>
              {r.text}
            </p>
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10" style={{ transform: 'translateZ(25px)' }}>
              <img
                src={r.avatar}
                alt={r.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-[color:var(--accent)]"
              />
              <div>
                <p className="font-bold">{r.name}</p>
                <p className="text-xs text-[color:var(--muted)] uppercase tracking-wider">{r.role} · {r.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
