# CareNura Phase 6 Plan — SEO, Performance, Accessibility, Security & Production Readiness

## 1. Phase 6 Objective
To elevate the existing CareNura codebase to production-grade standards by implementing robust SEO architecture, optimizing performance, ensuring WCAG 2.2 AA-aligned accessibility, tightening security, and solidifying production readiness—WITHOUT altering the approved "Premium Digital Engineering & AI Agency" positioning or visual identity.

## 2. Phase 6 Technical Constraints
- **No unnecessary redesign:** The approved Dark Obsidian foundation, typography, spacing, and premium identity must remain untouched. Visual changes are only permitted if required for accessibility, responsiveness, or usability.
- **No fake data:** No invented clients, testimonials, awards, results, or unsupported JSON-LD schemas. Project labels (Concept/Architecture Showcase, Internal Project) remain truthful.
- **No invented test results:** Lighthouse scores, Core Web Vitals, and WCAG compliance must not be claimed unless genuinely measured and recorded.
- **No unsupported JSON-LD schemas:** Do not invent a generic "Project" schema for case studies. Stick to approved scopes (Organization, WebSite, Service, BreadcrumbList).
- **No duplicate rate-limiting system:** The existing in-memory limiter in `/api/inquiry` is sufficient for this phase. Do not add Redis or middleware infrastructure.
- **No unnecessary debounce system:** Rely on the existing `isSubmitting` state to prevent duplicate submissions, unless a real weakness is discovered.
- **No production claims without verification:** Distinguish clearly between code that is IMPLEMENTED, ACTUALLY TESTED, and NOT VERIFIED.
- **No hardcoded production domain:** Keep `SITE_URL` in environment variables with safe dev fallbacks. Document if pending.
- **No secrets in source code:** All secrets remain in environment configuration.
- **No unnecessary infrastructure:** Do not introduce databases, CMS, authentication, CRM, or heavy analytics.

## 3. Current Technical State
- **Framework:** Next.js 14.2.3 (App Router).
- **Styling:** Tailwind CSS (Dark Obsidian theme, Space Grotesk/Inter fonts).
- **Forms/Lead Gen:** React Hook Form + Zod, 3-step wizard with API route (`/api/inquiry`) utilizing Resend. Existing in-memory rate limiter present.
- **Pages:** Homepage, `/services` (overview & dynamic), `/work` (overview & dynamic), `/start-a-project`, and basic stubs for `/about`, `/contact`, `/privacy`, `/terms`.
- **Status:** Phase 5.5 Bug Fixes verified. Build passes successfully.

## 4. SEO Plan
- **Dynamic Metadata:** Implement robust metadata for `layout.tsx`, `/services/[slug]/page.tsx`, and `/work/[slug]/page.tsx` including title templates, descriptions, and Open Graph tags.
- **Sitemap & Robots:** Add `sitemap.ts` and `robots.ts` in `src/app`.
- **Structured Data (JSON-LD):** Implement ONLY defensible, truthful schemas: `WebSite`, `Organization`, `Service`, and `BreadcrumbList`. No invented schemas for Work pages.
- **Heading Hierarchy:** Audit all pages to guarantee exactly one `<h1>` per page, followed sequentially by `<h2>` and `<h3>`.
- **SITE_URL:** Add `SITE_URL` to `.env.example` and utilize it safely for canonical URLs and metadata.

## 5. Performance & Core Web Vitals Plan
- **Performance Implementation:** Optimize imports (like `lucide-react`) and verify client vs server component architecture.
- **Lighthouse Testing Strategy:**
  - Implement optimizations.
  - Run `npm run build`.
  - Execute actual Lighthouse test (if environment allows) and record real results.
  - If Lighthouse cannot run, report as NOT VERIFIED.
- **Core Web Vitals:** Do not claim passing LCP, CLS, or INP without actual measurement. Identify potential layout shifts in dynamic areas (wizard steps) and assign `min-h` appropriately.

## 6. Accessibility Plan
- **WCAG 2.2 AA-Aligned Implementation & Validation:**
  - Implement semantic HTML, keyboard navigation support, and visible focus states (`focus-visible:ring-primary`).
  - Verify form labels and dynamic validation announcements (`role="alert"`).
  - Add appropriate ARIA attributes for complex components (marquee, mobile menu).
  - Provide reduced-motion fallbacks for animations.
- **Reporting:** Clearly distinguish what is IMPLEMENTED vs. ACTUALLY TESTED vs. NOT VERIFIED.

