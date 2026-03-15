# SPEC: Services Page Creation

**Story ID:** cmmsaouf9008evei7t659oynn
**Sprint Story ID:** cmmscly1t0003vecriqyufqt9
**Sprint:** Factory Sprint 1

## Behavior Matrix

| # | Scenario | Given | When | Then | Priority |
|---|----------|-------|------|------|----------|
| 1 | Services page renders | User navigates to /services | Page loads | Page displays heading, intro text, and 4 service offerings | P0 |
| 2 | Coaching intro section | Page loads | Intro section visible | Displays "Developmental Coaching (The Refinement)" with The Heat/Strike/Result metaphor | P0 |
| 3 | 5-session package visible | Page loads | Package cards rendered | 5-session package shows title, description | P0 |
| 4 | 15-session package visible | Page loads | Package cards rendered | 15-session package shows title, description | P0 |
| 5 | 30-session package visible | Page loads | Package cards rendered | 30-session package shows title, description | P0 |
| 6 | Venting sessions visible | Page loads | Venting section rendered | 30/45/60 min venting session options displayed with description | P0 |
| 7 | Schedule CTA links | User clicks "Book a Session" | Navigation triggered | Links to /schedule (placeholder — form story not yet implemented) | P1 |
| 8 | Brand consistency | Page loads | Styling applied | Uses brand-dark (#36452F), brand-green (#1ACE4A), Montserrat font, consistent with About page layout | P0 |
| 9 | Responsive layout | Page viewed on mobile | Layout adapts | Cards stack vertically on small screens, grid on md+ | P1 |
| 10 | SEO metadata | Page loads | Head rendered | Title "Services — Forged by Growth", description includes coaching keywords | P1 |

## Acceptance Criteria (from story)

- Users can see the 5-session, 15-session, and 30-session packages
- Venting session options (30/45/60 min) are displayed
- Layout uses provided branding elements
- Schedule CTA present (links to /schedule placeholder)

## Out of Scope

- Service detail sub-pages (separate story)
- Scheduling form implementation (separate story)
- Pricing (client has not provided pricing yet)
- Add-to-cart functionality (depends on scheduling form)

## Files to Create/Modify

- `src/app/services/page.tsx` — Main services page (NEW)
- `src/components/ServiceCard.tsx` — Reusable service card component (NEW)
