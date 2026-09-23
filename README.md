# Yana Lozeva Portfolio

Static-first portfolio and booking website for Sofia-based photographer Yana Lozeva.

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Copy the example environment file if you need to set a production URL:

```bash
cp .env.example .env
```

3. Start the dev server:

```bash
npm run dev
```

## Content

- Pages live in `src/pages`.
- Shared navigation, footer, gallery, service and CTA components live in `src/components`.
- Contact email, Calendly, Instagram and portfolio image metadata live in `src/data/site.ts`.
- Project image assets live in `public/images`.

Add or replace photographs in `public/images`, then update `src/data/site.ts` with the source path, alt text, dimensions, category and featured status.

## Deployment

The site is configured as `output: "static"` and is suitable for conventional GitHub-based static deployment workflows.
