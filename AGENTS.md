# AGENTS.md

## Purpose

This repo contains a personal portfolio and resume site for Chanchal Verma.

## Stack

- Next.js 14 App Router
- React 18
- TypeScript
- Tailwind CSS
- Sass

## Where To Change Things

- Update portfolio copy, case studies, contact details, and SEO content in `data/site.ts`
- Update layout and section composition in `app/page.tsx`
- Update document metadata and global scripts in `app/layout.tsx`
- Update shared styling in `app/globals.css` and `styles/custom.scss`

## Agent Rules

- Do not overwrite unrelated local changes already present in the worktree
- Prefer minimal edits in the smallest set of files needed
- Use `npm run build` after structural changes when possible
- Keep production behavior static-first unless interactivity is required
- Preserve `/resume.pdf` and existing public asset paths

## Container

- Build with the provided `Dockerfile`
- The container expects `npm install` from `package-lock.json`
- Runtime port is `3000`
