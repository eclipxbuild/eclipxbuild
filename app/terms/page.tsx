import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const safeSiteUrl = siteUrl && /^https:\/\//i.test(siteUrl) ? siteUrl.replace(/\/$/, "") : undefined;
const socialImage = "https://files.manuscdn.com/user_upload_by_module/session_file/310519664011484566/YFNtQDwIyDzNRnIE.png";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Draft website terms for Eclipse Build services, pricing, project scope, payment and source handover.",
  alternates: safeSiteUrl ? { canonical: "/terms" } : undefined,
  openGraph: { type: "website", siteName: "Eclipse Build", title: "Terms & Conditions | Eclipse Build", description: "Draft information about Eclipse Build project enquiries and service terms.", images: [{ url: socialImage, width: 1200, height: 630, alt: "Eclipse Build" }], ...(safeSiteUrl ? { url: `${safeSiteUrl}/terms` } : {}) },
  twitter: { card: "summary_large_image", title: "Terms & Conditions | Eclipse Build", description: "Draft information about Eclipse Build project enquiries and service terms.", images: [socialImage] },
};

export default function TermsPage() {
  return <main className="legal-page" id="main-content"><div className="wrap"><span className="eyebrow">Project expectations</span><h1>Terms &amp; Conditions</h1><p className="legal-intro">These draft notes explain the project approach described on this website. They are not an offer or a substitute for a project-specific written agreement.</p>
    <div className="legal-alert"><strong>Business-owner and legal review required before launch.</strong> Confirm the operator’s legal name and address, governing jurisdiction, payment/deposit and cancellation/refund terms, intellectual-property/licensing details, support or maintenance policy, liability language, and effective date. No missing business-specific term is invented here.</div>
    <div className="legal-content">
      <h2>Quotes and scope</h2><p>Eligible website projects may start at ₹9,999. That is a starting price, not a fixed fee for every website or service. The final quotation depends on design, page count, content, features, integrations, and complexity. The project scope, quotation, estimated timeline, revision allowance, and payment schedule should be agreed in writing before development begins.</p>
      <h2>Payments and changes</h2><p>Work starts after the agreed kickoff payment is received. Any remaining balance is payable according to the agreed schedule, including the final approval stage when specified. Work outside the agreed scope—including additional revisions or new functionality—may require a separate quotation and timeline. The project agreement should state the actual payment, pause, cancellation and refund terms.</p>
      <h2>Source code and handover</h2><p>After full payment has been received, the project repository is transferred to the client’s GitHub account or handed over by another agreed method, consistent with the written project scope. Rights and ownership apply as stated in that agreement. This source handover does not automatically transfer a domain name, hosting account, third-party account, paid license, credential, or ongoing maintenance service.</p>
      <h2>External services and costs</h2><p>Domain registration, hosting, paid tools, third-party services, premium assets, checkout providers and other external charges are additional unless expressly included in the quotation. Third-party products remain subject to their own license and service terms. E-commerce or advanced features are assessed separately and are not implied by the starting price.</p>
      <h2>Deployment and support</h2><p>Deployment assistance is limited to the requirements and amount of assistance agreed for the project. Future updates, hosting administration, content changes, support and maintenance are not unlimited or automatically included unless the written agreement says otherwise.</p>
      <h2>Contact</h2><p>For project enquiries, contact <a className="footer-contact" href="mailto:eclipx.build@gmail.com">eclipx.build@gmail.com</a>. A project-specific signed or otherwise agreed contract should govern the actual engagement.</p>
      <h2>Effective date</h2><p>Add the effective date and confirmed business details after the owner has reviewed and approved this draft.</p>
    </div>
  </div></main>;
}
