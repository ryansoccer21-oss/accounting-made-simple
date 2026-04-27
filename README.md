# Accounting Made Simple

Small business tutoring website rebuilt with:

- Next.js App Router
- Tailwind CSS
- Vercel-ready project structure

## Current structure

- `app/` - routes and global styles
- `components/` - shared UI
- `lib/site-data.js` - editable text and contact data
- `package.json` - project scripts and dependencies
- `postcss.config.mjs` - Tailwind PostCSS setup
- `next.config.mjs` - Next.js config
- `vercel.json` - Vercel framework hint

## Main routes

- `/` - Home
- `/about` - About
- `/services` - Services
- `/faq` - FAQ
- `/contact` - Contact

## Local development

1. Install dependencies
2. Run `npm run dev`
3. Open `http://localhost:3000`

## Deploy on Vercel

1. Push this folder to a GitHub repository
2. Import the repo into Vercel
3. Vercel will detect Next.js automatically
4. Deploy

## Note

The old static website files were removed. This Next.js app is now the only source of truth for the site.
