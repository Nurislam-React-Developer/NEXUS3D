import React, { useEffect, useRef, useState } from 'react'
import { VIDEO_URL } from '../config/media'

const Hero = () => {
  const videoRef = useRef(null)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    // Попытаться запустить видео как можно раньше (Safari/Chrome quirks)
    const tryPlay = () => {
      const p = v.play()
      if (p && p.catch) p.catch(() => {})
    }
    if (v.readyState >= 2) {
      setVideoReady(true)
      tryPlay()
    }
    v.addEventListener('loadeddata', () => {
      setVideoReady(true)
      tryPlay()
    })
    v.addEventListener('canplay', tryPlay)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-10 pt-36 pb-20 [perspective:1200px]"
    >
      {/* Мгновенный fallback-фон (виден пока видео грузится) */}
      <div
        className="absolute inset-0 z-[0]"
        style={{
          background:
            'radial-gradient(ellipse at 30% 20%, rgba(124,92,255,0.6), transparent 60%),' +
            'radial-gradient(ellipse at 70% 70%, rgba(255,62,165,0.5), transparent 60%),' +
            'radial-gradient(ellipse at 50% 100%, rgba(0,224,255,0.35), transparent 70%),' +
            'linear-gradient(160deg, #0a0618 0%, #05030d 100%)',
        }}
      />

      {/* Video background */}
      <div
        className="hero-video-wrap absolute inset-0 z-[1] will-change-transform"
      >
        <video
          ref={videoRef}
          className={`w-full h-full object-cover [filter:saturate(1.2)_contrast(1.1)_brightness(0.7)] transition-opacity duration-700 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
          src={VIDEO_URL}
          autoPlay
          loop
          muted
          defaultMuted
          playsInline
          preload="auto"
          disablePictureInPicture
          poster="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%237c5cff'/%3E%3Cstop offset='0.5' stop-color='%23ff3ea5'/%3E%3Cstop offset='1' stop-color='%2300e0ff'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='16' height='9' fill='url(%23g)'/%3E%3C/svg%3E"
          onEnded={(e) => { e.currentTarget.currentTime = 0; e.currentTarget.play() }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(5,3,13,0.9)_90%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,3,13,0.5)] to-[rgba(5,3,13,0.85)]" />
      </div>

      {/* Content */}
      <div
        className="relative z-[2] max-w-5xl text-center flex flex-col items-center gap-7 will-change-transform"
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
