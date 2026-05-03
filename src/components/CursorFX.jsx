import React, { useEffect, useRef } from 'react'

/**
 * CursorFX — canvas-based particle trail that follows the cursor.
 * - Soft glowing blob (lerp-followed) behind the cursor
 * - Colorful particle burst trail
 * - Connecting lines between nearby particles (constellation effect)
 */
const CursorFX = () => {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -1000, y: -1000, vx: 0, vy: 0, prevX: 0, prevY: 0 })
  const glowRef = useRef({ x: -1000, y: -1000 })
  const particlesRef = useRef([])
  const rafRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx.scale(dpr, dpr)
    }
    resize()
    window.addEventListener('resize', resize)

    const COLORS = ['#7c5cff', '#ff3ea5', '#00e0ff', '#ffb84d', '#4dff88']

    const onMove = (e) => {
      const m = mouseRef.current
      m.vx = e.clientX - m.x
      m.vy = e.clientY - m.y
      m.prevX = m.x
      m.prevY = m.y
      m.x = e.clientX
      m.y = e.clientY

      // Spawn particles proportional to velocity
      const speed = Math.hypot(m.vx, m.vy)
      const count = Math.min(4, Math.floor(speed / 6))
      for (let i = 0; i < count; i++) {
        particlesRef.current.push({
          x: m.x + (Math.random() - 0.5) * 10,
          y: m.y + (Math.random() - 0.5) * 10,
          vx: (Math.random() - 0.5) * 2 + m.vx * 0.08,
          vy: (Math.random() - 0.5) * 2 + m.vy * 0.08,
          life: 1,
          size: Math.random() * 3 + 1.5,
          color: COLORS[(Math.random() * COLORS.length) | 0],
        })
      }
      // Cap
      if (particlesRef.current.length > 180) {
        particlesRef.current.splice(0, particlesRef.current.length - 180)
      }
    }
    window.addEventListener('mousemove', onMove)

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Ease glow toward mouse
      const g = glowRef.current
      const m = mouseRef.current
      g.x += (m.x - g.x) * 0.12
      g.y += (m.y - g.y) * 0.12

      // Big glowing blob (radial gradient)
      const grad = ctx.createRadialGradient(g.x, g.y, 0, g.x, g.y, 180)
      grad.addColorStop(0, 'rgba(124,92,255,0.55)')
      grad.addColorStop(0.4, 'rgba(255,62,165,0.25)')
      grad.addColorStop(1, 'rgba(0,224,255,0)')
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(g.x, g.y, 180, 0, Math.PI * 2)
      ctx.fill()

      // Inner bright core
      const core = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, 28)
      core.addColorStop(0, 'rgba(255,255,255,0.9)')
      core.addColorStop(0.5, 'rgba(124,92,255,0.5)')
      core.addColorStop(1, 'rgba(124,92,255,0)')
      ctx.fillStyle = core
      ctx.beginPath()
      ctx.arc(m.x, m.y, 28, 0, Math.PI * 2)
      ctx.fill()

      // Update + draw particles
      const ps = particlesRef.current
      ctx.globalCompositeOperation = 'lighter'
      for (let i = ps.length - 1; i >= 0; i--) {
        const p = ps[i]
        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.96
        p.vy *= 0.96
        p.vy -= 0.02 // slight float up
        p.life -= 0.018
        if (p.life <= 0) {
          ps.splice(i, 1)
          continue
        }
        ctx.beginPath()
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.life
        const r = p.size * p.life
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
        ctx.fill()
      }

      // Constellation lines between close particles
      ctx.lineWidth = 1
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const dx = ps[i].x - ps[j].x
          const dy = ps[i].y - ps[j].y
          const d2 = dx * dx + dy * dy
          if (d2 < 90 * 90) {
            const alpha = (1 - d2 / (90 * 90)) * Math.min(ps[i].life, ps[j].life) * 0.4
            ctx.strokeStyle = `rgba(180,160,255,${alpha})`
            ctx.beginPath()
            ctx.moveTo(ps[i].x, ps[i].y)
            ctx.lineTo(ps[j].x, ps[j].y)
            ctx.stroke()
          }
        }
      }
      ctx.globalAlpha = 1
      ctx.globalCompositeOperation = 'source-over'

      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[200] mix-blend-screen"
      aria-hidden="true"
    />
  )
}

export default CursorFX