## 7. Responsive QA Plan
- **Target Viewports:** 1440px, 1280px, 1024px, 768px, 390px, 375px.
- **Focus Areas:** Mobile menu usability, marquee horizontal overflow, 3-step wizard grid layouts, typography scaling.
- **Goal:** Intentional mobile design without unnecessary redesigns of desktop components.

## 8. Security Plan
- **Security Headers:** Carefully configure `next.config.mjs` (e.g., X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy, X-DNS-Prefetch-Control). Do NOT enforce HSTS blindly for local development. Test to ensure headers don't break Next.js, API routes, or n8n hooks.
- **API Fortification:** Review the `/api/inquiry` route to ensure input lengths are strictly capped by Zod.
- **Error Boundary:** Implement `src/app/error.tsx` following Next.js standards. Ensure it catches runtime errors, allows recovery (reset), matches the CareNura design, hides sensitive info, and supports dev debugging.

## 9. Lead Generation Production Plan
- **Duplicate Prevention:** Inspect existing `isSubmitting` protection. Verify UI cannot trigger multiple submissions via rapid clicking. No complex debouncing unless a real weakness is proven.
- **Rate Limiting:** Inspect the existing in-memory limiter. Verify its behavior and ensure no false successes are generated. Document that it is not sufficient for distributed production infrastructure.
- **Email Delivery:** Mark email delivery as NOT VERIFIED if real Resend credentials are not available. Do not fake delivery logs.

## 10. Content/Credibility Plan
- Keep all existing truthful project labels (Concept/Architecture Showcase).
- Do not invent clients, metrics, awards, physical addresses, or team members.
- Ensure `/privacy` and `/terms` placeholders are marked as legal drafts.

## 11. Navigation & UX Consistency Plan
- Audit consistent CTA behavior, loading states, and error states across the site.
- Check for dead links and predictable interactions.
- Do not introduce complex UX flows or unnecessary pages.

## 12. Design Consistency Plan
- Audit global usage of spacing, border radii, shadows, typography, and accent colors to ensure strict adherence to the defined Tailwind tokens.
- Correct minor inconsistencies without altering the global layout.

## 13. Browser Compatibility Plan
- Formulate a plan for testing across Chrome, Firefox, Safari, and Edge (Desktop/Mobile).
- Do not claim compatibility unless actually tested.

## 14. Production Readiness Plan
- Clearly distinguish CODE READY, ACTUALLY VERIFIED, and PRODUCTION CONFIGURATION REQUIRED.
- Document the dependency on a production domain, `SITE_URL`, and real `RESEND_API_KEY`.

## 15. Expected Files to Change
- `src/app/layout.tsx` (Metadata, JSON-LD)
- `src/app/page.tsx` (Metadata)
- `src/app/services/[slug]/page.tsx` (Dynamic Metadata)
- `src/app/work/[slug]/page.tsx` (Dynamic Metadata)
- `src/app/sitemap.ts` (New)
- `src/app/robots.ts` (New)
- `src/app/error.tsx` (New)
- `next.config.mjs` (Security headers)
- `src/components/forms/ProjectWizard.tsx` (Accessibility, loading states)
- `src/app/api/inquiry/route.ts` (Zod validation limits)
- `.env.example` / `.env.local` (Add SITE_URL)

## 16. Expected Files NOT to Change
- `src/data/services.ts`
- `src/data/projects.ts`
- Base Design System CSS / Tailwind Config.

## 17. Risks
- Security headers could break API routing or development builds if improperly configured.
- Imprecise `min-h` additions for CLS could introduce awkward whitespace on extremely small devices.

## 18. Acceptance Criteria

### IMPLEMENTATION
- [ ] SEO metadata implemented (Static & Dynamic).
- [ ] `sitemap.ts` and `robots.ts` implemented.
- [ ] Structured data (Organization, WebSite, Service, BreadcrumbList) implemented strictly with truthful info.
- [ ] Accessibility improvements (semantics, aria, focus, reduced-motion) implemented.
- [ ] Security headers implemented in `next.config.mjs`.
- [ ] Global `error.tsx` implemented.
- [ ] API validation hardened with length limits.
- [ ] `SITE_URL` added to env config.

### VERIFICATION
- [ ] `npm run lint` passes successfully.
- [ ] `npx tsc --noEmit` passes successfully.
- [ ] `npm run build` passes successfully.
- [ ] Actual API behavior verified (in-memory rate limiting and `isSubmitting` lock inspected).
- [ ] Actual browser/responsive/keyboard testing conducted where technically possible (otherwise explicitly marked NOT VERIFIED).
- [ ] Actual Lighthouse results recorded (if available, otherwise explicitly marked NOT VERIFIED).
