# Beauty by Lady D PMU Academy

_Started 2026-05-26 09:30 UTC_

---

## User

Create a single-page HTML landing page for a PMU training academy called Beauty by Lady D, Nicosia Cyprus. Warm organic luxury aesthetic — cream/off-white background (#F5F0E8), warm taupe and dusty rose accents, soft brown typography, elegant serif headings (Cormorant Garamond or Playfair Display), Poppins light body text. Lots of white space, clean editorial layout, no dark backgrounds. Reference: Coral Skincare website aesthetic — warm, airy, high-end beauty editorial feel.
HEADER: Beauty by Lady D logo top left, Clinita Italy logo top right.
HERO SECTION: Full-width hero image of the trainer working on a client in a professional PMU studio setting. Overlay elegant headline and subheadline on the image with a soft semi-transparent warm wash so text is readable.
TRAINER SECTION: Photo of trainer (upload provided). Tatiana Protasova — Master PMU & Scar Restoration Trainer, Clinita Italy Certified. Beauty by Lady D, Nicosia Cyprus.
COURSE CARDS: Three cards — Powder Brows & Hairstrokes €1,600 / Lip Blush €1,300 / Eyeliner €1,200. Each card shows course name, duration, price and a one-line description.
BUNDLE CARD: Full Basic Bundle €2,500 — all techniques, full Clinita kit and certified PMU machine included. Highlighted with warm accent border. Shows saving vs individual booking.
WHAT IS INCLUDED SECTION: Icons or elegant bullet points covering certificate, kit, machine, pre-course webinars, MyClinita app, post-training support.
FAQ ACCORDION: 6 questions — experience needed, live model, after the course, payment plan, machine ownership, how to book.
BOOKING CTA: Two buttons — WhatsApp +35799567161 and call +35794009509. Warm accent background, elegant typography.
Mobile-first design optimised for Instagram bio link. Elegant, editorial, no generic beauty salon aesthetics. No dark backgrounds, no gold, no black — warm creams and earthy tones only.

## Assistant

_[tool: list_files]_

_[tool: list_files]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: copy_files]_

_[tool: image_metadata]_

_[tool: image_metadata]_

_[tool: write_file]_

## Assistant

_[tool: write_file]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Built a mobile-first landing page for Beauty by Lady D — warm cream palette (#F5F0E8), dusty rose accents, Cormorant Garamond + Poppins Light, with all the sections you requested: editorial hero over the studio shot, trainer card with the Clinita certification badge, three course cards, highlighted Full Basic Bundle (with savings vs individual booking), six "What's included" tiles, a six-question accordion FAQ, and the WhatsApp + call CTAs in a soft rose section.

A couple of notes:
- The Clinita certificate in your trainer photo reads "Tatiana Christofi" but your brief says "Tatiana Protasova" — I went with the brief. Let me know if it should be Christofi (or different).
- The hero image (studio-hero.png) is ~5MB. For production / Instagram bio use I'd recommend compressing it to ~300–500KB so it loads fast on mobile data.
- Bundle savings shown as €4,100 → €2,500 (save €1,600). If your headline "saving" number should differ, just say.

## User

— each course card should expand to show the full learning curriculum, not just a one-liner. Here’s the updated prompt:

## Assistant

_[tool: invoke_skill]_

It looks like the curriculum content didn't come through with your message. Let me check the brochure PDF you uploaded — it likely has the full course outlines.

_[tool: run_script]_

_[tool: str_replace_edit]_

## Assistant

_[tool: str_replace_edit]_

## Assistant

_[tool: str_replace_edit]_

Now replace the three course articles with expandable versions containing the full curriculum:

_[tool: str_replace_edit]_

Now wire up the toggle behavior:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Also tightening the FAQ "live model" answer to match your brochure (client brings the model):

_[tool: done]_

_[tool: fork_verifier_agent]_

Each course card now has a "View full curriculum" toggle that reveals the numbered module list pulled directly from your brochure — 12 modules for Powder Brows & Hairstrokes, 9 for Lip Blush, 9 for Eyeliner — each with module title and description, capped with a "Your kit & what you leave with" note. Eyeliner duration corrected to 1 Day to match the brochure, and the live-model FAQ answer now reflects that the student brings the model.

## User

Verifier agent check completed

## Assistant

Verifier confirmed everything works. Course cards expand smoothly with the full brochure curriculum.

## User

its a pmu studio not academy, and nomontjly flexible payments just flexible paymens discussed in privetly

## User

its a pmu studio not academy, and nomontjly flexible payments just flexible paymens discussed in privetly, change the website to look more likw this

## Assistant

_[tool: copy_files]_

_[tool: read_file]_

Got it — switching "Academy" to "Studio", softening the payment-plan answer, and reworking the visual treatment in the Sage editorial direction: pill nav, oversized serif wordmark over the hero, editorial two-column blocks, pill CTAs, and a decorative oversized display word — all within the warm cream/rose/earthy palette.

_[tool: write_file]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Done — reworked into a Sage-style editorial layout while staying in the warm cream/rose/earth palette:

- **PMU Studio** throughout (not academy); footer reads "PMU Studio · Nicosia · Cyprus"
- **Payment plan answer** softened: flexible payments, discussed privately
- **Floating translucent pill nav** over the hero (Lady D mark left, links centre, Clinita badge right)
- **Oversized italic "Lady D"** wordmark breaking over the hero photo
- **Two-column "new philosophy" block** with pill CTA in muted olive
- **Image triptych** + "Pure craft by protocol" caption block
- **Giant italic "studio" display word** with portrait floating over it
- **Pill-shaped CTAs** in the booking section
- **Big italic "Lady D" footer wordmark**

Saved the previous version as `Beauty by Lady D v1.html`.

## User

Verifier agent check completed

## Assistant

All clear from the verifier. Ready for your next round of changes whenever you'd like.

## User

use this photos

## Assistant

_[tool: copy_files]_

_[tool: image_metadata]_

## User

ise also this photos

## Assistant

_[tool: str_replace_edit]_

_[tool: done]_

Swapping in the new photos — the brow-work shot becomes the hero (it already has the Lady D branding on the wall, which is perfect), and the clinical/sterile images go into the triptych to showcase the Clinita protocol.

_[tool: fork_verifier_agent]_

Swapped in the new photos:

- **Hero** is now the brow-work shot (the dark studio with the Lady D logo on the wall) — the giant overlay wordmark is replaced with a smaller elegant italic "Lady D · PMU Studio · Nicosia" tucked into the upper-right where it complements the wall branding instead of competing with it
- **Triptych** now shows: brow-work in the studio · sterile Clinita protocol setup · scar restoration session — telling the full clinical story
- Display-band portrait section unchanged

## User

Verifier agent check completed

## Assistant

All confirmed working. Ready for the next iteration whenever you'd like.

## User

Save this design as a PDF: Beauty by Lady D.html

## Assistant

_[tool: copy_files]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: open_for_print]_

