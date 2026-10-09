import Image from "next/image";
import Link from "next/link";
import { FAQ, InquiryForm } from "@/components/interactive";

const services = [
  { icon: "◈", title: "Business Websites", description: "A professional online home that establishes credibility and makes it easy for customers to understand what you do." },
  { icon: "↗", title: "Landing Pages", description: "Focused, thoughtfully structured pages for products, services, launches and campaigns." },
  { icon: "▧", title: "Portfolio Websites", description: "Distinctive portfolios for freelancers, creators and professionals ready to present their work." },
  { icon: "✳", title: "Startup Websites", description: "A modern digital presence to explain your idea, introduce your product and support your next stage." },
  { icon: "⌘", title: "E-commerce Websites", description: "Online storefronts with product listings, shopping carts and checkout integrations scoped to your needs." },
  { icon: "⟳", title: "Website Redesign", description: "A considered update for an outdated site, shaped by your current technology and goals." },
  { icon: "⌬", title: "Custom Web Development", description: "Purpose-built functionality and integrations for requirements that go beyond a standard website." },
];

const process = [
  { title: "Tell Us About Your Project", text: "Share your business, website requirements, preferred design, features and approximate budget." },
  { title: "Scope, Pricing & Timeline", text: "We discuss the requirements, define the scope, confirm a quotation, estimate the timeline and agree on payment terms before development." },
  { title: "Payment & Project Kickoff", text: "Once the agreed payment is received, work begins according to the confirmed project agreement." },
  { title: "Design & Development", text: "We build to the approved requirements, focusing on visual quality, responsiveness, functionality and performance." },
  { title: "Review & Revisions", text: "Review the website together. We handle the number of revisions agreed in scope; extra changes or features may cost more." },
  { title: "Final Approval & Payment", text: "You review the completed work and pay any remaining balance according to the agreed payment schedule." },
  { title: "GitHub Project Transfer", text: "After full payment, we transfer the repository to your GitHub account or use another agreed handover method. Source ownership follows the project scope; third-party licenses and services remain subject to their terms." },
  { title: "Deployment & Handover", text: "We assist with the agreed deployment. Domain registration, hosting and other third-party expenses are billed separately where applicable." },
];

const projects = [
  { type: "Restaurant · concept", title: "Restaurant concept", description: "A warm editorial direction for a considered dining experience.", slug: "restaurant", image: "/manus-storage/async-images/BFhWUTVp1jbOivkt7GOknH/image-2.webp" },
  { type: "SaaS · concept", title: "SaaS landing page", description: "A clear product story, feature hierarchy and focused signup path.", slug: "saas" },
  { type: "Fashion · concept", title: "Fashion storefront", description: "A quiet, image-led lookbook and online shop direction.", slug: "fashion", image: "/manus-storage/async-images/BFhWUTVp1jbOivkt7GOknH/image-3.webp" },
  { type: "Real estate · concept", title: "Property website", description: "A structured, approachable way to discover properties and services.", slug: "real-estate" },
  { type: "Portfolio · concept", title: "Personal portfolio", description: "A distinctive portfolio for a creative independent professional.", slug: "portfolio" },
  { type: "E-commerce · concept", title: "E-commerce storefront", description: "A flexible storefront concept for product discovery and shopping.", slug: "ecommerce" },
];

