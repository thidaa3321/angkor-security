# Angkor Security — Landing Page

Cambodia's first specialized API & web application penetration testing landing page.
Built for IDT Capstone Project I, Term 2 Year 3.

## Tech Stack

| Layer       | Technology                  |
|-------------|-----------------------------|
| Framework   | React 18 + **TypeScript**   |
| Styling     | **Tailwind CSS** v3         |
| Build Tool  | Vite 5                      |
| Analytics   | **Google Analytics 4** (GA4)|
| Forms       | **EmailJS** (no backend)    |
| Hosting     | **Vercel** (vercel.json ✓)  |

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env
# → Edit .env with your actual keys (see below)

# 3. Start dev server
npm run dev
# → http://localhost:5173

# 4. Build for production
npm run build

# 5. Preview production build
npm run preview
```

---

## Environment Variables

Copy `.env.example` to `.env` and fill in your keys:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
```

### Google Analytics 4 Setup

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a new GA4 property → **Web** data stream
3. Copy your **Measurement ID** (`G-XXXXXXXXXX`)
4. Paste into `VITE_GA_MEASUREMENT_ID`

Events tracked automatically:
- `navigation_click` — which nav section was clicked
- `form_submit_attempt` — when form is submitted
- `form_submit_success` — when email sends successfully
- `form_submit_error` — if send fails

To track additional events anywhere in the app:
```ts
import { trackEvent } from '@/hooks/useAnalytics'
trackEvent('button_click', { label: 'hero_cta' })
```

### EmailJS Setup

1. Sign up at [emailjs.com](https://www.emailjs.com) (free: 200 emails/month)
2. **Add a Service** — connect Gmail, Outlook, or your email provider → copy **Service ID**
3. **Create a Template** — use these variables in your template body:
   ```
   From: {{from_name}} <{{from_email}}>
   Company: {{company}}
   Service: {{service}}
   
   {{message}}
   ```
   Copy the **Template ID**
4. Go to **Account → API Keys** → copy your **Public Key**
5. Paste all three into `.env`

---

## Deploying to Vercel

### Option A — Vercel CLI (recommended)
```bash
npm install -g vercel
vercel login
vercel          # follow prompts
# Add env vars when asked, or via dashboard after deploy
```

### Option B — GitHub Integration
1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Set **Framework Preset** → Vite
5. Add all `VITE_*` environment variables in the UI
6. Click **Deploy**

The `vercel.json` included configures:
- SPA rewrites (React Router compatible)
- Security headers (X-Frame-Options, CSP, etc.)
- Long-term asset caching

### Deploying to Netlify
```bash
npm install -g netlify-cli
netlify login
netlify deploy --build --prod
```
Create a `_redirects` file in `public/`:
```
/*  /index.html  200
```

---

## Project Structure

```
angkor-security/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ContactForm.tsx # EmailJS integration
│   │   ├── Navbar.tsx
│   │   ├── Reveal.tsx      # Scroll animation wrapper
│   │   ├── Terminal.tsx    # Typewriter terminal
│   │   └── Toast.tsx
│   ├── data/
│   │   └── index.ts        # All static content (services, team, FAQs…)
│   ├── hooks/
│   │   ├── useAnalytics.ts # GA4 hook + trackEvent helper
│   │   ├── useCounter.ts   # Animated number counter
│   │   └── useReveal.ts    # IntersectionObserver scroll reveal
│   ├── sections/           # Full-page sections
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Demo.tsx
│   │   ├── Pricing.tsx
│   │   ├── Team.tsx
│   │   ├── Contact.tsx
│   │   └── Misc.tsx        # StatsBar, Education, Compliance, FAQ, Footer
│   ├── types/
│   │   └── index.ts        # Shared TypeScript interfaces
│   ├── App.tsx             # Root component — wires all sections
│   ├── main.tsx            # React DOM entry point
│   └── index.css           # Tailwind directives + custom @layer components
├── index.html              # HTML shell with font imports + SEO meta
├── tailwind.config.js      # Custom design tokens (colors, fonts, animations)
├── tsconfig.json           # TypeScript strict config
├── vite.config.ts          # Vite + path aliases
├── vercel.json             # Deployment + security headers
├── postcss.config.js
├── package.json
└── .env.example            # Environment variable template
```

---

## Customisation

### Update Team Members
Edit `src/data/index.ts` → `TEAM_MEMBERS` array.

### Update Pricing
Edit `src/data/index.ts` → `ONE_TIME_PRICING` array.

### Add a New Section
1. Create `src/sections/MySection.tsx`
2. Add `<MySection />` in `src/App.tsx`
3. Add `id="mysection"` to the `<section>` element

### Change Color Scheme
Edit `tailwind.config.js` → `theme.extend.colors.orange`.

---

## Team

| Name           | Role                        | Student ID   |
|----------------|-----------------------------|--------------|
| Heng Kimlong   | Team Leader & R&D           | IDTB100076   |
| Thay Bunleap   | Technical Lead              | IDTB100015   |
| Chhoun Nara    | Security Analyst            | IDTB100044   |
| Sok Sovannara  | Infrastructure Manager      | IDTB         |
| Luch Thida     | UX/UI & System Dev          | IDTB100005   |

---

IDT — Institute of Digital Technology · Capstone Project I · Term 2 Year 3 · 2026
