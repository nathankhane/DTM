# Debunking The Myths: Clear Facts About OCD

An educational website created for a university project to debunk common myths about Obsessive-Compulsive Disorder (OCD) and provide evidence-based information.

## 🎯 Project Overview

This site provides clear, evidence-based information about OCD to combat common misconceptions. It maintains the Next.js 14 App Router architecture and shadcn/ui component library.

**Live Site:** [ocd-debunked.vercel.app](https://ocd-debunked.vercel.app) (or similar)

## 🎨 Design Philosophy

- **Teal Accent Colors:** Using teal (#14B5A6) for OCD awareness
- **Academic Tone:** Soft, approachable academic writing
- **Accessibility First:** WCAG AA compliant
- **Content Integrity:** All prose kept verbatim (no AI rewrites)

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

## 🔧 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui (Radix UI primitives)
- **Font:** Inter (via next/font/google)
- **Hosting:** Vercel
- **TypeScript:** Strict mode enabled

## 📚 Key Features

### Home Page (`/`)
- Hero section with teal accents
- Introduction to OCD misinformation
- Interactive myth/fact accordion (7 myths)
- Resource cards for help organizations

### Treatment Options (`/treatment-options`)
- CBT/ERP information (verbatim text)
- SSRI medication details
- Combination therapy notes
- Linked citations

### Sources (`/sources`)
- Full bibliography (15 sources)
- Clickable anchor links for citations
- Source credibility information

## 🎓 Content Policy

**IMPORTANT:** All educational content was provided by the project author and must remain verbatim. Do not edit the wording in:

- `/src/content/myths.ts` (all text fields)
- Treatment options prose
- Source labels

## ♿ Accessibility

- Semantic HTML structure
- Focus visible styles on all interactive elements
- Color contrast ratio ≥ 4.5:1 (WCAG AA)
- Touch targets ≥ 44×44px on mobile
- Respects `prefers-reduced-motion`

## 📱 Responsive Design

- Mobile-first approach
- Touch-optimized button sizes
- Smooth scrolling for anchor links

## 📄 License & Credits

- **Content:** Educational use only, not medical advice
- **Images:** Unsplash / Pixabay / FreeSVG (CC0 / Unsplash License)
- **Purpose:** University project

## ⚠️ Disclaimer

This website is for educational purposes only and does not constitute medical advice. If you or someone you know is struggling with OCD, please consult a licensed mental health professional.

---

**Built with care for OCD awareness** 🧠💙

