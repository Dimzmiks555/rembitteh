# Design QA — repair service, reference revision

Source visual: /var/folders/5t/82cwwy_x19qg46r0923pdhy00000gn/T/codex-clipboard-6bf7de1b-ff28-47d9-9888-28ace6d72788.png (2400 × 1800 reference board).
Implementation: /tmp/repair-reference-desktop.png and /tmp/repair-reference-steps.png (1280 × 720 screenshots, 1280 × 720 CSS viewport, default desktop density).
Local URL: http://127.0.0.1:4340/.

## Comparison scope
The user requested a redesign inspired by the reference, retaining the existing blue palette, original washer photograph and service information. The source is a multi-section dental-site board rather than a single browser viewport. Compared its hero region with the implemented hero in the same tool input; compared the service and step compositions at section level. No pixel-perfect or identical-content claim is made. Dental photography, turquoise colors and invented experience/customer statistics intentionally are not copied.

## Findings
No outstanding P0/P1/P2 findings within the requested adaptation.
- Typography: retained local Geologica; stronger headings and centered story hierarchy echo the source. Russian wrapping is readable at tested widths.
- Layout: utility/contact bars, integrated pale-blue hero, circular subject frame, pill CTAs, centered introductory statement, three-column service story, dark service carousel and linked circular steps replace the previous architecture-site rhythm.
- Colors: blue #245fdd, ink #172740 and paper #f5f7fa preserved. Dark service panel uses #172f58. Palette deviation from teal source is explicitly requested.
- Images: original HERO.jpg preserved in hero and supporting crops. Original master illustration and review portraits retained. Circular clipping is intentional; no missing images. Existing icons reused.
- Content: telephone, email, five review texts, service geography, six-month warranty and pensioner discounts retained. No numerical experience or customer claims imported from the reference.

## Verification
- Gatsby production build passed under the existing compatible Node 18 environment.
- 320, 375, 390, 560, 768, 1024, 1440 CSS-pixel widths: no document overflow or broken images.
- Mobile menu opens and closes after selecting a section.
- Service carousel next button moves the track; touch scrolling and keyboard-focusable region available.
- Linked steps inspected in a focused screenshot; connector does not overlap text.
- No browser console errors reported.
- Primary phone and email addresses unchanged.

## Comparison history
Initial implementation comparison: no blocking issues found; source-specific colors and content differences are intentional. The responsive checks did not require visual fixes.

## Follow-up polish
P3: supporting carousel images reuse crops of the supplied photograph. Dedicated repair photographs could add variety if the owner provides them.

final result: passed
