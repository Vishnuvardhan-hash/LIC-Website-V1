# Deployment Guide — From Zero to Live Website (₹0 except domain)

This guide takes you from these files to a live website. Total time: ~45 minutes.
No coding knowledge needed beyond copy-paste.

---

## The big picture (how the pieces fit)

```
Your files  →  GitHub (stores code, tracks versions)  →  Vercel (hosts it live, free)
                                                              ↓
                                                    yourdomain.in (₹700/yr)
Formspree (free) receives form submissions → emails them to you
```

- **GitHub** = the land record (Dharani, if you like). The permanent, versioned source of truth.
- **Vercel** = the standing crop. It reads from GitHub and serves the live site. Every time
  you push a change to GitHub, Vercel redeploys automatically within ~30 seconds.
- **Formspree** = the postman. Carries form submissions to your email.

---

## STEP 1 — Create a GitHub account & repository (10 min)

1. Go to **github.com** → Sign up (use your email, pick a username).
2. Once logged in, click the **+** icon (top right) → **New repository**.
3. Fill in:
   - Repository name: `lic-website` (or `dad-lic-site`, anything)
   - Visibility: **Public** (private also works with Vercel, but public is simplest)
   - Do NOT tick "Add a README" (we already have one)
4. Click **Create repository**.

### Upload the files (no command line needed)

1. On the empty repository page, click **"uploading an existing file"** link.
2. Drag the ENTIRE contents of the `lic-website` folder into the browser window
   (all files AND folders: index.html, css/, js/, data/, images/, etc.).
   - Tip: open the lic-website folder, select all (Ctrl+A), drag into browser.
3. Scroll down, in "Commit changes" type: `Initial website skeleton`
4. Click **Commit changes**.

Your code is now safely on GitHub. ✅

> **Alternative (recommended once comfortable): use git on your laptop**
> ```
> cd lic-website
> git init
> git add .
> git commit -m "Initial website skeleton"
> git branch -M main
> git remote add origin https://github.com/YOUR_USERNAME/lic-website.git
> git push -u origin main
> ```

---

## STEP 2 — Deploy on Vercel (10 min)

1. Go to **vercel.com** → **Sign Up** → choose **"Continue with GitHub"**
   (this links the two accounts — important).
2. After signup, click **Add New… → Project**.
3. You'll see your GitHub repositories listed. Click **Import** next to `lic-website`.
4. Settings screen:
   - Framework Preset: **Other** (it's plain HTML — no build step)
   - Root Directory: leave as `./`
   - Build Command / Output Directory: leave EMPTY / default
5. Click **Deploy**. Wait ~30 seconds.
6. 🎉 You get a live URL like `lic-website-xyz.vercel.app`. Open it — the site is live.

**From now on:** any file you change on GitHub (even editing directly in the GitHub
website editor) automatically redeploys the live site in under a minute. This is
your entire "publish" workflow.

---

## STEP 3 — Set up the enquiry form with Formspree (10 min)

1. Go to **formspree.io** → Sign up free (free tier: 50 submissions/month —
   plenty to start; if you outgrow it, that's a good problem).
2. Click **+ New Form** → name it `LIC Website Enquiries` →
   set the email where submissions should arrive (your father's or yours).
3. Formspree shows you a form endpoint like:
   `https://formspree.io/f/xqkrgpay` — copy the ID part (`xqkrgpay`).
4. Open `js/config.js` in your repository (on GitHub: click the file → pencil icon
   to edit) and set:
   ```js
   formspreeId: "xqkrgpay",   // your actual ID
   ```
5. Commit the change. Vercel redeploys automatically.
6. Test: open your live site → Contact page → submit the form → check the email.

Both forms (customer enquiry + agent application) use the same Formspree form;
a hidden `form_type` field tells you which one each submission came from.

---

## STEP 4 — Fill in the config (5 min)

Open `js/config.js` and replace every placeholder:

| Field | Example |
|---|---|
| agentName | "K. Venkat Rao" |
| whatsappNumber | "919876543210" (digits only, country code, no +) |
| phone | "+91 98765 43210" |
| email | real email |
| officeAddress, branchDetails, licenseNumber | real details |

Every page updates automatically — names, phone links, WhatsApp buttons, footer.
**This one file controls all personal details across the whole site.**

---

## STEP 5 — Connect a custom domain (15 min + ₹700–1000/yr)

This is the ONLY money you'll spend.

1. Buy the domain at any registrar — **GoDaddy, Hostinger, BigRock, or
   Cloudflare Registrar** (Cloudflare sells at cost, cheapest long-term).
   Suggested pattern: `hisnamelic.in` or `hisname.in` — short, spellable over phone.
2. In Vercel: your project → **Settings → Domains** → type the domain → **Add**.
3. Vercel shows you DNS records to set. In your registrar's DNS panel add:
   - **A record**: name `@`, value `76.76.21.21`
   - **CNAME record**: name `www`, value `cname.vercel-dns.com`
4. Wait 10 minutes–2 hours for DNS to propagate. Vercel auto-issues a free
   HTTPS certificate. Done — `https://yourdomain.in` is live.

---

## STEP 6 — Ongoing updates (the "admin panel")

There is no login-based admin in v1 — **the GitHub file editor IS the admin panel**,
and it's honestly simpler:

| Task | What to edit |
|---|---|
| Add a new LIC plan | `data/policies.js` — copy a block, edit, commit |
| Mark a plan discontinued | same file — set `discontinued: true` |
| Change phone/address | `js/config.js` |
| Add an award photo | upload image to `images/awards/`, edit `about.html` card |
| Add an FAQ | `knowledge.html` — copy a `<details>` block |

Every commit = automatic redeploy. You can do all of this from a phone browser
via github.com if needed.

---

## Post-launch checklist (free, high-impact)

- [ ] **Google Business Profile** (business.google.com) — arguably higher local-SEO
      ROI than the website itself. Add the website URL to the profile; they compound.
- [ ] **Google Search Console** (search.google.com/search-console) — add the domain,
      submit the sitemap URL, so Google indexes the site.
- [ ] Put the website link in his **WhatsApp Business profile**, visiting cards,
      and email signature.
- [ ] Ask 5 happy long-term clients for **Google reviews** on the Business Profile.
- [ ] Share the site in his agent team's WhatsApp group — 30 agents sharing it in
      their circles is your first distribution channel.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Site shows old content after edit | Wait 1 min; hard-refresh (Ctrl+Shift+R). Check Vercel → Deployments for status. |
| Form says "Form is being set up" | `formspreeId` in config.js is still empty. |
| WhatsApp button opens wrong number | `whatsappNumber` must be digits only with country code: `919876543210`. |
| Domain not working after hours | Recheck the A and CNAME records exactly; delete any conflicting old A records. |
| Images not showing | File paths are case-sensitive: `images/awards/Photo.JPG` ≠ `photo.jpg`. |