function ConceptArtwork({ image, title }: { image?: string; title: string }) {
  if (image) {
    return <Image src={image} alt={`${title} illustrative website design concept`} fill sizes="(max-width: 580px) 100vw, (max-width: 820px) 50vw, 33vw" unoptimized />;
  }
  return (
    <div className="project-browser" aria-hidden="true">
      <div className="browser-bar"><i className="browser-dot" /><i className="browser-dot" /><i className="browser-dot" /></div>
      <div className="browser-screen"><span className="screen-kicker" /><span className="screen-title" /><span className="screen-title short" /><div className="screen-row"><i className="screen-tile" /><i className="screen-tile" /><i className="screen-tile" /></div></div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero" aria-labelledby="hero-title">
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-kicker"><span className="pulse-dot" aria-hidden="true" /> Independent digital studio · India</div>
              <h1 id="hero-title">Premium Websites.<br /><span className="gradient-text">Without the Premium Price.</span></h1>
              <p className="hero-lede">Stand out online with modern, high-performance websites built for your business. Get a premium digital presence starting at just ₹9,999.</p>
              <div className="hero-actions">
                <Link className="button button--primary" href="#contact">Start Your Project <span className="arrow" aria-hidden="true">↗</span></Link>
                <Link className="button button--secondary" href="#portfolio">Explore Our Work <span className="arrow" aria-hidden="true">↓</span></Link>
              </div>
              <div className="hero-trust"><span className="trust-item"><span className="trust-check" aria-hidden="true">✓</span> Custom-built websites</span><span className="trust-item"><span className="trust-check" aria-hidden="true">✓</span> Transparent pricing</span><span className="trust-item"><span className="trust-check" aria-hidden="true">✓</span> Project ownership in your hands</span></div>
            </div>
            <div className="hero-art" aria-label="Illustrative collection of premium website design concepts">
              <Image className="hero-image" src="/manus-storage/async-images/BFhWUTVp1jbOivkt7GOknH/image-1.webp" alt="A collection of original website concept designs shown in floating browser windows" width={1600} height={900} priority unoptimized />
              <div className="hero-image-frame" aria-hidden="true" />
              <div className="hero-note" aria-hidden="true"><b>Designed with purpose</b>Thoughtful from the first scroll</div>
              <div className="hero-stamp" aria-hidden="true"><span className="hero-stamp-icon">✳</span><span><strong>Built around your business</strong><span>Design · development · handover</span></span></div>
            </div>
          </div>
          <div className="hero-bottom"><span><strong>For founders, local businesses &amp; independent brands</strong></span><span>Good design. Clear terms. Your project, in your hands.</span></div>
        </div>
      </section>

      <div className="logo-strip" aria-label="Services suited to a range of business needs">
        <div className="wrap logo-strip-inner"><span>Made for the next stage</span><span className="strip-item"><i className="strip-symbol" aria-hidden="true">✳</i> Startups</span><span className="strip-item"><i className="strip-symbol" aria-hidden="true">◈</i> Small business</span><span className="strip-item"><i className="strip-symbol" aria-hidden="true">↗</i> Independent brands</span><span className="strip-item"><i className="strip-symbol" aria-hidden="true">▧</i> Creators</span></div>
      </div>

      <section className="section" id="services" aria-labelledby="services-title">
        <div className="wrap">
          <div className="section-heading"><span className="eyebrow">What we build</span><h2 id="services-title">The right website for <span className="gradient-text">what comes next.</span></h2><p>From a first business site to a fuller digital experience, each project starts with your goals and a clearly defined scope.</p></div>
          <div className="services-grid">{services.map((service) => <article className="service-card" key={service.title}><span className="service-icon" aria-hidden="true">{service.icon}</span><h3>{service.title}</h3><p>{service.description}</p></article>)}</div>
          <p className="service-footnote">Availability, pricing and timelines depend on project scope and complexity. We’ll confirm what fits before work begins.</p>
        </div>
      </section>

      <section className="section section--tight" id="pricing" aria-labelledby="pricing-title">
        <div className="wrap price-layout">
          <div className="price-intro"><span className="eyebrow">Straightforward pricing</span><h2 id="pricing-title">A premium start.<br /><span className="gradient-text">Clear from day one.</span></h2><p>Explore affordable website development in India with a defined scope, a thoughtful design approach and a quotation agreed before development begins.</p><div className="price-aside"><span className="price-aside-mark" aria-hidden="true">✳</span><span>Every project is different. We’ll recommend a fit for your requirements, not promise a one-size-fits-all package.</span></div></div>
          <article className="price-card">
            <div className="price-card-head"><div><p>Website Development</p><div className="price-value"><span>₹9,999</span><span aria-hidden="true">+</span></div></div><span className="price-badge">Starting price</span></div>
            <ul className="price-list"><li>Modern, responsive design</li><li>Mobile, tablet &amp; desktop compatibility</li><li>Project-specific page structure and functionality</li><li>Basic performance and SEO best practices</li><li>Contact form or integration, where applicable</li><li>Deployment assistance, subject to project requirements</li><li>GitHub source-code handover after full payment</li></ul>
            <div className="price-terms"><p><strong>₹9,999 is a starting price for eligible projects</strong>, not a fixed price for every website. Final pricing depends on design, page count, features, integrations and overall complexity.</p><p>Domain registration, hosting, paid tools, third-party services, premium assets and other external charges are additional wherever applicable.</p><p>Advanced functionality, extensive content, e-commerce features and other heavy development work may require a custom quote.</p></div>
            <Link className="button button--primary" href="#contact">Get a Custom Quote <span className="arrow" aria-hidden="true">↗</span></Link>
          </article>
        </div>
      </section>

      <section className="section" id="process" aria-labelledby="process-title">
        <div className="wrap">
          <div className="section-heading"><span className="eyebrow">Our working procedure</span><h2 id="process-title">A clear path from <span className="gradient-text">idea to handover.</span></h2><p>Know what happens next, when payments happen and how your project gets back to you.</p></div>
          <div className="process-grid">{process.map((step, index) => <article className="process-card" key={step.title}><span className="process-number">{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
          <div className="ownership-promise"><span className="promise-mark" aria-hidden="true">✳</span><p>Our promise: Once the agreed payment is complete, your project source code is handed over to you. We believe clients should have clear ownership of the work they pay for.</p></div>
          <p className="process-note">Source-code transfer does not automatically include domain ownership, hosting, third-party accounts, or unlimited future maintenance. Licenses, credentials and deployment arrangements follow their own terms.</p>
        </div>
      </section>

      <section className="section section--tight" id="portfolio" aria-labelledby="portfolio-title">
        <div className="wrap">
          <div className="section-heading"><span className="eyebrow">Selected concepts</span><h2 id="portfolio-title">A glimpse of what <span className="gradient-text">could be.</span></h2><p>Six illustrative directions across different industries. Each is clearly marked as a concept—not client work or a claim about results.</p></div>
          <div className="portfolio-grid">{projects.map((project) => <article className="project-card" key={project.slug}><div className={`project-art${project.image ? " has-image" : ""}`}><ConceptArtwork image={project.image} title={project.title} /></div><div className="project-meta"><span className="project-kind">{project.type}</span><div className="project-title-row"><h3>{project.title}</h3><Link href={`/concepts/${project.slug}`}>Explore concept <span className="arrow" aria-hidden="true">↗</span></Link></div><p>{project.description}</p></div></article>)}</div>
          <p className="concept-disclaimer">These illustrative demos are not representations of client engagements, partnerships or business outcomes.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="why-title">
        <div className="wrap why-grid">
          <div className="why-visual" aria-hidden="true"><span className="why-chip one">Thoughtful design</span><span className="why-chip two">Clear scope</span><span className="why-chip three">Source handover</span><div className="why-orbit"><div className="why-core"><svg width="55" height="55" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.4"/><path d="M32 13a13 13 0 1 0 1.6 18.4A14.6 14.6 0 0 1 32 13Z" fill="currentColor"/><path d="M12 34c4-5.4 8.7-8.6 14.1-9.8" stroke="#E9E0FF" strokeWidth="1.1" strokeLinecap="round"/></svg></div></div></div>
          <div className="why-copy"><span className="eyebrow">Why Eclipse Build</span><h2 id="why-title">Agency-level care.<br /><span className="gradient-text">Independent by design.</span></h2><p>Get a considered, modern web experience without the layers of a large agency. We keep the conversation direct and the project terms clear.</p><ul className="why-list"><li><span aria-hidden="true">✓</span> Premium-looking design at accessible prices</li><li><span aria-hidden="true">✓</span> Clear project scope and quotations</li><li><span aria-hidden="true">✓</span> Responsive, mobile-first development</li><li><span aria-hidden="true">✓</span> Modern visual design and UX</li><li><span aria-hidden="true">✓</span> Direct communication throughout</li><li><span aria-hidden="true">✓</span> Clear payment and handover terms</li><li><span aria-hidden="true">✓</span> GitHub source transfer after full payment</li><li><span aria-hidden="true">✓</span> Solutions tailored to your business</li></ul></div>
        </div>
      </section>

      <section className="section section--tight" id="faq" aria-labelledby="faq-title">
        <div className="wrap"><div className="section-heading"><span className="eyebrow">Questions, answered</span><h2 id="faq-title">A few things worth <span className="gradient-text">knowing.</span></h2><p>Clear expectations make a better project. If there’s something else on your mind, get in touch.</p></div><FAQ /></div>
      </section>

      <section className="section" id="contact" aria-labelledby="contact-title">
        <div className="wrap contact-layout">
          <div className="contact-copy"><span className="eyebrow">Let’s talk about your project</span><h2 id="contact-title">Good things start with a <span className="gradient-text">conversation.</span></h2><p>Share a little about what you have in mind. We’ll use it to understand the scope and discuss a realistic next step—no obligation to proceed.</p><a className="contact-email" href="mailto:eclipx.build@gmail.com?subject=Website%20project%20inquiry&body=Hello%20Eclipse%20Build%2C%0A%0AI%27d%20like%20to%20discuss%20a%20website%20project.%0A%0ABusiness%20or%20brand%3A%0AWebsite%20type%3A%0AProject%20details%3A%0ABudget%20range%3A%0ADesired%20timeline%3A%0A%0AThank%20you."><span aria-hidden="true">↗</span> eclipx.build@gmail.com</a><div className="contact-aside">No business phone number was supplied, so this site uses email only. The inquiry form opens your email application with a draft; it does not submit or store the message on this website.</div></div>
          <InquiryForm />
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-title"><div className="wrap"><span className="eyebrow">A better online presence starts here</span><h2 id="final-title">Your Next Website<br /><span className="gradient-text">Starts Here.</span></h2><p>Have an idea, a business, or a brand ready to grow? Let’s turn it into a professional online experience.</p><div className="final-actions"><Link className="button button--primary" href="#contact">Let’s Build Your Website <span className="arrow" aria-hidden="true">↗</span></Link><a className="button button--secondary" href="mailto:eclipx.build@gmail.com?subject=Website%20project%20inquiry&body=Hello%20Eclipse%20Build%2C%0A%0AI%27d%20like%20to%20discuss%20a%20website%20project.%0A%0ABusiness%20or%20brand%3A%0AWebsite%20type%3A%0AProject%20details%3A%0ABudget%20range%3A%0ADesired%20timeline%3A%0A%0AThank%20you.">Email Us <span className="arrow" aria-hidden="true">↗</span></a></div></div></section>
    </main>
  );
}
