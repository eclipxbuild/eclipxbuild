import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const safeSiteUrl = siteUrl && /^https:\/\//i.test(siteUrl) ? siteUrl.replace(/\/$/, "") : undefined;
const socialImage = "https://files.manuscdn.com/user_upload_by_module/session_file/310519664011484566/YFNtQDwIyDzNRnIE.png";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Draft privacy information for Eclipse Build’s website inquiry experience and contact options.",
  alternates: safeSiteUrl ? { canonical: "/privacy" } : undefined,
  openGraph: { type: "website", siteName: "Eclipse Build", title: "Privacy Policy | Eclipse Build", description: "Draft privacy information for Eclipse Build’s website inquiry experience.", images: [{ url: socialImage, width: 1200, height: 630, alt: "Eclipse Build" }], ...(safeSiteUrl ? { url: `${safeSiteUrl}/privacy` } : {}) },
  twitter: { card: "summary_large_image", title: "Privacy Policy | Eclipse Build", description: "Draft privacy information for Eclipse Build’s website inquiry experience.", images: [socialImage] },
};

export default function PrivacyPage() {
  return <main className="legal-page" id="main-content"><div className="wrap"><span className="eyebrow">Website information</span><h1>Privacy Policy</h1><p className="legal-intro">This is a plain-language draft for the current Eclipse Build website implementation. It is not a substitute for confirming the business’s actual data practices and applicable legal requirements.</p>
    <div className="legal-alert"><strong>Business-owner review required before launch.</strong> Confirm the legal identity and contact details of the operator, hosting-provider data and retention practices, any analytics or cookies, how customer email inquiries are handled, and the applicable effective date. Do not publish unconfirmed details as fact.</div>
    <div className="legal-content">
      <h2>Information you choose to send</h2><p>The project inquiry form on this website prepares an email draft in your own email application. This site does not send that message to Eclipse Build, store the form contents, or provide a server-side submission service. The message is shared only if you review and send it from your email application. Your email provider may process the draft and message under its own terms.</p><p>You may also contact eclipx.build@gmail.com directly. Information in a message you choose to send is received and handled through the email service and account used by the business.</p>
      <h2>Website technical data</h2><p>No analytics, advertising pixels, or custom tracking are configured in the current site code. The website runs on managed hosting; infrastructure providers may process technical request information such as connection data to deliver and protect the service. The operator should confirm the current provider, its relevant privacy information, and any retention or logging details before publication.</p>
      <h2>Cookies and third parties</h2><p>The current site does not intentionally set a marketing or analytics cookie. Website assets and hosting infrastructure may be served by platform providers. If future integrations, analytics, payment providers, embedded media, or form services are added, this notice should be updated to accurately describe them before use.</p>
      <h2>Choices and questions</h2><p>For questions about a project inquiry sent by email, write to <a className="footer-contact" href="mailto:eclipx.build@gmail.com">eclipx.build@gmail.com</a>. The business operator should confirm its process for responding to requests about personal information before this page is treated as a final notice.</p>
      <h2>Changes and effective date</h2><p>Update this page when the website’s actual data practices change. Confirm and add the effective date and responsible business identity before launch.</p>
    </div>
  </div></main>;
}
