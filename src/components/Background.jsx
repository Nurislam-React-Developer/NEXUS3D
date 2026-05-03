import React from 'react'

const Background = ({ mouse }) => {
  const parallax = (depth = 0.1) => ({
    transform: `translate3d(${mouse.x * depth * 30}px, ${mouse.y * depth * 30}px, 0)`,
  })

  return (
    <>
      <div className="bg-grid pointer-events-none fixed inset-0 z-0" />
      <div
        className="bg-orb fixed z-0 rounded-full pointer-events-none opacity-60 blur-[70px] w-[400px] h-[400px] -top-32 -left-32 bg-[color:var(--accent)]"
        style={{ ...parallax(0.15), animation: 'float1 14s ease-in-out infinite' }}
      />
      <div
        className="bg-orb fixed z-0 rounded-full pointer-events-none opacity-60 blur-[70px] w-[380px] h-[380px] top-[40%] -right-36 bg-[color:var(--accent-2)]"
        style={{ ...parallax(0.25), animation: 'float2 18s ease-in-out infinite' }}
      />
      <div
        className="bg-orb fixed z-0 rounded-full pointer-events-none opacity-35 blur-[70px] w-[460px] h-[460px] -bottom-52 left-[30%] bg-[color:var(--accent-3)]"
        style={{ ...parallax(0.1), animation: 'float3 22s ease-in-out infinite' }}
      />
    </>
  )
}

export default Background
