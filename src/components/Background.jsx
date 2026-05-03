import React from 'react'

const Background = ({ mouse }) => {
  const parallax = (depth = 0.1) => ({
    transform: `translate3d(${mouse.x * depth * 30}px, ${mouse.y * depth * 30}px, 0)`,
  })

  return (
    <>
      <div className="bg-grid pointer-events-none fixed inset-0 z-0" />
      {/* Один радиальный градиент вместо 3-х blur-орбов — НА ПОРЯДОК легче.
          Нет blur(), нет painting, статичный paint. */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            'radial-gradient(circle at 15% 10%, rgba(124,92,255,0.35), transparent 50%),' +
            'radial-gradient(circle at 85% 50%, rgba(255,62,165,0.30), transparent 50%),' +
            'radial-gradient(circle at 40% 95%, rgba(0,224,255,0.20), transparent 55%)',
        }}
      />
    </>
  )
}

export default Background
