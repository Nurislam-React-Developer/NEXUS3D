import React from 'react'

const TG_URL = 'https://t.me/anonimusnur'

const CTA = () => {
  return (
    <section id="contact" className="reveal relative z-[2] px-6 md:px-10 py-36">
      <div
        className="mx-auto max-w-4xl rounded-[30px] border border-white/10 backdrop-blur-xl text-center px-6 md:px-10 py-20
                   [box-shadow:0_40px_80px_-30px_rgba(124,92,255,0.5)]
                   [background:radial-gradient(ellipse_at_top_left,rgba(124,92,255,0.35),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(255,62,165,0.3),transparent_60%),linear-gradient(160deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]"
      >
        <h2 className="font-extrabold leading-[1.1] text-[clamp(32px,5vw,56px)]">
          Готов <span className="gradient-text">взорвать мозг</span> своим пользователям?
        </h2>
        <p className="text-[color:var(--muted)] mt-5 text-lg">
          Давай создадим что-то, от чего они сойдут с ума.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a
            className="btn-primary big no-underline inline-flex items-center gap-2"
            href={TG_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Написать в Telegram ✈️
          </a>
          <a
            className="btn-ghost big no-underline inline-flex items-center gap-2"
            href={TG_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            @anonimusnur
          </a>
        </div>

        <p className="text-[color:var(--muted)] mt-5 text-sm tracking-wide">
          Пиши напрямую — отвечаю быстро 🚀
        </p>
      </div>
    </section>
  )
}

export default CTA
