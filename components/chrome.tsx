"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const sections = [
  ["Services", "services"],
  ["Our Process", "process"],
  ["Pricing", "pricing"],
  ["Portfolio", "portfolio"],
  ["FAQ", "faq"],
] as const;

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link className="brand" href="/" aria-label="Eclipse Build home">
      <svg className="brand-mark" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="eclipseMark" x1="5" y1="5" x2="43" y2="43" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C3ACFF" />
            <stop offset=".56" stopColor="#9679FF" />
            <stop offset="1" stopColor="#78A8FF" />
          </linearGradient>
          <radialGradient id="eclipseCore" cx="0" cy="0" r="1" gradientTransform="matrix(25 23 -21 23 15 11)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B69BFF" stopOpacity=".22" />
            <stop offset="1" stopColor="#6D85E8" stopOpacity=".03" />
          </radialGradient>
        </defs>
        <circle cx="24" cy="24" r="20" fill="url(#eclipseCore)" stroke="url(#eclipseMark)" strokeWidth="1.5" />
        <path d="M33.4 12.8a14 14 0 1 0 1.7 19.8A15.7 15.7 0 0 1 33.4 12.8Z" fill="url(#eclipseMark)" />
        <path d="M10 34.8c4.7-6.3 10.2-10.1 16.5-11.5" stroke="#E9E0FF" strokeOpacity=".8" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="36.2" cy="12.5" r="2" fill="#C8B5FF" />
      </svg>
      <span className="brand-name">Eclipse <span>Build</span></span>
      {footer ? <span className="sr-only"> · digital studio</span> : null}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const base = pathname === "/" ? "" : "/";

  const closeMenu = () => setOpen(false);
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Brand />
        <nav className="nav-links nav-links--desktop" aria-label="Main navigation">
          <Link href="/">Home</Link>
          {sections.map(([label, id]) => <Link key={id} href={`${base}#${id}`}>{label}</Link>)}
          <Link className="button button--primary nav-cta" href={`${base}#contact`}>Start Your Project <span className="arrow" aria-hidden="true">↗</span></Link>
        </nav>
        <button className="menu-toggle" type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /> : <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />}
          </svg>
        </button>
      </div>
      {open ? (
        <nav className="mobile-menu" id="mobile-navigation" aria-label="Mobile navigation">
          <Link href="/" onClick={closeMenu}>Home</Link>
          {sections.map(([label, id]) => <Link key={id} href={`${base}#${id}`} onClick={closeMenu}>{label}</Link>)}
          <Link className="button button--primary" href={`${base}#contact`} onClick={closeMenu}>Start Your Project <span className="arrow" aria-hidden="true">↗</span></Link>
        </nav>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Brand footer />
            <p>Independent web development for businesses ready to show up with confidence. Premium digital presence, with clear scope from the start.</p>
          </div>
          <div className="footer-col">
            <h3>Explore</h3>
            <nav className="footer-links" aria-label="Footer navigation">
              <Link href="/">Home</Link><Link href="/#services">Services</Link><Link href="/#process">Our Process</Link><Link href="/#pricing">Pricing</Link><Link href="/#portfolio">Portfolio concepts</Link><Link href="/#faq">FAQs</Link>
            </nav>
          </div>
          <div className="footer-col">
            <h3>Services</h3>
            <nav className="footer-links" aria-label="Footer services">
              <Link href="/#services">Business websites</Link><Link href="/#services">Landing pages</Link><Link href="/#services">Portfolio websites</Link><Link href="/#services">E-commerce</Link><Link href="/#services">Website redesign</Link><Link href="/#services">Custom development</Link>
            </nav>
          </div>
          <div className="footer-col">
            <h3>Say hello</h3>
            <div className="footer-links">
              <a className="footer-contact" href="mailto:eclipx.build@gmail.com?subject=Website%20project%20inquiry&body=Hello%20Eclipse%20Build%2C%0A%0AI%27d%20like%20to%20discuss%20a%20website%20project.%0A%0ABusiness%20or%20brand%3A%0AWebsite%20type%3A%0AProject%20details%3A%0ABudget%20range%3A%0ADesired%20timeline%3A%0A%0AThank%20you.">eclipx.build@gmail.com</a>
              <Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms &amp; Conditions</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} Eclipse Build. All rights reserved.</span>
          <span className="footer-legal"><span>Built with clarity.</span><span>Source handover after full payment, as agreed.</span></span>
        </div>
      </div>
    </footer>
  );
}
