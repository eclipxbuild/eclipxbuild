import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const concepts = {
  restaurant: { label: "Restaurant", title: "An inviting place, online.", description: "A restaurant website concept shaped around atmosphere, a concise menu story and useful visit information.", details: ["Lead with the dining mood and strongest visual cues.", "Make menu and visit details easy to discover.", "Keep mobile browsing simple before a reservation or enquiry."] },
  saas: { label: "SaaS landing page", title: "Make the product make sense.", description: "A focused SaaS landing-page concept with clear product hierarchy, feature explanation and a natural next step.", details: ["Explain the product before expanding into features.", "Use clean sections to make value easy to scan.", "Place a clear action where the visitor is ready."] },
  fashion: { label: "Fashion storefront", title: "A lookbook with a point of view.", description: "An editorial storefront concept for an independent fashion label, pairing considered imagery with an uncluttered path to products.", details: ["Give product imagery room to carry the story.", "Use calm category navigation and an editorial rhythm.", "Keep product discovery clear across screen sizes."] },
  "real-estate": { label: "Real estate", title: "Find the right place to begin.", description: "A real-estate website concept that puts listings, neighbourhood information and contact paths in a clear order.", details: ["Present property choices without overwhelming the page.", "Organise the key details buyers or renters need.", "Keep enquiry options visible on mobile."] },
  portfolio: { label: "Personal portfolio", title: "Let the work speak clearly.", description: "A personal portfolio concept for a creative professional, designed to make selected work and contact details easy to find.", details: ["Use a confident introduction without overclaiming.", "Prioritise selected projects and readable case-study structure.", "Make the next conversation simple to start."] },
  ecommerce: { label: "E-commerce", title: "A storefront built for browsing.", description: "A flexible online-store concept that balances product discovery, helpful details and a considered shopping path.", details: ["Create a clear entry into product categories.", "Keep product details and relevant choices readable.", "Plan checkout integrations according to the real project scope."] },
} as const;

type ConceptSlug = keyof typeof concepts;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const socialImage = "https://files.manuscdn.com/user_upload_by_module/session_file/310519664011484566/YFNtQDwIyDzNRnIE.png";

export function generateStaticParams() {
  return Object.keys(concepts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!(slug in concepts)) return { title: "Concept not found", robots: { index: false, follow: false } };
  const concept = concepts[slug as ConceptSlug];
  const canonical = siteUrl && /^https:\/\//i.test(siteUrl) ? `/concepts/${slug}` : undefined;
  return {
    title: `${concept.label} Website Concept`,
    description: concept.description,
    alternates: canonical ? { canonical } : undefined,
    openGraph: { type: "website", siteName: "Eclipse Build", title: `${concept.label} · Illustrative Website Concept`, description: concept.description, images: [{ url: socialImage, width: 1200, height: 630, alt: `${concept.label} illustrative website concept` }], ...(canonical && siteUrl ? { url: `${siteUrl.replace(/\/$/, "")}${canonical}` } : {}) },
    twitter: { card: "summary_large_image", title: `${concept.label} Website Concept`, description: concept.description, images: [socialImage] },
  };
}

function ConceptFrame({ slug }: { slug: ConceptSlug }) {
  if (slug === "restaurant" || slug === "fashion") {
    const image = slug === "restaurant" ? "/manus-storage/async-images/BFhWUTVp1jbOivkt7GOknH/image-2.webp" : "/manus-storage/async-images/BFhWUTVp1jbOivkt7GOknH/image-3.webp";
    return <Image src={image} alt={`${concepts[slug].label} website design concept`} width={1050} height={700} unoptimized />;
  }
  return <div className="demo-frame" aria-hidden="true"><span className="demo-frame-line short" /><span className="demo-frame-line long" /><span className="demo-frame-line" /><div className="demo-frame-grid"><span /><span /><span /></div></div>;
}

export default async function ConceptPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!(slug in concepts)) notFound();
  const concept = concepts[slug as ConceptSlug];
  return (
    <main className="demo-page" id="main-content">
      <div className="wrap">
        <Link className="demo-back" href="/#portfolio">← Back to portfolio concepts</Link>
        <section className="demo-hero" aria-labelledby="demo-title">
          <div><span className="eyebrow">Illustrative demo · not a client project</span><h1 id="demo-title">{concept.title}</h1><p>{concept.description}</p><Link className="button button--primary" href="/#contact">Discuss a project like this <span className="arrow" aria-hidden="true">↗</span></Link></div>
          <div className="demo-art"><ConceptFrame slug={slug as ConceptSlug} /></div>
        </section>
        <div className="demo-content">{concept.details.map((detail, index) => <article key={detail}><h2>Design consideration {String(index + 1).padStart(2, "0")}</h2><p>{detail}</p></article>)}</div>
        <p className="demo-disclaimer">Concept demonstration only. This design is illustrative and is not a representation of an actual client, business, partnership, project result, or live production website. Final availability, pricing and timeline depend on agreed scope.</p>
      </div>
    </main>
  );
}
