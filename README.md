# Eclipse Build website

A responsive Next.js marketing website for Eclipse Build, built with TypeScript, Tailwind CSS v4, and the Next.js App Router. The site includes the agency homepage, six illustrative concept-demo routes, draft privacy and terms pages, search metadata, and an inquiry form that hands off to the visitor’s email application.

## Requirements

- Node.js 20.9 or newer (Node 22 recommended)
- pnpm 11.25.0 (pinned in `package.json`)

## Run locally

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000>. The contact form validates the required fields and opens a prefilled email draft addressed to `eclipx.build@gmail.com`; this website does not send or store the inquiry. The visitor must review and send the draft from their email app.

## Check and build

```bash
pnpm typecheck
pnpm build
```

`pnpm build` creates a Next.js static export in `out/`. To serve those generated files locally, run `python3 -m http.server 8080 --directory out` after the build. For development and hot reload, use `pnpm dev`.

`pnpm-workspace.yaml` contains the pnpm v11 lifecycle-script allowlist. Dependencies do not require arbitrary install-time scripts to build the project.

## Public URL, SEO, and custom domain

No public production domain or hosting provider was supplied, so the project does not guess a canonical domain. Before deployment, set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin, for example `https://www.example.in`, in the hosting provider’s build environment. Use the actual canonical domain, with no trailing slash. When set, the app creates absolute canonical and Open Graph URLs and fills in `sitemap.xml` and `robots.txt`; without it, canonical/site-origin URLs are omitted, the sitemap has no URLs, and robots.txt has no sitemap line rather than using an internal preview URL.

This project is configured for a static Next.js export. The deployment build command is `pnpm install --frozen-lockfile && pnpm build`, and the output directory is `out`. There is no Node application server to start after upload. For a custom domain, connect the domain to the static host, configure DNS and HTTPS using that provider’s instructions, set `NEXT_PUBLIC_SITE_URL` to the exact HTTPS origin in its build environment, then rebuild and redeploy so canonical/Open Graph URLs, `sitemap.xml`, and `robots.txt` use the production domain.

The current site uses Manus project storage for generated illustration assets. When exporting the source to another host, confirm those `/manus-storage/async-images/...` assets are available to the chosen host or copy the finished images into that host’s public asset directory and update the two image paths in `app/page.tsx` and `app/concepts/[slug]/page.tsx`.

## Contact service and credentials

No backend, database, analytics, payment provider, WhatsApp number, or email API has been configured. The contact experience is intentionally email-client handoff only; it is not a server-side contact submission. To receive submissions without the visitor’s email client, configure an actual form/email service, credentials and privacy disclosure first. Never put private service credentials in client-side code. No API keys or secrets are required for the current build.

## Legal pages

`/privacy` and `/terms` are starting drafts and contain visible owner-review warnings. Confirm the operator’s legal identity, address, hosting/data-retention practices, applicable jurisdiction, effective date, actual payment/cancellation/refund terms, licensing/IP provisions, and maintenance/support boundaries before treating those pages as final.

## GitHub source handover

This project has a Manus-managed repository remote for the working project; no external client GitHub repository was supplied or connected. To transfer source to a client or a business-owned GitHub account, use an authorized account and agree on repository transfer/permissions after the final project payment. Do not add credentials to the repository.
