# Home hero hydration fix

The application change is in `components/hero/HomeHero.tsx`.

## Cause

`useReducedMotion()` was used to choose the hero's initial vertical offsets.
During server rendering, the device preference is unavailable, so the initial
offsets were 18px and 40px. In a browser with reduced motion enabled, the first
client render selected 0px. React therefore received different initial styles
for the same elements during hydration.

## Change

- Keep the initial animation values consistent on the server and client.
- Wrap the hero in `MotionConfig reducedMotion="user"` so Motion respects the
  device preference when running its animations, including the scroll indicator.
- Give `fadeUp` the `MotionProps` type instead of casting it to `any`.

## Running the fixed project

```bash
npm ci
npm run dev
```

## Verification

Validation used the project's locked Next.js 16.3.4, React 19.2.8, and
Framer Motion 13.1.1 dependencies.

- `npm run build`: passed, including TypeScript and all 17 static pages.
- `npm run lint`: passed across the complete project.
- Chromium browser verification against Next.js development mode:
  the original file reproduced the reported hydration warning with reduced
  motion enabled; the fixed file produced no hydration or runtime errors.
- The fixed homepage passed at 1440 × 1000 and 390 × 844 with both
  `no-preference` and `reduce` motion settings. The normal scroll animation
  remained active, and the reduced-motion scroll indicator remained stationary.
- Navigation from the homepage to Competitions and back passed in all four
  combinations. Both hero headings became visible after animation.

Browser checks used Chromium 149. External Google Fonts stylesheets were
stubbed during these checks; font loading and appearance were not evaluated.

The later iConclave content rebuild retained the same deterministic Motion
pattern in both the landing and competition heroes. It also removed the
previous navigation effect and unused imports, so the complete lint command is
clean.

References: [React hydration guidance](https://react.dev/reference/react-dom/client/hydrateRoot#hydrating-server-rendered-html)
and [MotionConfig documentation](https://motion.dev/docs/react-motion-config).
