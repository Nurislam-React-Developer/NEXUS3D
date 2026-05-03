import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-xl bg-[rgba(10,6,24,0.55)] border-b border-white/5">
      <div className="flex items-center gap-3 text-lg tracking-wider">
        <span className="logo-cube relative w-7 h-7">
          <span className="face f1" />
          <span className="face f2" />
          <span className="face f3" />
        </span>
        <b>
          NEXUS<span className="text-[color:var(--accent-2)]">3D</span>
        </b>
      </div>

      <ul className="hidden md:flex gap-8 list-none">
        {[
          ['Главная', '#hero'],
          ['Возможности', '#features'],
          ['Проекты', '#showcase'],
          ['Контакты', '#contact'],
        ].map(([label, href]) => (
          <li key={href}>
            <a
              href={href}
              className="text-[color:var(--muted)] text-sm font-medium transition hover:text-white hover:[text-shadow:0_0_12px_var(--accent)]"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="btn-primary">Начать →</a>
    </nav>
  )
}

export default Navbar
