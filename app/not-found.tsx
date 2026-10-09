import Link from "next/link";

export default function NotFound() {
  return <main className="legal-page" id="main-content"><div className="wrap"><span className="eyebrow">That page is not here</span><h1>Lost in the eclipse?</h1><p className="legal-intro">The page may have moved, or the address may be incorrect. Head back to the Eclipse Build homepage and continue from there.</p><p style={{ marginTop: 28 }}><Link className="button button--primary" href="/">Back to home <span className="arrow" aria-hidden="true">↗</span></Link></p></div></main>;
}
