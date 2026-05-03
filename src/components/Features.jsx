import React from 'react'
import { handleTilt, resetTilt } from '../hooks/useInteractions'

const FEATURES = [
  { icon: '🚀', title: 'Молниеносно', text: 'GPU-ускоренные 3D-сцены с кадровой частотой 120 FPS.', color: '#ff3ea5' },
  { icon: '🎨', title: 'Дизайн уровня AAA', text: 'Кинематографичная графика и glassmorphism эффекты.', color: '#7c5cff' },
  { icon: '🧠', title: 'Умные анимации', text: 'Реагируют на движение курсора, скролл и касания.', color: '#00e0ff' },
  { icon: '🌐', title: 'WebGL Power', text: 'Реалтайм шейдеры и постобработка прямо в браузере.', color: '#ffb84d' },
  { icon: '⚡', title: 'Мгновенный старт', text: 'Lazy load, code splitting и edge деплой.', color: '#4dff88' },
  { icon: '🔮', title: 'Иммерсивность', text: 'Параллакс, тильт-эффекты, 3D-трансформации.', color: '#ff5e5e' },
]

const SectionHead = ({ tag, title, subtitle }) => (
  <div className="section-head reveal mx-auto mb-14 max-w-3xl flex flex-col items-center gap-4 text-center">
    <span className="pill">// {tag}</span>
    <h2 className="font-extrabold leading-[1.05] tracking-tight text-[clamp(36px,5vw,64px)]">
      {title}
    </h2>
    {subtitle && <p className="text-[color:var(--muted)] text-[17px] leading-relaxed">{subtitle}</p>}
  </div>
)

const FeatureCard = ({ feature, index }) => (
  <div
    className="feature-card reveal relative cursor-pointer rounded-2xl p-9 border border-white/10 backdrop-blur-xl overflow-hidden
               bg-gradient-to-br from-white/5 to-white/[0.01] [transform-style:preserve-3d]
               transition-[transform,box-shadow] duration-300"
    onMouseMove={handleTilt}
    onMouseLeave={resetTilt}
    style={{ '--glow': feature.color, animationDelay: `${index * 0.08}s` }}
  >
    <div
      className="feature-icon text-[42px] mb-4 inline-block"
      style={{ filter: `drop-shadow(0 0 20px ${feature.color})`, transform: 'translateZ(30px)' }}
    >
      {feature.icon}
    </div>
    <h3 className="text-[22px] mb-2" style={{ transform: 'translateZ(20px)' }}>{feature.title}</h3>
    <p className="text-[color:var(--muted)] leading-relaxed text-[15px]" style={{ transform: 'translateZ(10px)' }}>
      {feature.text}
    </p>
    <div className="feature-shine" />
  </div>
)

const Features = () => {
  return (
    <section id="features" className="relative z-[2] px-6 md:px-10 py-36">
      <SectionHead
        tag="возможности"
        title={<>Технологии, от которых <span className="gradient-text">сносит крышу</span></>}
        subtitle="Каждая деталь выверена до миллиметра. Каждая анимация — произведение искусства."
      />

      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [perspective:1200px]">
        {FEATURES.map((f, i) => (
          <FeatureCard key={f.title} feature={f} index={i} />
        ))}
      </div>
    </section>
  )
}

export default Features
export { SectionHead }