Print-ready file is open. If the print dialog didn't appear, [open it manually here](https://f516299a-fa8c-46c2-bce3-2ab44bcca816.claudeusercontent.com/v1/design/projects/f516299a-fa8c-46c2-bce3-2ab44bcca816/serve/Beauty%20by%20Lady%20D-print.html?t=86a4deb88bc65abd60db3fbf9992a842353a01d261742d213d31ce56ac05fa38.cda6a0d9-ac2c-49ef-b7db-4ed349d6e2cb.b4237849-c004-43ac-b175-e68b61237da5.1779794089&direct=1) and use your browser's print dialog → Save as PDF.

## User

instagram @beautybylady_d_studio, only 1:1 trainings, address: Vasilissis Freiderikis 18, Nicosia 1066

## Assistant

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: done]_

Now sync the print file with the updates:Updated both files:

- Instagram → **@beautybylady_d_studio** (linked)
- **Address added** to footer: Vasilissis Freiderikis 18, Nicosia 1066
- Booking section now reads **"1:1 training, by appointment"** — no more cohort/two-artist references
- Display-band caption updated to reinforce 1:1

## User

whats up 94009509 , ita Beauty by Lady D Studio

## Assistant

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: done]_

Updated both files:

- **WhatsApp now uses +357 94 009 509** (same as the call number — both buttons reach you on the same line)
- Brand updated to **"Beauty by Lady D Studio"** in the page title, hero sub-label, and footer location line

## User

no green use clinita blue color and the first section lady in white is to plain change it

## Assistant

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now redesign the philosophy section — adding tonal background, a decorative initial behind, an offset color swatch behind the photo, and a credentials strip:

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Done. Changes:

- **Olive/sage swapped for muted Clinita teal-blue** (#4B6E7A) — pill button, WhatsApp button, and the giant "studio" display word now all in blue
- **Philosophy section rebuilt** to be much richer:
  - Warm tonal background (cream-deep) — visually distinct from neighbouring sections
  - Giant faint italic "D" letterform decorating the upper-right
  - Offset teal-blue swatch peeking out behind the photo
  - New credentials strip below: **Clinita Italy · Since 2024 · 1:1 Private · By Appointment**

## User

Verifier agent check completed

## Assistant

All confirmed. Ready for the next round.

## User

Save this design as a PDF: Beauty by Lady D.html

## Assistant

_[tool: copy_files]_

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: open_for_print]_

If the print dialog didn't appear, [open the print-ready page here](https://f516299a-fa8c-46c2-bce3-2ab44bcca816.claudeusercontent.com/v1/design/projects/f516299a-fa8c-46c2-bce3-2ab44bcca816/serve/Beauty%20by%20Lady%20D-print.html?t=86a4deb88bc65abd60db3fbf9992a942353a01d261742d213d31ce56ac05fa38.cda6a0d9-ac2c-49ef-b7db-4ed349d6e2cb.b4237849-c004-43ac-b175-e68b61237da5.1779794089&direct=1) and use your browser's print dialog → Save as PDF.

## User

remove since 2024

## Assistant

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: done]_

Removed from both files. Strip now reads: **Clinita Italy · 1:1 Private · By Appointment**.

