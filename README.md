# Roof MRI™ — Quick Reference Guide

A self-contained, static web version of the confidential **Roof MRI™ Quick
Reference Guide (QRG)** — the gated field checklist that certified contractors
use to perform non-destructive moisture surveys. It's a faithful rebuild of the
live Canva page (design `DAHNpCeV3-k`), recreated as plain HTML/CSS/JS so it can
be hosted anywhere and version-controlled.

The page opens with a **Terms of Use / Disclaimer acknowledgement gate** (name +
email + agreement), then reveals an interactive, step-by-step checklist. It keeps
the same **safety/security intent** as the live site: a dark theme, an identity
watermark, and screenshot/copy deterrents.

---

## Page structure (matches the live design)

1. **Gate** — "Terms of Use & Disclaimer," 7 sections reproduced verbatim
   (Purpose, Limitations of Use, No Warranty, Assumption of Risk, Intellectual
   Property, Modifications, Contact), then name + email + "I agree" →
   **Continue to Guide**.
2. **Landing** — "Roof MRI Quick Reference Guide" → "Welcome, [name]!" → a
   colored card per step.
3. **Step detail** — numbered sub-checklists with tappable checkboxes, "← Back",
   and ⚠️ Field-rule callouts. Checkbox progress persists per device.

### Steps
| # | Step | Status |
|---|------|--------|
| 1 | Grid Prep & Field Safety | ✅ complete (1.1–1.4 + field rule) |
| 2 | Calibration & Moisture Check | ✅ complete (2.1–2.9 + field rule) |
| 3 | Roof Scan and Data Collection | ✅ complete (3.1–3.4) |
| 4 | Get Moisture Report | ✅ complete (4.1–4.5) |

All four steps are fully transcribed from the live design. (The "5" you
mentioned is Step 4's five sub-steps, 4.1–4.5; there are four top-level steps.)

Steps are defined as data in `js/gate.js` (the `STEPS` array). Adding the
remaining checklists is just filling in each step's `sections` and `fieldRule`.

## Project structure

```
.
├── index.html        # Gate + app shell (landing + step-detail container)
├── css/
│   └── styles.css    # Dark anti-screenshot theme
├── js/
│   └── gate.js       # Gate, watermark, deterrents, and the guide (STEPS data)
└── README.md
```

No build step, no dependencies (one optional Google Fonts link). Open
`index.html` directly, or host the folder.

## Run / preview locally

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Deploy

Any static host (Netlify, Cloudflare Pages, GitHub Pages, S3, …). No config.

---

## Security / anti-sharing measures

- **Acknowledgement gate** — name, email, and explicit agreement required.
- **Identity watermark** — every screen is tiled with the viewer's name, email,
  and timestamp (the live page does this too), so any leaked screenshot is
  traceable.
- **Blur-on-defocus**, **copy / right-click / drag / selection blocked** outside
  form fields, **save / print / dev-tools shortcut deterrents**, and **print
  suppression**.

> **Important:** these are *deterrents*, not hard security — a determined person
> can still photograph a screen. For true protection, gate the content
> server-side and deliver it only after a verified login. The acknowledgement is
> currently stored in `sessionStorage`; checklist progress in `localStorage`.

---

## ✅ Owner action items before publishing

1. **Roof MRI App URL.** Step 4's links point to `https://scanning.roof-mri.com`
   (the `APP_URL` constant at the top of `js/gate.js`). Update it there if it changes.
2. **Patent.** A "U.S. Patent Approved" badge (header) and footer line emphasize the
   patent. Per the owner, the patent is **approved but not yet issued**, so no number
   is shown. Once it issues, add the number to the footer line in `index.html`.
3. **Brand exactness (optional).** Colors/fonts here are matched by eye from the
   page. If you want pixel-exact hex/font values, they can be read from Canva's
   edit view.
4. **Personalization.** "Welcome, [name]!" and the watermark use the name/email
   entered at the gate (matching the live page's dynamic behavior).
5. **Lead capture (optional).** The gate only watermarks + stores locally. Wire
   the form to your CRM/backend if you want to record who opened the guide.

---

Confidential & proprietary to **Re-Dry, LLC**. Roof MRI™ is a trademark of
Re-Dry, LLC. All rights reserved.
