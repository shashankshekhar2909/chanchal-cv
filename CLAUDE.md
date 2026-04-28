# CLAUDE.md

This repository is a portfolio site for Chanchal Verma built with Next.js 14, React 18, TypeScript, Tailwind CSS, and Sass.

## Project Structure

- `app/`: App Router pages, layout, metadata routes, and global CSS
- `components/`: Reusable presentational components
- `data/site.ts`: Primary site content and SEO data
- `public/`: Static assets including `resume.pdf` and `og-image.svg`
- `styles/`: Additional Sass styling

## Common Commands

- `npm run dev`: Start the local development server
- `npm run build`: Create a production build
- `npm run start`: Run the production server
- `npm run lint`: Run lint checks

## Editing Notes

- Most copy and profile content lives in `data/site.ts`
- Preserve the current visual direction unless explicitly asked to redesign it
- Keep components simple and stateless unless there is a clear reason to add client-side behavior
- Prefer small, isolated changes because this repo may already contain uncommitted work

## Deployment Notes

- The app now uses Next.js standalone output for container builds
- The production container listens on port `3000`
