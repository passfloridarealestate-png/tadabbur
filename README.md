# Tadabbur — Landing Page

Marketing website for [Tadabbur](https://github.com/taukheer/Tadabbur), a daily Quranic contemplation app.

**One Ayah. Every Day. For Life.**

## Tech Stack

- **Next.js 16** + React 19
- **Tailwind CSS** v4
- **Framer Motion** for scroll animations
- **next/font** — Inter + Amiri (Arabic)
- Fully static — prerendered at build time

## Sections

| Section | Description |
|---|---|
| Hero | Bismillah calligraphy, headline, download CTAs |
| Features | Daily Ayah, 3-Tier Reflection, Journal, Streaks |
| How It Works | 3-step alternating layout with connecting line |
| Reflection Tiers | Detailed showcase of Acknowledge / Respond / Reflect |
| Verse Preview | Realistic mockup of Al-Fatiha 1:1 |
| Stats | 6,236 verses, 21 languages, 3 tiers |
| Download CTA | App Store + Google Play badges |
| Footer | Links, QF Hackathon badge |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Deploy

Push to GitHub and connect to [Vercel](https://vercel.com) for automatic deployments.

## Design

- Sacred dark theme (#050A14) with gold accents (#C9A96E)
- CSS starfield background with twinkling animation
- Geometric diamond dividers between sections
- Server Components by default, client JS only for navbar + scroll reveals
- Full SEO metadata and Open Graph tags

## Related

- [Tadabbur Mobile App](https://github.com/taukheer/Tadabbur) — Flutter app (iOS + Android)

## License

Built for the Quran Foundation Hackathon 2026.
