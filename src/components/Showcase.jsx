import React from 'react'
import { handleTilt, resetTilt } from '../hooks/useInteractions'
import { SectionHead } from './Features'
import { VIDEO_URL as VIDEO_SRC } from '../config/media'

const PROJECTS = [
  { tag: 'Motion', title: 'Cosmic Journey', img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800' },
  { tag: 'Brand', title: 'Neon Pulse', img: 'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=800' },
  { tag: 'Product', title: 'Glass Dimension', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800' },
]

// Только 1 видео (на front), остальные грани — градиентные плашки.
// Это убирает 5 лишних загрузок одного и того же 10MB файла.
const VideoCube = () => (
  <div className="showcase-stage reveal mx-auto mb-16 max-w-3xl h-[340px] md:h-[420px] flex items-center justify-center [perspective:1200px]">
    <div className="showcase-cube relative [transform-style:preserve-3d]">
      <video
        className="cube-face cf-front"
        src={VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />
      {['cf-back', 'cf-right', 'cf-left', 'cf-top', 'cf-bottom'].map((cls, i) => (
        <div
          key={cls}
          className={`cube-face ${cls}`}
          style={{
            background: [
              'linear-gradient(135deg, #7c5cff, #ff3ea5)',
              'linear-gradient(135deg, #ff3ea5, #ffb84d)',
              'linear-gradient(135deg, #00e0ff, #7c5cff)',
              'linear-gradient(135deg, #ffb84d, #00e0ff)',
              'linear-gradient(135deg, #ff3ea5, #00e0ff)',
            ][i],
          }}
        />
      ))}
    </div>
  </div>
)

const ProjectCard = ({ project }) => (
  <div
    className="show-card reveal relative overflow-hidden rounded-2xl cursor-pointer border border-white/10 aspect-[4/5]
               [transform-style:preserve-3d] transition-transform duration-300"
    onMouseMove={handleTilt}
    onMouseLeave={resetTilt}
  >
    <img
      src={project.img}
      alt={project.title}
      className="w-full h-full object-cover transition-[transform,filter] duration-700 [filter:saturate(1.2)_brightness(0.85)] hover:scale-110 hover:[filter:saturate(1.5)_brightness(1)]"
    />
    <div
      className="absolute left-5 right-5 bottom-5 p-4 rounded-xl border border-white/10 bg-[rgba(10,6,24,0.7)] backdrop-blur-xl"
      style={{ transform: 'translateZ(40px)' }}
    >
      <span className="text-[11px] tracking-[2px] uppercase text-[color:var(--accent-3)]">{project.tag}</span>
      <h4 className="text-xl mt-1.5">{project.title}</h4>
    </div>
  </div>
)

const Showcase = () => {
  return (
    <section id="showcase" className="relative z-[2] px-6 md:px-10 py-20">
      <SectionHead
        tag="проекты"
        title={<>Работы, которые <span className="gradient-text">зажигают</span></>}
      />
      <VideoCube />
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 [perspective:1200px]">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}

export default Showcase
