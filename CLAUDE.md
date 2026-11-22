# Contemporary Dentistry — Astro site

Rebuild of the client's Webflow site (https://2019-00-contemporary-dentistry-1bcaa0.webflow.io/) as a static Astro site. Currently just the home page.

## Stack
- Astro (static output) + Tailwind CSS v4 (`@theme` tokens in `src/styles/global.css` for brand color `--color-brand` and fonts)
- Deployed on Netlify, auto-building from the `main` branch of this GitHub repo
- Contact form uses Netlify Forms (`data-netlify="true"` on the `<form>` — no backend needed; submissions show up in the Netlify dashboard under Forms)

## Structure
- `src/pages/index.astro` — the home page; most editable content (services, doctors, FAQs, etc.) is in arrays at the top of the frontmatter
- `src/layouts/Layout.astro` — shared `<head>`, SEO meta tags, JSON-LD business schema
- `src/components/Header.astro`, `Footer.astro` — shared nav/footer, reused by every future page
- `public/images/` — all images, downloaded locally from the original Webflow CDN (not hot-linked)

## Making changes
- Content/copy/image changes → use the `content-editor` subagent
- SEO/meta/schema changes → use the `seo-auditor` subagent
- Always run `npm run build` before calling a change done
- Commit and push to `main` to deploy — Netlify picks it up automatically

## Known placeholders (update when real values exist)
- `siteUrl` in `Layout.astro` is a placeholder Netlify URL until the client has a real domain
- Only the home page exists; nav/footer links point to pages like `/about-us`, `/services` etc. that don't exist yet — add them as real pages when the client wants the rest of the site built out
