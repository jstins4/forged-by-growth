# SPEC: Scheduling Form Implementation

**Story:** Scheduling Form Implementation (cmmsaoufz008qvei7dstoc6eg)
**Sprint:** Factory Sprint 2 (cmmsdt0g50001vemwbsjtgc1n)
**AC:** Given the scheduling form is implemented, when a user fills out the form, then an email is sent to scheduler@forgedbygrowth.com with the request details.

## Behavior Matrix

| ID | Scenario | Given | When | Then | Priority |
|----|----------|-------|------|------|----------|
| B1 | Render form | User navigates to /schedule | Page loads | Form displays with fields: name, email, phone (optional), service type (dropdown), preferred date, message | Must |
| B2 | Validate required fields | Form is displayed | User submits with empty required fields (name, email, service) | Validation errors shown inline for each missing field | Must |
| B3 | Validate email format | Form is displayed | User enters invalid email format | Email field shows format validation error | Must |
| B4 | Submit success | Form filled with valid data, honeypot empty | User clicks submit | Server action sends email via Resend to scheduler@forgedbygrowth.com, success message displayed, form resets | Must |
| B5 | Submit failure | Form filled with valid data | Server action fails (Resend error) | User-friendly error message displayed, form data preserved | Must |
| B6 | Honeypot protection | Bot fills hidden honeypot field | Form is submitted | Submission silently rejected with fake success (no email sent) | Must |
| B7 | Service type options | Form is displayed | User clicks service dropdown | Options: 5-Session Package, 15-Session Package, 30-Session Package, 30-Min Venting, 45-Min Venting, 60-Min Venting | Must |
| B8 | Navigation integration | User is on services page | User clicks "Book a Session" on any package | Navigates to /schedule page | Must |
| B9 | Responsive layout | User on mobile device | Page loads | Form is fully usable on mobile (single column, touch-friendly inputs) | Must |
| B10 | Accessible form | User using screen reader | Page loads | All inputs have associated labels, form has ARIA attributes, keyboard navigable | Must |

## Technical Notes

- **Email provider:** Resend API (npm package `resend`)
- **Email destination:** scheduler@forgedbygrowth.com
- **Implementation:** Next.js Server Action (keeps API key server-side)
- **Bot protection:** Honeypot field (hidden via CSS, not display:none — better bot detection)
- **Environment variable:** RESEND_API_KEY required
- **No reCAPTCHA for MVP** — honeypot sufficient, avoids Google dependency
- **Brand consistency:** Uses existing brand colors (brand-dark, brand-green, brand-light) and Montserrat font
