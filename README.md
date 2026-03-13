# Talent Bridge Africa

**Graduate with experience, not just a degree.**  
A marketing site that connects current students, recent graduates, and skilled refugee youth with growing businesses across Africa.

---

## Stack

- **Next.js** (App Router) · **React** · **TypeScript**
- **Tailwind CSS** · **Framer Motion** · **Lucide Icons**
- **Nodemailer** (Gmail) for contact form submissions

---

## Quick start

```bash
npm install
npm run dev
```

Runs at **http://localhost:4400**.

---

## Environment

Contact forms send email via Gmail. Copy `.env.example` to `.env.local` and set:

| Variable | Description |
|----------|-------------|
| `GMAIL_USER` | Gmail address used to send |
| `GMAIL_APP_PASSWORD` | [App password](https://myaccount.google.com/apppasswords) (2-Step Verification required) |

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server (port 4400) |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint |

---

## Project structure

```
app/
  api/contact/     # POST handler – sends form data to Gmail
  page.tsx         # Single-page homepage
  layout.tsx
components/
  layout/          # Navbar, Footer
  sections/        # Hero, Problem, Solution, How it works, Services, etc.
public/            # Logo, favicon, assets
```

---

**Talent Bridge Africa** — student-powered services for growing businesses.
