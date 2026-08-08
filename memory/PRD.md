# Project 7 Figure — GR Networks Landing Page

## Problem Statement
Build a stunning, premium, elegant, trustworthy single landing page for GR Networks' premium placement program "Project 7 Figure". Metallic red/black/white palette (silver only if needed). Must convey: 1-month intensive training, 100% placement guarantee, 30–45 days to offer, 10 candidates/month, money-back policy, 3 experience-based salary tiers, 4-step framework, 6 support services, eligibility criteria, top-MNC placements. Working application form emailing submissions to the7figure.careers@gmail.com.

## User Choices
- Landing + form that emails submissions to the7figure.careers@gmail.com (Resend integration)
- Monochrome text-based logo chips (marquee)
- Pure typography + abstract metallic shapes (no people)
- No testimonials
- Metallic red / black / white palette (silver secondary)

## Architecture
- Frontend: React 19 + Tailwind + shadcn + framer-motion + react-fast-marquee + sonner
- Backend: FastAPI + Motor (MongoDB) + Resend (optional via env var)
- Fonts: Cormorant Garamond (display), Outfit (body), JetBrains Mono (labels)

## What's Been Implemented (2026-07-16)
- Hero with animated crimson/chrome typography, rotating metallic rings, KPI strip
- USP Strip (4 cards): 100% Placement, 30–45 Days, 100% Money-Back, 10 Seats/Month
- 3-tier Compensation cards (3yr / 4yr / 5+yr) with featured mid-tier + shimmer scan line
- 4-Step Framework grid with crimson-glow icon circles
- What You Get: 6 glossy premium cards with hover glow
- Eligibility Criteria: 7 items with numbered crimson icons
- Limited Intake — massive editorial 10 candidates/month type
- Placement Guarantee: rotating crimson seal (100%)
- Money-Back Policy (highlighted): promise card + 3-criterion refund checklist
- MNC Logos Marquee: 33 companies, 3 rows alternating direction
- Application Form: 12 fields incl. Native/State; submits to POST /api/applications; stores to Mongo; sends Resend email if RESEND_API_KEY configured (otherwise email_sent=false)
- Footer with massive typography

## Backend Endpoints
- GET /api/health — health + email_configured flag
- POST /api/applications — validates + stores + optional email send
- GET /api/applications — lists submissions (permissive response model tolerates legacy docs)

## Environment / Setup
- Optional: set RESEND_API_KEY and SENDER_EMAIL in /app/backend/.env to enable email delivery
- Restart backend after env changes: `sudo supervisorctl restart backend`

## Backlog / Next Steps
- P1: Add RESEND_API_KEY to enable real email delivery
- P1: Show field-level 422 error messages inline (currently generic toast)
- P2: Admin route to view submissions
- P2: Framer-motion scroll-triggered reveals per section
- P2: Add SEO meta + Open Graph tags
- P2: Analytics event tracking on Apply button clicks
- P2: Success stories / case studies section (deferred per user choice)
