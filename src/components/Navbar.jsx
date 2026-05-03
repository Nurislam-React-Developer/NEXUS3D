import React, { useEffect, useState } from 'react'

const LINKS = [
  ['Главная', '#hero'],
  ['Путь', '#timeline'],
  ['Проекты', '#showcase'],
  ['Обо мне', '#about'],
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#hero')
  const [time, setTime] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      // Определяем активную секцию
      const sections = LINKS.map(([, href]) => href)
      for (const id of sections) {
        const el = document.querySelector(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Локальные часы в навбаре (небольшой уникальный штрих)
  useEffect(() => {
    const tick = () => {
      const d = new Date()
      const h = String(d.getHours()).padStart(2, '0')
      const m = String(d.getMinutes()).padStart(2, '0')
      setTime(`${h}:${m}`)
    }
    tick()
    const t = setInterval(tick, 30000)
    return () => clearInterval(t)
  }, [])

  return (
    <header className={`fixed top-4 left-0 right-0 z-[100] flex justify-center pointer-events-none transition-all duration-500 ${scrolled ? 'top-3' : 'top-5'}`}>
      <nav
        className={`pointer-events-auto flex items-center gap-2 md:gap-3 px-3 py-2 rounded-full border backdrop-blur-2xl transition-all duration-500 ${
          scrolled ? 'border-white/15 bg-black/50 shadow-[0_20px_50px_-15px_rgba(124,92,255,0.6)]' : 'border-white/10 bg-white/[0.04]'
        }`}
        style={{
          boxShadow: scrolled
            ? '0 20px 50px -15px rgba(124,92,255,0.6), 0 0 0 1px rgba(255,255,255,0.05) inset'
            : '0 10px 30px -10px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05) inset',
        }}
      >
        {/* LOGO */}
        <a href="#hero" className="flex items-center gap-2.5 pl-2 pr-3 py-1 rounded-full hover:bg-white/5 transition no-underline">
          <span className="logo-cube relative w-7 h-7 shrink-0">
            <span className="face f1" />
            <span className="face f2" />
            <span className="face f3" />
          </span>
          <span className="font-black tracking-wider text-[15px] hidden sm:block">
            NEXUS<span className="text-[color:var(--accent-2)]">3D</span>
          </span>
        </a>

        {/* Divider */}
        <span className="hidden md:block w-px h-6 bg-white/10" />

        {/* LINKS — сегментированный контрол */}
        <ul className="hidden md:flex items-center gap-0.5 list-none relative">
          {LINKS.map(([label, href]) => {
            const isActive = active === href
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`relative block px-4 py-2 rounded-full text-[13px] font-semibold transition-colors no-underline ${
                    isActive ? 'text-white' : 'text-[color:var(--muted)] hover:text-white'
                  }`}
                >
                  {isActive && (
                    <span
                      className="absolute inset-0 rounded-full -z-10"
                      style={{
                        background: 'linear-gradient(135deg, rgba(124,92,255,0.35), rgba(255,62,165,0.25))',
                        boxShadow: '0 0 20px rgba(124,92,255,0.4), 0 0 0 1px rgba(255,255,255,0.08) inset',
                      }}
                    />
                  )}
                  {label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Divider */}
        <span className="hidden lg:block w-px h-6 bg-white/10" />

        {/* Live status — уникальный детал */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
          <span className="relative flex w-2 h-2">
            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
            <span className="relative rounded-full bg-green-400 w-2 h-2" />
          </span>
          <span className="text-[11px] font-semibold tracking-wider text-white/80">ONLINE</span>
          <span className="text-[11px] font-mono text-[color:var(--muted)]">{time}</span>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="relative ml-1 flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-[13px] text-white no-underline overflow-hidden group"
          style={{
            background: 'linear-gradient(135deg, #7c5cff, #ff3ea5)',
            boxShadow: '0 10px 25px -8px rgba(255,62,165,0.6)',
          }}
        >
          <span className="relative z-10">Начать</span>
          <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
          {/* Шайн при hover */}
          <span
            className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
            style={{ background: 'linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%)' }}
          />
        </a>
      </nav>
    </header>
  )
}

export default Navbar
