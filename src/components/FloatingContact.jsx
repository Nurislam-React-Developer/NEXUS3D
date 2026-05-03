import React, { useEffect, useRef, useState } from 'react'

const TG_URL = 'https://t.me/anonimusnur'

/** Плавающая модалка-виджет внизу справа. Появляется после скролла. */
const FloatingContact = () => {
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(false)
  const [hasPulsed, setHasPulsed] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setVisible(y > 400)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Авто-пульс первые разы
  useEffect(() => {
    if (visible && !hasPulsed) {
      setHasPulsed(true)
      timerRef.current = setTimeout(() => setOpen(true), 1200)
      const close = setTimeout(() => setOpen(false), 5500)
      return () => {
        clearTimeout(timerRef.current)
        clearTimeout(close)
      }
    }
  }, [visible, hasPulsed])

  return (
    <div
      className={`fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[150] transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      {/* Card */}
      <div
        className={`absolute bottom-[72px] right-0 w-[300px] origin-bottom-right transition-all duration-500 ${
          open ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4 pointer-events-none'
        }`}
      >
        <div
          className="relative rounded-2xl p-5 border border-white/15 backdrop-blur-xl overflow-hidden"
          style={{
            background:
              'radial-gradient(ellipse at top left, rgba(124,92,255,0.4), transparent 60%), radial-gradient(ellipse at bottom right, rgba(255,62,165,0.35), transparent 60%), rgba(10,6,24,0.85)',
            boxShadow: '0 30px 60px -15px rgba(124,92,255,0.5), 0 0 0 1px rgba(255,255,255,0.05) inset',
          }}
        >
          {/* Close */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white text-xs flex items-center justify-center transition"
            aria-label="Закрыть"
          >
            ✕
          </button>

          <div className="flex items-center gap-3 mb-3">
            <div className="relative">
              <img
                src="https://api.dicebear.com/7.x/adventurer/svg?seed=Nurislam&backgroundColor=7c5cff&radius=50"
                alt="Нурислам"
                className="w-11 h-11 rounded-full border-2 border-[color:var(--accent)]"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 border-2 border-[#0a0618] animate-pulse" />
            </div>
            <div>
              <p className="font-bold text-sm">Нурислам</p>
              <p className="text-[11px] text-[color:var(--muted)]">онлайн • обычно отвечает за 5 мин</p>
            </div>
          </div>

          <p className="text-sm text-white/90 leading-relaxed mb-4">
            Привет! 👋 Делаю <b>сносящие башку</b> сайты. Хочешь такой же? Пиши.
          </p>

          <a
            href={TG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm text-white no-underline transition hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, #229ED9, #27A7E7)',
              boxShadow: '0 10px 25px -8px rgba(39,167,231,0.6)',
            }}
          >
            <TelegramIcon className="w-4 h-4" />
            Написать в Telegram
          </a>
        </div>
        {/* Tail */}
        <div
          className="absolute -bottom-1 right-6 w-4 h-4 rotate-45 border-r border-b border-white/15"
          style={{ background: 'rgba(10,6,24,0.85)' }}
        />
      </div>

      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative w-16 h-16 rounded-full flex items-center justify-center group"
        aria-label="Связаться"
      >
        {/* Pulsing rings */}
        <span className="absolute inset-0 rounded-full bg-[color:var(--accent)] opacity-40 animate-ping" />
        <span className="absolute inset-0 rounded-full bg-[color:var(--accent-2)] opacity-20 animate-ping [animation-delay:400ms]" />

        {/* Main circle */}
        <span
          className="relative w-14 h-14 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 group-active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #229ED9, #27A7E7)',
            boxShadow: '0 15px 35px -8px rgba(39,167,231,0.7), 0 0 0 2px rgba(255,255,255,0.1) inset',
          }}
        >
          <TelegramIcon className="w-7 h-7 text-white" />
        </span>

        {/* Label */}
        <span
          className={`absolute right-[72px] whitespace-nowrap text-sm font-semibold px-3 py-2 rounded-lg backdrop-blur-md border border-white/15 transition-all duration-300 ${
            open ? 'opacity-0 translate-x-2 pointer-events-none' : 'opacity-100 translate-x-0 group-hover:translate-x-[-4px]'
          }`}
          style={{ background: 'rgba(10,6,24,0.85)' }}
        >
          Связаться со мной
        </span>
      </button>
    </div>
  )
}

const TelegramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22.05 2.356a1.5 1.5 0 0 0-1.615-.22L1.82 9.9a1.3 1.3 0 0 0 .065 2.43l4.475 1.52 2.04 6.47a1.1 1.1 0 0 0 1.795.44l2.6-2.23 4.66 3.43a1.5 1.5 0 0 0 2.36-.87l3.03-16.47a1.5 1.5 0 0 0-.795-1.27zM9.9 15.45l-.59 4.2-1.38-4.38 9.55-7.34-7.58 7.52z" />
  </svg>
)

export default FloatingContact
