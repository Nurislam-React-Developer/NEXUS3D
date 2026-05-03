import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const AVATAR_URL =
  'https://api.dicebear.com/7.x/adventurer/svg?seed=Nurislam' +
  '&backgroundColor=7c5cff,ff3ea5,00e0ff&backgroundType=gradientLinear' +
  '&radius=50&eyes=variant12&mouth=variant20&hair=short16&glasses=variant04&glassesProbability=100'

const TG_URL = 'https://t.me/anonimusnur'
const GITHUB_URL = 'https://github.com/Nurislam-React-Developer'

/* Реальный стек с GitHub профиля Нурислама */
const TECH_STACK = [
  { name: 'React', color: '#61DAFB', emoji: '⚛️' },
  { name: 'Next.js', color: '#000000', emoji: '▲' },
  { name: 'TypeScript', color: '#3178C6', emoji: 'TS' },
  { name: 'JavaScript', color: '#F7DF1E', emoji: 'JS' },
  { name: 'Redux', color: '#764ABC', emoji: '🔄' },
  { name: 'React Router', color: '#CA4245', emoji: '🧭' },
  { name: 'React Hook Form', color: '#EC5990', emoji: '📋' },
  { name: 'MUI', color: '#007FFF', emoji: '🎨' },
  { name: 'Tailwind CSS', color: '#38BDF8', emoji: '💨' },
  { name: 'Styled Components', color: '#DB7093', emoji: '💅' },
  { name: 'SASS / SCSS', color: '#CC6699', emoji: '🎯' },
  { name: 'HTML5', color: '#E34F26', emoji: '📄' },
  { name: 'CSS3', color: '#1572B6', emoji: '🎨' },
  { name: 'Firebase', color: '#FFCA28', emoji: '🔥' },
  { name: 'Vercel', color: '#ffffff', emoji: '▲' },
  { name: 'Git', color: '#F05032', emoji: '🔀' },
  { name: 'GitHub', color: '#ffffff', emoji: '🐙' },
  { name: 'Figma', color: '#F24E1E', emoji: '🎨' },
  { name: 'npm', color: '#CB3837', emoji: '📦' },
  { name: 'Yarn', color: '#2C8EBB', emoji: '🧶' },
  { name: 'pnpm', color: '#F69220', emoji: '📦' },
  { name: 'Bun', color: '#FBF0DF', emoji: '🍞' },
]

const About = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Avatar float
      gsap.to('.avatar-wrap', {
        y: -12,
        duration: 2.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="relative z-[2] px-6 md:px-10 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center mb-14">
          <span className="pill">// обо мне</span>
          <h2 className="font-extrabold leading-[1.05] tracking-tight text-[clamp(40px,6vw,80px)]">
            Привет, я <span className="gradient-text">Нурислам</span> 👋
          </h2>
          <p className="text-[color:var(--muted)] text-lg leading-relaxed max-w-2xl">
            Frontend-разработчик. Делаю <b className="text-white">шикарные</b>, <b className="text-white">быстрые</b> и <b className="text-white">иммерсивные</b> сайты,
            от которых пользователи <span className="gradient-text font-bold">сходят с ума</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-center">
          {/* Avatar */}
          <div className="avatar-wrap relative mx-auto md:mx-0 will-change-transform">
            <div
              className="absolute -inset-5 rounded-full blur-2xl opacity-70"
              style={{
                background: 'conic-gradient(from 0deg, #7c5cff, #ff3ea5, #00e0ff, #ffb84d, #7c5cff)',
                animation: 'spinSlow 8s linear infinite',
              }}
            />
            <div className="relative w-[260px] h-[260px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden border-4 border-white/20 [box-shadow:0_30px_60px_-20px_rgba(124,92,255,0.8)]">
              <img src={AVATAR_URL} alt="Нурислам" className="w-full h-full object-cover" />
            </div>
            {/* Floating badges */}
            <div className="absolute -top-3 -right-3 bg-[color:var(--accent-2)] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-xl rotate-6 animate-pulse">
              💻 DEV
            </div>
            <div className="absolute top-1/2 -left-6 bg-[color:var(--accent-3)] text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-xl -rotate-12">
              ⚡ FAST
            </div>
            <div className="absolute -bottom-2 -right-4 bg-[color:var(--accent)] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-xl rotate-3">
              🎨 CREATIVE
            </div>
            <div className="absolute bottom-8 -left-8 bg-white text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-xl rotate-6">
              🚀 24/7
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { num: '771+', label: 'Contributions' },
                { num: '50+', label: 'Проектов' },
                { num: '4+', label: 'Года опыта' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 text-center hover:border-[color:var(--accent)]/50 hover:bg-[color:var(--accent)]/5 transition"
                >
                  <b className="text-2xl md:text-3xl gradient-text block">{s.num}</b>
                  <span className="text-[11px] text-[color:var(--muted)] uppercase tracking-wider">{s.label}</span>
                </div>
              ))}
            </div>

            {/* About text */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6">
              <p className="text-white/90 leading-relaxed">
                Пишу на <b className="text-[color:var(--accent-3)]">React</b> и <b className="text-[color:var(--accent-3)]">Next.js</b>,
                обожаю чистый <b className="text-[color:var(--accent-2)]">TypeScript</b>, дружу с
                {' '}<b className="text-[color:var(--accent)]">GSAP</b> и <b className="text-[color:var(--accent)]">Three.js</b>.
                Перформанс, анимации, удобный UX — моё всё.
              </p>
              <p className="text-[color:var(--muted)] text-sm mt-3">
                📍 Разрабатываю 2+ лет на GitHub · 90+ публичных репозиториев
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              <a className="btn-primary big no-underline" href={TG_URL} target="_blank" rel="noopener noreferrer">
                Связаться со мной ✈️
              </a>
              <a className="btn-ghost big no-underline" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                🐙 GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <span className="pill">// технологии</span>
            <h3 className="text-3xl md:text-5xl font-extrabold mt-4">
              Мой <span className="gradient-text">стек</span>
            </h3>
            <p className="text-[color:var(--muted)] mt-2">22+ технологий в арсенале</p>
          </div>

          <div className="tech-grid flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className="tech-chip group relative flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm
                           hover:bg-white/10 hover:scale-110 transition-all duration-300 cursor-default opacity-100"
                style={{ '--tech-color': tech.color }}
              >
                <span
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-md -z-10"
                  style={{ background: tech.color }}
                />
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black shrink-0"
                  style={{
                    background: tech.color + '22',
                    color: tech.color,
                    border: `1px solid ${tech.color}55`,
                  }}
                >
                  {tech.emoji}
                </span>
                <span className="text-sm font-semibold whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
