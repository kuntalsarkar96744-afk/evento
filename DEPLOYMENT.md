# Evento deployment

## Vercel settings

- Framework preset: Next.js
- Root directory: `client`
- Build command: `npm run build`
- Output directory: leave the Vercel default

All website images are stored in `client/public/images`. Add future images to
that folder and reference them in code as `/images/filename.ext`.

The frontend build is verified with Next.js 15.5.21.

## Backend environment

Copy `server/.env.example` to `server/.env` locally and replace the placeholder
MongoDB connection string. Never commit `server/.env` to GitHub.
