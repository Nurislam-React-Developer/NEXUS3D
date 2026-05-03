<div align="center">

# ⚡ NEXUS3D

### Иммерсивный 3D-сайт с вау-эффектом

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white&style=for-the-badge)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-38BDF8?logo=tailwindcss&logoColor=white&style=for-the-badge)
![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?logo=greensock&logoColor=white&style=for-the-badge)
![Bun](https://img.shields.io/badge/Bun-1.2-000000?logo=bun&logoColor=white&style=for-the-badge)

**Современный 3D-лендинг с плавным скроллом, видео-кубом, частицами за курсором и кинематографичными анимациями на скролле.**

[Demo](http://localhost:5173) · [Связаться в Telegram](https://t.me/anonimusnur)

</div>

---

## ✨ Фишки

- 🎥 **Видео-фон** с параллакс-скроллом и zoom-эффектом
- 🧊 **3D-куб из видео** — 6 граней крутятся в пространстве
- ✨ **Канвас-эффект курсора** — светящийся ореол + шлейф из частиц
- 🌊 **Lenis smooth scroll** — ультра-плавный скролл с инерцией
- 📜 **GSAP ScrollTrigger** — pin-секции, горизонтальный скролл, stagger
- 🎨 **Glassmorphism + неон** — карточки с 3D-tilt по курсору
- 🌟 **Glitch-текст** и анимированный градиент на заголовках
- 🏃 **Бегущая строка** огромным текстом (marquee)
- 📊 **Счётчики** с анимацией от 0 до таргета
- 🖼️ **Галерея горизонтального скролла** — крутишь вниз, едет вбок
- 📌 **Pin-секции** — 3 слайда накладываются при скролле
- 👨‍💻 **About-секция** с мульт-аватаром разработчика
- 📱 **Полный адаптив** — от 320px до 4K

---

## 🛠 Стек

| Инструмент | Назначение |
|---|---|
| **React 19** | UI-фреймворк |
| **Vite 8** (rolldown) | Сборщик и dev-server |
| **Tailwind CSS v4** | Utility-first стили |
| **GSAP + ScrollTrigger** | Скролл-анимации |
| **Lenis** | Smooth scroll |
| **Canvas 2D API** | Эффект курсора |
| **CSS 3D Transforms** | Куб, тильт, параллакс |
| **Bun** | Пакетный менеджер |

---

## 🚀 Быстрый старт

```bash
# Установка зависимостей
bun install

# Dev-сервер (localhost:5173)
bun dev

# Прод-билд
bun run build

# Предпросмотр прод-билда
bun run preview
```

---

## 📁 Структура

```
src/
├── App.jsx                    # Корневой компонент
├── App.css                    # CSS-переменные, keyframes, 3D-кубы
├── index.css                  # @import tailwindcss + reset
├── main.jsx                   # Точка входа
│
├── hooks/
│   ├── useInteractions.js     # useMouse, useRevealOnView, tilt
│   ├── useLenis.js            # Smooth scroll + GSAP sync
│   └── useScrollAnimations.js # Все GSAP ScrollTrigger эффекты
│
└── components/
    ├── Background.jsx         # Grid + плавающие орбы с параллаксом
    ├── Navbar.jsx             # Фикс-навбар + вращающийся 3D-куб-лого
    ├── Hero.jsx               # Видео-фон, glitch-заголовок
    ├── Marquee.jsx            # Бегущая строка
    ├── Stats.jsx              # Счётчики с count-up
    ├── Features.jsx           # 6 карточек с tilt + neon glow
    ├── PinnedShowcase.jsx     # Pin-секция с 3 слайдами
    ├── HorizontalGallery.jsx  # Горизонтальный скролл 6 фото
    ├── Showcase.jsx           # 3D-куб из видео + проекты
    ├── Testimonials.jsx       # Отзывы с тильт-эффектом
    ├── About.jsx              # Обо мне (Нурислам) + мульт-аватар
    ├── CTA.jsx                # Связаться в Telegram
    ├── Footer.jsx             # Подвал
    └── CursorFX.jsx           # Canvas-эффект курсора
```

---

## ⚡ Производительность

- Orbs blur уменьшен до 70px вместо 100px
- Cursor particles кэп 60 штук с throttle по скорости
- Lenis lerp 0.08 — плавный, но не залипающий
- `will-change-transform` на тяжёлых элементах
- `requestAnimationFrame` для всех циклов
- GSAP `gsap.context()` с cleanup через `revert()`
- Изображения с Unsplash — оптимизированные через `?w=*`
- DPR cap на 2x в canvas (ретина-чёткость без лагов)

---

## 🎨 Палитра

```css
--bg:       #05030d   /* Глубокий тёмно-фиолетовый */
--accent:   #7c5cff   /* Фиолетовый */
--accent-2: #ff3ea5   /* Розовый неон */
--accent-3: #00e0ff   /* Циан */
--muted:    #9aa0c2   /* Приглушённый текст */
```

---

## 👨‍💻 Автор

<div align="center">

### **Нурислам** — Frontend Developer

Создаю сайты, от которых **сходят с ума**.

**Мой стек:**

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=flat-square)
![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=flat-square)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat-square)
![Redux](https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=white&style=flat-square)
![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=reactrouter&logoColor=white&style=flat-square)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?logo=reacthookform&logoColor=white&style=flat-square)
![MUI](https://img.shields.io/badge/MUI-007FFF?logo=mui&logoColor=white&style=flat-square)
![Tailwind](https://img.shields.io/badge/Tailwind-38BDF8?logo=tailwindcss&logoColor=white&style=flat-square)
![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?logo=styledcomponents&logoColor=white&style=flat-square)
![SASS](https://img.shields.io/badge/SASS-CC6699?logo=sass&logoColor=white&style=flat-square)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=flat-square)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white&style=flat-square)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black&style=flat-square)
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white&style=flat-square)
![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white&style=flat-square)
![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white&style=flat-square)
![Figma](https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=white&style=flat-square)
![npm](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white&style=flat-square)
![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?logo=yarn&logoColor=white&style=flat-square)
![pnpm](https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=white&style=flat-square)
![Bun](https://img.shields.io/badge/Bun-000000?logo=bun&logoColor=white&style=flat-square)

<br>

[![Telegram](https://img.shields.io/badge/Telegram-@anonimusnur-2CA5E0?logo=telegram&logoColor=white&style=for-the-badge)](https://t.me/anonimusnur)
[![GitHub](https://img.shields.io/badge/GitHub-Nurislam--React--Developer-181717?logo=github&logoColor=white&style=for-the-badge)](https://github.com/Nurislam-React-Developer)

**Пиши → сделаем что-то нереальное 🚀**

</div>

---

<div align="center">

**© 2026 NEXUS3D** — Создано с ❤️ и кучей GPU-ядер

</div>
