import React from 'react'

const WORDS = ['IMMERSIVE', '✦', '3D MOTION', '✦', 'WEBGL', '✦', 'CINEMATIC', '✦', 'NEON', '✦', 'FUTURE', '✦']

const Marquee = ({ reverse = false }) => {
  return (
    <div className="relative z-[2] overflow-hidden border-y border-white/10 bg-black/30 backdrop-blur-sm py-6">
      <div
        className="flex whitespace-nowrap gap-12"
        style={{
          animation: `${reverse ? 'marqueeReverse' : 'marquee'} 30s linear infinite`,
        }}
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            {WORDS.map((w, j) => (
              <span
                key={j}
                className="text-5xl md:text-7xl font-black tracking-tighter uppercase"
                style={{
                  color: w === '✦' ? '#ff3ea5' : 'transparent',
                  WebkitTextStroke: w === '✦' ? '0' : '1px rgba(255,255,255,0.6)',
                }}
              >
                {w}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Marquee
